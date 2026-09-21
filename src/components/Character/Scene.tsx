import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import setCharacter from "./utils/character";
import setLighting from "./utils/lighting";
import { useLoading } from "../../context/LoadingProvider";
import handleResize from "./utils/resizeUtils";
import {
  handleMouseMove,
  handleTouchEnd,
  handleHeadRotation,
  handleTouchMove,
} from "./utils/mouseUtils";
import setAnimations from "./utils/animationUtils";
import { setProgress } from "../Loading";

const isWebGLAvailable = () => {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      canvas.getContext("webgl2") ||
        canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl")
    );
  } catch {
    return false;
  }
};

const Scene = () => {
  const canvasDiv = useRef<HTMLDivElement | null>(null);
  const hoverDivRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef(new THREE.Scene());
  const { setLoading } = useLoading();
  const [, setChar] = useState<THREE.Object3D | null>(null);

  useEffect(() => {
    if (!canvasDiv.current) return;

    // Start progress before any WebGL checks so the loader can never remain at 0%.
    const progress = setProgress(setLoading);

    if (!isWebGLAvailable()) {
      console.warn("WebGL is not available. Skipping 3D character.");
      progress.clear();
      return;
    }

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    } catch (error) {
      console.error("WebGL initialization failed:", error);
      progress.clear();
      return;
    }

    const container = canvasDiv.current.getBoundingClientRect();
    const width = Math.max(container.width, 1);
    const height = Math.max(container.height, 1);
    const scene = sceneRef.current;
    const camera = new THREE.PerspectiveCamera(14.5, width / height, 0.1, 1000);
    camera.position.set(0, 13.1, 24.7);
    camera.zoom = 1.1;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    canvasDiv.current.appendChild(renderer.domElement);

    const light = setLighting(scene);
    const { loadCharacter } = setCharacter(renderer, scene, camera);
    const clock = new THREE.Clock();
    let headBone: THREE.Object3D | null = null;
    let screenLight: THREE.Object3D | null = null;
    let mixer: THREE.AnimationMixer | undefined;
    let character: THREE.Object3D | null = null;
    let animationFrame = 0;

    loadCharacter()
      .then((gltf) => {
        if (!gltf) {
          progress.clear();
          return;
        }

        const animations = setAnimations(gltf);
        if (hoverDivRef.current) animations.hover(gltf, hoverDivRef.current);
        mixer = animations.mixer;
        character = gltf.scene;
        setChar(character);
        scene.add(character);
        headBone = character.getObjectByName("spine006");
        screenLight = character.getObjectByName("screenlight");

        progress.loaded().then(() => {
          setTimeout(() => {
            light.turnOnLights();
            animations.startIntro();
          }, 2500);
        });
      })
      .catch((error) => {
        console.error("3D character failed to load:", error);
        progress.clear();
      });

    let mouse = { x: 0, y: 0 };
    let interpolation = { x: 0.1, y: 0.2 };
    const landingDiv = document.getElementById("landingDiv");

    const onMouseMove = (event: MouseEvent) => {
      handleMouseMove(event, (x, y) => (mouse = { x, y }));
    };
    const onTouchMove = (event: TouchEvent) => {
      handleTouchMove(event, (x, y) => (mouse = { x, y }));
    };
    const onTouchStart = (event: TouchEvent) => {
      (event.target as HTMLElement | null)?.addEventListener(
        "touchmove",
        onTouchMove
      );
    };
    const onTouchEnd = () => {
      handleTouchEnd((x, y, interpolationX, interpolationY) => {
        mouse = { x, y };
        interpolation = { x: interpolationX, y: interpolationY };
      });
    };

    document.addEventListener("mousemove", onMouseMove);
    landingDiv?.addEventListener("touchstart", onTouchStart);
    landingDiv?.addEventListener("touchend", onTouchEnd);

    const animate = () => {
      animationFrame = requestAnimationFrame(animate);
      if (headBone) {
        handleHeadRotation(
          headBone,
          mouse.x,
          mouse.y,
          interpolation.x,
          interpolation.y,
          THREE.MathUtils.lerp
        );
        light.setPointLight(screenLight);
      }
      mixer?.update(clock.getDelta());
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      if (character) handleResize(renderer, camera, canvasDiv, character);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animationFrame);
      document.removeEventListener("mousemove", onMouseMove);
      landingDiv?.removeEventListener("touchstart", onTouchStart);
      landingDiv?.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("resize", onResize);
      scene.clear();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div className="character-container">
      <div className="character-model" ref={canvasDiv}>
        <div className="character-rim" />
        <div className="character-hover" ref={hoverDivRef} />
      </div>
    </div>
  );
};

export default Scene;

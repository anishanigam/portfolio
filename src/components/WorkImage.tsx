import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
  preserveAspectRatio?: boolean;
}

const CULRAV_IMAGE = "/images/work/logo-culrav25.png";

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");
  const isCulravImage = props.image === CULRAV_IMAGE || props.preserveAspectRatio;

  const handleMouseEnter = async () => {
    if (props.video) {
      setIsVideo(true);
      const response = await fetch(`src/assets/${props.video}`);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      setVideo(blobUrl);
    }
  };

  return (
    <div className="work-image">
      <a
        className={`work-image-in${isCulravImage ? " work-image-in-preserve-ratio" : ""}`}
        href={props.link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVideo(false)}
        target="_blank"
        rel="noreferrer"
        data-cursor="disable"
        style={isCulravImage ? { display: "block", height: "auto", overflow: "visible" } : undefined}
      >
        {props.link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}
        <img
          src={props.image}
          alt={props.alt}
          className={isCulravImage ? "culrav-logo-image" : undefined}
          style={
            isCulravImage
              ? {
                  display: "block",
                  width: "min(100%, 700px)",
                  height: "auto",
                  maxWidth: "100%",
                  maxHeight: "none",
                  objectFit: "contain",
                }
              : undefined
          }
        />
        {isVideo && <video src={video} autoPlay muted playsInline loop />}
      </a>
    </div>
  );
};

export default WorkImage;

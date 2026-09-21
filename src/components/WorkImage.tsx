import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
}

const CULRAV_IMAGE = "/images/work/logo-culrav25.png";

const WorkImage = ({
  image,
  alt,
  video: videoPath,
  link,
}: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");
  const isCulravImage = image === CULRAV_IMAGE;

  const handleMouseEnter = async () => {
    if (!videoPath) return;
    setIsVideo(true);
    const response = await fetch(`src/assets/${videoPath}`);
    const blob = await response.blob();
    setVideo(URL.createObjectURL(blob));
  };

  return (
    <div className={`work-image${isCulravImage ? " work-image-landscape" : ""}`}>
      <a
        className="work-image-in"
        href={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVideo(false)}
        target="_blank"
        rel="noreferrer"
        data-cursor="disable"
      >
        {link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}
        <img
          src={image}
          alt={alt}
          style={isCulravImage ? {
            display: "block",
            width: "min(100%, 700px)",
            maxWidth: "100%",
            height: "auto",
            maxHeight: "none",
            objectFit: "contain",
          } : undefined}
        />
        {isVideo && <video src={video} autoPlay muted playsInline loop />}
      </a>
    </div>
  );
};

export default WorkImage;

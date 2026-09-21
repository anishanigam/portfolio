import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
  preserveAspectRatio?: boolean;
}

const WorkImage = ({
  image,
  alt,
  video: videoPath,
  link,
  preserveAspectRatio = false,
}: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");

  const handleMouseEnter = async () => {
    if (!videoPath) return;
    setIsVideo(true);
    const response = await fetch(`src/assets/${videoPath}`);
    const blob = await response.blob();
    setVideo(URL.createObjectURL(blob));
  };

  return (
    <div className={`work-image${preserveAspectRatio ? " work-image-landscape" : ""}`}>
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
        <img src={image} alt={alt} />
        {isVideo && <video src={video} autoPlay muted playsInline loop />}
      </a>
    </div>
  );
};

export default WorkImage;

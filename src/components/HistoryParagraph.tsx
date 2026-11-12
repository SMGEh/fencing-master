import { useEffect, useRef, useState } from "react";

interface Props {
  text: string;
  image?: string;
  imageAlt?: string;
  imageSide?: "left" | "right";
}

export default function HistoryParagraph({
  text,
  image,
  imageAlt,
  imageSide = "right",
}: Props) {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [textHeight, setTextHeight] = useState(0);

  useEffect(() => {
    const element = textRef.current;
    if (!element || !image) return;

    const observer = new ResizeObserver(() => {
      setTextHeight(element.offsetHeight);
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, [image]);

  return (
    <div className={`history-paragraph ${imageSide}`}>
      <p ref={textRef}>{text}</p>

      {image && (
        <div
            className="history-paragraph-image"
            >
            <img src={image} alt={imageAlt ?? ""} />
        </div>
      )}
    </div>
  );
}
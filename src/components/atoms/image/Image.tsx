import React from "react";
import "./image.scss";

export enum ImageSize {
  SMALLEST = "smallest",
  SMALLER = "smaller",
  SMALL = "small",
  LARGE = "large",
  LARGER = "larger",
  LARGEST = "largest",
}

type ImageProps = {
  key?: string;
  imgUrl: string; // Required url to display
  size?: ImageSize; // Optional image size
  onHoverZoom?: boolean; //Should zoom on hover
};

// Functional component
export const Image: React.FC<ImageProps> = ({
  key,
  imgUrl,
  onHoverZoom = false,
  size = ImageSize.LARGE,
}) => {
  return (
    <div key={key} className={`imgContainer ${size}`}>
      <img src={imgUrl} className={onHoverZoom ? "zoom" : ""} />
    </div>
  );
};

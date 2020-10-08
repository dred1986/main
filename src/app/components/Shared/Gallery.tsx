import React, { useState, useRef, ReactElement } from "react";
import { createPortal } from "react-dom";

import { ThumbnailUrl } from "../lib";
import Slider from "./Slider";

import * as styles from "./Gallery.css";
import { UploadFile } from "../../@types/queryTypes";

import useClickOPutside from "../hooks/useClickOutside";

interface Props {
  images: UploadFile[];
  bullets?: string;
}

const Gallery = ({ images, bullets }: Props): ReactElement => {
  const [fullscreen, setFullscreen] = useState<number | null>(null);
  const fullscreenRef = useRef();

  const handleToggleOffFullscreen = () => setFullscreen(null);

  useClickOPutside(fullscreenRef, handleToggleOffFullscreen, fullscreen >= 0);

  if (fullscreen || fullscreen === 0)
    return createPortal(
      <div className={styles.fullscreen}>
        <img
          ref={fullscreenRef}
          onClick={handleToggleOffFullscreen}
          src={ThumbnailUrl({ source: images, index: fullscreen, fullscreen })}
          alt=""
          draggable="false"
        />
      </div>,
      document.getElementById("fullscreen")
    );

  return (
    <section className={styles.container}>
      <Slider hasBullets={bullets}>
        {images.map((image, index) => (
          <div
            className={styles.wrapper}
            key={image.name + image.id}
            // onClick={() => setFullscreen(index)}
          >
            <img
              src={ThumbnailUrl({ source: images, index })}
              alt=""
              draggable="false"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Gallery;

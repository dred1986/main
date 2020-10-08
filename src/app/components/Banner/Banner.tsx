import React, { ReactElement } from "react";

import { Banner } from "../../@types/queryTypes";
import { useDoubleclick } from "../hooks/useDoubleClick";
import { useHeight } from "../hooks/useHeight";
import { makeStrShorter } from "../lib";
import { animated as a, useSpring } from "react-spring";
import Gallery from "../Shared/Gallery";

import * as styles from "./Banner.css";

interface Props {
  banner?: Banner;
  isOpen?: boolean;
  toggle?: () => void;
}

export default function Banner({
  banner,
  isOpen,
  toggle,
}: Props): ReactElement {
  const handleExpand = useDoubleclick(toggle, 250);
  const [heightRef, height] = useHeight();
  const slideInStyles = useSpring({
    height,
  });

  return (
    <a.div style={slideInStyles}>
      <div
        ref={heightRef}
        className={styles.wrapper}
        onClick={() => handleExpand()}
      >
        <div className={styles.content}>
          <h2>{banner?.info?.name}</h2>
          <p>
            {!isOpen && banner.info.description.length > 300
              ? makeStrShorter(banner.info.description, 300)
              : banner.info.description}
          </p>
          <button onClick={() => toggle()}>
            {isOpen ? "Свернуть" : "Развернуть"}
          </button>
        </div>
        {isOpen && (
          <div className={styles.content_images}>
            <Gallery images={banner.info.image} bullets={styles.bullets} />
          </div>
        )}
      </div>
    </a.div>
  );
}

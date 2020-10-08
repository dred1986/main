import React, { useState, useEffect } from "react";

import * as styles from "./Slider.css";
import { useSprings, to, animated as a } from "react-spring";
import { useGesture } from "react-use-gesture";

interface SliderProps {
  itemsPerPage?: number;
  scaleOnDrag?: boolean;
  grid?: boolean | string;
  hasBullets?: boolean | string;
  disabled?: boolean;
  activeIndex?: number;
  auto?: number;
  children?: React.ReactElement | React.ReactElement[];
  onSlideChange?: (slide: number) => void;
  setSlideCustom?: (slide: number) => number;
}

export default function Slider({
  itemsPerPage = 1,
  scaleOnDrag = false,
  grid = false,
  hasBullets = false,
  disabled = false,
  activeIndex = 0,
  auto = 0,
  children,
  onSlideChange = () => undefined,
  setSlideCustom = undefined,
}: SliderProps): React.ReactElement {
  if (!Array.isArray(children)) return <>{children}</>;

  const [currentSlide, setSlide] = useState<number>(activeIndex);

  const SLIDES = Array.isArray(children)
    ? children.reduce(
        (acc, _, i) =>
          i % itemsPerPage
            ? acc
            : [...acc, children.slice(i, i + itemsPerPage)],
        []
      )
    : children;

  const [springs, set] = useSprings(SLIDES.length, () => ({
    x: 0,
    sc: 1,
  }));

  useEffect(() => {
    // @ts-ignore
    set((i) => {
      return {
        x:
          i < currentSlide
            ? -window.innerWidth
            : i === currentSlide
            ? 0
            : window.innerWidth,
        sc: i != currentSlide && scaleOnDrag ? 0.8 : 1,
      };
    });
    return () => {};
  }, [currentSlide]);

  const bind = useGesture(
    {
      onDrag: ({
        down,
        direction: [xDir, yDir],
        delta: [xDelta, yDelta],
        distance,
        cancel,
      }) => {
        if (disabled || yDelta > 5 || Math.abs(yDir) > 0.5) return;
        if (down && distance > window.innerWidth / 5) {
          const newIndex = _clamp(
            currentSlide + (xDir > 0 ? -1 : 1),
            0,
            SLIDES.length - 1
          );
          cancel();
          setSlide(newIndex);
        }
        //@ts-ignore
        set(() => ({
          x: down ? (distance * (xDir > 0 ? 1 : -1)) / 5 : 0,
          sc: scaleOnDrag
            ? down && xDir
              ? 1 - distance / window.innerWidth
              : 1
            : 1,
        }));
      },
    },
    {
      drag: {
        delay: 100,
      },
    }
  );
  return (
    <div className={styles.container}>
      {springs.map(
        ({ x, sc }, index) =>
          currentSlide === index && (
            <a.div
              onContextMenu={(e) => e.preventDefault()}
              className={grid.toString()}
              {...bind()}
              key={sc.id + x.id}
              style={{
                transform: to(
                  [x, sc],
                  (x, sc) => `translateX(${x}px) scale(${sc})`
                ),
              }}
            >
              {SLIDES[currentSlide]}
            </a.div>
          )
      )}
      {!disabled && hasBullets && SLIDES.length > 1 && (
        <div className={hasBullets.toString()}>
          {SLIDES.map((_, i) => (
            <div
              onClick={() => {
                setSlide(i);
              }}
              style={{
                opacity: i != currentSlide ? 0.6 : 1,
                transform: `scale(${i === currentSlide ? 1 : 0.8})`,
                transition: "0.3s ease",
              }}
              key={i}
            >
              <p>{i + 1}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const _clamp = (num: number, low: number, high: number) =>
  high >= 0 ? Math.min(Math.max(num, low), high) : Math.min(num, low);

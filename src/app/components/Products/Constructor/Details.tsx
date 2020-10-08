import React, { useState, useEffect, useRef } from "react";

import * as styles from "./Details.css";
import Gallery from "../../Shared/Gallery";

import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";

import { ItemMod } from "../../../@types/utility";
import { Box } from "../../../@types/queryTypes";

import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

interface IDetails {
  input: ItemMod | Box;
  set?: Array<ItemMod>;
  handlers: any;
}

export const Details = ({ input, set: bundleSet, handlers }: IDetails) => {
  const types = {
    isBox: input.__typename === "Box",
    isItem: input.__typename === "Item",
    isItemWithLetter: input.__typename === "Item" && input.flags.is_editable,
  };
  const trackRef = useRef<HTMLDivElement>(null);
  const [track, setTrack] = useState(0);
  const [quantity, setQuantity] = useState(types.isItemWithLetter ? "" : " ");
  const [active, setActive] = useState(false);

  const freeSlots = bundleSet?.filter((item) => !item).length;

  useEffect(() => {
    if (trackRef.current) {
      setTrack(trackRef.current.offsetWidth);
    }
  }, [trackRef]);

  useEffect(() => {
    handlers.handlechangeQuantity(quantity);
  }, [quantity]);

  const { morph } = useSpring({
    config: { duration: 250 },
    morph: active ? 1 : 0,
  });

  const [{ x, velocity }, set] = useSpring(() => ({
    x: quantity.length,
    velocity: 0,
  }));
  const bind = useDrag(
    ({ movement: [x], velocity, down, direction: [dx] }) => {
      if (down !== active) {
        setActive(down);
      }

      if (!down) {
        set({ x, velocity: 0 });
      } else {
        setQuantity("".padStart(Math.round((freeSlots * x) / track), " "));
        set({ x, velocity: velocity * dx });
      }
    },
    {
      initial: () => [x.get(), 0],
      bounds: {
        left: 0,
        right: track,
        top: 0,
        bottom: 0,
      },
      rubberband: false,
    }
  );

  const handleInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      [].every.call(e.target.value, (c: string) => /[А-я0-9]/.test(c)) &&
      e.target.value.length <= freeSlots
    ) {
      setQuantity(e.target.value.toUpperCase());
    } else {
      return;
    }
  };

  const moveKnob = (n: number) => set({ x: (track / freeSlots) * n });
  const handleIncrease = () => {
    moveKnob(quantity.length);
    setQuantity("".padStart(Math.min(quantity.length + 1, freeSlots), " "));
  };
  const handleDecrease = () => {
    moveKnob(quantity.length);
    setQuantity("".padStart(Math.max(quantity.length - 1, 0), " "));
  };
  return (
    <div onContextMenu={(e) => e.preventDefault()} className={styles.container}>
      {types.isItem && (
        <div className={styles.container_add}>
          {types.isItemWithLetter ? (
            <input
              className={styles.container_add_input}
              onChange={handleInputText}
              type="text"
              value={quantity}
              autoComplete="off"
              name="text"
              placeholder=""
            />
          ) : (
            <>
              <MinusOutlined onClick={handleDecrease} />
              <div ref={trackRef} className={styles.container_add_range}>
                <div className={styles.container_add_bar}></div>
                <animated.div
                  {...bind()}
                  // @ts-ignore
                  style={{
                    transform: x.to((x) => `translateX(${x}px)`),
                  }}
                  className={styles.container_add_handle}
                >
                  <div className={styles.container_add_knob}></div>
                  <animated.svg
                    viewBox="0 0 50 50"
                    height="50"
                    width="50"
                    className={styles.container_add_circle}
                    style={{
                      transform: morph.to((n) => `translateY(${n * -36}px)`),
                    }}
                  >
                    <animated.path
                      d={morph.to({
                        range: [0, 1],
                        output: [
                          "M 33,25.001 C 33,29.419278 29.418278,33 25,33 20.581722,33 17,29.419278 17,25.001 17,20.582722 20.581722,17 25,17 29.418278,17 33,20.582722 33,25.001 Z",
                          "M 45,20 C 45,31.045695 32.089401,45 25,45 17.910599,45 5,31.045695 5,20 5,8.954305 13.954305,5 25,5 36.045695,5 45,8.954305 45,20 Z",
                        ],
                      })}
                    />
                  </animated.svg>
                  {!active && quantity.length > 0 && (
                    <div className={styles.container_add_count_inactive}>
                      {quantity}
                    </div>
                  )}
                  <animated.div
                    style={{
                      transform: morph.to(
                        (n) => `translateY(${n * -32}px) scale(${n})`
                      ),
                    }}
                    className={styles.container_add_count}
                  >
                    {quantity.length}
                  </animated.div>
                </animated.div>
              </div>
              <PlusOutlined onClick={handleIncrease} />
            </>
          )}
        </div>
      )}
      <div className={styles.container_images}>
        <Gallery images={input.info.image} bullets={styles.bullets} />
      </div>
      <div className={styles.container_info}>
        <h2>{input.info.name}</h2>
        <p>{input.info.description}</p>
      </div>
      <div className={styles.container_price}>
        <h3>{input.price.overall}₽</h3>
      </div>
    </div>
  );
};

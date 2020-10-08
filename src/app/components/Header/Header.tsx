// @ts-nocheck react-spring issue #653
import React, { useRef, useEffect, useState, ReactElement } from "react";
import { useHistory } from "react-router-dom";

import { ReactComponent as TitleTextSvg } from "../../../assets/title.svg";
import { ReactComponent as DescSvg } from "../../../assets/desc.svg";
import { ReactComponent as LogoSvg } from "../../../assets/heart.svg";
import * as styles from "./Header.css";

import { useSpring, animated as a } from "react-spring";

import { useSelector, useDispatch } from "react-redux";
import { ToggleHeaderPopup } from "../../redux/actions/view";
import { RootState } from "../../redux/reducers";

import Auth from "./Auth";
import Cart from "./Cart";

import useClickOutside from "../hooks/useClickOutside";

export default function Header(): ReactElement {
  const isOpen = useSelector((state: RootState) => state.view.headerPopup);
  const dispatch = useDispatch();
  const history = useHistory();
  const headerRef = useRef();

  const [scrollPosition, setSrollPosition] = useState(0);

  const handleOffsetTracker = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleOffsetTracker, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleOffsetTracker);
    };
  }, []);

  const { offset, padding } = useSpring({
    offset: scrollPosition,
  });

  useClickOutside(headerRef, () => dispatch(ToggleHeaderPopup(null)), isOpen);

  return (
    <a.header
      style={{
        backgroundColor: offset.to(
          (offset) => `rgba(253, 241, 236, ${offset / 200}) `
        ),
        boxShadow: offset.to(
          (offset) =>
            `0 10px 40px -10px rgb(0 0 0 / ${Math.min(offset / 1000, 0.3)})`
        ),
        padding,
      }}
      ref={headerRef}
      className={styles.header}
    >
      <Auth
        Handler={() =>
          dispatch(ToggleHeaderPopup(isOpen === "auth" ? null : "auth"))
        }
        isOpen={isOpen}
      />
      <Title
        Handler={() => {
          dispatch(ToggleHeaderPopup(null));
          history.replace("/");
        }}
        offset={scrollPosition}
      />
      <Cart
        Handler={() =>
          dispatch(ToggleHeaderPopup(isOpen === "cart" ? null : "cart"))
        }
        isOpen={isOpen}
      />
    </a.header>
  );
}

const Title = ({
  Handler,
  offset,
}: {
  Handler: () => void;
  offset: number;
}) => {
  const { s, opacity, y } = useSpring({
    s: offset,
    y: offset ? -3 : 11,
    opacity: offset ? 0 : 1,
  });

  const Logo = a(LogoSvg);
  const TitleText = a(TitleTextSvg);
  const Desc = a(DescSvg);

  return (
    <a.div
      style={{
        position: "relative",
        top: y,
        transform: s.to((s) => `scale(${1.3 - Math.min(s / 10, 0.5)})`),
      }}
      onClick={() => {
        Handler();
        window.pageYOffset === 0 ? null : window.scrollTo(0, 0);
      }}
    >
      <Logo
        style={{
          filter: `drop-shadow(3px 4px 3px rgb(0 0 0 / ${
            0.12 - offset / 1000
          }))`,
        }}
        className={styles.header_logo}
      />
      <TitleText
        style={{ top: offset ? 15 : 7 }}
        className={styles.header_title}
      />
      <Desc style={{ opacity }} className={styles.header_description} />
    </a.div>
  );
};

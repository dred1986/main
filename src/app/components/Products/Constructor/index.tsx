import React, { ReactElement } from "react";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/reducers";
import { changeConstructorWidth } from "../../../redux/actions/view";

import { useSpring, animated as a } from "react-spring";
import * as styles from "./Constructor.css";

import Constructor from "./Constructor";

interface Props {
  onSubmit?: (...rest: any) => void;
}

export default function index({ onSubmit }: Props): ReactElement {
  const dispatch = useDispatch();

  const constructorWindowState = useSelector(
    (state: RootState) => state.view.consructorWindow
  );
  const currentWidth = useSpring({
    width: `${constructorWindowState}%`,
  });

  const handleChangeWidth = () =>
    dispatch(changeConstructorWidth(constructorWindowState > 0 ? 0 : 100));

  return (
    <a.div style={currentWidth} className={styles.container}>
      <button className={styles.container_toggler} onClick={handleChangeWidth}>
        Toggle
      </button>
      {!!constructorWindowState && <Constructor {...{ onSubmit }} />}
    </a.div>
  );
}

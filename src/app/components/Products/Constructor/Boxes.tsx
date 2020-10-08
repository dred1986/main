import React from "react";

import { useQuery } from "@apollo/client";
import { Box } from "../../../@types/queryTypes";
import getBoxes from "../../../graphql/queries/getBoxes.graphql";

import * as styles from "./Items.css";

import Card from "../../Shared/Card";
import Slider from "../../Shared/Slider";

interface IBoxes {
  add?: (box: Box) => void;
  select?: (box: Box) => void;
}

export const Boxes = ({ add, select }: IBoxes) => {
  const { data, loading } = useQuery(getBoxes);
  const boxes: Box[] = data?.boxes;

  return (
    <Slider grid={styles.grid} itemsPerPage={10}>
      {!loading &&
        data &&
        boxes.map((box) => (
          <Card key={box.id} input={box} {...{ add, select }} />
        ))}
    </Slider>
  );
};

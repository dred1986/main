import React from "react";

import * as styles from "./Receipt.css";
import { Box } from "../../../@types/queryTypes";
import { ItemMod } from "../../../@types/utility";

interface Props {
  box: Box;
  set: Array<ItemMod>;
  page: string;
}

export const Receipt = ({ box, set, page }: Props) => {
  if (!box || page === "initial") return null;
  const filteredSet = set.filter(Boolean);
  return (
    <div className={styles.price}>
      <h2>box : {box.price.overall}₽</h2>
      {set.some((entry) => entry) && (
        <h2>
          Items ({filteredSet.length} шт) :
          {filteredSet.reduce(
            (total, { price }) => (total += price ? price.overall : 0),
            0
          )}
          ₽
        </h2>
      )}
    </div>
  );
};

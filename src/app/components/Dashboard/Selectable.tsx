import React from "react";
import { Material, Tags } from "../../@types/queryTypes";

import * as styles from "./Selectable.css";

interface Props {
  set: (input: any) => void;
  data: { [key: string]: Array<Tags | Material> };
  selected: Array<string>;
}

const Selectable = ({ set, data, selected }: Props) => {
  const [propName, propData] = [Object.keys(data)[0], Object.values(data)[0]];
  const tagHandler = (id: string) =>
    set({
      [propName]: selected.includes(id)
        ? selected.filter((i) => i !== id)
        : [...selected, id],
    });
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {propData.map((el) => (
          <p
            className={
              selected.includes(el.id) ? styles.added : styles.availible
            }
            key={el.id + el.info.name}
            onClick={() => tagHandler(el.id)}
          >
            {el.info.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Selectable;

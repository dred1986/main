import React from "react";
import { ComponentDimensionsDimensions } from "../../@types/queryTypes";

import * as styles from "./Dimensions.css";

interface Props {
  set: (i: any) => void;
  dimensions: Partial<ComponentDimensionsDimensions>;
  capacity?: { [key: string]: number };
}
const locale = ["Вес", "Ширина", "Длина", "Высота", "Мин(шт)", "Макс(шт)"];
const Dimensions = ({ dimensions, capacity, set }: Props) => {
  const isCapacityProps = (i: number) => i > Object.keys(dimensions).length - 1;
  return (
    <div className={styles.container}>
      <div className={styles.container_wrapper}>
        {Object.keys(
          capacity ? { ...dimensions, ...capacity } : dimensions
        ).map((prop: keyof typeof dimensions, i) => (
          <React.Fragment key={prop + i}>
            <label htmlFor={prop}>{locale[i]}</label>
            <input
              onChange={(e) =>
                isCapacityProps(i)
                  ? set({
                      capacity: {
                        ...capacity,
                        [prop]: Number(e.target.value),
                      },
                    })
                  : set({
                      dimensions: {
                        ...dimensions,
                        [prop]: Number(e.target.value),
                      },
                    })
              }
              type="number"
              required={isCapacityProps(i)}
              value={
                (isCapacityProps(i) ? capacity[prop] : dimensions[prop]) || ""
              }
              name={prop}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Dimensions;

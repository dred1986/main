import React from "react";

import * as styles from "./Checkbox.css";

interface Props {
  handleChange: (e: React.ChangeEvent<any>) => void;
}

const locale: { [key: string]: string } = {
  is_available_in_constructor: "Доступно в конструкторе",
  is_editable: "Редактируемая(текст)",
};

const Checkbox = ({ handleChange, ...args }: Props) => {
  return (
    <div className={styles.container}>
      {Object.keys(args).length > 1 ? (
        Object.entries(args).map(([key, value], i) => (
          <div key={key + i} className={styles.wrapper}>
            <input
              onChange={handleChange}
              type="checkbox"
              checked={value}
              id={key + i}
              name={key}
            />
            <label htmlFor={key + i}>{locale[key] || key}</label>
          </div>
        ))
      ) : (
        <div className={styles.wrapper}>
          <input
            onChange={handleChange}
            type="checkbox"
            checked={Object.values(args)[0]}
            id={Object.keys(args)[0]}
            name={Object.keys(args)[0]}
          />
          <label htmlFor={Object.keys(args)[0]}>
            {locale[Object.keys(args)[0]] || Object.keys(args)[0]}
          </label>
        </div>
      )}
    </div>
  );
};

export default Checkbox;

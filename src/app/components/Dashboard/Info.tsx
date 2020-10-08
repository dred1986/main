import React from "react";

import * as styles from "./Info.css";

interface Props {
  handleChange: (e: React.ChangeEvent<any>) => void;
  name: string;
  description: string;
}

const Info = ({ handleChange, name, description }: Props) => {
  return (
    <div className={styles.info}>
      <input
        onChange={handleChange}
        type="text"
        value={name}
        autoComplete="off"
        name="name"
        placeholder="Name"
      />
      <textarea
        onChange={handleChange}
        value={description}
        name="description"
        placeholder="Description"
      />
    </div>
  );
};

export default Info;

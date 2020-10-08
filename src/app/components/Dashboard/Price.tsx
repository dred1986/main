import React from "react";

import * as styles from "./Price.css";

interface Props {
  base_price: number;
  additional: number;
  discount: string;
  handleChange: (e: React.ChangeEvent<any>) => void;
  isDone?: boolean;
  handleUndo?: () => void;
}

const Price = ({
  base_price,
  additional,
  discount,
  handleChange,
  isDone = false,
  handleUndo,
}: Props) => {
  return (
    <div className={styles.price}>
      <div className={styles.price_params}>
        <label htmlFor="base_price">Базовая цена</label>
        <input
          onChange={handleChange}
          type="number"
          disabled={isDone}
          step="50"
          value={base_price || ""}
          name="base_price"
        />
        <label htmlFor="additional">Добавочная стоимость</label>
        <input
          onChange={handleChange}
          type="number"
          step="50"
          value={additional || ""}
          name="additional"
        />
        <label htmlFor="discount">Скидка (% или ₽)</label>
        <input
          onChange={handleChange}
          type="text"
          value={discount}
          name="discount"
          placeholder="0"
        />
      </div>
      {(discount !== "0" || additional > 0) && (
        <h2 className={styles.price_result} onClick={handleUndo}>
          Итого :{" "}
          {base_price +
            additional -
            (discount !== "0"
              ? Math.round(
                  discount.includes("%")
                    ? ((base_price + additional) / 100) *
                        Number(discount.replace(/\D/g, ""))
                    : Number(discount)
                )
              : 0)}{" "}
          ₽
        </h2>
      )}
    </div>
  );
};

export default Price;

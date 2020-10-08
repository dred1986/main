import React from "react";

import * as styles from "./Nav.css";
import {
  CheckOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined,
} from "@ant-design/icons";
import { Box } from "../../../@types/queryTypes";
import { ItemMod } from "../../../@types/utility";
import { constructorPage } from "../../../redux/actions/constructor";

interface Props {
  page: string;
  handlers?: any;
  box?: Box;
  set?: Array<ItemMod>;
  details?: Box | ItemMod;
  quantity?: string;
}

export default ({ handlers, details, box, set, quantity, page }: Props) => {
  const handleChangePage = () => {
    const currentIndex = constructorPage[page as keyof typeof constructorPage];
    handlers.handleSelectPage(
      box || page === "box"
        ? constructorPage[Math.max(currentIndex - 1, 0)]
        : "box"
    );
  };
  if (page === "initial") return null;
  return (
    <div className={styles.container}>
      <DoubleLeftOutlined
        onClick={handleChangePage}
        className={styles.container_controls}
      />
      <Nav {...{ page, box, set, details, quantity, handlers }} />
    </div>
  );
};

const Nav = ({ page, box, set, details, quantity, handlers }: Props) => {
  switch (page) {
    case "box":
      return (
        <>
          {box && (
            <DoubleRightOutlined
              onClick={() => handlers.handleSelectPage("slot")}
              className={styles.container_controls}
            />
          )}
        </>
      );
    case "slot":
      return (
        <>
          <p className={styles.container_info}>
            {box && set?.filter(Boolean).length + " / " + set?.length}
          </p>
          {set?.filter(Boolean).length >= box?.countmin && (
            <CheckOutlined
              onClick={() => handlers.handleSubmitSet(set)}
              className={styles.container_controls}
            />
          )}
        </>
      );
    case "details":
      return (
        <>
          {!!quantity && (
            <button
              type="button"
              onClick={() => {
                details.__typename === "Item"
                  ? handlers.handleAddItemsToSet(details, quantity)
                  : handlers.handleSelectBox(details);
                handlers.handleSelectPage("slot");
              }}
              className={styles.container_add}
            >
              {details.__typename === "Item"
                ? `Добавить ${quantity.length}`
                : "Выбрать"}
            </button>
          )}
        </>
      );
    case "items":
      return <p>Sort tbd</p>;
    default:
      return <></>;
  }
};

import React, { useState, ReactElement } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  changePage,
  pickBox,
  viewItemDetails,
  pageType,
  changeQuantity,
  addItemsToSet,
  RemoveItemFromSet,
} from "../../../redux/actions/constructor";
import { RootState } from "../../../redux/reducers";
import { Box } from "../../../@types/queryTypes";
import { ItemMod } from "../../../@types/utility";

import { GiftOutlined } from "@ant-design/icons";
import { Boxes } from "./Boxes";
import { Slots } from "./Slots";
import { Items } from "./Items";
import { Details } from "./Details";
import Nav from "./Nav";
import { Receipt } from "./Receipt";

export default ({
  onSubmit,
}: {
  onSubmit?: (...rest: any) => void;
}): ReactElement => {
  const dispatch = useDispatch();
  const { box, set, page, details, quantity } = useSelector(
    (state: RootState) => state.bundle
  );

  const [selectedSlot, selectSlot] = useState(0);

  const handlers = {
    handleSelectPage(page: pageType) {
      dispatch(changePage(page));
    },
    handleSelectBox(box: Box) {
      dispatch(pickBox(box));
      handlers.handleSelectPage("slot");
    },
    handleViewItemDetails(input: ItemMod | Box) {
      dispatch(viewItemDetails(input));
      handlers.handleSelectPage("details");
    },
    handlechangeQuantity(quantity: string) {
      dispatch(changeQuantity(quantity));
    },
    handleAddItemsToSet(input: ItemMod, quantity: string) {
      dispatch(addItemsToSet(input, quantity, selectedSlot));
    },
    handleRemoveItemFromSet(id: number) {
      dispatch(RemoveItemFromSet(id));
    },
    handleSubmitSet(set: Array<ItemMod>) {
      const data = set.reduce(
        (acc, item) => ({
          ...acc,
          set: [...acc.set, { item: item.id, letter: item.letter }],
          price: acc.price += item.price.overall,
        }),
        { set: [], price: box.price.overall }
      );
      onSubmit({ set: data.set, price: data.price, box: box.id, isDone: true });
    },
  };

  return (
    <>
      <Nav {...{ handlers, details, box, set, quantity, page }} />
      <Constructor {...{ handlers, box, set, page, selectSlot, details }} />
      <Receipt {...{ page, box, set }} />
    </>
  );
};

interface IConstructor {
  handlers: any;
  box: Box;
  set: Array<ItemMod>;
  page: string;
  details: Box | ItemMod;
  selectSlot: (n: number) => void;
}

const Constructor = ({
  handlers,
  box,
  set,
  page,
  details,
  selectSlot,
}: IConstructor): ReactElement => {
  switch (page) {
    case "box":
      return (
        <Boxes
          {...{
            select: handlers.handleViewItemDetails,
            add: handlers.handleSelectBox,
          }}
        />
      );
    case "slot":
      return <Slots {...{ box, set, selectSlot, handlers }} />;
    case "items":
      return <Items select={handlers.handleViewItemDetails} />;
    case "details":
      return <Details {...{ input: details, set, handlers }} />;
    default:
      return (
        <GiftOutlined
          onClick={() => handlers.handleSelectPage("box")}
          style={{ fontSize: "5rem", margin: "0 auto", display: "block" }}
        />
      );
  }
};

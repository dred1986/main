import React from "react";

import * as styles from "./Items.css";

import { useQuery } from "@apollo/client";
import getItems from "../../../graphql/queries/getItems.graphql";
import { ItemMod } from "../../../@types/utility";

import Card from "../../Shared/Card";
import Slider from "../../Shared/Slider";

interface Props {
  select: (item: ItemMod) => void;
}

export const Items = ({ select }: Props) => {
  const { data, loading } = useQuery(getItems);
  const items: ItemMod[] = data?.items;

  return (
    <Slider grid={styles.grid} itemsPerPage={20}>
      {!loading &&
        data &&
        items.map((item) => (
          <Card key={item.id} input={item} select={select} />
        ))}
    </Slider>
  );
};

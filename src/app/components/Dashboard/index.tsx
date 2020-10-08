import React, { useState } from "react";

import { useTransition, animated as a } from "react-spring";

import AddBundle from "./AddBundle";
import AddItem from "./AddItem";
import AddBox from "./AddBox";
import AddBanner from "./AddBanner";

import * as styles from "./Dashboard.css";

export default function () {
  const [Bundle, Item, Box, Banner] = [
    a(AddBundle),
    a(AddItem),
    a(AddBox),
    a(AddBanner),
  ];
  const pages: any = {
    Bundle: <Bundle />,
    Item: <Item />,
    Box: <Box />,
    Banner: <Banner />,
    Orders: null,
    Customers: null,
  };
  const [currentTab, setTab] = useState(Object.keys(pages)[0]);

  return (
    <div className={styles.container}>
      <div className={styles.container_nav}>
        {Object.keys(pages).map((tab) => (
          <button
            className={currentTab === tab ? styles.active : ""}
            onClick={() => setTab(tab)}
            disabled={!pages[tab]}
            key={tab}
          >
            {tab}
          </button>
        ))}
      </div>
      {pages[currentTab]}
    </div>
  );
}

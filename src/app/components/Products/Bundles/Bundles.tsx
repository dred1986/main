import React, { ReactElement } from "react";

import { useHistory } from "react-router-dom";

import * as styles from "./Bundles.css";

import { useDispatch } from "react-redux";
import { AddToCart } from "../../../redux/actions/cart";

import Card from "../../Shared/Card";
import Slider from "../../Shared/Slider";
import { Product } from "../../../@types/queryTypes";

interface Props {
  bundles: Product[];
}

export default function Bundles({ bundles }: Props): ReactElement {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSelectBundle = (id: string, title: string) =>
    history.push(`${id}/${title}`);
  const handleAddToCart = (product: Product) => dispatch(AddToCart(product));

  return (
    <div className={styles.container}>
      <Slider
        hasBullets={styles.bullets}
        grid={styles.grid}
        itemsPerPage={
          window.innerWidth <= 640 ? 4 : window.innerWidth <= 768 ? 6 : 10
        }
      >
        {bundles.map((bundle) => (
          <Card
            key={bundle.id}
            input={bundle}
            select={handleSelectBundle}
            add={handleAddToCart}
          />
        ))}
      </Slider>
    </div>
  );
}

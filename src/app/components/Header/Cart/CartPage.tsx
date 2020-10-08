import React, { ReactElement } from "react";
import * as styles from "./CartPage.css";

import { useDispatch } from "react-redux";

import { RemoveFromCart } from "../../../redux/actions/cart";
import { Product } from "../../../@types/queryTypes";

interface Props {
  cart: Product[];
}

function CartPage({ cart }: Props): ReactElement {
  const dispatch = useDispatch();

  return (
    <div className={styles.cartPage}>
      <div className={styles.list}>
        {cart.map((prod) => (
          <div key={prod.id} onClick={() => dispatch(RemoveFromCart(prod.id))}>
            {prod.info.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartPage;

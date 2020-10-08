import React, { useReducer, ReactElement } from "react";

import { useQuery } from "@apollo/client";
import getBanners from "../../graphql/queries/getBanners.graphql";
import { Banner as bannerType } from "../../@types/queryTypes";

import Slider from "../Shared/Slider";
import Banner from "./Banner";

import * as styles from "./index.css";

export default function index(): ReactElement | null {
  const { data, loading } = useQuery(getBanners);
  const [isOpen, toggle] = useReducer((isOpen) => !isOpen, false);

  if (loading) return null;
  return (
    <section className={styles.container}>
      <Slider hasBullets={styles.bullets} disabled={isOpen} scaleOnDrag>
        {data?.banners.map(
          (banner: bannerType) =>
            banner && <Banner key={banner.id} {...{ banner, isOpen, toggle }} />
        )}
      </Slider>
    </section>
  );
}

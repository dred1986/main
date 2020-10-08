import React, { useMemo, ReactElement } from "react";

import { useQuery } from "@apollo/client";
import getBundles from "../../../graphql/queries/getBundles.graphql";
import Featured from "./Featured";

export default function index(): ReactElement {
  const { data, loading } = useQuery(getBundles);
  const featured = useMemo(
    () => data?.products[Math.floor(Math.random() * data.products.length)],
    [data]
  );
  if (loading) return <></>;

  return <Featured {...{ featured }} />;
}

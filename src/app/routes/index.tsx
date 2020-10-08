import React, { ReactElement, Suspense, lazy } from "react";
import { Router } from "react-router-dom";
import { history } from "../redux/";

import Loader from "../components/Shared/Loader";

const Header = lazy(() => import("../components/Header"));
const Banners = lazy(() => import("../components/Banner"));
const Products = lazy(() => import("../components/Products"));
const Footer = lazy(() => import("../components/Footer"));

export default (): ReactElement => {
  return (
    <Router history={history}>
      <Suspense fallback={<Loader />}>
        <Header />
        <Banners />
        <Products />
        {/* <Footer /> */}
      </Suspense>
    </Router>
  );
};

import React, { lazy, ReactElement } from "react";
import * as styles from "./index.css";

import { useQuery } from "@apollo/client";
import getBundles from "../../graphql/queries/getBundles.graphql";

import { Route, Switch, Redirect, useLocation } from "react-router-dom";

import useGetRole from "../hooks/useGetRole";
import Featured from "./Feautured";
import Sort from "./Sort";
import Bundles from "./Bundles/Bundles";
import Bundle from "./Bundles/Bundle";
const Editor = lazy(() => import("../Dashboard"));
import Constructor from "./Constructor";

export default (): ReactElement => {
  const { data, loading } = useQuery(getBundles);

  const bundles = data?.products;
  const location = useLocation();

  return (
    <>
      <Featured />
      {!loading && data && (
        <main className={styles.main}>
          {location.pathname !== "/dashboard" && <Sort />}
          <section className={styles.main_content}>
            <Switch>
              <Route exact path="/">
                <Bundles {...{ bundles }} />
              </Route>
              <Route exact path="/:id/:title">
                <Bundle />
              </Route>
              <AuthRoute path="/dashboard">
                <Editor />
              </AuthRoute>
            </Switch>
            {location.pathname !== "/dashboard" && (
              <Constructor onSubmit={console.log} />
            )}
          </section>
        </main>
      )}
    </>
  );
};

const AuthRoute = ({
  children,
  path,
}: {
  children: React.ReactElement;
  path: string;
}) => {
  const isAdmin = useGetRole();

  return (
    <Route
      {...path}
      render={({ location }) =>
        isAdmin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

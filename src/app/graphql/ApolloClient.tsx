import React, { useEffect, ReactElement, ReactNode } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/actions/user";

import {
  ApolloClient,
  ApolloProvider,
  ApolloLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "apollo-link-context";
import { createUploadLink } from "apollo-upload-client";

export default function ({ children }: { children: ReactNode }): ReactElement {
  const token = localStorage.getItem(process.env.LOCAL_STORAGE_TOKEN);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) dispatch(setToken(token));
  }, []);

  const uploadLink = createUploadLink({
    uri: process.env.GRAPHQL,
  });

  const authLink: any = setContext((_, { headers, ...context }) => {
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
      ...context,
    };
  });

  const cache = new InMemoryCache();
  const client = new ApolloClient({
    cache,
    link: ApolloLink.from([authLink, uploadLink]),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

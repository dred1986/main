import React, { useEffect, ReactElement } from "react";

import { useSelector, useDispatch } from "react-redux";
import { onLoading, onLogout, setUser } from "../../../redux/actions/user";
import { RootState } from "../../../redux/reducers";

import { useMutation, useLazyQuery } from "@apollo/client";
import logInMutation from "../../../graphql/mutations/logIn.graphql";
import signUpMutation from "../../../graphql/mutations/signUp.graphql";
import getUser from "../../../graphql/queries/getUserInfo.graphql";

import AuthPage from "./AuthPage";
import ProfilePage from "./ProfilePage";

import { UserOutlined, LoadingOutlined } from "@ant-design/icons";

interface Props {
  Handler: () => void;
  isOpen: string;
}

export default function ({ Handler, isOpen }: Props): ReactElement {
  const dispatch = useDispatch();
  const { user, token, error } = useSelector((state: RootState) => state.user);
  const [
    getUserData,
    { data: fetchUserData, loading: fetchUserLoading, error: FetchUserError },
  ] = useLazyQuery(getUser);
  const [tryLogin, Login] = useMutation(logInMutation);
  const [trySignUp, Signup] = useMutation(signUpMutation);

  const handleLogout = () => dispatch(onLogout());

  const exiredToken = FetchUserError?.message === "Invalid token.";

  useEffect(() => {
    if (exiredToken) {
      handleLogout();
    }
  }, [exiredToken]);

  useEffect(() => {
    if (token && fetchUserData?.me) {
      dispatch(setUser(fetchUserData.me));
    }
    if (!user && token && !fetchUserLoading && !FetchUserError) {
      getUserData();
    }
  }, [token, fetchUserLoading, FetchUserError]);

  useEffect(() => {
    if (Login.loading || Signup.loading) dispatch(onLoading());
  }, [Login.loading, Signup.loading]);

  return (
    <>
      {Login.loading || Signup.loading ? (
        <LoadingOutlined />
      ) : (
        <UserOutlined
          style={{ opacity: user || isOpen === "auth" ? "1" : "0.5" }}
          onClick={Handler}
        />
      )}

      {isOpen === "auth" &&
        (user ? (
          <ProfilePage {...{ user, handleLogout }} />
        ) : (
          <AuthPage
            {...{
              loginHandler: tryLogin,
              signupHandler: trySignUp,
              isLoading: Login.loading || Signup.loading,
              isError: error,
            }}
          />
        ))}
    </>
  );
}

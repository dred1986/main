import React, { ReactElement, useState } from "react";
import * as styles from "./AuthPage.css";

import { useDispatch } from "react-redux";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import { LoadingOutlined } from "@ant-design/icons";
import {
  setUser,
  setToken,
  onError,
  onReset,
} from "../../../redux/actions/user";
import {
  UsersPermissionsRegisterInput,
  UsersPermissionsLoginInput,
} from "../../../@types/queryTypes";

interface authProps {
  loginHandler: (obj: any) => any;
  signupHandler: () => void;
  isLoading: boolean;
  isError: boolean;
}

const AuthPage = ({
  loginHandler,
  signupHandler,
  isLoading,
  isError,
}: authProps): ReactElement => {
  const [toggleState, setToggleState] = useState("login");

  return (
    <>
      {toggleState === "login" ? (
        <Login
          btnHandler={() => setToggleState("signup")}
          {...{ loginHandler, isLoading, isError }}
        />
      ) : (
        <Signup
          btnHandler={() => setToggleState("login")}
          {...{ signupHandler, isLoading, isError }}
        />
      )}
    </>
  );
};

interface loginProps {
  btnHandler: () => void;
  loginHandler: (obj: any) => any;
  isLoading: boolean;
  isError: boolean;
}

const Login = ({
  btnHandler,
  loginHandler,
  isLoading,
  isError,
}: loginProps): ReactElement => {
  const dispatch = useDispatch();
  const validationSchema = yup.object({
    identifier: yup
      .string()
      .email("*неправильный email")
      .required("*обязателньое поле"),
    password: yup
      .string()
      .required("*обязателньое поле")
      .min(6, "*слишком короткий пароль")
      .matches(/[A-Za-z0-9]/, "*только латинские буквы и цифры"),
  });

  const handleSubmit = async ({
    identifier,
    password,
  }: UsersPermissionsLoginInput) => {
    try {
      const {
        data: { login },
      } = await loginHandler({
        variables: {
          input: {
            identifier,
            password,
            provider: "local",
          },
        },
      });
      dispatch(setToken(login.jwt));
      dispatch(setUser(login.user));
    } catch (e) {
      dispatch(onError());
    }
  };
  const handleDropErrors = () => isError && dispatch(onReset());

  return (
    <Formik
      initialValues={{ identifier: "", password: "" }}
      validateOnChange={true}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, handleSubmit, handleChange }) => (
        <Form
          onSubmit={handleSubmit}
          onFocus={handleDropErrors}
          className={styles.auth}
        >
          <button
            type="button"
            disabled={isLoading || isError}
            className={styles.auth_signup}
            onClick={btnHandler}
          >
            Регистрация
          </button>
          <ErrorMessage
            name="identifier"
            render={(msg) => <div className={styles.auth_error}>{msg}</div>}
          />
          <Field
            type="email"
            name="identifier"
            placeholder="email"
            disabled={isLoading}
            value={values.identifier}
            onChange={handleChange}
          />
          <ErrorMessage
            name="password"
            render={(msg) => <div className={styles.auth_error}>{msg}</div>}
          />
          <Field
            type="password"
            name="password"
            placeholder="пароль"
            disabled={isLoading}
            value={values.password}
            onChange={handleChange}
          />
          <button
            className={styles.auth_login}
            type="submit"
            disabled={isLoading || isError}
          >
            {isLoading ? (
              <LoadingOutlined />
            ) : !isError ? (
              "Войти"
            ) : (
              "Неправильные данные"
            )}
          </button>
        </Form>
      )}
    </Formik>
  );
};

interface signupProps {
  btnHandler: () => void;
  signupHandler: (obj: any) => any;
  isLoading: boolean;
  isError: boolean;
}

const Signup = ({
  btnHandler,
  signupHandler,
  isLoading,
  isError,
}: signupProps): ReactElement => {
  const dispatch = useDispatch();

  const handleSubmit = async ({
    username,
    email,
    password,
  }: UsersPermissionsRegisterInput) => {
    try {
      const {
        data: { register },
      } = await signupHandler({
        variables: {
          input: {
            username,
            email,
            password,
          },
        },
      });
      dispatch(setToken(register.jwt));
      dispatch(setUser(register.user));
    } catch (e) {
      dispatch(onError());
    }
  };

  const handleDropErrors = () => isError && dispatch(onReset());

  const validationSchema = yup.object({
    username: yup
      .string()
      .required("*обязателньое поле")
      .min(3, "*некорректное имя"),
    email: yup
      .string()
      .email("*неправильный email")
      .required("*обязателньое поле"),
    password: yup
      .string()
      .required("*обязателньое поле")
      .min(6, "*слишком короткий пароль"),
  });
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validateOnChange={true}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, handleSubmit, handleChange }) => (
        <Form
          onSubmit={handleSubmit}
          onFocus={handleDropErrors}
          className={styles.auth}
        >
          <button
            type="button"
            className={styles.auth_login}
            onClick={btnHandler}
            disabled={isLoading || isError}
          >
            Вход
          </button>
          <ErrorMessage
            name="name"
            render={(msg) => <div className={styles.auth_error}>{msg}</div>}
          />
          <Field
            type="name"
            name="username"
            placeholder="Имя"
            disabled={isLoading}
            value={values.username}
            onChange={handleChange}
          />
          <ErrorMessage
            name="email"
            render={(msg) => <div className={styles.auth_error}>{msg}</div>}
          />
          <Field
            type="email"
            name="email"
            placeholder="email"
            value={values.email}
            disabled={isLoading}
            onChange={handleChange}
          />
          <ErrorMessage
            name="password"
            render={(msg) => <div className={styles.auth_error}>{msg}</div>}
          />
          <Field
            type="password"
            name="password"
            placeholder="пароль"
            disabled={isLoading}
            value={values.password}
            onChange={handleChange}
          />
          <button
            className={styles.auth_signup}
            type="submit"
            disabled={isLoading || isError}
          >
            {isLoading ? (
              <LoadingOutlined />
            ) : !isError ? (
              "Зарегистрироваться"
            ) : (
              "Пользователь существует"
            )}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AuthPage;

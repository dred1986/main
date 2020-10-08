import React, { useReducer } from "react";

import { useFormik } from "formik";

import { useQuery } from "@apollo/client";
import getTags from "../../graphql/queries/getTags.graphql";

import { useMutation } from "@apollo/client";
import uploadFiles from "../../graphql/mutations/uploadFiles.graphql";
import sendBundle from "../../graphql/mutations/addBundle.graphql";

import * as styles from "./Dashboard.css";

import { ComponentBundleItemInput, Tags } from "../../@types/queryTypes";
import FileUpload from "./FileUpload";
import Info from "./Info";
import Selectable from "./Selectable";
import Price from "./Price";
import Constructor from "../Products/Constructor/Constructor";
import Checkbox from "./Checkbox";

type dataType = {
  set?: Array<ComponentBundleItemInput>;
  box?: string;
  tags?: Array<Tags>;
  price?: number;
  isDone: boolean;
};

const AddBundle = () => {
  const [sendFiles] = useMutation(uploadFiles);
  const [uploadBundle] = useMutation(sendBundle);

  const init: dataType = {
    set: [],
    box: "",
    tags: [],
    price: 0,
    isDone: false,
  };

  const [{ set, box, tags, price, isDone }, setData] = useReducer(
    (data: dataType, action: any) => ({ ...data, ...action }),
    init
  );

  const handleSubmitMutation = async (files: any) => {
    const {
      data: { multipleUpload },
    } = await sendFiles({
      variables: {
        files,
      },
    });
    const imagesUidArray = multipleUpload.map(
      (upload: { id: string }) => upload.id
    );

    await uploadBundle({
      variables: {
        input: {
          data: {
            info: {
              name,
              description,
              image: imagesUidArray,
            },
            flags: {
              is_available_in_constructor,
            },
            box,
            tags,
            bundle: set,
            price: {
              additional,
              discount,
            },
          },
        },
      },
      refetchQueries: ["getBundles"],
    });
    setData(init);
  };

  const {
    values: {
      name,
      description,
      additional,
      discount,
      is_available_in_constructor,
      files,
    },
    setFieldValue,
    handleSubmit,
    handleChange,
    handleReset,
  } = useFormik({
    initialValues: {
      name: "",
      description: "",
      discount: "",
      additional: 0,
      is_available_in_constructor: true,
      files: [],
    },
    onSubmit: async (values) => {
      try {
        await handleSubmitMutation(values.files);
        handleReset(values);
      } catch (e) {
        console.log(e);
      }
    },
  });

  const handleUndo = () => setData({ isDone: false });

  const { data, loading } = useQuery<{ tags: Array<Tags> }>(getTags, {
    // variables: { name: null },
  });
  return (
    <form onSubmit={handleSubmit}>
      <Info {...{ handleChange, name, description }} />
      <Checkbox
        {...{
          handleChange,
          is_available_in_constructor,
        }}
      />
      {!loading && <Selectable {...{ set: setData, data, selected: tags }} />}
      {isDone ? (
        <Price
          {...{
            base_price: price,
            additional,
            discount,
            handleChange,
            isDone,
            handleUndo,
          }}
        />
      ) : (
        <div className={styles.wrapper}>
          <Constructor onSubmit={setData} />
        </div>
      )}
      <FileUpload {...{ files, setFieldValue }} />
      <button
        type="submit"
        disabled={!files.length || !set.length || !name || !description}
      >
        Submit
      </button>
    </form>
  );
};

export default AddBundle;

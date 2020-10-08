import React, { useReducer } from "react";

import { useQuery } from "@apollo/client";
import getTags from "../../graphql/queries/getTags.graphql";

import { useMutation } from "@apollo/client";
import uploadFiles from "../../graphql/mutations/uploadFiles.graphql";
import sendBanner from "../../graphql/mutations/addBanner.graphql";

import FileUpload from "./FileUpload";
import Info from "./Info";
import Selectable from "./Selectable";

import { useFormik } from "formik";
import { Tags } from "../../@types/queryTypes";

type dataType = {
  tags?: Array<Tags>;
};

const AddBanner = () => {
  const [sendFiles] = useMutation(uploadFiles);
  const [uploadBanner] = useMutation(sendBanner);

  const init: dataType = {
    tags: [],
  };

  const [{ tags }, setData] = useReducer(
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

    await uploadBanner({
      variables: {
        input: {
          data: {
            info: {
              name,
              description,
              image: imagesUidArray,
            },
            tags,
          },
        },
      },
      refetchQueries: ["getBanners"],
    });
  };

  const {
    values: { name, description, files },
    setFieldValue,
    handleSubmit,
    handleChange,
    handleReset,
  } = useFormik({
    initialValues: {
      name: "",
      description: "",
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
  const { data, loading } = useQuery<{ tags: Array<Tags> }>(getTags, {
    // variables: { name: null },
  });

  return (
    <form onSubmit={handleSubmit}>
      <Info {...{ handleChange, name, description }} />
      {!loading && <Selectable {...{ set: setData, data, selected: tags }} />}
      <FileUpload {...{ files, setFieldValue }} />
      <button type="submit" disabled={!files.length || !name || !description}>
        Submit
      </button>
    </form>
  );
};

export default AddBanner;

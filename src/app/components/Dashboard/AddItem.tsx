import React, { useReducer } from "react";

import { useFormik } from "formik";

import { useQuery } from "@apollo/client";
import getTags from "../../graphql/queries/getTags.graphql";
import getMaterials from "../../graphql/queries/getMaterials.graphql";

import { useMutation } from "@apollo/client";
import uploadFiles from "../../graphql/mutations/uploadFiles.graphql";
import sendItem from "../../graphql/mutations/addItem.graphql";

import FileUpload from "./FileUpload";
import Info from "./Info";
import Selectable from "./Selectable";
import Price from "./Price";
import Dimensions from "./Dimensions";
import Checkbox from "./Checkbox";

import {
  Tags,
  Material,
  ComponentDimensionsDimensions,
} from "../../@types/queryTypes";

type dataType = {
  tags: Array<string>;
  materials: Array<string>;
  dimensions: Partial<ComponentDimensionsDimensions>;
};

const AddItem = () => {
  const [sendFiles] = useMutation(uploadFiles);
  const [uploadItem] = useMutation(sendItem);

  const init: dataType = {
    tags: [],
    dimensions: { weight: 0, width: 0, breadth: 0, height: 0 },
    materials: [],
  };

  const [{ tags, materials, dimensions }, setData] = useReducer(
    (data: dataType, action: Partial<dataType>) => ({ ...data, ...action }),
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

    await uploadItem({
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
              is_editable,
            },
            price: {
              base_price,
              additional,
              discount,
            },
            dimensions,
            tags,
            materials,
            is_available_in_constructor,
          },
        },
      },
      refetchQueries: ["getItems"],
    });
    setData(init);
  };

  const { data: tagData, loading: tagLoading } = useQuery<{
    tags: Array<Tags>;
  }>(getTags, {
    // variables: { name: null },
  });
  const { data: materialData, loading: materialLoading } = useQuery<{
    material: Array<Material>;
  }>(getMaterials);

  const {
    values: {
      name,
      description,
      base_price,
      additional,
      discount,
      is_available_in_constructor,
      is_editable,
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
      base_price: 0,
      additional: 0,
      discount: "",
      is_available_in_constructor: true,
      is_editable: false,
      files: [],
    },
    onSubmit: async (values) => {
      try {
        await handleSubmitMutation(values.files);
        handleReset(values);
      } catch (e) {
        console.log(e);
      }
      handleReset(values);
    },
  });
  return (
    <form onSubmit={handleSubmit}>
      <Info {...{ handleChange, name, description }} />
      {!materialLoading && (
        <Selectable
          {...{ set: setData, data: materialData, selected: materials }}
        />
      )}
      <Checkbox
        {...{
          handleChange,
          is_available_in_constructor,
          is_editable,
        }}
      />
      <Price
        {...{
          base_price,
          additional,
          discount,
          handleChange,
        }}
      />
      <Dimensions {...{ dimensions, set: setData }} />
      {!tagLoading && (
        <Selectable {...{ set: setData, data: tagData, selected: tags }} />
      )}
      <FileUpload {...{ files, setFieldValue }} />
      <button
        type="submit"
        disabled={!files.length || !name || !description || !base_price}
      >
        Submit
      </button>
    </form>
  );
};

export default AddItem;

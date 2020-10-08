import React from "react";
import { FileAddOutlined } from "@ant-design/icons";
import { FileWithPath, useDropzone } from "react-dropzone";

import * as styles from "./FileUpload.css";

interface IFileUpload {
  files: Array<FileWithPath>;
  setFieldValue: (field: string, files: Array<FileWithPath>) => void;
}

const FileUpload = ({ files, setFieldValue }: IFileUpload) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles: any) => {
      const usedPaths = files.map(({ path }) => path);
      const filesToAdd = acceptedFiles.filter(
        ({ path }: { path: string }) => !usedPaths.includes(path)
      );
      setFieldValue("files", [...files, ...filesToAdd]);
    },
    accept: "image/*",
  });

  return (
    <div className={styles.filesupload} {...getRootProps()}>
      <input name="files" {...getInputProps()} />
      <FileAddOutlined style={{ fontSize: "5rem" }} />
      {!!files.length && (
        <ul>
          {files.map((file, i) => (
            <li
              onClick={(e) => {
                e.stopPropagation();
                setFieldValue(
                  "files",
                  files.filter((_, _i) => i !== _i)
                );
              }}
              key={i}
            >
              {file.name + " " + Math.round(file.size / 1000)} kB
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FileUpload;

import React, { useState } from "react";

import classes from "./FileContainer.module.css";
import Folder from "../../../assets/folder.svg";

const FileContainer = (props) => {
  const [dragActive, setDragActive] = useState(false);

  const imageHandler = (files) => {
    const selectedFiles = [...files];
    const sortedFiles = [];

    selectedFiles.forEach((file) => {
      const fileUrl = URL.createObjectURL(file);
      const fileName = file.name;
      sortedFiles.push({ fileUrl, fileName });
    });

    props.setFiles([...sortedFiles]);
  };

  const onFileInput = (e) => {
    imageHandler(e.target.files);
  };
  
  const dragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const dragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const dragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const dropFile = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const files = e.dataTransfer.files;
    imageHandler(files);
    setDragActive(false);
  };
  return (
    <div
      className={`${classes.FileContainer} ${
        dragActive ? classes.FileContainerActive : ""
      }`}
      onDragOver={dragOver}
      onDragEnter={dragEnter}
      onDragLeave={dragLeave}
      onDrop={dropFile}
    >
      <div className={classes.FileInnerContainer}>
        <div className={classes.FilePlaceholder}>
          <div className={classes.FolderImageContainer}>
            <img src={Folder} className={classes.Image} alt="Folder" />
          </div>
          <p
            className={`${classes.PlaceHolderText} ${
              dragActive ? classes.PlaceHolderTextActive : ""
            }`}
          >
            Drag & drop your files here or upload it from a computer
          </p>
        </div>
        <div className={classes.InputContainer}>
          <label
            htmlFor="file"
            className={`${classes.FileInputLabel} ${
              dragActive ? classes.ActiveFileInputLable : ""
            }`}
          >
            Upload from a Computer
          </label>
          <input
            type="file"
            multiple
            className={classes.FileInput}
            id="file"
            onChange={onFileInput}
          />
        </div>
      </div>
    </div>
  );
};

export default FileContainer;

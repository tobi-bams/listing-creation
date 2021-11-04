import React, { useState } from "react";

import classes from "./Documentation.module.css";
import Input from "../UI/Input/Input";
import Footer from "../Footer/Footer";
import FileContainer from "../UI/FileContainer/FileContainer";

const Documentatioin = (props) => {
  const [folderName, setFolderName] = useState(props.allData.folderName);
  const [documentationFiles, setDocumentationFiles] = useState(
    props.allData.documentationFiles
  );

  const folderNameOnChangeHandler = (e) => {
    setFolderName(e.target.value);
  };

  const onNextEventHandler = () => {
    if (props.currentStep < 4) {
      props.setAllData((data) => {
        return {
          ...data,
          folderName,
          documentationFiles,
        };
      });
      props.setCurrentStep(props.currentStep + 1);
    }
  };

  const onBackEventHandler = () => {
    if (props.currentStep > 1) {
      props.setAllData((data) => {
        return {
          ...data,
          folderName,
          documentationFiles,
        };
      });
      props.setCurrentStep(props.currentStep - 1);
    }
  };

  return (
    <>
      <div className={classes.DocumentationContainer}>
        <div className={classes.DocumentationHeaderContainer}>
          <h2 className={classes.DocumentationHeader}>Documentation</h2>
          <p className={classes.DocumentationDescription}>
            We also don’t like unnecessary bureaucracy but by law we are obliged
            to check your documentation before publishing
          </p>
        </div>

        <Input
          label="Folder name"
          type="text"
          value={folderName}
          onChange={folderNameOnChangeHandler}
        />
        <FileContainer setFiles={setDocumentationFiles} />
        <div className={classes.AddFolderContainer}>
          <p className={classes.PlusSign}>+</p>
          <p className={classes.AddFolder}>Add new folder</p>
        </div>
        <div className={classes.FileNameContainer}>
          {documentationFiles.map((file, index) => (
            <p key={file.fileName} className={classes.FileName}>
              {`${index + 1}. ${file.fileName}`}
            </p>
          ))}
        </div>
      </div>
      <Footer
        onClickNext={onNextEventHandler}
        onClickBack={onBackEventHandler}
      />
    </>
  );
};

export default Documentatioin;

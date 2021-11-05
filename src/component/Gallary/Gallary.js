import React, { useState } from "react";

import classes from "./Gallary.module.css";
import Input from "../UI/Input/Input";
import FileContainer from "../UI/FileContainer/FileContainer";
import Footer from "../Footer/Footer";

const Gallary = (props) => {
  const [gallaryFolderName, setGallaryFolder] = useState(
    props.allData.gallaryFolderName
  );
  const [gallaryFiles, setGallaryFiles] = useState(props.allData.gallaryFiles);

  const gallaryFolderOnChangeHandler = (e) => {
    setGallaryFolder(e.target.value);
  };

  const onNextEventHandler = () => {
    if (props.currentStep < 5) {
      props.setAllData((data) => {
        return {
          ...data,
          gallaryFolderName,
          gallaryFiles,
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
          gallaryFolderName,
          gallaryFiles,
        };
      });
      props.setCurrentStep(props.currentStep - 1);
    }
  };

  return (
    <>
      <div className={classes.GallaryContainer}>
        <div className={classes.GallaryHeaderContainer}>
          <h2 className={classes.GallaryHeader}>Gallary</h2>
          <p className={classes.GallaryDescription}>
            This is an important part of the asset profile. Upload a selection
            of quality photos of your property here to attract investors
          </p>
        </div>
        <Input
          label="Folder name"
          value={gallaryFolderName}
          onChange={gallaryFolderOnChangeHandler}
          type="text"
        />
        <FileContainer setFiles={setGallaryFiles} />
        <div className={classes.AddFolderContainer}>
          <p className={classes.PlusSign}>+</p>
          <p className={classes.AddFolder}>Add new folder</p>
        </div>
        <div className={classes.FileNameContainer}>
          {gallaryFiles.map((file, index) => (
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

export default Gallary;

import React from "react";

import classes from "./Confirmation.module.css";
import LocationImage from "../../assets/location.svg";
import Footer from "../Footer/Footer";

const Confirmation = (props) => {
  const onBackEventHandler = () => {
    if (props.currentStep > 1) {
      props.setCurrentStep(props.currentStep - 1);
    }
  };
  return (
    <>
      <div className={classes.ConfirmationContainer}>
        <div className={classes.ConfirmationHeaderContainer}>
          <h2 className={classes.ConfirmationHeader}>Confirmation</h2>
          <p className={classes.ConfirmationDescription}>
            Every property in this neighborhood has attracted more than
            <span className={classes.AmountSpan}> $1,000,000.</span> Investors
            are finally submitting offers like hotcakes!
          </p>
        </div>
        <div className={classes.ConfirmationDetailsContainer}>
          <div className={classes.LeftHandContainer}>
            <div className={classes.ImageContainer}>
              {props.allData.gallaryFiles.length === 0 ? (
                <p className={classes.ImagePlaceHolder}>
                  Please Upload Picture in the Gallary Section
                </p>
              ) : (
                <img
                  alt="House"
                  src={props.allData.gallaryFiles[0].fileUrl}
                  className={classes.PropertyImage}
                />
              )}
            </div>
            <div className={classes.LeftSideBottom}>
              <div className={classes.PropertyDetail}>
                <h3 className={classes.PropertyName}>{props.allData.title}</h3>
                <div className={classes.PropertyLocationContainer}>
                  <img
                    src={LocationImage}
                    className={classes.LocationImage}
                    alt="Location"
                  />
                  <p className={classes.Location}>
                    {props.allData.location} • Residential
                  </p>
                </div>
              </div>
              <p className={classes.PropertyDescription}>
                {props.allData.description}
              </p>
              <div className={classes.PriceDetailContainer}>
                <div className={classes.PropertyValueContainer}>
                  <p className={classes.PropertyValue}>
                    ${props.allData.minInvestAmount}
                  </p>
                  <p className={classes.PropertyLabel}>Min. Investment</p>
                </div>
                <div className={classes.PropertyValueContainer}>
                  <p className={classes.PropertyValue}>
                    {props.allData.expectedReturn}
                  </p>
                  <p className={classes.PropertyLabel}>Projected return</p>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.RightHandContainer}>
            <div className={classes.RightValueContainer}>
              <p className={classes.PropertyLabel}>Project type</p>
              <p className={classes.PropertyValue}>
                {props.allData.projectType}
              </p>
            </div>
            <div className={classes.RightValueContainer}>
              <p className={classes.PropertyLabel}>Distribution</p>
              <p className={classes.PropertyValue}>
                {props.allData.distribution}
              </p>
            </div>
            <div className={classes.RightValueContainer}>
              <p className={classes.PropertyLabel}>Capital stack</p>
              <p className={classes.PropertyValue}>
                ${props.allData.capitalStack}
              </p>
            </div>
            <div className={classes.RightValueContainer}>
              <p className={classes.PropertyLabel}>Target investment period</p>
              <p className={classes.PropertyValue}>{props.allData.investmentPeriod}</p>
            </div>
            <div className={classes.RightValueContainer}>
              <p className={classes.PropertyLabel}>Soft cap – hard cap</p>
              <p className={classes.PropertyValue}>${props.allData.softCap} – ${props.allData.hardCap}</p>
            </div>
            <div className={classes.RightValueContainer}>
              <p className={classes.PropertyLabel}>
                Launch date – expected closing
              </p>
              <p className={classes.PropertyValue}>{props.allData.lunchDate} – {props.allData.closingDate}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer onClickBack={onBackEventHandler} />
    </>
  );
};

export default Confirmation;

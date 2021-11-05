import React from "react";

import classes from "./Quote.module.css";
import Slide from "../../assets/slide.svg";
import Quotaton from "../../assets/quotation.svg";

const Quote = (props) => {
  return (
    <div className={classes.QuoteContainer}>
      <div>
        <img src={Slide} className={classes.SlideImage} alt="Slide" />
      </div>
      <div className={classes.MainQuoteContainer}>
        <p className={classes.QuoteContent}>
          {props.currentStep === 5
            ? `Real estate should be like icing on the cake for every investor! Experience we provide is exciting and rewarding as possible`
            : `Streamlined access, data-driven investments, liquidity, powered by the
          blockchain — all of these is about United Properties`}
        </p>
        <div className={classes.QuoteFooter}>
          <p className={classes.QuoteAuthor}>Cody Drew</p>
          <div className={classes.AuthorDetail}>
            <p className={classes.AuthorPosition}>FOUNDER, CEO, INVESTOR</p>
            <p className={classes.AuthorLogo}>
              U<span>P</span>
            </p>
          </div>
        </div>
      </div>
      <div className={classes.QuotationContainer}>
        <img
          src={Quotaton}
          className={classes.QuotationImage}
          alt="Quotation"
        />
      </div>
    </div>
  );
};

export default Quote;

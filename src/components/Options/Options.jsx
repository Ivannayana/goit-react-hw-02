import React from "react";
import styles from "../Options/Options.module.css";

const Options = ({ updateFeedback, resetFeedback }) => {
  return (
    <div className={styles.box}>
      <button className={styles.button} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button
        className={styles.button}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button className={styles.button} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      <button className={styles.button} onClick={() => resetFeedback("reset")}>
        Reset
      </button>
    </div>
  );
};

export default Options;

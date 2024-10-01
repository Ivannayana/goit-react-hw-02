import React from "react";
import styles from "../Feedback/Feedback.module.css";

const Feedback = ({ feedback, totalFeedback, positivePercentage }) => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>Good: {feedback.good}</li>
      <li className={styles.item}>Neutral: {feedback.neutral}</li>
      <li className={styles.item}>Bad: {feedback.bad}</li>
      <li className={styles.item}>Total: {totalFeedback}</li>
      <li className={styles.item}>Positive: {positivePercentage}%</li>
    </ul>
  );
};

export default Feedback;

import React from "react";
import PropTypes from "prop-types";
import s from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const { item } = s;
  return (
    <ul>
      <li className={item}>Good: {good}</li>
      <li className={item}>Neutral: {neutral}</li>
      <li className={item}>Bad: {bad}</li>
      <li className={item}>Total: {total}</li>
      <li className={item}>Positive Feedback: {positivePercentage}%</li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;

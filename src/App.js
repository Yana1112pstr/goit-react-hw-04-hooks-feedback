import React, { useState } from "react";
import "./App.css";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Section from "./components/Section/Section";
import Statistics from "./components/Statistics/Statistics.js";
import Notification from "./components/Notification/Notification";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (option) => {
    const addFeedback = {
      good: setGood,
      neutral: setNeutral,
      bad: setBad,
    };
    addFeedback[option]((prevState) => prevState + 1);
  };

  // onLeaveFeedback = (option) => {
  //   this.setState((prevState) => ({ [option]: prevState[option] + 1 }));
  // };

  const total = good + neutral + bad;
  const positivePercentage = Math.round((good / total) * 100);
  return (
    <div>
      <Section title={"Please, leave feedback"}>
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title={"Statistics"}>
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification notification="No feedback given" />
        )}
      </Section>
    </div>
  );
}

export default App;

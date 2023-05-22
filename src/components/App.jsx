import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import React, { useState } from 'react';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function onLeaveFeedback(event) {
    const name = event.target.name;
    switch(name) {
      case "good":
        setGood(state => state + 1)
        break;
      case "neutral":
        setNeutral(state => state + 1)
        break;
      case "bad":
        setBad(state => state + 1)
        break
      default: new Error("it's error");
    }
  };

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage() {
    return good > 0 ? Math.round((good / countTotalFeedback()) * 100) : 0;

  }
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
}

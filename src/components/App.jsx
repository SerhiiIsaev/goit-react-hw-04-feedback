import { useState, useEffect } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./Section/FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Section/Statistics/Statistics";
import { Notification } from "./Section/Notification/Notification";

export const App =()=> {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [positivePercentage, setPositivePercentage] = useState(0)
  const options = ['good', 'neutral', 'bad']

  const onLeaveFeedback = (feedback) => {
    switch (feedback) {
      case 'good':
        setGood(good + 1);
        break
      case 'neutral':
        setNeutral(neutral + 1);
        break
      case 'bad':
        setBad(bad + 1);
        break
      default:
        return
    }
  }

  useEffect(() => {
    if (good || neutral || bad) {
      setTotal(good + neutral + bad)
      const result = (good / (good + neutral + bad)) * 100
      setPositivePercentage(Number(result.toFixed(0)))
    }
  }, [good, neutral, bad])
  
    return (
      <>
        <Section title="Pleace leave feedback">
          <FeedbackOptions onLeaveFeedback = {onLeaveFeedback} options={options} />
        </Section>
        <Section title="Statistics">
          {total ? <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}></Statistics>:<Notification message="There is no feedback"/>}
        </Section>
      </>
    )
  
};

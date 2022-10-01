import { Component } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./Section/FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Section/Statistics/Statistics";
import { Notification } from "./Section/Notification/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  onLeaveFeedback = (feedback) => {
    this.setState((prevState) => {
      const value = prevState[feedback];
      return {
        [feedback]: value + 1
      }
    })
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state
    return good + neutral + bad
  }

  countPositivePercentage = () => {
    if (this.countTotalFeedback() === 0) {
      return 0
    }
    const {good} = this.state
    const result = (good / this.countTotalFeedback()) *100
    return Number(result.toFixed(0));
  }

  

  render() {
    const{good, neutral, bad} = this.state
    return (
      <>
      <Section title="Pleace leave feedback">
        <FeedbackOptions onLeaveFeedback = {this.onLeaveFeedback} options={Object.keys(this.state)} />
      </Section>
      <Section title="Statistics">
          {this.countTotalFeedback() ? <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositivePercentage()}></Statistics>:<Notification message="There is no feedback"/>}
      </Section>
      </>
    )
  }
};

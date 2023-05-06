import React, {Component} from 'react';
import PropTypes from 'prop-types';

import FeedbackOptions from './feedback/feedbackOptions';
import Statistics from './statistics/statistics';
import Section from './section/section';
import Notification from './notification/notification';

export class App extends Component {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    InitialBad: 0,
  };

  static propTypes = {
    initialGood: PropTypes.number,
    initialNeutral: PropTypes.number,
    initialBad: PropTypes.number,
  };

  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.InitialBad,
  };

  onLeaveFeedback = key => {
    this.setState(prevState => ({ [key]: prevState[key] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round((good / (good + neutral + bad)) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    return (
      <>
        <Section name="feedback" title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section name="statistics" title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positiveFeedback={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}

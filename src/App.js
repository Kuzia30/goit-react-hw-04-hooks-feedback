import { Component } from "react";
import "./App.css";
import FeedbackOptions from "./components/feedbackOptions";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = (option) => {
    this.setState((prevstate) => ({ [option]: prevstate[option] + 1 }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((100 * this.state.good) / this.countTotalFeedback());
  };

  render() {
    return (
      <div className="Feedback">
        <h2>Please leave feedback</h2>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleLeaveFeedback}
        />
        <h2>Statistics</h2>
        <div className="Statistics__list">
          <p className="Statistics__item">Good: {this.state.good}</p>
          <p className="Statistics__item">Neutral: {this.state.neutral}</p>
          <p className="Statistics__item">Bad: {this.state.bad}</p>
          <p className="Statistics__item">Total: {this.countTotalFeedback()}</p>
          <p className="Statistics__item">
            Positive feedback: {this.countPositiveFeedbackPercentage()}%
          </p>
        </div>
      </div>
    );
  }
}

export default App;

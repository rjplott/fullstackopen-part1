import React, { useState } from "react";
import ReactDOM from "react-dom";

const Feedback = ({ setGoodStat, setBadStat, setNeutralStat }) => (
  <div>
    <h2>Give Feedback</h2>
    <Button text="good" handleClick={setGoodStat} />
    <Button text="neutral" handleClick={setNeutralStat} />
    <Button text="bad" handleClick={setBadStat} />
  </div>
);

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Statistics = ({ goodStat, neutralStat, badStat }) => {
  const sum = goodStat + neutralStat + badStat;

  const calculateAverage = (good, bad, sum) => {
    return (good - bad) / sum;
  };

  const calculatePercentGood = (good, sum) => {
    return (good / sum) * 100;
  };

  if (sum === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Statistics</h2>
      <Statistic stat={goodStat} text="good" />
      <Statistic stat={neutralStat} text="neutral" />
      <Statistic stat={badStat} text="bad" />
      <Statistic
        stat={calculateAverage(goodStat, badStat, sum)}
        text="average"
      />
      <Statistic
        stat={calculatePercentGood(goodStat, sum) + "%"}
        text="positive"
      />
    </div>
  );
};

const Statistic = (props) => (
  <p>
    {props.text} {props.stat}
  </p>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setGoodStat = () => setGood(good + 1);
  const setNeutralStat = () => setNeutral(neutral + 1);
  const setBadStat = () => setBad(bad + 1);

  return (
    <div>
      <Feedback
        setGoodStat={setGoodStat}
        setBadStat={setBadStat}
        setNeutralStat={setNeutralStat}
      />
      <Statistics goodStat={good} neutralStat={neutral} badStat={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

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
  return (
    <div>
      <h2>Statistics</h2>
      <IndividualStat stat={goodStat} text="good" />
      <IndividualStat stat={neutralStat} text="neutral" />
      <IndividualStat stat={badStat} text="bad" />
    </div>
  );
};

const IndividualStat = (props) => (
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

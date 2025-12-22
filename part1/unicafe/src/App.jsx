import { useState } from 'react'

const Display = ({ heading }) => { return (<h1>{heading}</h1>) }
const Button = ({ onClick, text }) => {
  return (<button onClick={onClick}>{text}</button>)
}
const StatisticLine = ({ text, value }) => {
  return (
    <div>
      <span>{text} {value}</span>
      <br />
    </div>
  )
}

const Statistics = ({ good, neutral, bad, total, score }) => {
  if (total > 0) {
    return (
      <div>
        <StatisticLine text={'good'} value={good} />
        <StatisticLine text={'neutral'} value={neutral} />
        <StatisticLine text={'bad'} value={bad} />
        <StatisticLine text={'all'} value={total} />
        <StatisticLine text={'average'} value={total > 0 ? score / total : 0} />
        <StatisticLine text={'positive'} value={total > 0 ? (good / total) * 100 + ' %' : '0 %'} />
      </div>
    )
  }

  return (<div>No feedback given</div>)
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [score, setScore] = useState(0)

  const handleGoodFeedback = () => {
    setScore(score + 1)
    setGood(good + 1)
    setTotal(total + 1)
  }

  const handleNeutralFeedback = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }

  const handleBadFeedback = () => {
    setScore(score - 1)
    setBad(bad + 1)
    setTotal(total + 1)
  }

  return (
    <div>
      <Display heading="give feedback" />
      <Button onClick={handleGoodFeedback} text={'good'} />
      <Button onClick={handleNeutralFeedback} text={'neutral'} />
      <Button onClick={handleBadFeedback} text={'bad'} />

      <Display heading="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} total={total} score={score} />
    </div>
  )
}

export default App
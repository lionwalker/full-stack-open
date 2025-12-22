import { useState } from 'react'

const Display = ({ heading }) => { return (<h1>{heading}</h1>) }
const Button = ({ onClick, text }) => {
  return (<button onClick={onClick}>{text}</button>)
}
const Span = ({ category, value }) => {
  return (
    <div>
      <span>{category} {value}</span>
      <br />
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodFeedback = () => {
    setGood(good + 1)
  }

  const handleNeutralFeedback = () => {
    setNeutral(neutral + 1)
  }

  const handleBadFeedback = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Display heading="give feedback" />
      <Button onClick={handleGoodFeedback} text={'good'} />
      <Button onClick={handleNeutralFeedback} text={'neutral'} />
      <Button onClick={handleBadFeedback} text={'bad'} />

      <Display heading="statistics" />
      <Span category={'good'} value={good} />
      <Span category={'neutral'} value={neutral} />
      <Span category={'bad'} value={bad} />
    </div>
  )
}

export default App
import { useState } from 'react'

const Heading = ({ text }) => {
  return (<h1>{text}</h1>)
}
const Button = ({ onClick, text }) => {
  return (<button onClick={onClick}>{text}</button>)
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(
    Array(anecdotes.length).fill(0)
  )
  const [mostPopular, setMostPopular] = useState(0)

  const getNextAnecdote = () => {
    const next = Math.floor(Math.random() * anecdotes.length)
    setSelected(next)
  }

  const incrementVote = (anecdote) => {
    const copy = [...votes]
    copy[anecdote] += 1
    setVotes(copy)
    setMostPopular(indexOfMaxVotes(copy))
  }

  const indexOfMaxVotes = (votes) => { return votes.indexOf(Math.max(...votes)) }

  return (
    <div>
      <Heading text={'Anecdote of the day'} />
      {anecdotes[selected]}<br />
      <p>has {votes[selected]} votes</p><br />
      <Button onClick={() => incrementVote(selected)} text={'vote'} />
      <Button onClick={getNextAnecdote} text={'next anecdote'} />

      <Heading text={'Anecdote with most votes'} />
      <p>{anecdotes[mostPopular]}</p>
      <p>has {votes[mostPopular]} votes</p>

    </div>
  )
}

export default App
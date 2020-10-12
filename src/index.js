import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(Array(6).fill(0))

  const setRandom = () => setSelected(Math.floor(Math.random() * anecdotes.length))

  const increaseVote = (selected) => {
    const copy = [...vote]
    copy[selected] += 1
    setVote(copy)
  }
  
    return (
      <>
        <div>
          <Show selected={selected} vote={vote} />
          <Button handleClick={() => increaseVote(selected)} text='Vote!'/>
          <Button handleClick={() => setRandom()} text='Next anecdote'/>
          <MostVotes vote={vote}/>
        </div>
      </>
    )
}

const Show = ({selected, vote}) => {
  return(
    <>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {vote[selected]} votes</p>
    </>
  )
}
const Button = ({handleClick, text}) => {
  return(
    <button onClick={handleClick}>{text}</button>
  )
}
const MostVotes = (props) => {
  const indexOfHighest = props.vote.indexOf(Math.max(...props.vote))
  return (
    <>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[indexOfHighest]}</p>
      <p>has {props.vote[indexOfHighest]} votes</p>
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
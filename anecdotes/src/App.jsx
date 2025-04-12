import { useState } from "react"

const App = () => {
    const anecdotes = [
        "If it hurts, do it more often.",
        "Adding manpower to a late software project makes it later!",
        "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        "Premature optimization is the root of all evil.",
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
        "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
        "The only way to go fast, is to go well.",
    ]

    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
    const [mostVotedIndex, setMostVotedIndex] = useState(null)

    const handleVote = () => {
        const newVotes = [...votes]
        newVotes[selected] += 1
        setVotes(newVotes)

        const maxVotes = Math.max(...newVotes)
        const indexOfMaxVotes = newVotes.indexOf(maxVotes)
        setMostVotedIndex(indexOfMaxVotes)
    }

    return (
        <>
            <h2>Anecdote of the Day / Random Anecdote</h2>
            <div>{anecdotes[selected]}</div>
            <div>has {votes[selected]} votes</div>
            <br/>

            <button
                onClick={handleVote}
            >
                vote for this anecdote
            </button>
            
            <button
                onClick={() => {
                    const random = Math.floor(Math.random() * anecdotes.length)
                    setSelected(random)
                }}
            >
                random anecdote
            </button>
            

            <h2>Anecdote with most votes</h2>
            <div>
                {mostVotedIndex !== null
                    ? `${anecdotes[mostVotedIndex]} (votes: ${votes[mostVotedIndex]})`
                    : "No votes yet"}
            </div>

            <h2>All anecdotes</h2>
            <ul>
                {anecdotes.map((anecdote, index) => (
                    <li key={index}>
                        {anecdote} {<br/>} ({votes[index]} votes)
                    </li>
                ))}
            </ul>
        </>
    )
}

export default App

import { useState } from "react"
import Statistics from "./components/Statistics"
import Feedback from "./components/Feedback"

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

 

    return (
        <>
            <Feedback
                setGood={setGood}
                setNeutral={setNeutral}
                setBad={setBad}
            />
            <Statistics good={good} neutral={neutral} bad={bad} />
        </>
    )
}

export default App

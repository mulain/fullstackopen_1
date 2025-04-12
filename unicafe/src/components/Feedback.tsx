import React from "react"

interface ButtonProps {
    handleClick: () => void
    text: string
}

function Button({ handleClick, text }: ButtonProps) {
    return <button onClick={handleClick}>{text}</button>
}

interface FeedbackProps {
    setGood: React.Dispatch<React.SetStateAction<number>>
    setNeutral: React.Dispatch<React.SetStateAction<number>>
    setBad: React.Dispatch<React.SetStateAction<number>>
}

function Feedback({ setGood, setNeutral, setBad }: FeedbackProps) {
    function resetAll() {
        setGood(0)
        setNeutral(0)
        setBad(0)
    }

    return (
        <>
            <h1>give feedback</h1>
            <Button handleClick={()=> setGood(prev => prev + 1)} text="good" />
            <Button handleClick={() => setNeutral(prev => prev + 1)} text="neutral" />
            <Button handleClick={() => setBad(prev => prev + 1)} text="bad" />
            <Button handleClick={resetAll} text="reset" />
        </>
    )
}

export default Feedback

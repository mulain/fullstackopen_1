import React from "react"

interface StatisticsLineProps {
    text: string
    value: number | string
}

function StatisticsLine({ text, value }: StatisticsLineProps) {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}

interface StatisticsProps {
    good: number
    neutral: number
    bad: number
}

function Statistics({ good, neutral, bad }: StatisticsProps) {
    const total = good + neutral + bad
    const average = (good - bad) / total || 0
    const positivePercentage = (good / total) * 100 || 0

    return (
        <>
            <h1>statistics</h1>
            {total === 0 ? (
                <p>No feedback given</p>
            ) : (
                <table>
                    <tbody>
                        <StatisticsLine text="good" value={good} />
                        <StatisticsLine text="neutral" value={neutral} />
                        <StatisticsLine text="bad" value={bad} />
                        <StatisticsLine text="all" value={total} />
                        <StatisticsLine text="average" value={average.toFixed(2)} />
                        <StatisticsLine
                            text="positive"
                            value={`${positivePercentage.toFixed(2)}%`}
                        />
                    </tbody>
                </table>
            )}
        </>
    )
}

export default Statistics

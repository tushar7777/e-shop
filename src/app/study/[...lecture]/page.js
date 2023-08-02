"use client"
export default function Lecture({ params }) {
    console.log(params)
    return (
        <>
            <h1>Day of Lecture: {params.lecture[0]}</h1>
            <h3>No. of Lecture: {params.lecture[1]}</h3>
        </>
    )
}
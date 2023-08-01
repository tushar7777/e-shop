"use client"

const student = ({ params }) => {
    console.log(params)
    return (
        <>
            <h1>Student Details</h1>
            <p>
                <b>Name:</b> {params.student}
            </p>
        </>
    )
}
export default student
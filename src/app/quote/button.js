"use client"

export default function Button({ author }) {
    const btnClick = (name) => {
        alert(name)
    }
    return (
        <>
            <button onClick={() => btnClick(author)}>Author Name</button>
        </>
    )
}
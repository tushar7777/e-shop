"use client"

export default function Button({ className,author }) {
    const btnClick = (name) => {
        alert(name)
    }
    return (
        <>
            <button className={className} onClick={() => btnClick(author)}>Author Name</button>
        </>
    )
}
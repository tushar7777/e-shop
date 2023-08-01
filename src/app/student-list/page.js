import Link from "next/link"

const studentList = () => {
    const studentArr = [
        { name: "Sam" },
        { name: "Pete" },
        { name: "Bill" }
    ]
    return (
        <>
            <h1>Student List</h1>
            <ul>
                {
                    studentArr.map((stud) => {
                        return (
                            <li>
                                <Link href={`/student-list/${stud.name}`}>{stud.name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}
export default studentList
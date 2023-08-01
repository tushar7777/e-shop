"use client"
import Link from 'next/link'
import { useRouter } from "next/navigation"

export default function LoginTeacher() {
    const router = useRouter()
    return (
        <div>
            <h1>Login Teacher Page</h1>
            <Link href="/">Homepage</Link>
            <br />
            <button onClick={() => router.back()}> {"<"} Go Back </button>
        </div>
    )
}

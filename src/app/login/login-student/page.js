"use client"
import Link from 'next/link'
import { useRouter } from "next/navigation"

export default function LoginStudent() {
    const router = useRouter()
    return (
        <div>
            <h1>Login Student Page</h1>
            <Link href="/">Homepage</Link>
            <br />
            <button onClick={() => router.back()}> {"<"} Go Back</button>
        </div>
    )
}

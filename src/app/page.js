"use client"
import Link from 'next/link'
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  const navigate = (name) => {
    router.push(name)
  }
  return (
    <main>
      <h1>Home Page</h1>
      <Link href="/login">Login Page</Link>
      <br />
      <Link href="/about">About Page</Link>
      <br />
      <Link href="/about/about-us">About Us Page</Link>
      <br />
      <button onClick={() => navigate("/login")}>Go to Login</button>
      <button onClick={() => navigate("/about")}>Go to About</button>
      <button onClick={() => navigate("/about/about-us")}>Go to About Us</button>
    </main>
  )
}

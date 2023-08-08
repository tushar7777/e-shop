"use client"
import Link from 'next/link'
import { useRouter } from "next/navigation"
import "./homepage.css"

export default function Home() {
  const router = useRouter()
  const navigate = (name) => {
    router.push(name)
  }
  const pathArr = [
    "about",
    "carts",
    "login",
    "product",
    "quote",
    "student-list",
    "study",
    "users"
  ]
  
  return (
    <main>
      <h1>Home Page</h1>
      <div className='homepage-navigation'>
        <ol>
          {pathArr.map(path => {
            const url = "/" + path
            return <li><Link href={url}>{path} Page</Link></li>
          })}
        </ol>
      </div>
      <button onClick={() => navigate("/login")}>Go to Login</button>
      <button onClick={() => navigate("/about")}>Go to About</button>
    </main>
  )
}

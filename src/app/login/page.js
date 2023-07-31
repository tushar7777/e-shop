import Link from 'next/link'

export default function Login() {
  return (
    <div>
        <h1>Login Page</h1>
        <Link href="/login/login-teacher">Login Teacher</Link>
        <Link href="/login/login-student">Login Student</Link>
        <Link href="/">Homepage</Link>
    </div>
  )
}

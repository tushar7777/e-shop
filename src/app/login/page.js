import Link from 'next/link'

export default function Login() {
  return (
    <div>
      <h1 className="heading">Login Page</h1>
      <Link href="/login/login-teacher">Login Teacher</Link>
      <br />
      <Link href="/login/login-student">Login Student</Link>
      <br />
      <Link href="/">Homepage</Link>
    </div>
  )
}

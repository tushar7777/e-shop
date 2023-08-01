import Link from "next/link"
import './login.css'
export default function Layout({ children }) {
    return (
        <div>
            <ul className="menu-login">
                <li>
                    <h4>Login Menu</h4>
                </li>
                <li>
                    <Link href="/login">Login Main</Link>
                </li>
                <li>
                    <Link href="/login/login-teacher">Login Teacher</Link>
                </li>
                <li>
                    <Link href="/login/login-student">Login Student</Link>
                </li>
            </ul>
            {children}
        </div>
    )
}
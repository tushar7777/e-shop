"use client"
import Link from "next/link"
import './login.css'
import { usePathname } from "next/navigation"

export default function Layout({ children }) {
    const pathName = usePathname()
    return (
        <div>
            {
                pathName !== "/login/login-teacher"
                    ?
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
                    : ""
            }
            {children}
        </div>
    )
}
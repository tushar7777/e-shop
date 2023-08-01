import Link from "next/link"
import './about.css'

export default function Layout({ children }) {
    return (
        <div>
            <ul className="menu-about">
                <li>
                    <h4>About Menu</h4>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/about/about-us">About us</Link>
                </li>
                <li>
                    <Link href="/about/team">Team</Link>
                </li>
            </ul>
            {children}
        </div>
    )
}
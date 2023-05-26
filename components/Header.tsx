import Link from "next/link";

export default function Header() {
    return (
        <header>
            <nav>
                <h1>new education</h1>
                <ul>
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/courses'}>Courses</Link></li>
                    <li><Link href={'/courses'}>Profile</Link></li>
                    <li><Link href={'/courses'}>Settings</Link></li>
                    <li><Link href={'/login'}>Login</Link></li>
                </ul>
            </nav>
        </header>
    )
}
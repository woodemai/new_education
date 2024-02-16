"use client";
import Link from "next/link";
import { links } from "./links";
import AuthButton from "./AuthButton";


interface Props {
    show: boolean,
    setShow: (show: boolean) => void
}

const VerticalNavigation = ({ show, setShow }: Props) => {

    const handleCloseNavbar = () => {
        setShow(false)
    }

    if (show) {
        return (
            <nav className="verticalNav">
                <ul>
                    {links.map(link => <li key={link.href}><Link onClick={handleCloseNavbar} href={link.href}>{link.label}</Link></li>)}
                    <AuthButton />
                </ul>
            </nav>
        );
    }
    return null;
}
export default VerticalNavigation;
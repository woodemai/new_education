import Link from "next/link";
import Image from "next/image";
import AuthButton from "./AuthButton";
import burgerMenu from '@/public/burger-menu.svg'

interface Props {
    handleShowNavbar: () => void,
    home: string,
    courses: string,
    reviews: string,
    profile: string,
    login: string,
    logout: string
}

const HorizontalNavigation = ({
    handleShowNavbar,
    home,
    courses,
    reviews,
    profile,
    login,
    logout
}: Props) => {

    return (
        <div className="horizontal-nav">
            <h1>new education</h1>
            <button className='menu' onClick={handleShowNavbar}>
                <Image src={burgerMenu} alt="burger-menu-icon" width={30} height={30} />
            </button>
            <nav className='horizontalNav'>
                <ul>
                    <li><Link href={'/'}>{home}</Link></li>
                    <li><Link href={'/courses'}>{courses}</Link></li>
                    <li><Link href={'/reviews'}>{reviews}</Link></li>
                    <li><Link href={'/profile'}>{profile}</Link></li>
                    <AuthButton login={login} logout={logout} />
                </ul>
            </nav>
        </div>
    )
}

export default HorizontalNavigation;
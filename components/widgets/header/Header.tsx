'use client'

import { memo, useState } from "react";
import VerticalNavigation from "./VerticalNavigation";
import HorizontalNavigation from "./HorizontalNavigation";

interface Props {
    home: string,
    courses: string,
    reviews: string,
    profile: string,
    settings: string,
    login: string,
    logout: string,
}

const Header = memo(function Header(dictionary: Props) {

    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => setShowNavbar(!showNavbar)

    return (
        <header>
            <HorizontalNavigation {...dictionary} handleShowNavbar={handleShowNavbar} />
            <VerticalNavigation setShow={setShowNavbar} show={showNavbar} />
        </header>
    );
})

export default Header;
// Composant principale qui regroupe
// tous les sous composants du header
import React from "react";

import Logo from "./Logo";
import NavMenu from "./NavMenu";
import UserMenu from "./UserMenu";

const Header = ({ isAuth }) => {
    return (
        <header className="sticky top-0 w-full flex justify-between items-center p-4 bg-gray-100 shadow-md z-50">
            <Logo />
            <NavMenu />
            <UserMenu isAuth={isAuth} />
        </header>
    );
};

export default Header;
import Navigation from "./navigation/Navigation";
import Logo from "./logo/Logo";

import './header.scss';

function Header() {
    
    return (
        <header>
            <Logo/>
            <Navigation/>
        </header>
    )
}

export default Header;
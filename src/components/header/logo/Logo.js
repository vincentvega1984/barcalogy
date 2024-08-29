import { Link } from "react-router-dom"
import {ReactComponent as HeaderLogo} from "./../../../images/logo.svg"

import "./logo.scss"

function Logo() {

    return (
        <Link className="header-logo" to="/">
            <HeaderLogo/>
            <h2>FC Barcelona</h2>
        </Link>
    )
}

export default Logo
import { NavLink } from "react-router-dom"

import "./navigation.scss"

function Navigation() {

    const navigationArr = ['Home', 'Matches', 'News', 'Table', 'Team']

    const navigation = navigationArr.map(function (item, index) {
        const crumb = item.toLowerCase()
        return (
            <li key={index}>
                <NavLink to={item !== 'Home' ? `/${crumb}` : '/'}>{item}</NavLink>
            </li>
        )
    })

    return (
        <ul className="header-navigation">
            {navigation}
        </ul>
    )
}

export default Navigation
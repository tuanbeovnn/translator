import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import routes from './../../routes';


const menus = [
    {
        name: 'Home',
        to: '/',
        exact: true
    },
    {
        name: 'Translation',
        to: '/translate',
        exact: false
    },
    {
        name: 'About',
        to: '/about',
        exact: false
    }
]
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to} exact={activeOnlyWhenExact} children={(match) => {
                var active = match ? 'active' : '';
                return (
                    <li className={match ? 'active' : ''}>
                        <Link className="nav-link" to={to}>{label}</Link>
                    </li>
                )
            }}
        />
    )
}
class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <ul className="navbar-nav">
                        {this.showMenu(menus)}
                    </ul>
                </nav>
            </div>

        );
    }
    showMenu = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink key={index} label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact} />
                );

            });
        }
        return result;
    }
}

export default Header;

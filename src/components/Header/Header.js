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
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <ul className="navbar-nav">
                        {this.showMenu(menus)}
                    </ul>
                </nav>
                {/* <Switch>
                    {this.showContentMenu(routes)}
                </Switch> */}
            </div>

        );
    }

    // showContentMenu = (routes) => {
    //     var result = null;
    //     if (routes.length > 0) {
    //         result = routes.map((route, index) => {
    //             return (
    //                 <Route
    //                     key={index}
    //                     path={route.path}
    //                     exact={route.exact}
    //                     component={route.main}

    //                 />
    //             )
    //         });
    //     }
    //     return result;
    // }

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

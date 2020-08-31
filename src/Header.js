import React, {Component} from 'react';
import './App.css';
import {Link, NavLink} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <nav>
                <div className="nav-content-wrapper">
                    <Link to="/" style={{textDecoration: 'none'}}>
                        <h3>4litre</h3>
                    </Link>
                    <ul className="nav-links">
                        <NavLink to="/listen" activeClassName="active-link" style={{textDecoration: 'none'}}>
                            <li>listen</li>
                        </NavLink>
                        <NavLink to="/wear" activeClassName="active-link" style={{textDecoration: 'none'}}>
                            <li>wear</li>
                        </NavLink>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;
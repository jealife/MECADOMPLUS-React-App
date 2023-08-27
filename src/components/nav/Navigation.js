import React, { Component } from "react";
import "./nav.css";
import { NavLink, Router } from "react-router-dom";
import logo from '../../assets/images/Logotype_Mecadom.png'
import 'boxicons'


export default class Navigation extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <header>
                <nav>
                    <NavLink to="/" className="logo">
                        <img src={logo} alt=" Logo MECADOM" />
                    </NavLink>

                    <button onClick={this.handleClick} id="hamburger_menu" className="button_menu">
                        <box-icon name={this.state.clicked ? "x" : "menu"}></box-icon>
                    </button>
                    <div className={this.state.clicked ? "menu menu_mobile": "menu "}>
                        <div className="links-menu">
                            <NavLink to="/" className="NavLink-menu">Accueil</NavLink>
                            <NavLink to="admin" className="NavLink-menu">Admin</NavLink>
                        </div>

                        <div className="nav-btn">
                            <NavLink to="#" className="login">Se connecter</NavLink>
                            <NavLink to="#" className="register hidden">Profile</NavLink>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}
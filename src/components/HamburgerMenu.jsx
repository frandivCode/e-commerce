import React, { useState } from "react";
import "../stylesheets/HamburgerMenu.css";
import "../stylesheets/Mediaqueries.css";
import { Link } from "react-router-dom";


const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="hamburger-menu">
            <ion-icon className={`hamburger-icon ${isOpen ? "open" : ""}`} onClick={toggleMenu} name="menu-outline"></ion-icon>
            <nav className={`menu ${isOpen ? "open" : ""}`}>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="category/bebidas">Bebidas</Link>
                    </li>
                    <li>
                        <Link to="category/cocteleria">Cocteleria</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default HamburgerMenu;

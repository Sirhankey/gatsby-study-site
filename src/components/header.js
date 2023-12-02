import React, { useState } from "react";
import logo from "../images/pato-logo.png";
import { Link } from "gatsby";

// Subcomponente para o botão de colapso
const CollapseButton = ({ menuOpen, handleToggleMenu }) => (
    <button
        type="button"
        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="mobile-menu-2"
        aria-expanded={menuOpen}
        onClick={handleToggleMenu}
    >
        <span className="sr-only">Open main menu</span>
        <svg
            className={`w-6 h-6 ${menuOpen ? 'hidden' : ''}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
        </svg>
        <svg
            className={`w-6 h-6 ${menuOpen ? '' : 'hidden'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </button>
);

// Subcomponente para a lista de itens de menu
const MenuList = ({ menuItems }) => (
    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
        {menuItems.map((item, index) => (
            <li key={index}>
                {/* Utilize o componente Link para criar links internos */}
                <Link
                    to={item.href}
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                    {item.label}
                </Link>
            </li>
        ))}
    </ul>
);
const Header = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const menuItems = [
        { label: 'Home', href: '/' },
        { label: 'Add post', href: '/posts' },
        { label: 'Contact', href: '/contact' }
    ];

    return (
        <header>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="/" className="flex items-center">
                        <img src={logo} className="rounded-full mr-3 h-6 sm:h-9" alt="logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{props.title}</span>
                    </a>
                    <div className="flex items-center lg:order-2">
                        <CollapseButton menuOpen={menuOpen} handleToggleMenu={handleToggleMenu} />
                    </div>
                    <div className={`${menuOpen ? 'block' : 'hidden'} justify-between items-center w-full lg:flex lg:w-auto lg:order-1`} id="mobile-menu-2">
                        <MenuList menuItems={menuItems} />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;

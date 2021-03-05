import React from 'react';
import SearchBar from './SearchBar';
import hamburgerMenu from '../img/hamburger-menu-01.svg';

const Nav = (props) => {
    return (
        <nav>
            <h1><a href={'/'}>The Movie Search Engine</a></h1>
            <ul>
                <li className={'large'}>
                    <SearchBar
                        handleSubmit={props.handleSubmit}
                        handleChange={props.handleChange}
                    />
                </li>

                <li className={'large'}>
                    <a href={'#'}>Account</a>
                </li>

                <li className={'icon'}>
                    <a href={'#'}>
                        <img src={hamburgerMenu} alt={'menu'}/>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
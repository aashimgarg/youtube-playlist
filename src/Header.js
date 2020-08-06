import React from 'react';
import './Header.css'

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

import {Link}  from "react-router-dom";

const Header = () => {
    const [input, setInput] = React.useState('');
    return (
        <div className='header'>
            <div className='header__left'>
                <MenuIcon />
                <Link to="/">
                  <img
                    className="header__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" />
                </Link>
            </div>
            <div className='header__input'>
                <input onChange={e => setInput(e.target.value)} placeholder="Search" type="text" />
                <Link to = {'/search/'+ input}>
                    <SearchIcon className='header__inputButton' />
                </Link>
            </div>
            <div className='header__icons'>
                <VideoCallIcon className='header__icon' />
                <AppsIcon className='header__icon' />
                <NotificationsIcon className='header__icon' />
                <Avatar
                    alt=" Aashim Garg"
                    src=" https://images.unsplash.com/photo-1542044896530-05d85be9b11a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                />
            </div>
        </div>
    )
}

export default Header;
import React from 'react'
import './Header.css'
import { Avatar } from '@material-ui/core'
import { useStateValue } from './StateProvider';

function Header() {
    const [{ user }, dispatch] = useStateValue()

    return (
        <div className="header">
            <div className="header__left">
                <img src="https://i.ibb.co/5hW7F8m/icon.png" alt="logo" />
                <div className="header__option">
                    Home
                </div>
            </div>
            <div className="header__center">
                <div className='header_center_text'>
                    <h1>TwiGram</h1>
                </div>
            </div>
            <div className="header__right">
                <div class="header__info">
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4>
                </div>
            </div>

        </div>
    )
}

export default Header
import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import { useStateValue } from './StateProvider';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import GitHubIcon from '@mui/icons-material/GitHub';

function Sidebar() {
    const [{ user }, dispatch] = useStateValue()

    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName} />
            <SidebarRow Icon={GitHubIcon} title='About TwiGram' link="https://github.com/AnushDubey/twigram"/>
            <SidebarRow Icon={ExploreIcon} title='Explore' />
            <SidebarRow Icon={NotificationsActiveIcon} title='Notifications' />
            <SidebarRow Icon={EmojiFlagsIcon} title='Pages' />
            <SidebarRow Icon={PeopleIcon} title='Friends' />
            <SidebarRow Icon={ChatIcon} title='Messenger' />

            <footer className='footer'>&copy; Developed by Anush Dubey</footer>
        </div>
        
    )
}

export default Sidebar

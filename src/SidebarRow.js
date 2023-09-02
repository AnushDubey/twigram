import React from 'react'
import './SidebarRow.css'
import { Avatar } from '@material-ui/core'

function SidebarRow({ src, Icon, title,link }) {
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src} />}
            {Icon && <Icon color="primary"/>}

            
            <a href= {link}  ><h4>{title}</h4></a>
        </div>
    )
}

export default SidebarRow

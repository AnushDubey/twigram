import React from 'react'
import Story from './Story'
import './StoryReel.css'

function StoryReel() {
    return (
        <div className="storyReel">
            {/* Story */}
            <Story image="	https://i.pinimg.com/236x/74/c0/6d/74c06dd03468d7a3aba5a0ee63bc3553.jpg" 
            profileSrc="https://media.licdn.com/dms/image/D4D03AQHtZj7-SlRX6g/profile-displayphoto-shrink_800_800/0/1690435740324?e=2147483647&v=beta&t=lt7JpKBGVbILdxKh2RK0A07gCmW_RGpnGYwmQ8d9rS8" 
            title="Anush Dubey" />

            <Story image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc8pMteikoYJAkVuXKSwXooC9TtjQZQL0THw&usqp=CAU" 
            profileSrc="https://images.mubicdn.net/images/cast_member/2184/cache-2992-1547409411/image-w856.jpg" 
            title="Tom Cruise" />

            <Story image="https://c.ndtvimg.com/2023-07/egstk8uo_chandrayaan3_625x300_15_July_23.jpg" 
            profileSrc="https://www.pngitem.com/pimgs/m/107-1075224_high-resolution-isro-logo-hd-png-download.png" 
            title="ISRO" />

            <Story image="https://staticg.sportskeeda.com/editor/2022/10/df09e-16665299188662-1920.jpg" 
            profileSrc="https://i.pinimg.com/564x/b3/2b/3d/b32b3d9b097426cf427cbc057dc022a7.jpg"
            title="Virat Kohli" />

            <Story image="https://corizo.in/wp-content/uploads/2022/10/web-development-program-770x400.png" 
            profileSrc="https://images.yourstory.com/cs/images/companies/16372421201941-1666695288532.jpg?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff" 
            title="Corizo" />
        </div>
    )
}

export default StoryReel
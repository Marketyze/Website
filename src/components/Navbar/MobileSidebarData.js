import React from 'react'
import * as RiIcons from "react-icons/ri"


export const SidebarData = [
    {
        title: 'About Us',
        path: '/aboutUs',
    },
    {
        
        title: 'Events',
        path: '/mainEvents',
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title: 'PITCH IT', 
                path: '/subEvents/latestEvent',
            }
        ],
    },
    { 
        title: 'Career/Contact',
        path: '/career',

    }

]

export default SidebarData

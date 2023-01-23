import React, {useState} from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import {colors} from '../globals/colors'

const MobileSidebar = ({item}) => {
    //states to check subNavbar

    const [subnav, setSubnav] = useState(false)

    const showSubnav = () => setSubnav(!subnav)


    return (
    <>
        <SidebarLink onClick = {item.subNav && showSubnav}>
            <div>
            <SidebarLabel to={item.path}>{item.title}</SidebarLabel>
            </div>
            <div style={{position: 'relative', left: '4rem'}}>
                {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed: null }
            </div>
        </SidebarLink>
        {subnav && item.subNav.map((item, index) => {
            return (
                <DropdownLink key={index}>
                    <SidebarLabel style ={{color: `${colors.darkTeal}`}}to={item.path}>{item.title}</SidebarLabel>
                </DropdownLink>
            )
        })}   
    </>
)}


export default MobileSidebar 

const SidebarLink = styled.div`
display: none;

@media screen and (max-width: 960px) {
    display: flex; 
    color: ${colors.primaryTeal};
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    justify-content: space-between;
    align-items: center;
    padding: 50px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 1.5rem;
}
`

const SidebarLabel = styled(Link)`
    margin-left: 16px;
    z-index: 10;
    text-decoration: none;
    color: ${colors.primaryTeal};

    &:hover {
        cursor: pointer;
        color: ${colors.lightTeal};
    }
`

const DropdownLink = styled.div`
    background: #fcfcfc;
    height: 60px;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    color: ${colors.darkTeal};
    font-size: 1.5rem;

    &:hover {
        cursor: pointer;
        color: ${colors.lightTeal};
    }

`


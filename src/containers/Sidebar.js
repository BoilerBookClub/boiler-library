import React, { useState }from 'react'
import Image from 'react-bootstrap/Image'
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

import { IoLogOutOutline } from 'react-icons/io5'
import { BiBookAlt, BiBookOpen, BiHomeAlt, BiPlusCircle } from 'react-icons/bi'
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import logo from '../assets/logo.png'


export default function Sidebar({ logout, toggled, handleToggleSidebar }) {
    const [collapsed, setCollapsed] = useState(true)

    const iconClick = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div id="sidebar">
            <ProSidebar collapsed={collapsed} breakPoint="md" toggled={toggled} onToggle={handleToggleSidebar}>
                <SidebarHeader>
                    <div className="image-container">
                        <a href="https://boilerbookclub.com" target="_blank" rel="noreferrer">
                            <Image src={logo} width={30} style={{ alignSelf: 'center' }}/>
                        </a>
                    </div>
                </SidebarHeader>
                <div className="closemenu" onClick={iconClick}> 
                    {collapsed ? ( <FiArrowRightCircle/>) : ( <FiArrowLeftCircle/>)}
                </div>
                <SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem icon={<BiHomeAlt/>}>Home<Link to="/library"/></MenuItem> 
                        <MenuItem icon={<BiBookAlt/>}>Library<Link to="/library/books"/></MenuItem> 
                        <MenuItem icon={<BiBookOpen/>}>Your Books<Link to="/library/borrowed"/></MenuItem> 
                    </Menu>
                </SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem icon={<BiPlusCircle/>}>Donate a Book</MenuItem> 
                    </Menu>
                <SidebarFooter>
                    <Menu iconShape="circle">
                        <MenuItem icon={<IoLogOutOutline/>} onClick={logout}>Logout</MenuItem> 
                    </Menu>
                </SidebarFooter>
            </ProSidebar>
        </div>
    )
}
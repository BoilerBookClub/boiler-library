import React, { useState }from 'react'
import Image from 'react-bootstrap/Image'
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

import { IoInformationCircleOutline, IoLogOutOutline } from 'react-icons/io5'
import { BiBookAlt, BiBookOpen } from 'react-icons/bi'
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import logo from '../assets/logo.png'


export default function Sidebar({ logout }) {
    const [collapsed, setCollapsed] = useState(true)

    const iconClick = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div id="sidebar">
            <ProSidebar collapsed={collapsed} breakPoint="md">
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
                        <MenuItem icon={<IoInformationCircleOutline/>}>Information<Link to="/library"/></MenuItem> 
                        <MenuItem icon={<BiBookAlt/>}>Library<Link to="/library/books"/></MenuItem> 
                        <MenuItem icon={<BiBookOpen/>}>Your Books<Link to="/library/borrowed"/></MenuItem> 
                    </Menu>
                </SidebarContent>
                <SidebarFooter>
                    <Menu iconShape="circle">
                        <MenuItem icon={<IoLogOutOutline/>} onClick={logout}>Logout</MenuItem> 
                    </Menu>
                </SidebarFooter>
            </ProSidebar>
        </div>
    )
}
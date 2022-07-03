import React, { useState }from 'react'
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

export default function Sidebar({ logout }) {
    const [collapsed, setCollapsed] = useState(false)

    return (
        <div>
            <h1>Sidebar</h1>
            <ProSidebar collapsed={collapsed} breakPoint="md">

            </ProSidebar>
        </div>
    )
}
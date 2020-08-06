import React from 'react';
import './Sidebar.css'
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import HomeIcon from '@material-ui/icons/Home';

import SidebarRow from './SidebarRow'


const Sidebar =() => {
    return (
        <div className="sidebar">
           <SidebarRow Icon={WhatshotIcon} title="Home" />
           <SidebarRow Icon={SubscriptionsIcon} title="Trending" />
           <SidebarRow Icon={HomeIcon} title="Subscriptions" />
           {/* <SidebarRow />
           <SidebarRow />
           <SidebarRow />
           <SidebarRow />
           <SidebarRow /> */}
        </div>
    )
    
}

export default Sidebar;
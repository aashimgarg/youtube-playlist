import React from 'react';
import './Sidebar.css'
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import HomeIcon from '@material-ui/icons/Home';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import SidebarRow from './SidebarRow'


const Sidebar =() => {
    return (
        <div className="sidebar">
           <SidebarRow selected Icon={WhatshotIcon} title="Home" />
           <SidebarRow Icon={SubscriptionsIcon} title="Trending" />
           <SidebarRow Icon={HomeIcon} title="Subscriptions" />
           <hr />
           <SidebarRow Icon={VideoLibraryIcon} title="Library"/>
           <SidebarRow Icon={HistoryIcon} title="History"/>
           <SidebarRow Icon={OndemandVideoIcon} title="Your Videos"/>
           <SidebarRow Icon={WatchLaterIcon} title="Watch Later"/>
           <SidebarRow Icon={ThumbUpAltIcon} title="Liked Videos"/>
           <SidebarRow Icon={ExpandMoreIcon} title="Show More"/>
           <hr />
        </div>
    )
    
}

export default Sidebar;
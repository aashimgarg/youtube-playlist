import React from 'react';
import './SearchPage.css';
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow'

const SearchPage = () => {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
              <TuneIcon />
              <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow 
              image="https://avatars2.githubusercontent.com/u/55639487?s=460&u=b0ccb2af788ee088bf7415bdf36a62c5f2d908d5&v=4"
              channel=" Aashim Garg"
              verified
              subs="250k"
              numOfvideos={250}
              description=" Hello From Youtube | This is me from New York San Franciso | Live | This is pretty real. You will get the best tech videos of the Javascript , React , Redux , Firebase here. Hope you will like it and enjoy..."
            />

           <hr />
           <div className="searchPage__latest">
              <h4>Latest from Aashim Garg</h4>
           </div>
           <VideoRow
            views="10K"
            subs="250K"
            description=" Build a Firebase gameplan app uing react redux and firebase."
            timestamp="10 minutes ago"
            channel="Aashim Garg"
            title="Lets Get Started and build a Firebase Gameplan"
            image="http://gdurl.com/tt4d" />
<VideoRow
            views="14K"
            subs="250K"
            description=" Lets build a bakery item shop using React and Redux. "
            timestamp="2 days ago"
            channel="Aashim Garg"
            title=" Bakery shop using React and Redux!"
            image="http://gdurl.com/6SbN" />

<VideoRow
            views="5K"
            subs="250K"
            description=" Authentication with Firebase is very simple."
            timestamp="1 week ago"
            channel="Aashim Garg"
            title="Lets Get Started with Firebase Auth"
            image="http://gdurl.com/LDDPu" />

<VideoRow
            views="24K"
            subs="250K"
            description=" Build amazing app with React hooks..."
            timestamp="1 month ago"
            channel="Aashim Garg"
            title="Lets Get Started with React Hooks"          
            image="http://gdurl.com/jaBC" />
            
        </div>
    )

}

export default SearchPage;
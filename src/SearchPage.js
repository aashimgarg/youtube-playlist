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
              subs="650k"
              numOfvideos={250}
              description=" Hello From Youtube | This is me from New York San Franciso | Live | This is pretty real. You will get the best tech videos of the Javascript , React , Redux , Firebase here. Hope you will like it and enjoy..."
            />

           <hr />

            <VideoRow />
        </div>
    )

}

export default SearchPage;
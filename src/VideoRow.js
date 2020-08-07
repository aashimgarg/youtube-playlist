import React from 'react';
import './VideoRow.css';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const VideoRow = ({
    views , 
    subs ,
    description ,
    timestamp ,
    channel ,
    title ,
    image
}) => {
    return (
        <div className="videoRow">
           <img src={image} />
           <div className="videoRow__text">
               <h3>{title}</h3>
               <p className="videoRow__headline">
                   {channel} &nbsp; <CheckCircleIcon className="videoRow__icon"/>   &nbsp; {subs} Subscribers {views} views  &nbsp;.   {timestamp} &nbsp; 
               </p>
               <p className="videoRow__description">
                   {description}
               </p>
           </div>
        </div>
    )

}

export default VideoRow;
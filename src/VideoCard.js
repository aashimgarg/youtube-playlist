import React from 'react';
import './VideoCard.css'
import Avatar from '@material-ui/core/Avatar';

const VideoCard = ({
    image,
    title,
    timestamp,
    channelImage,
    channel,
    views
}) => {
    return (
        <div className="videoCard">
            <img className="videoCard__thumbnail" src={image} />
            <div className="videoCard__info">
                <Avatar
                    alt=" Aashim Garg"
                    src={channelImage}
                    className="videoCard__avatar"
                />
                <div className="videoCard__text">
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>{views}&nbsp; . &nbsp;{timestamp}</p>
                </div>
            </div>
        </div>
    )

}

export default VideoCard;
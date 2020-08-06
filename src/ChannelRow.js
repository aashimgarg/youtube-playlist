import React from 'react';
import './ChannelRow.css';
import Avatar from '@material-ui/core/Avatar';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Button from '@material-ui/core/Button';
const ChannelRow = ({
    image,
    channel,
    verified,
    subs,
    numOfvideos,
    description
}) => {
    return (
        <div className="channelRow">
            <Avatar
                alt="Aashim Garg"
                src={image}
                className="channelRow__logo"
            />
            <div className="channelRow__text">
                <h4>{channel} <span>{ verified &&  <CheckCircleIcon />}</span> </h4>
                <p>
                    {subs} Subscribers . {numOfvideos} Videos
                </p>
                <p className="channelRow__description">{description}</p>
            </div>
            <div>
            <Button className="channelRow__button" variant="contained" color="secondary">
               SUBSCRIBE
            </Button>
            </div>
        </div>
    )

}

export default ChannelRow;
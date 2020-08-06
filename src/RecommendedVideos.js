import React from 'react';
import './RecommendedVideos.css'

import VideoCard from './VideoCard';
const RecommendedVideos = () => {
    return (
        <div className="recomendedVideos">
            <h2>Recomended</h2>
            <div className="recomendedVideos__videoCard">
                <VideoCard
                    title="Hello From Youtube | This is me from New York San Franciso | Live"
                    views="2.3M views"
                    timestamp="4 days ago"
                    channelImage="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                    channel="Aashim Garg"
                    image="https://static.toiimg.com/photo/72975551.cms" />

                <VideoCard
                    title="Hello From Facebook | This is me from New York San Franciso | Live"
                    views="2.4M views"
                    timestamp="4 days ago"
                    channelImage="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"                    channel="Aashim Garg"
                    image="https://cdn.eso.org/images/large/eso1322a.jpg" />

                <VideoCard
                    title="Hello From Youtube | This is me from New York San Franciso | Live"
                    views="2.3M views"
                    timestamp="4 days ago"
                    channelImage="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                    channel="Aashim Garg"
                    image="https://static.toiimg.com/photo/72975551.cms" />

                <VideoCard
                    title="Hello From Facebook | This is me from New York San Franciso | Live"
                    views="2.4M views"
                    timestamp="4 days ago"
                    channelImage="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"                    channel="Aashim Garg"
                    image="https://cdn.eso.org/images/large/eso1322a.jpg" />

                <VideoCard
                    title="Hello From Youtube | This is me from New York San Franciso | Live"
                    views="2.3M views"
                    timestamp="4 days ago"
                    channelImage="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                    channel="Aashim Garg"
                    image="https://static.toiimg.com/photo/72975551.cms" />

                <VideoCard
                    title="Hello From Facebook | This is me from New York San Franciso | Live"
                    views="2.4M views"
                    timestamp="4 days ago"
                    channelImage="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"                    channel="Aashim Garg"
                    image="https://cdn.eso.org/images/large/eso1322a.jpg" />



            </div>
        </div>
    )

}

export default RecommendedVideos;
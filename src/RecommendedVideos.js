import React from 'react';
import './RecommendedVideos.css'

import VideoCard from './VideoCard';
const RecommendedVideos = () => {
    return (
        <div className="recomendedVideos">
            <h2>Recomended</h2>
            <div className="recomendedVideos__videoCard">
                <VideoCard
                    title=" Build a Firebase gameplan app uing react redux and firebase."
                    views="2M views"
                    timestamp="4 days ago"
                    channelImage="https://avatars2.githubusercontent.com/u/55639487?s=460&u=b0ccb2af788ee088bf7415bdf36a62c5f2d908d5&v=4"
                    channel="Aashim Garg"
                    image="http://gdurl.com/6SbN"
                    />
                <VideoCard
                    title="Donald Trump | The New US President at TIMES SQUARE | Live"
                    views="2.4M views"
                    timestamp="1 month ago"
                    channelImage="https://www.hindustantimes.com/rf/image_size_1200x900/HT/p2/2020/08/06/Pictures/washington-pandemic-president-trump-holds-briefing-covid_472b5c18-d782-11ea-a06f-e722baeaa470.jpg"                    
                    channel="Donald Trump"
                    image="https://ichef.bbci.co.uk/news/1024/branded_news/67CC/production/_113827562_trumpfox.jpg" />

                <VideoCard
                    title="Live view of Sweden Mountains"
                    views="6.3M views"
                    timestamp="10 days ago"
                    channelImage="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                    channel="Mountaineering"
                    image="https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg" />

                <VideoCard
                    title="Lets Get Started with React Hooks"
                    views="24K views"
                    timestamp="1 month ago"
                    channelImage="https://avatars2.githubusercontent.com/u/55639487?s=460&u=b0ccb2af788ee088bf7415bdf36a62c5f2d908d5&v=4"
                                        channel="Aashim Garg"
                    image="http://gdurl.com/jaBC" />

                <VideoCard
                    title="Lets Get Started with Firebase Auth"
                    views="5K views"
                    timestamp="1 week ago"
                    channelImage="https://avatars2.githubusercontent.com/u/55639487?s=460&u=b0ccb2af788ee088bf7415bdf36a62c5f2d908d5&v=4"
                    channel="Aashim Garg"
                    image="http://gdurl.com/LDDPu" />

                <VideoCard
                    title="Green Campus straight from Harvard"
                    views="3.4M views"
                    timestamp="4 days ago"
                    channelImage="data:image/jpeg;base64,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"       
                    channel="North Arizona"
                    image="https://static4.depositphotos.com/1015060/482/i/450/depositphotos_4824453-stock-photo-green-park.jpg"
                 />
                 

            </div>
        </div>
    )

}

export default RecommendedVideos;
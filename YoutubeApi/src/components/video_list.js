import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({videos, onVideoSelect}) => {

    const videoItems = videos.map((video) => {
        console.log('=> ', video);
        return <VideoListItem onVideoSelect={onVideoSelect} key={video.etag} video={video} />
    })

    return(
        <div className="col-md-4 list-group">
            {videoItems}
        </div>
    )
}

export default VideoList;

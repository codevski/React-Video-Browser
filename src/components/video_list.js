import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {//console.log(video.id.videoId); console.log(video.etag);
        return <VideoListItem key={video.id.videoId} video={video} />
    });

    return (
        <ul className="col-md-4 list-group">
        {videoItems}
        </ul>
    );
}

export default VideoList;
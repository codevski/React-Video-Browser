import React from 'react';

const VideoListItem = ({video}) => {
    // By removing props from above and replacing it to video it allows
    // me to skip using the code bellow since I am telling it to use video from props
    // const video = props.video;
    const imgUrl = video.snippet.thumbnails.default.url;


    return (
        <li className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imgUrl} />
                </div>

                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
}

export default VideoListItem;
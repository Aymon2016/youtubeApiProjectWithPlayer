import React from 'react'
import { useStoreState } from 'easy-peasy';
import YouTube from 'react-youtube';

const Player = () => {
    const { title, videoId } = useStoreState((state) => state.video.items)

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <div>
            <YouTube
                videoId={videoId}
                opts={opts}

            />;
            <div style={{
                overflowX: 'hidden',
                boxSizing: 'border-box'
            }}><h3>{title}</h3></div>
        </div>
    )
}

export default Player
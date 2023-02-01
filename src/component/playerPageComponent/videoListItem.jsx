import React from 'react'
import { useStoreActions } from 'easy-peasy'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const VideoListItem = ({ videoListItem }) => {

    if (!videoListItem) return
    const videoItemAction = useStoreActions((action) => action.video)
    const playVideoClick = (item) => {
        videoItemAction.addToVideoId(item)
    }

    return (
        <div>
            {
                videoListItem.map((item) => (
                    <Card
                        sx={{ maxWidth: 350, maxHeight: 70 }}
                        style={{
                            cursor: 'pointer',

                            overflowX: 'hidden',
                            boxSizing: 'border-box'
                        }} className={'d-flex'}
                        onClick={() => playVideoClick(item)}
                    >
                        <CardMedia
                            component="img"
                            height="50px"
                            width="50px"
                            image={item.thumbnail.url}
                            alt={item.title}
                        />
                        <Typography variant="h6" color="text.primary">
                            {item.title}
                        </Typography>
                    </Card >

                ))
            }
        </div>
    )
}

export default VideoListItem
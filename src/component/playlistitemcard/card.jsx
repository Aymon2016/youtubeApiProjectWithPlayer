import { NavLink } from 'react-router-dom';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';



const PlaylistsCard = ({ playlistThumnails, playlistTitle, channelTitle, playlistId }) => {

    const id = playlistId
    const clickFavorite = () => {

    }

    return (
        <Card sx={{ maxWidth: 345, maxHeight: 325 }}>
            <CardMedia

                component="img"
                height="194"
                image={playlistThumnails.url}
                alt={playlistTitle}
            />
            <CardContent >

                <Typography style={{
                    whiteSpace: 'nowrap',
                    width: '200px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    fontSize: '2vw'

                }} variant="h6" color="text.primary">
                    {playlistTitle}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    {channelTitle}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <NavLink to={`/player/${playlistId}`} >Play</NavLink>
                {/* <button className='ms-auto' onClick={clickRecent}>
                    <NavLink to={`/player/${playlistId}`} >Play</NavLink>
                </button>
                */}
                <span className='ms-auto' onClick={clickFavorite}>
                    <FavoriteBorderOutlinedIcon />
                </span>
            </CardActions>
        </Card >
    );
}
export default PlaylistsCard
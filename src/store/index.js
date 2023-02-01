import { createStore , persist} from 'easy-peasy';
import Playlist_model from './playlist_model';
import FavoriteModel from './favorite_model'
import RecentModel from './recent_model'
import videoItemModel from './video_item_model'

const store = createStore( persist({
    
    playlist:Playlist_model,
    recent:RecentModel,
    favorite:FavoriteModel,
    video:videoItemModel
},
{
  storage: localStorage,
}
)
); 

export default store
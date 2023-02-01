
import { action} from "easy-peasy";

const FavoriteModel =  {
    items:{},
    addToFavorite:action( (state,playlistId)=>{
       if(state.items[playlistId]){
        return
       }
        state.items[playlistId]=playlistId
        
    }),
    removeToFavorite:action( (state,playlistId)=>{
        state.items = state.items.filter( (id)=>playlistId!==id)
    })  
}
export default FavoriteModel;
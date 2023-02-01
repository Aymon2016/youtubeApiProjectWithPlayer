
import { action} from "easy-peasy";

const RecentModel =  {
    items:{},
    addToRecent:action( (state,playlistId)=>{
       if(state.items[playlistId]){
        return
       }
        state.items[playlistId]=playlistId
        
    })

}
export default RecentModel;
import { action} from "easy-peasy";

const videoItemModel =  {
    items:{
        title:null,
        videoId:null,
    },
    addToVideoId:action( (state,payload)=>{
      const {contentDetails,title} = payload
        state.items.title=title,
        state.items.videoId=contentDetails.videoId
        
    })
    
}
export default videoItemModel;
class Storage  {

    save(key,data){
        localStorage.setItem(key,JSON.stringify(data))
    }

    get(key){
        const json=localStorage.getItem(key)
        return JSON.parse(json)
    }
}

export const mapPlaylistToFavrite=(playlist,favoriteList)=>{
    
     const newFavoriteList = []
    for (let i = 0; i < favoriteList.length; i++) {
        for (let j = i; j < playlist.length; j++) {
            if(favoriteList[i]==playlist[j].playlistId){
               const item =(playlist[j])
              
               newFavoriteList.unshift(item)
            }
            
        }
        
    }
    
   return newFavoriteList

}
const storage=new Storage()

export default storage;
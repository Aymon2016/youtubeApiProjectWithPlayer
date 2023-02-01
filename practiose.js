
const arr1 = [1,2,3,4]
const arr2 = [2,3]

const data= (arr1,arr2)=>{
    const newarray = []
    for (let i = 0; i < arr2.length; i++) {
        for (let j = i; j < arr1.length; j++) {
            if(arr2[i]==arr1[j].playlistId){
               const item =(arr1[j].playlistId)
               newarray.unshift(item)
            }
            
        }
        
    }
   return newarray
}

console.log(data(arr1,arr2))
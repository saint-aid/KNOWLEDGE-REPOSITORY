
const _URL ={
   all : "http://localhost:5500/asset/jsons/api-all.json",
   id : "http://localhost:5500/asset/jsons/api-id.json"
} 

// const fetchRequest = async url =>{
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
// }

const api = {
    fetchKey : async id => {
        const response = await fetch(_URL.id);
        const data = await response.json();
        const resultData = data.filter(x => {return x.parent.id === id});
        return resultData;
    },
    fetchAll : async()=>{
        const response = await fetch(_URL.all);
        const data = await response.json();
        return data;
    }
}

export { api };

const _URL ={
   all : "http://localhost:5500/asset/jsons/api-all.json",
   id : "http://localhost:5500/asset/jsons/api-id.json"
} 

const fetchRequest = async url =>{
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

const api = {
    fetchOne : async id => {
        const response = await fetch(_URL.id);
        const data = await response.json();
        return data;
    },
    fetchAll : async()=>{
        const response = await fetch(_URL.all);
        const data = await response.json();
        return data;
    }
}

export { api };
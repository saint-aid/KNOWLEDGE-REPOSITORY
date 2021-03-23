import { api } from "/src/api.js";
import ExplorationSection from "/src/components/ExplorationSection.js"
import ViewSection from "/src/components/ViewSection.js";

export default class App {
   constructor($element){
      console.log('1111111111111111111111111');

      const explSection = new ExplorationSection({
         $element,
         onSearch: async key =>{
            let reponse = await api.fetchAll();
            if(key) reponse = await api.fetchAll(key);   
            console.log("111110 > ", key)       
            viewSection.setState(reponse);
         },
         // onClick: data => {
         //    //viewSection.setState(data);
         // },
      });

      const viewSection = new ViewSection({
         $element,
         // data : async () =>{
         //    const data = await api.fetchAll();
         //    //console.log("data --> ", data);
         //    viewSection.setState(data);
         // },
      });
   }
}



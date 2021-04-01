import { api } from "/src/api.js";
import ExplorationSection from "/src/components/ExplorationSection.js"
import ViewSection from "/src/components/ViewSection.js";

/**
 * 시작 class 
 */
export default class App {
   constructor($element){
      const explSection = new ExplorationSection({
         $element,
         onClick: async key =>{
            let response = await api.fetchAll();
            if(key) response = await api.fetchKey(key);         
            viewSection.setState(response);
            explSection.setState(response);
         }
      });

      const viewSection = new ViewSection({
         $element,
         onClick: async data =>{
            const response = await api.fetchKey(data.id);  
            viewSection.setState(response);
            explSection.setState(data);
         },
      });

      //console.log(viewSection);

      explSection.onClick();

   }
}



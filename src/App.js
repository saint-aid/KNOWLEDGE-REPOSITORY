import { api } from "/src/api.js";
import ExplorationSection from "/src/components/ExplorationSection.js"
import ViewSection from "/src/components/ViewSection.js";

export default class App {
   constructor($element){
     const titleContent = `<h1 class="title">Knowledge-Repository</h1>
                     <div class="content"></div>`;
      $element.innerHTML = titleContent;
     
      const explSection = new ExplorationSection({
         $element,
         //init: async()=
         onClick: data => {
            viewSection.setState(data);
         },
      });
      const viewSection = new ViewSection($element,null);

   }
   
}



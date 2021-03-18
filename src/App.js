import { api } from "/src/api.js";

export default class App {
   constructor($element){
      this.$element = $element;
      this.render();
   }
   
   setState(data){
      console.log(data);
      this.render();
   }

   render(){
      const response = api.fetchAll();
      console.log(response);
      const el = '<h1>강아지</h1>'  
      this.$element.innerHTML = el;
   }
}



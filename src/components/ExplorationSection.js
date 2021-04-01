export default class ExplorationSection{
    constructor({$element, onClick}){
        this.onClick = onClick;
        this.explSection = document.createElement('h4');
        this.explSection.className = 'explSection';                
        $element.appendChild(this.explSection);

        //this.render();
    }

    setState(data){
        this.data = data ;
        this.render();
    }

    render(){
        console.log("this.name -> ", this.data.parent);
        const spanTitle = document.createElement('span');   
        if(this.data.parent){
            spanTitle.innerText = this.data.name || "root";
            spanTitle.addEventListener('click', () =>{this.onClick(this.data.id)});
            spanTitle.style.cursor="pointer";
        }
        this.explSection.appendChild(spanTitle);
    }
}
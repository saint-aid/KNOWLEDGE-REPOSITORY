export default class ExplorationSection{
    constructor({$element,onSearch,select}){
        console.log('2222222222222222222', onSearch);
        this.onSearch = onSearch;
        this.explSection = document.createElement('h4');
        this.explSection.className = 'explSection';                
        $element.appendChild(this.explSection);

        this.render();
    }

    setState(data){
        this.data = data;
        this.render();
    }

    render(){

        const spanTitle = document.createElement('span');        
        spanTitle.innerText = "root";

        spanTitle.addEventListener('click', this.onSearch());
        this.explSection.appendChild(spanTitle);

    }
}
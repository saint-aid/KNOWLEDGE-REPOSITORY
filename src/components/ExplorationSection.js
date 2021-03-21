export default class ExplorationSection{
    constructor({$element,data}){
        this.data = data;
        this.explSection = document.createElement('h4');
        this.explSection.className = 'explSection';
        
        document.querySelector('.content').appendChild(this.explSection);
        this.render();
    }

    setState(data){
        this.data = data;
        this.render();
    }

    render(){
        const rootFlg = null;
        const subTitle = `<span>root</span>`;

        if(rootFlg == null){
            this.explSection.innerHTML = subTitle;
        }else{
            this.explSection.innerHTML = subTitle;
        }
    }
}
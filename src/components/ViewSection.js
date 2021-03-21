export default class ViewSection{
    constructor($el, data){
        this.data = data || [];
        this.viewSection = document.createElement("ul");
        this.viewSection.className = "viewSection";

        this.render();
    }

    setState(data){
        this.data = data;
        this.render();
    }

    render(){
        const len = this.data.length || 7;
        
        for(let i=0; i < len; i++){
            this.li =document.createElement("li");
            this.img = document.createElement("img");
            this.p = document.createElement("p");
            this.p.innerHTML= "uw구축순서";
            this.img.src = "/asset/folder2.jpg";
       
            this.li.appendChild(this.img);
            this.li.appendChild(this.p);
            this.viewSection.appendChild(this.li);
        }

        document.querySelector('.content').appendChild(this.viewSection);
    }
}
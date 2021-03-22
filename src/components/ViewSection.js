export default class ViewSection{
    constructor({$element, data}){
        this.data = data || [];
        this.viewSection = document.createElement("ul");
        this.viewSection.className = "viewSection";
    
        $element.appendChild(this.viewSection);

        this.render();
    }

    setState(data){
        console.log(data);
        this.data = data;
        this.render();
    }

    inChange() {
        console.log("inchange!!!");
    }

    render(){
        const len = this.data.length || 0;
        
        for(let i=0; i < len; i++){
            this.li =document.createElement("li");
            this.li.addEventListener('click',() =>{this.inChange();} );
            this.img = document.createElement("img");
            this.img.src = "/asset/folder2.jpg";
            this.p = document.createElement("p");
            this.p.innerText= this.data[i].name;

            this.li.appendChild(this.img);
            this.li.appendChild(this.p);
            this.viewSection.appendChild(this.li);
        }

    }
}
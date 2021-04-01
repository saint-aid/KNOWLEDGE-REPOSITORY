export default class ViewSection{
    constructor({$element, onClick,data}){
        this.data = data || [];
        this.onClick = onClick;
        this.viewSection = document.createElement("ul");
        this.viewSection.className = "viewSection";
    
        $element.appendChild(this.viewSection);

        this.render();
    }

    setState(data){
        console.log("data -=> ",data);
        this.data = data;
        this.render();
    }

    render(){
        const len = this.data.length || 0;
        const elAll = document.querySelectorAll(".viewSection li");
        if(elAll.length > 0 ){ //기존 엘리먼트 삭제 
            elAll.forEach(x => {x.remove();});
        }
        for(let i=0; i < len; i++){
            const data = this.data[i];
            this.li =document.createElement("li");
      
            this.li.addEventListener('click',() =>{
                this.onClick(data);
            });
            this.img = document.createElement("img");
            this.img.src = data.type==="DIRECTORY"?"/asset/images/folder2.jpg":"/asset/images/folder.png";
            this.p = document.createElement("p");
            this.p.innerText= data.name;

            this.li.appendChild(this.img);
            this.li.appendChild(this.p);
            this.viewSection.appendChild(this.li);
            
        }
        console.log("viewSection ---> ",this.viewSection);
    }
}
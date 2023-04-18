class GameObject{
    //color : 는 div만으로 프로그램 테스트할때 , src가 넘어오면 이미지백그라운드로 대체
    constructor(container, color, src, x, y, width, height,velX, velY){
        this.container = container;
        this.color=color;
        this.src=src;
        this.x=x;
        this.y=y;
        this.width = width;
        this.height = height;
        this.velX=velX;
        this.velY=velY;

        this.div = document.createElement("div");
        this.div.style.position = "absolute";
        this.div.style.left = this.x+"px";
        this.div.style.top = this.y+"px";
        this.div.style.width = this.width+"px";
        this.div.style.height = this.height+"px";

        if(this.src !="" || this.src.length >0){ //이미지가 넘어오면...
            this.div.style.backgroundImage = url("../images/"+this.src);
        }else{
            this.div.style.background=this.color;
        }
        this.container.appendChild(this.div);
    }

    tick(){
        this.x+=this.velX;
        this.y+=this.velY;
    }

    render(){
        this.div.style.left = this.x+"px";
        this.div.style.top = this.y+"px";
    }
}
class Note extends GameObject{
    constructor(container, color, src, x, y, width, height,velX, velY, row, col){
        super(container, color, src, x, y, width, height,velX, velY);

        this.row=row;       // 층수
        this.col=col;         // 호수
    }
    
    tick(){
        this.x+=this.velX;
        this.y+=this.velY;
    }
    
    render(){   
        this.div.style.left = this.x+"px";
        this.div.style.top = this.y+"px";
        
        this.hitCheck();
        this.deleteNote();
    }

    
    hitCheck(){
        //판정선과의 충돌여부 체크 
        
        let touch = gameMap.touchArray[this.row]; //판정선 추출
        
        // console.log("touch의 정체는 ",  touch);
        
        let perfect = collisionCheck2(this, touch, this.velY*2);
        let great = collisionCheck2(this, touch, this.velY*4);
        let miss = collisionCheck2(this, touch, this.velY*8);

        if(wKey && this.row ==0){
            if (perfect){
                this.container.removeChild(this.div);
                let index = gameMap.noteArray[this.row].indexOf(this);
                gameMap.noteArray[this.row].splice(index ,1);
                perfect_score.innerText++; 
            }
            else if(great){
                this.container.removeChild(this.div);
                let index = gameMap.noteArray[this.row].indexOf(this);
                gameMap.noteArray[this.row].splice(index ,1);
                great_score.innerText++; 
            }
            else if(miss){
                this.container.removeChild(this.div);
                let index = gameMap.noteArray[this.row].indexOf(this);
                gameMap.noteArray[this.row].splice(index ,1);
                miss_score.innerText++;
            }
            wKey = false;
        }
        if(eKey && this.row ==1){
            if (perfect){
                this.container.removeChild(this.div);
                let index = gameMap.noteArray[this.row].indexOf(this);
                gameMap.noteArray[this.row].splice(index ,1);
                perfect_score.innerText++; 
            }
            else if(great){
                this.container.removeChild(this.div);
                let index = gameMap.noteArray[this.row].indexOf(this);
                gameMap.noteArray[this.row].splice(index ,1);
                great_score.innerText++; 
            }
            else if(miss){
                this.container.removeChild(this.div);
                let index = gameMap.noteArray[this.row].indexOf(this);
                gameMap.noteArray[this.row].splice(index ,1);
                miss_score.innerText++;
            }
            eKey = false;
        }
        if(rKey && this.row ==2){
            if (perfect){
                this.container.removeChild(this.div);
                let index = gameMap.noteArray[this.row].indexOf(this);
                gameMap.noteArray[this.row].splice(index ,1);
                perfect_score.innerText++; 
            }
            else if(great){
                this.container.removeChild(this.div);
                let index = gameMap.noteArray[this.row].indexOf(this);
                gameMap.noteArray[this.row].splice(index ,1);
                great_score.innerText++; 
            }
            else if(miss){
                this.container.removeChild(this.div);
                let index = gameMap.noteArray[this.row].indexOf(this);
                gameMap.noteArray[this.row].splice(index ,1);
                miss_score.innerText++;
            }
            rKey = false;
        }
        if(iKey && this.row ==3){
            if (perfect){
                this.container.removeChild(this.div);
                let index = gameMap.noteArray[this.row].indexOf(this);
                gameMap.noteArray[this.row].splice(index ,1);
                perfect_score.innerText++; 
            }
            else if(great){
                this.container.removeChild(this.div);
                let index = gameMap.noteArray[this.row].indexOf(this);
                gameMap.noteArray[this.row].splice(index ,1);
                great_score.innerText++; 
            }
            else if(miss){
                this.container.removeChild(this.div);
                let index = gameMap.noteArray[this.row].indexOf(this);
                gameMap.noteArray[this.row].splice(index ,1);
                miss_score.innerText++;
            }
            iKey = false;
        }
        if(oKey && this.row ==4){
            if (perfect){
                this.container.removeChild(this.div);
                let index = gameMap.noteArray[this.row].indexOf(this);
                gameMap.noteArray[this.row].splice(index ,1);
                perfect_score.innerText++; 
            }
            else if(great){
                this.container.removeChild(this.div);
                let index = gameMap.noteArray[this.row].indexOf(this);
                gameMap.noteArray[this.row].splice(index ,1);
                great_score.innerText++; 
            }
            else if(miss){
                this.container.removeChild(this.div);
                let index = gameMap.noteArray[this.row].indexOf(this);
                gameMap.noteArray[this.row].splice(index ,1);
                miss_score.innerText++;
            }
            oKey = false;
        }
        if(pKey && this.row ==5){
            if (perfect){
                this.container.removeChild(this.div);
                let index = gameMap.noteArray[this.row].indexOf(this);
                gameMap.noteArray[this.row].splice(index ,1);
                perfect_score.innerText++; 
            }
            else if(great){
                this.container.removeChild(this.div);
                let index = gameMap.noteArray[this.row].indexOf(this);
                gameMap.noteArray[this.row].splice(index ,1);
                great_score.innerText++; 
            }
            else if(miss){
                this.container.removeChild(this.div);
                let index = gameMap.noteArray[this.row].indexOf(this);
                gameMap.noteArray[this.row].splice(index ,1);
                miss_score.innerText++;
            }
            pKey = false;
        }
    }

    deleteNote(){
        if(this.y > gameMap.height){
            this.container.removeChild(this.div);    
            let index = gameMap.noteArray[this.row].indexOf(this); 
            gameMap.noteArray[this.row].splice(index ,1);
            miss_score.innerText++; 
        }
    }
}
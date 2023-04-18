class GameMap extends GameObject{
    constructor(container, color, src, x, y, width, height,velX, velY){
        super(container, color, src, x, y, width, height,velX, velY);

        this.laneColorArray = ["red","orange","yellow","yellowgreen","aqua","purple"];

        this.laneArray=[]; //레인 6개를 보관할 배열 
        this.touchArray=[];//레인에 대응하는 6개의 터치 객체 배열 
        this.noteArray=[]; //등장할 노트들이 담겨질 배열...
        
        for(let i=0;i<this.laneColorArray.length;i++){
            let lane = new Lane(this.container, "white" , "", (i*71)+1, 0, 70, 703, 0,0 );
            this.laneArray.push(lane);

            let touch = new Touch(this.container, "yellow", "", (i*71)+1, 600, 71, 15, 0, 0 );
            this.touchArray.push(touch);
        }

        for(let i=0;i<this.laneArray.length;i++){  //레인수만큼 
            let arr=[];
            for(let a=0;a<4;a++){
                //super(container, color, src, x, y, width, height,velX, velY);
                let note = new Note(this.container , "black", "" , i*71, (-(a+50)*getRandomWithRange(10, 100)), 70, 15, 0, 4, i, a);
                arr.push(note);
            }
            this.noteArray.push(arr);           //noteArray[i][a] = [6][5]
        }
    }

    tick(){
        //this.x+=this.velX;
        //this.y+=this.velY;
        //console.log("gameMap tick() called...");
        for(let i=0;i<this.noteArray.length;i++){
            let array = this.noteArray[i]; //하나의 레인에 소속된 노트들...

            for(let a=0;a<array.length;a++){
                    array[a].tick();
                    array[a].render();
            }
        }
    }
}
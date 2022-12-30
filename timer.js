class Timer{
    constructor(durationInput,startButton,pauseButton,callBacks){

        this.durationInput=durationInput;
        this.startButton=startButton;
        this.pauseButton=pauseButton;
        if(callBacks){
            this.onStart=callBacks.onStart;
            this.onTick=callBacks.onTick;
            this.onComplete=callBacks.onComplete;
        }
        this.strtBtnClicks=0;
        this.psBtnClicks=0;

    this.startButton.addEventListener('click',()=>{
        if(this.strtBtnClicks==this.psBtnClicks){
            this.start();
            this.strtBtnClicks=this.strtBtnClicks+1;

        }
        
            
            console.log(this.strtBtnClicks);

    }); 
    this.pauseButton.addEventListener('click',()=>{
        // if(this.psBtnClicks==0){
        //     this.pause();
        //     this.psBtnClicks=this.psBtnClicks+1;
        // }
         if(this.strtBtnClicks!=this.psBtnClicks){
             this.pause();
            this.psBtnClicks=this.psBtnClicks+1;
            console.log(this.psBtnClicks)
        }

    });   


    }
start=()=>{
    
    if(this.onStart){
        this.onStart();
    }
    
    this.tick();

  this.interval=setInterval(this.tick,50);
 
}
pause=()=>{
   clearInterval(this.interval);
}
get timeRemaing(){
    return this.durationInput.value;
}
set timeRemaing(time){
    this.durationInput.value=time.toFixed(2);
}
tick=()=>{
    if(this.timeRemaing<=0){
        if(this.onComplete){
            this.onComplete();
        }
        this.pause();
    }
    else{
        if(this.onTick){
            this.onTick();
        }
        
        this.timeRemaing=this.timeRemaing-0.05;
    }
    
    

    
}




}
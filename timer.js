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

    this.startButton.addEventListener('click',this.start); 
    this.pauseButton.addEventListener('click',this.pause);   


    }
start=(e)=>{
    
    if(this.onStart){
        this.onStart();
    }
    
    this.tick();
  this.interval=setInterval(this.tick,1000);
 
}
pause=()=>{
   clearInterval(this.interval);
}
get timeRemaing(){
    return this.durationInput.value;
}
set timeRemaing(time){
    this.durationInput.value=time;
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
        
        this.timeRemaing=this.timeRemaing-1;
    }
    
    

    
}




}
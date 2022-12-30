

const durationInput=document.querySelector('#duration');
const startButton=document.querySelector('#start');
const pauseButton=document.querySelector('#pause');
const circle=document.querySelector('circle');

const perimeter=circle.getAttribute('r')*2*Math.PI;
 
circle.setAttribute('stroke-dasharray',perimeter);

let currentOffset=0;
let durValue=0;




const timer=new Timer(durationInput,startButton,pauseButton,{
    onStart(){
        console.log('Timer Started');
        
       
        if(this.strtBtnClicks===0){
            durValue=perimeter/(durationInput.value/0.05);

        }
        
        
        

    },
    onTick(){
         currentOffset=currentOffset-durValue;
        circle.setAttribute('stroke-dashoffset',currentOffset);

    },
    onComplete(){
        if(currentOffset!=0){
            currentOffset=0;
        }
        if(durValue!=0){
            durValue=0;
            
        }
        if(this.strtBtnClicks!=0){
            this.strtBtnClicks=0;
        }
        if(this.psBtnClicks!=0){
            this.psBtnClicks=0;
        }
       
        



    }
});

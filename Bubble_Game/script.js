
let timer=60;
let hitrn=0;
let score=0;
function hitChange()
{
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn
}
function increaseScore()
{
    score+=10;
    document.querySelector("#ScoreVal").textContent=score;

}
document.querySelector(".mainBottom").addEventListener("click",function(dets)
{
   let clickNum=Number(dets.target.textContent);
   if(timer!=0)
   {
    if(clickNum==hitrn)
    {
     increaseScore();
     makeBall();
     hitChange();
 
    }
   }
  
  
    
})
function runTimer(){
    let timerInterval=setInterval(function(){
    if(timer>0){
        timer--;
        document.querySelector("#time").textContent=timer;
    }
    else{
        clearInterval(timerInterval);
        let a=document.querySelector(".mainBottom");
        a.innerHTML="GAME OVER";
        
    }
},1000);
}

function makeBall()
{
    let container="";

for(let i=0;i<120;i++)
{
    let rn=Math.floor(Math.random()*10)
    container+=` <div class="mainBall">${rn}</div>`
}
let a=document.querySelector(".mainBottom")
a.innerHTML=container;
}
hitChange();
runTimer();
makeBall();

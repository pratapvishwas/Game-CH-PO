score =0;
cross=true;
document.onkeydown=function(e){
    console.log("key code is:",e.keyCode)
    if(e.keyCode==38)
    {
        dino=document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(()=>{
            dino.classList.remove('animateDino')
        },700);
    }
    
    if(e.keyCode==38)
    {
        dino=document.querySelector('.dino');
        dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=dinoX+112+"px";
    }
    if(e.keyCode==37)
    {
        dino=document.querySelector('.dino');
        dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=(dinoX-112)+"px";
    }
}
setInterval(() => {
    dino=document.querySelector('.dino');
    gameOver=document.querySelector('.gameOver');
    obstacle=document.querySelector('.obstacle');

    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));
   
    offsetX=Math.abs(dx-ox);
    offsetY=Math.abs(dy-oy);
  //  console.log(offsetX,offsetY)

    if(offsetX< 113 && offsetY<52){
        gameOver.style.visibility='visible';
        obstacle.classList.remove('obstacleAni')
    }
    else if(offsetX<145 && cross){
        score+=1;
        updateScore(score);
        cross=false;
        setTimeout(()=>
        {
            cross=true;
        },1000);
        aniDur=parseFloat(window.getComputedStyle(dino,null).getPropertyValue('animation-duration'));
        newDur=aniDur-0.1;
        obstacle.style.anumationDuration=newDur+'s';
        console.log('New animation duration',newDur)
    }
},10);
function updateScore(score){
    scorecont.innerHTML="Your score" + score

}

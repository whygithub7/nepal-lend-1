function getSecs(){ return document.getElementsByClassName('secs')[0].innerHTML; }
  function getMins(){ return document.getElementsByClassName('mins')[0].innerHTML; }
  
  function timer(){
    if(getSecs()>0){ Array.from(document.getElementsByClassName('secs')).forEach(i=>i.innerHTML=--i.innerHTML) }
    else if(getMins()>0){ 
      Array.from(document.getElementsByClassName('mins')).forEach(i=>i.innerHTML = parseInt(i.innerHTML)-1 )
      Array.from(document.getElementsByClassName('secs')).forEach(i=>i.innerHTML = 59 )
    }else{clearInterval(intervalId);}
  }
  let intervalId;
  
   function ready(){
     intervalId=window.setInterval(timer, 1000);
   }

   document.addEventListener("DOMContentLoaded", ready)
  

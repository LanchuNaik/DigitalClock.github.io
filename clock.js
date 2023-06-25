 //taking values from html
 const hourElem=document.getElementById("hour");
 const minuteElem=document.getElementById("minutes");
 const secondElem=document.getElementById("seconds");
 const ampmElem=document.getElementById("ampm");

 function updateClock(){
  //creates a new instance of the Date object..getHours() method is called on the Date object to retrieve the current hour as a number from 0 to 23.
  let h=new Date().getHours(); 
  let m=new Date().getMinutes();
  let s=new Date().getSeconds();
  let ampmElem="AM";

  //to display am and pm
  if(h>12){
    h=h-12;
    ampmElem="PM";
  }

   //display 0 behind number less than 10
   h=h<10? "0"+h:h;

  //sending values to html
  hourElem.innerHTML=h;
  minuteElem.innerHTML=m;
  secondElem.innerHTML=s;

  //update value every 1sec
  setTimeout(()=>{
    updateClock()
  },1000)

 }
 updateClock();
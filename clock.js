function timeClock(){
    let a = new Date();
    let h=a.getHours();
    let m=a.getMinutes();
    let s=a.getSeconds();
    document.getElementById('hour').innerHTML=h+':';
    document.getElementById('min').innerHTML=m+':';;
    document.getElementById('sec').innerHTML=s+'- ';
    if(h>12){
        ses.innerText=' PM'
    }else{
        ses.innerText= ' AM'
    }
    if(h>12){
        h=h-12;
    }
}

let hour=document.getElementById('hour');
let ses =document.getElementById('ses');

setInterval(timeClock,10);

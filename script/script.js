const dates=new Date();
const hours=dates.getHours();
const minutes=dates.getMinutes();
const seconds=dates.getSeconds();
const hourss=((hours>12)?(hours-12):hours);
const times= ((hourss<10)?('0'+hourss):hourss) + ':' + ((minutes<10)?('0'+minutes):minutes) + ':' + ((seconds<10)?('0'+seconds):seconds) + ' ' + ((hours<12)?'AM':'PM');

document.getElementById('task-1').addEventListener('click',
function(event){
        event.preventDefault;
        const title=document.getElementById('task-1-name').innerText;
        alert('You have Complete The Task '+ title +' at '+times);
    }
)
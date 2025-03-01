const dates=new Date();
const hours=dates.getHours();
const minutes=dates.getMinutes();
const seconds=dates.getSeconds();
const times= if(hours>12)?(hours-12):hours +':'minutes+':'+seconds;

document.getElementById('task-1').addEventListener('click',
function(event){
        event.preventDefault;
        const title=document.getElementById('task-1-name').value;
        alert('You have Complete The Task '+ title +' at '+times);
    }
)
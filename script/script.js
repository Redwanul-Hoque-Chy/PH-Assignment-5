const daysList=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
const monthList=["January","February","March","April","May","June","July","August","September","October","November","December"]
const dates=new Date();
const days=dates.getDay();
const years=dates.getFullYear();
const months=dates.getMonth();
const datess=dates.getDate();

document.getElementById('current-day').innerText=daysList[days];
document.getElementById('current-date').innerText=monthList[months] +' '+ datess +' ' + years;

document.getElementById('task-1').addEventListener('click',
    function(event){
        event.preventDefault;

        const dates=new Date();
        const hours=dates.getHours();
        const minutes=dates.getMinutes();
        const seconds=dates.getSeconds();
        const hourss=((hours>12)?(hours-12):hours);
        const times= hourss + ':' + ((minutes<10)?('0'+minutes):minutes) + ':' + ((seconds<10)?('0'+seconds):seconds) + ' ' + ((hours<12)?'AM':'PM');

        const title=document.getElementById('task-1-name').innerText;

        let taskValue=document.getElementById('task-assign').innerText;
        document.getElementById('task-assign').innerText=(parseInt(taskValue)-1);

        let taskCount=document.getElementById('task-count').innerText;
        document.getElementById('task-count').innerText=(parseInt(taskCount)+1);

        const para=document.createElement('p');
        para.classList.add("bg-[#F4F7FF]");
        para.classList.add("text-black");
        para.classList.add("text-sm");
        para.classList.add("lg:text-base");
        para.classList.add("mt-[20px]");
        para.classList.add("p-[5px]");
        para.classList.add("rounded-sm");
        para.innerText='You have Complete The Task '+ title +' at '+times;

        const divSection=document.getElementById('history-text');
        divSection.appendChild(para);

        document.getElementById('task-1').style.opacity = "0.2";
        document.getElementById('task-1').setAttribute("disabled","disabled");
        
        alert('Board updated Succesfully');

        let alltask=(parseInt(taskValue)-1);

        if(alltask===0){
            alert('congrates!!! You have completed all the current task');
        }
    }
)

document.getElementById('task-2').addEventListener('click',
    function(event){
        event.preventDefault;

        const dates=new Date();
        const hours=dates.getHours();
        const minutes=dates.getMinutes();
        const seconds=dates.getSeconds();
        const hourss=((hours>12)?(hours-12):hours);
        const times= hourss + ':' + ((minutes<10)?('0'+minutes):minutes) + ':' + ((seconds<10)?('0'+seconds):seconds) + ' ' + ((hours<12)?'AM':'PM');

        const title=document.getElementById('task-2-name').innerText;

        let taskValue=document.getElementById('task-assign').innerText;
        document.getElementById('task-assign').innerText=(parseInt(taskValue)-1);

        let taskCount=document.getElementById('task-count').innerText;
        document.getElementById('task-count').innerText=(parseInt(taskCount)+1);

        const para=document.createElement('p');
        para.classList.add("bg-[#F4F7FF]");
        para.classList.add("text-black");
        para.classList.add("text-sm");
        para.classList.add("lg:text-base");
        para.classList.add("mt-[20px]");
        para.classList.add("p-[5px]");
        para.classList.add("rounded-sm");
        para.innerText='You have Complete The Task '+ title +' at '+times;

        const divSection=document.getElementById('history-text');
        divSection.appendChild(para);

        document.getElementById('task-2').style.opacity = "0.2";
        document.getElementById('task-2').setAttribute("disabled","disabled");

        alert('Board updated Succesfully');

        let alltask=(parseInt(taskValue)-1);
        
        if(alltask===0){
            alert('congrates!!! You have completed all the current task');
        }
    }
)

document.getElementById('task-3').addEventListener('click',
    function(event){
        event.preventDefault;

        const dates=new Date();
        const hours=dates.getHours();
        const minutes=dates.getMinutes();
        const seconds=dates.getSeconds();
        const hourss=((hours>12)?(hours-12):hours);
        const times= hourss + ':' + ((minutes<10)?('0'+minutes):minutes) + ':' + ((seconds<10)?('0'+seconds):seconds) + ' ' + ((hours<12)?'AM':'PM');

        const title=document.getElementById('task-3-name').innerText;

        let taskValue=document.getElementById('task-assign').innerText;
        document.getElementById('task-assign').innerText=(parseInt(taskValue)-1);

        let taskCount=document.getElementById('task-count').innerText;
        document.getElementById('task-count').innerText=(parseInt(taskCount)+1);

        const para=document.createElement('p');
        para.classList.add("bg-[#F4F7FF]");
        para.classList.add("text-black");
        para.classList.add("text-sm");
        para.classList.add("lg:text-base");
        para.classList.add("mt-[20px]");
        para.classList.add("p-[5px]");
        para.classList.add("rounded-sm");
        para.innerText='You have Complete The Task '+ title +' at '+times;

        const divSection=document.getElementById('history-text');
        divSection.appendChild(para);

        document.getElementById('task-3').style.opacity = "0.2";
        document.getElementById('task-3').setAttribute("disabled","disabled");

        alert('Board updated Succesfully');

        let alltask=(parseInt(taskValue)-1);
        
        if(alltask===0){
            alert('congrates!!! You have completed all the current task');
        }
    }
)

document.getElementById('task-4').addEventListener('click',
    function(event){
        event.preventDefault;

        const dates=new Date();
        const hours=dates.getHours();
        const minutes=dates.getMinutes();
        const seconds=dates.getSeconds();
        const hourss=((hours>12)?(hours-12):hours);
        const times= hourss + ':' + ((minutes<10)?('0'+minutes):minutes) + ':' + ((seconds<10)?('0'+seconds):seconds) + ' ' + ((hours<12)?'AM':'PM');

        const title=document.getElementById('task-4-name').innerText;

        let taskValue=document.getElementById('task-assign').innerText;
        document.getElementById('task-assign').innerText=(parseInt(taskValue)-1);

        let taskCount=document.getElementById('task-count').innerText;
        document.getElementById('task-count').innerText=(parseInt(taskCount)+1);

        const para=document.createElement('p');
        para.classList.add("bg-[#F4F7FF]");
        para.classList.add("text-black");
        para.classList.add("text-sm");
        para.classList.add("lg:text-base");
        para.classList.add("mt-[20px]");
        para.classList.add("p-[5px]");
        para.classList.add("rounded-sm");
        para.innerText='You have Complete The Task '+ title +' at '+times;

        const divSection=document.getElementById('history-text');
        divSection.appendChild(para);

        document.getElementById('task-4').style.opacity = "0.2";
        document.getElementById('task-4').setAttribute("disabled","disabled");

        alert('Board updated Succesfully');

        let alltask=(parseInt(taskValue)-1);
        
        if(alltask===0){
            alert('congrates!!! You have completed all the current task');
        }
    }
)

document.getElementById('task-5').addEventListener('click',
    function(event){
        event.preventDefault;

        const dates=new Date();
        const hours=dates.getHours();
        const minutes=dates.getMinutes();
        const seconds=dates.getSeconds();
        const hourss=((hours>12)?(hours-12):hours);
        const times= hourss + ':' + ((minutes<10)?('0'+minutes):minutes) + ':' + ((seconds<10)?('0'+seconds):seconds) + ' ' + ((hours<12)?'AM':'PM');

        const title=document.getElementById('task-5-name').innerText;

        let taskValue=document.getElementById('task-assign').innerText;
        document.getElementById('task-assign').innerText=(parseInt(taskValue)-1);

        let taskCount=document.getElementById('task-count').innerText;
        document.getElementById('task-count').innerText=(parseInt(taskCount)+1);

        const para=document.createElement('p');
        para.classList.add("bg-[#F4F7FF]");
        para.classList.add("text-black");
        para.classList.add("text-sm");
        para.classList.add("lg:text-base");
        para.classList.add("mt-[20px]");
        para.classList.add("p-[5px]");
        para.classList.add("rounded-sm");
        para.innerText='You have Complete The Task '+ title +' at '+times;

        const divSection=document.getElementById('history-text');
        divSection.appendChild(para);

        document.getElementById('task-5').style.opacity = "0.2";
        document.getElementById('task-5').setAttribute("disabled","disabled");

        alert('Board updated Succesfully');

        let alltask=(parseInt(taskValue)-1);
        
        if(alltask===0){
            alert('congrates!!! You have completed all the current task');
        }
    }
)

document.getElementById('task-6').addEventListener('click',
    function(event){
        event.preventDefault;

        const dates=new Date();
        const hours=dates.getHours();
        const minutes=dates.getMinutes();
        const seconds=dates.getSeconds();
        const hourss=((hours>12)?(hours-12):hours);
        const times= hourss + ':' + ((minutes<10)?('0'+minutes):minutes) + ':' + ((seconds<10)?('0'+seconds):seconds) + ' ' + ((hours<12)?'AM':'PM');
        
        const title=document.getElementById('task-6-name').innerText;

        let taskValue=document.getElementById('task-assign').innerText;
        document.getElementById('task-assign').innerText=(parseInt(taskValue)-1);

        let taskCount=document.getElementById('task-count').innerText;
        document.getElementById('task-count').innerText=(parseInt(taskCount)+1);

        const para=document.createElement('p');
        para.classList.add("bg-[#F4F7FF]");
        para.classList.add("text-black");
        para.classList.add("text-sm");
        para.classList.add("lg:text-base");
        para.classList.add("mt-[20px]");
        para.classList.add("p-[5px]");
        para.classList.add("rounded-sm");
        para.innerText='You have Complete The Task '+ title +' at '+times;

        const divSection=document.getElementById('history-text');
        divSection.appendChild(para);

        document.getElementById('task-6').style.opacity = "0.2";
        document.getElementById('task-6').setAttribute("disabled","disabled");

        alert('Board updated Succesfully');

        let alltask=(parseInt(taskValue)-1);
        
        if(alltask===0){
            alert('congrates!!! You have completed all the current task');
        }
    }
)

document.getElementById('clear-history').addEventListener('click',
    function(event){
        event.preventDefault;
        document.getElementById('history-text').innerText='';
    }
)

document.getElementById('bg-change').addEventListener('click',
    function(event){
        event.preventDefault;
        document.getElementById('body-bg').style.backgroundColor="rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")";
    }
)
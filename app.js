const date= new Date();

const fullday = date.toLocaleDateString('pt-PT');

let idd ="";

const renderCalendar = () => {
        
    date.setDate(1)

    const monthsDays = document.querySelector('.days')

    const lastDays = new Date(date.getFullYear(), date.getMonth()+1,0).getDate();  //tong ngay trong thang

    const prevLastDay = new Date(date.getFullYear(), date.getMonth(),0).getDate();  //tong sau



    const firstDayIndex = date.getDay() //ngay trong tuan +1

    const lastDayIndex = new Date(date.getFullYear(), date.getMonth()+1,0).getDay();

    const nextDays = 7 - lastDayIndex -1;

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    document.querySelector(".year-picker h1").innerHTML = months[date.getMonth()];

    document.querySelector(".year-picker p").innerHTML = fullday;  // date.getFullYear()

    



    let days = "";


    //ngay truoc do
    for(let x= firstDayIndex; x > 0; x--){
        days += `<div class="prev-date">${prevLastDay - x}</div>`
    }

    //tong so ngay
    for(let i=1; i<=lastDays;i++){

        if (i === new Date().getDate() &&date.getMonth() === new Date().getMonth()) {
            days += `<div class="to today" date-id="${new Date(date.getFullYear(),date.getMonth(),i).toDateString()}">
                ${i} <div class="todayChild"></div>
            </div>`
        } else {
            days += `<div class="to" date-id="${new Date(date.getFullYear(),date.getMonth(),i).toDateString()}">
            ${i}
            </div>`;
            monthsDays.innerHTML = days;
        } 
    }

    //days += `<div>${i}</div>`
    //monthsDays.innerHTML = days;

    //ngay sau do
    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
        monthsDays.innerHTML = days;
    }

}


document.querySelector("#prev-year").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

document.querySelector("#next-year").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

renderCalendar();



// TODO_LIST
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button")
const todoList = document.querySelector(".todoList")
const renderDay = document.querySelector(".todayChild");

    
inputBox.onkeyup = () =>{
    let userData = inputBox.value;
}
    showTask()

function addLocal(id){
    let idd = id
    document.querySelector(".inputField button").addEventListener("click",()=>{
        let userData =inputBox.value
        let getLocalStorage = localStorage.getItem("New Todo")
        if(getLocalStorage == null){
            listArr = []; 
            
        }else{
            listArr = JSON.parse(getLocalStorage)
        }
        // listArr.push(userData)
        // const kq = {idd:listArr}
        // console.log(kq)

        listArr.push({"id":id,"task":userData})
        localStorage.setItem("New Todo",JSON.stringify(listArr));
        showTask()
    })
}
// addBtn.onclick = () =>{
//     let userData =inputBox.value
//     let getLocalStorage = localStorage.getItem("New Todo")
//     if(getLocalStorage == null){
//         listArr = []; 
//     }else{
//         listArr = JSON.parse(getLocalStorage)
//     }
//     listArr.push(userData)
//     localStorage.setItem("New Todo",JSON.stringify(listArr));
//     showTask()
// }

    function showTask(){
        let getLocalStorage = localStorage.getItem("New Todo")
        if(getLocalStorage == null){
            listArr = []; 
        }else{
            listArr = JSON.parse(getLocalStorage)
        }
        let newTo = "";
        let newLiTag = '';
        listArr.forEach((e,index)=>{
            return newLiTag += `<li>${e} <button onclick="deleteTask(${index})" >X</button></li>`,
            newTo += `<li>${e}</li>`    
        })
        todoList.innerHTML = newLiTag;
        renderDay.innerHTML = newTo;
        inputBox.value= "";
    }

    const deleteTask = (index) =>{
        
        let getLocalStorage = localStorage.getItem("New Todo");
        listArr = JSON.parse(getLocalStorage);

        listArr.splice(index, 1);

        localStorage.setItem("New Todo",JSON.stringify(listArr));
        showTask()
    }



// renderCalendar();



//popup
document.querySelector(".days").addEventListener('click',function(){
    document.querySelector(".btn-add").classList.toggle('active')
})

document.querySelector(".days").addEventListener("click", function (e) {
    document.querySelector(".btn-add").classList.toggle("active");
    let dayPop = e.target.getAttribute("date-id");
    document.querySelector(".btn-add h3").innerHTML = dayPop;
    addLocal(dayPop)
});


  
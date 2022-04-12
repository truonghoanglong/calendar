const date= new Date();


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

    document.querySelector(".year-picker p").innerHTML = date.getFullYear();



    let days = "";


    //ngay truoc do
    for(let x= firstDayIndex; x > 0; x--){
        days += `<div class="prev-date">${prevLastDay - x +1 }</div>`
    }

    //tong so ngay
    for(let i=1; i<=lastDays;i++){

        if (i === new Date().getDate() &&date.getMonth() === new Date().getMonth()) {
            days += `<div class="today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
            monthsDays.innerHTML = days;
        } 
    }

    //days += `<div>${i}</div>`
    //monthsDays.innerHTML = days;

    //ngay sau do
    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
        monthDays.innerHTML = days;
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
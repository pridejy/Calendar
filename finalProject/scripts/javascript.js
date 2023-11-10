document.addEventListener("DOMContentLoaded", function(){
    const calendar = {
        year: 0,
        month: 0,
        date: 1,
        thedayOfTheWeek: 0,
        lastDay: 0,
        numOfWeeks: 0,
    };
    //달력 표시
    function showCalendar() {
        const currentMonth = document.querySelector(".select-wrapper");

        function renderCalendar(year, month, selector) { 
        let date = 1;
        const tbody = document.querySelector(selector).querySelector("tbody");
        const weekDays = ["일", "월", "화", "수", "목", "금", "토"];
        const tr = document.createElement("tr");

        currentMonth.textContent = `${year}년 ${month + 1}월`;

        //일월화수목금토
        for (let w = 0; w < 7; w++) {
            const td = document.createElement("td");
            td.textContent = weekDays[w];
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
        
        const firstDayOfWeek = new Date(year, month, 1).getDay(); //첫번째날 구하기
        const lastDay = getLastOfTheMonth(year, month); //마지막날 구하기
        
        //tr, td 생성
        for (let i = 0; i < calendar.numOfWeeks; i++) {
            const tr = document.createElement("tr");
            for (let j = 0; j < 7; j++) {
            if (i * 7 + j < firstDayOfWeek || date > lastDay) {   //현재달의 첫날 이전이거나 현재 달 마지막 날을 넘어갈때 빈셀 생성
                const td = document.createElement("td");
                td.innerHTML = "&nbsp;";
                tr.appendChild(td);
            } else {
                const td = document.createElement("td");
                td.textContent = date;
                //현재날짜
                if (date === calendar.date && month === calendar.month && year === calendar.year) {
                    td.classList.add("current-date-cell");
                }

                tr.appendChild(td);
                date++;
            }}
            tbody.appendChild(tr);
        }}
        //윤년
        function getLastOfTheMonth(year, month) {
            const lastDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
                lastDay[1] = 29;
            }
            return lastDay[month];
        }
        //주어진달의 시작 요일 구하기
        function getNumberOfWeeks(year, month) {
            const firstDayOfWeek = new Date(year, month, 1).getDay();
            return Math.ceil((firstDayOfWeek + getLastOfTheMonth(year, month)) / 7);
        }
        //다음달 구하기
        function getNextMonthCalendar() {
            const nextMonthDate = new Date(calendar.year, calendar.month + 1, 1);
            const nextMonth = document.querySelector(".select-next-wrapper");

            nextMonth.textContent = `${nextMonthDate.getFullYear()}년 ${nextMonthDate.getMonth() + 1}월`;
            const nextCalendar = {
                year: nextMonthDate.getFullYear(),
                month: nextMonthDate.getMonth(),
            };
            nextCalendar.numOfWeeks = getNumberOfWeeks(nextCalendar.year, nextCalendar.month);
            renderCalendar(nextCalendar.year, nextCalendar.month, ".month2");
        }
        //초기달력정보
        function getCalendar() {
        if (calendar.year == 0) {
            const date = new Date();
            calendar.year = date.getFullYear();
            calendar.month = date.getMonth();
            calendar.date = date.getDate();
        }
        calendar.numOfWeeks = getNumberOfWeeks(calendar.year, calendar.month);
        }
        function nextMonth(num) {
            calendar.month += num;
            if (calendar.month == -1) {
                calendar.month = 11;
                calendar.year--;
            } else if (calendar.month == 12) {
                calendar.month = 0;
                calendar.year++;
            }
            showCalendar();
            }
        getCalendar();
        getNextMonthCalendar();
        renderCalendar(calendar.year, calendar.month, ".month1");
        }


    showCalendar();
})
let calendar = { year:0, month:0, date:1, theDayOfTheWeek:0, lastDay:0, numOfWeeks:0};
let month = ["1월", "2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"];

function showCalendar()
{
    let numOfWeek =0, date=1, i=0, j=0;
    let table = "";
    let curMonth = 0, curYear = 0, curDate = 0;
    getCalendar();
    let now = new Date();
    curMonth = now.getMonth();
    curYear = now.getFullYear();
    curDate = now.getDate();
    table += "<div class = 'month'>";
    table += "<ul>";
    table += "<li class='prev'><a href='#' onclick='nextMonth(-1)' style='color:black;'>&#10094;</a></li>";
    table += "<li class='next'><a href='#' onclick='nextMonth(1)' style='color:black;'>&#10095;</a></li>";
    table += "<li style='text-align:center'>";
    table += "<span class='yearMonth' style='font-size:1.5em' >" + calendar.year + "년 " + "</span>";
    table += "<span class='yearMonth' style='font-size:1.5em'>"+ month[calendar.month];
    table += "</li>";
    table += "</ul>";
    table += "</div>";
    table += "<table>";
    table += "<tr class = 'weekdays'>";
    table += "<td>일</td><td>월</td><td>화</td><td>수</td><td>목</td><td>금</td><td>토</td>";
    table += "</tr>";

    for(i=0;i<calendar.numOfWeeks;i++)
    {
        table += `<tr class = 'days'>`;
        for(j=0;j<7;j++)
        {
            if(i*7+j<calendar.theDayOfTheWeek || date > calendar.lastDay) table += "<td>&nbsp;</td>";
            else
            {
              if(date == curDate && calendar.month == curMonth && calendar.year == curYear) table += "<td class = 'active'>";
              else table +=`<td>`;
              table += date++ + `</td>`;
            }
        }
        table += `</tr>`;
    }
    table += `</table>`;
    document.getElementById("calendar").innerHTML = table;
}

function getCalendar()
{
    let date = null;
    if(calendar.year==0)
    {
        date = new Date();
        calendar.year = date.getFullYear();
        calendar.month = date.getMonth();
        calendar.date = date.getDate();
    }

    getLastDayOfTheMonth();
    getNumberOfWeeks();
}
function getLastDayOfTheMonth()
{
    let lastDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if(calendar.year%4 == 0 && calendar.year%100 != 0 || calendar.year%400==0){
        lastDay[1] = 29;
    }
    calendar.lastDay = lastDay[calendar.month];
}
function getNumberOfWeeks()
{
    calendar.theDayOfTheWeek = new Date(calendar.year, calendar.month, 1).getDay();
    calendar.numOfWeeks = Math.ceil((calendar.theDayOfTheWeek+calendar.lastDay)/7);
}
function nextMonth(num)
{
    calendar.month += num;
    if(calendar.month == -1)
    {
        calendar.month = 11;
        calendar.year--;
    }
    else if(calendar.month == 12)
    {
        calendar.month = 0;
        calendar.year++;
    }
    showCalendar();
}
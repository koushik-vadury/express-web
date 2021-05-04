const btn = document.getElementById("submitbtn");
const search = document.getElementById("cityname");
const showData = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");
const dataHide = document.querySelector(".middle_layer");

const getinfo = async (event) => {
  event.preventDefault();
  const cityName = search.value;

  if (cityName === " ") {
    showData.innerHTML = "Please Write A City Name Before Search";
    dataHide.classList.add("data_hide");
  } else {
    try {
      dataHide.classList.remove("data_hide");
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metrics&appid=c4a9c5f1da87fe7db7100beaa6f89b8f`;
      const data = await fetch(url);
      const Rdata = await data.json();
      const name = Rdata.name;
      const country = Rdata.sys?.country;
      const tempRes = Rdata.main?.temp;
      const tempSts = Rdata.weather[0]?.main;

      showData.innerHTML = `${name},${country}`;
      temp.innerHTML = ` ${tempRes}`;
      temp_status.innerHTML = `${tempSts}`;
    } catch {
      showData.innerHTML = "Please Write A City Name Properly";
      dataHide.classList.add("data_hide");
    }
  }
};
btn.addEventListener("click", getinfo);

// search.addEventListener("onChange", () => {
//   alert("changes");
// });
const day = document.getElementById("day");
const toDate = document.getElementById("today_date");

const date = new Date();

var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var TDate = weekday[date.getDay()];
day.innerHTML = `${TDate}`;

const Tmonth = date.getMonth();

var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var Fmonth = month[Tmonth];

const Tdate = date.getDate() < 9 ? "0" + date.getDate() : date.getDate();

toDate.innerHTML = `${Tdate}-${Fmonth}`;

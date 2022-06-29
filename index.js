// Your code here
const form = document.querySelector("form");
const input = document.getElementById("weather-search");
const api_key = "4237191eb462a237532ce11fc2d03958";

form.onsubmit = async (e) => {
  e.preventDefault();

  console.log(input.value);
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=imperial&appid=${api_key}&q=${input.value}`
  );

  let data = await response.json();
  console.log(data);
};

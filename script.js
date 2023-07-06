function handleClick() {
    const searchInput = document.getElementById("Search-box");
    const cityName = searchInput.value;
    fetchData(cityName);
}

function handleKeyDown(event) {
    if (event.key === "Enter") {
        const searchInput = document.getElementById("Search-box");
        const cityName = searchInput.value;
        fetchData(cityName);
        event.preventDefault();
    }
}

async function fetchData(){
    var cityName = document.getElementById('Search-box').value;
    const apikey = 'cf36667e803654aced1e658be59cee73';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}&units=metric`);
    const datas = await response.json();
    console.log(datas)
    var city = document.getElementById("cityName");
    city.innerHTML = datas.name;
    var t = document.getElementById("temperature");
    t.innerHTML = datas.main.temp;
    var h = document.getElementById("Humid-percent");
    h.innerHTML = datas.main.humidity;
    var p = document.getElementById("press-percent");
    p.innerHTML = datas.main.pressure;
    var w = document.getElementById("Windy-percent");
    w.innerHTML = datas.wind.speed;
    var desc = document.getElementById("Description");
    desc.innerHTML = datas.weather[0].description;
    var country = document.getElementById("Country");
    country.innerHTML = datas.sys.country;
    var feel = document.getElementById("feel-degree");
    feel.innerHTML = datas.main.feels_like;
    var icon = document.getElementById("Current-Weather-Logo");
    icon.innerHTML = datas.weather[0].icon;
    var timestamp = datas.dt;
    var date = new Date(timestamp * 1000);
    var day = date.toLocaleString('en-us', { weekday: 'long' });
    var formattedDate = date.toLocaleString('en-us', { day: 'numeric', month: 'long', year: 'numeric' });
    var formattedTime = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    var dayElement = document.getElementById("day");
    dayElement.innerHTML = day;
    var dateElement = document.getElementById("date");
    dateElement.innerHTML = formattedDate;
    var timeElement = document.getElementById("time");
    timeElement.innerHTML = formattedTime;
}
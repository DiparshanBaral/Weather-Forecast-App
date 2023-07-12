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
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?i=poole&q=${cityName}&appid=cf36667e803654aced1e658be59cee73&units=metric`);
    const datas = await response.json();
    console.log(datas)
    if (datas.message == "Nothing to geocode"){
        document.getElementById("error_message").innerHTML = "Input cannot be empty." // Display error message if input is empty.
        document.getElementById("Search-box").style.borderColor = "red" // Set the border color to red because of error.
    }
    else if (datas.message == "city not found"){
        document.getElementById("error_message").innerHTML = "City not found. Please input a valid city..."; // Display error message if city is not found in API. 
        document.getElementById("Search-box").style.borderColor = "red"; // Set the border color to red because of error.
    }
    else{
        document.getElementById("error_message").innerHTML = ""; // Clear the error message
        document.getElementById("Search-box").style.borderColor = ""; // Reset the border color
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
        var weather_icon = document.getElementById("Current-Weather-Logo");
        icon = datas.weather[0].icon;
        weather_icon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
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
}
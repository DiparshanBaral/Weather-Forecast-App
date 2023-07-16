function handleClick() { // Function for when the search button is clicked
    const searchInput = document.getElementById("Search-box"); 
    const cityName = searchInput.value; // Call the fetchData function with the entered city name
    fetchData(cityName);
}

function handleKeyDown(event) { // Function for when the enter button is pressed 
    if (event.key === "Enter") {
        const searchInput = document.getElementById("Search-box");
        const cityName = searchInput.value;
        fetchData(cityName); // Call the fetchData function with the entered city name
        event.preventDefault(); // Prevent the default behavior of the Enter key
    }
}

window.addEventListener("load",fetchDefault()); // Add event listener for the "load" event and call the fetchDefault function


async function fetchDefault(){
    // Fetch datas from the openweathermap api using the async await function
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=poole&appid=cf36667e803654aced1e658be59cee73&units=metric`);// Here default cityname is searched and displayed as poole and my unique apiid is defined. Also, units are set to metric
    const datas = await response.json(); // Parse the response body as JSON and assign it to the 'datas' variable
    console.log(datas);
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
        var t = document.getElementById("temperature"); // Get the element with the id "temperature" and assign it to the variable 't'
        t.innerHTML = datas.main.temp; // Set the innerHTML property of the 't' element to the temperature value obtained from 'datas'
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


async function fetchData(){
    var cityName = document.getElementById('Search-box').value;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=cf36667e803654aced1e658be59cee73&units=metric`); // Here cityname is searched by the user is added to the link using ${} and my unique apiid is also defined. Also, units are set to metric
    const datas = await response.json(); // Parse the response body as JSON and assign it to the 'datas' variable
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
        var t = document.getElementById("temperature"); // Get the element with the id "temperature" and assign it to the variable 't'
        t.innerHTML = datas.main.temp; // Set the innerHTML property of the 't' element to the temperature value obtained from 'datas'
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
        weather_icon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`; // Set the 'src' attribute of the 'weather_icon' element to display the weather icon image
        var timestamp = datas.dt; // Get the timestamp value from the 'dt' property in 'datas'
        var date = new Date(timestamp * 1000); // Create a new Date object by multiplying the timestamp value by 1000 to convert it to milliseconds
        var day = date.toLocaleString('en-us', { weekday: 'long' }); // Get the day of the week from the 'date' object and assign it to the 'day' variable
        var formattedDate = date.toLocaleString('en-us', { day: 'numeric', month: 'long', year: 'numeric' }); // Format the date using the 'toLocaleString' method to obtain a localized date string with the day, month, and year
        
        // Format the time using the 'toLocaleString' method to obtain a localized time string with the hour and minute,
        // displayed in either 12-hour format with AM/PM designation based on the user's locale
        var formattedTime = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });  

        var dayElement = document.getElementById("day"); 
        dayElement.innerHTML = day; //Display the day obtained and stored in day
        var dateElement = document.getElementById("date");
        dateElement.innerHTML = formattedDate;
        var timeElement = document.getElementById("time");
        timeElement.innerHTML = formattedTime;
    }
}
async function fetchData(){
    var cityName = document.getElementById('Search-box').value;
    const apikey = 'cf36667e803654aced1e658be59cee73';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}&units=metric`);
    const datas = await response.json();
    console.log(datas)
    var city = document.getElementById('cityN');
    city.innerHTML = datas.main.name;
    var t = document.getElementById('temperature');
    t.innerHTML = datas.main.temp;
    var h = document.getElementById('Humid-percent');
    h.innerHTML = datas.main.humidity;
    var p = document.getElementById('press-percent');
    p.innerHTML = datas.main.pressure;
    var desc = document.getElementById('d');
    desc.innerHTML = datas.weather.description;
}
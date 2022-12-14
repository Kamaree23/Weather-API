// -------------- Pull weather API --------------- //
const getWeather = async (city) => {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=15b839f713cb702f72b36f41548b9338&units=imperial`,
    {
        method: 'GET'
    });
    let data = await response.json();
    console.log(data)
    return data
};



// ----------- Form bar for submitting data --------------- //
let form = document.getElementById('searchweather');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let city = event.path[0][0].value
        showWeather(city)
        form.reset()
    })




// ------------Time to add the rows ----------- //
const showWeather = async (city) => {
    let data =  await getWeather(city);
    console.log(data)
    let new_row = `
                    <div class="title"><h4> ${data.name} </h4></div>
                    <div class='theflex'>
                    <p class='weathertxt'>temp: ${data.main.temp} &deg &nbsp; </p>
                    <p>min: ${data.main.temp_min}&deg &nbsp;&nbsp; </p>
                    <p>max: ${data.main.temp_max}&deg &nbsp;&nbsp;&nbsp;&nbsp; </p>
                    <p>humidity: ${data.main.humidity} &nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <p>Type: ${data.weather[0].description} </p>
                    </div>`;
                    document.getElementById('weatherhouse').insertAdjacentHTML("afterbegin", new_row);
}
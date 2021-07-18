

const submitBtn = document.getElementById('submitBtn');
const cityname = document.getElementById('cityname');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');


function divide(a,b){
    return a/b;
}

const getInfo = async (event)=>{
    event.preventDefault();
   
    

let cityVal = cityname.value;
if(cityVal===""){
    city_name.innerText = `Please enter your city name`;
}
else{
    try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&unit=metric&appid={API_ID}`;
        
        const response = await fetch(url);
       
        var data = await response.json();
        const arrData = [data];
        const temperature = arrData[0].main.temp;
        temp.innerText = `${divide(temperature,10).toFixed(2)}`+"℃";
        temp_status.innerText = arrData[0].weather[0].main;
        city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;
       

        const tempStatus = arrData[0].weather[0].main;
        console.log(tempStatus)
        if(tempStatus == "Sunny"){
            temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
        }else if(tempStatus == "Clouds"){
            temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #F1F2F6;'></i>"
        }
        else if(tempStatus == "Rain"){
            temp_status.innerHTML = "<i class='fas fa-rain' style='color: #a4b0be;'></i>";
        }
        else if(tempStatus == "Thunderstorm"){
            temp_status.innerHTML = "<i class='fas fa-bolt' ></i>"   
        }else{
            temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #F1F2F6;'></i>";
        }

        }catch(e){
        city_name.innerText = `Please enter your city name properly`;
        temp.innerText = `  `;
        temp_status.innerText = ` `;
        console.log(e);

    }
}

}
submitBtn.addEventListener('click',getInfo);
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setdata] = useState({});
  const [city, setcity] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=954606049489797bc064f17899faeca0`;
 useEffect(()=>{
   alert('Hey, 👋\n Praveen  welcomes you to weather app 😊 ')
 },[])
  const searchcity = (e) => {
    if (e.key === "Enter") {
      axios
        .get(url)
        .then((res) => {
          setdata(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
      setcity("");
    }
  };
  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          value={city}
          onChange={(e) => setcity(e.target.value)}
          onKeyPress={searchcity}
          placeholder="Search city"
        ></input>
      </div>
      <div className="container">
       {data.name!=undefined &&
        <div className="up">
          <div className="bold heading">
            <p>----------------Praveen----------------</p>
          </div>
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="icon">
            {data.coord?<p>latitude  :  {data.coord.lat}</p>:null}
            </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
}
        {data.name &&  <div className="Down">
          <div className="feels">
            {data.main ? (
              <p className="bold">{data.main.feels_like}°F</p>
            ) : null}

            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className="bold">{data.main.humidity}%</p> : null}

            <p>Humidity</p>
          </div>
          <div className="Wind">
            {data.wind ? <p className="bold">{data.wind.speed.toFixed()}MPH</p> : null}

            <p>Wind Speed</p>
          </div>
        </div>
}
       
      </div>
    </div>
  );
}

export default App;

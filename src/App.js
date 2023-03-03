import { useState } from 'react';
import styled from 'styled-components';
import CityComponent from './modules/CityComponent';
import WeatherComponent from './modules/WeatherComponent';
import axios from 'axios';

const API_KEY="80c045e56857dfe819f2a63e4e095381";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 40px;
  box-shadow: 0 3px 6px 0 #555;
  padding: 20px,20px;
  border-radius: 4px;
  width: 380px;
  height: 400px;
  background:white;
`;

const AppLabel = styled.div`
  color: black;
  font-size: 18px;
  font-weight:bold;
  margin:0px auto;

`;



function App  ()  {
  const[city, updateCity] = useState();
  const[weather, updateWeather] = useState();

  const fetchWeather = async(e) => {
    e.preventDefault();
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    updateWeather(response.data);
  };

  return (
      <Container>
      <AppLabel ><h2><i>Weather App</i></h2></AppLabel>
      {weather?(<WeatherComponent weather={weather}/>
      ):(<CityComponent  updateCity={updateCity} fetchWeather={fetchWeather}/>)}
      
    </Container>
  );
}

export default App


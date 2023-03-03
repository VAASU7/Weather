import styled from "styled-components"

export const WeatherInfoIcons = {
  Sunset: "/icons/temp.svg",
  Sunrise: "/icons/temp.svg",
  Humidity: "/icons/humidity.svg",
  Wind: "/icons/wind.svg",
  Pressure: "/icons/pressure.svg",
} ;

export const WeatherIcons = {
  "01d": "/icons/sunny.svg",
  "01n": "/icons/night.svg",
  "02d": "/icons/day.svg",
  "02n": "/icons/cloudy-night.svg",
  "03d": "/icons/wind.svg",
  "03n": "/icons/cloudy.svg",
  "04d": "/icons/perfect-day.svg",
  "04n": "/icons/cloudy-night.svg",
  "09d": "/icons/rain.svg",
  "09n": "/icons/rain-night.svg",
  "10d": "/icons/rain.svg",
  "10n": "/icons/rain-night.svg",
  "11d": "/icons/storm.svg",
  "11n": "/icons/storm.svg",
  "13d": "/icons/sleet.svg",
  "13n": "/icons/snow.svg",
  "50d":"/icons/haze.svg",
  "50n":"/icons/mist.svg",
  
} ;


const WeatherCondition = styled.div`
  display:flex;
  flex_direction:row;
  align-items:center;
  justify-content:space-between;
  width:100%;
  margin:30px auto;


`;
const Condition = styled.span`
  margin:-40px auto;
  padding: 10px 10px;
  font-size:14px;
  
  text-transform:capitalize;
  & span{
    font-size:28px;
    align-items:left;
    font-weight:normal;
  }
  
`;
const WeatherLogo = styled.img`
  width:100px;
  height: 100px;
  margin:-30px auto;

`;
const Location = styled.span`
  font-size:20px;
  font-weight:bold;
  text-align:center;
  margin:10px;


`;
const WeatherInfoLabel = styled.span`
  font-size:14px;
  font-weight:bold;
  text-align:left;
  margin:10px 25px 25px;

`;

const InfoContainer = styled.div`
  display:flex;
  flex_direction:row;
  margin:5px 10px;
  justify-content:space-evenly;
  align-items:center;

`;
const InfoIcon = styled.img`
  width:36px;
  height: 36px;
  align-items:center;
  margin: 0px 0px 10px 10px;

`;
const InfoLabel = styled.span`
display:flex;
  font-size:15px;
  text-align:center;
  align-items:center;
  
  & span{
    text-align:center;
    align-items:center;
    font-size:14px;
    text-transform:captalize;
    font-weight:bold;
  }

`;
const WeatherInfoComponent = (props) => {
  const {name,value} = props;
  return (
    <InfoContainer>
      <InfoIcon src={WeatherInfoIcons[name]}/>
      <InfoLabel>{value}\
      <span>{name}</span>
      </InfoLabel>
      
    </InfoContainer>
  );
}

const WeatherInfoContainer = styled.div`
  display:flex;
  flex_direction:row;
  align-items:center;
  justify-content:space-evenly;
  width:90%;
  flex-wrap:wrap;
  margin:-10px;
  align:center;
`;


const WeatherComponent = (props) => {
  const {weather} = props;
  const isDay = weather?.weather[0].icon?.includes('d')
  const getTime = (timeStamp)=>{
    return `${new Date(timeStamp *1000).getHours()}: 
    ${new Date(timeStamp *1000).getMinutes()}`
  }
  return (
      <>
      <WeatherCondition>
      <Condition>
        <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
        <i>{`|${weather?.weather[0].description} `}</i></Condition>
      <WeatherLogo src={WeatherIcons[weather?.weather[0].icon]}/>
      </WeatherCondition>
      <Location> <i>{`${weather?.name}, ${weather?.sys?.country}`}</i></Location>
      <WeatherInfoLabel><i>Weather Info</i> </WeatherInfoLabel>
      <WeatherInfoContainer>
        <WeatherInfoComponent name={isDay ? "Sunset":"Sunrise"} 
        value={getTime(weather?.sys[isDay ? "Sunset":"Sunrise"])}/>
        <WeatherInfoComponent name="Humidity" value={weather?.main?.humidity}/>
        <WeatherInfoComponent name="Wind" value={weather?.wind?.speed}/><br></br>
        <WeatherInfoComponent name="Pressure" value={weather?.main?.pressure}/>

      
      </WeatherInfoContainer>
      </>
  );
    
};

export default WeatherComponent

import styled from "styled-components"

const WeatherLogo = styled.img`
  width:140px;
  height: 140px;
  margin:30px auto;

`;
const ChooseCity = styled.span`
  color:black;
  height: 140px;
  margin:-20px auto;

`;
const SearchBox = styled.form`
  display:flex;
  flex-direction:row;
  border:black solid 1px;
  border-radius: 4px;
  color:black;
  font-size:30px;
  font-weight:bold;
  margin:20px auto;

  & input{
    padding:10px;
    font-size:14px;
    border:1px;
    font-weight:bold;
  }
  & button{
    padding:10px;
    font-size:14px;
    color:white;
    background:black;
    border:1px;
    font-weight:bold;
    cursor:pointer;
  }
`;

const CityComponent =(props) =>{
  const {updateCity,fetchWeather} = props;
  return(
    <>
    <WeatherLogo src="/icons/perfect-day.svg" ></WeatherLogo>
    <ChooseCity><h3><i>Find Weather of Your city</i></h3></ChooseCity>
    <SearchBox onSubmit={fetchWeather}>
      <input placeholder="City Name" 
      onChange={(e)=>updateCity(e.target.value)}/>
      <button type="submit">Search</button>
    </SearchBox>
    </>
    )
}

export default CityComponent
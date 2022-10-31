import "./currentWeather.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label"></span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">دمای محسوس</span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like)}
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">سرعت باد</span>
            <span className="parameter-value" dir="ltr">
              {data.wind.speed} m/s
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">رطوبت</span>
            <span className="parameter-value" dir="ltr">
              {data.main.humidity}%
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">فشار هوا</span>
            <span className="parameter-value" dir="ltr">
              {data.main.pressure} hPa
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;

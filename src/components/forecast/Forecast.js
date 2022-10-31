import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.slice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    alt="weather"
                    className="icon-small"
                    src={`icons/${item.weather[0].icon}.png`}
                  />
                  <label className="day">{forecastDays[idx]}</label>
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max">
                    {Math.round(item.main.temp_min)}°C /{" "}
                    {Math.round(item.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label>فشار هوا</label>
                  <label>{item.main.pressure} پاسکال</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>رطوبت</label>
                  <label>{item.main.humidity} درصد</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>سرعت ابر</label>
                  <label>{item.clouds.all}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>سرعت باد</label>
                  <label>{item.wind.speed} متر بر ثانیه</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>سطح آب دریا</label>
                  <label>{item.main.sea_level} متر</label>
                </div>

                <div className="daily-details-grid-item">
                  <label>دمای محسوس</label>
                  <label>{Math.round(item.main.feels_like)} سانتی گراد</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;

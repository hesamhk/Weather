import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { weatherAction } from "./Redux/action";

const Weather = () => {
  const dispatch = useDispatch();
  const { weatherdata, loading, error } = useSelector((state) => state.weather);
  const [location, setLocation] = useState("tehran");
  useEffect(() => {
    dispatch(weatherAction(location, "32c4643d821a8f85aa4e7b3202278e03"));
  }, [dispatch, location]);
  return (
    <div className=" font-['Agdasima'] box-border w-full h-[100vh] bg-[url('../public/Thunderhead.jpeg')] bg-center bg-no-repeat bg-cover">
      <div className="flex flex-col gap-20 justify-center items-center mx-auto">
        <div className="my-7">
          <input
            className="bg-transparent w-80 text-2xl text-white placeholder:text-white rounded-full text-center py-4 outline-none border-[#313c4a] border-2"
            placeholder="Enter Location"
            onClick={() => setLocation("")}
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          />
        </div>
        <div className="flex flex-col gap-4 text-black w-[30%]">
          <div className="text-4xl font-bold">{weatherdata?.name}</div>
          <div className="flex justify-between items-center">
            <p className="text-9xl font-bold">
              {weatherdata?.main?.temp.toFixed()}°
            </p>
            {/* <img
          className="w-28 h-28"
          src={`http://openweathermap.org/img/w/${weatherdata?.weather[0].icon}.png`}
        /> */}
            <p className="text-4xl font-extrabold -rotate-90">
              {weatherdata?.weather[0].main}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center text-center mt-28 text-2xl text-white w-[30%] bg-[rgba(255,255,255,0.2)] p-[1rem] rounded-xl">
          <div className="flex flex-col">
            <div>{weatherdata?.main.feels_like.toFixed()}°</div>
            <p>Feels Like</p>
          </div>
          <div className="flex flex-col">
            <div>{weatherdata?.main.humidity}%</div>
            <p>Humidity</p>
          </div>
          <div className="flex flex-col">
            <div>{weatherdata?.wind.speed}km</div>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;

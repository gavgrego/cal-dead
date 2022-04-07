import { useQuery, UseQueryResult } from "react-query";

export type Weather = {
  base: string;
  main: { temp: number; feels_like: number; temp_min: number };
  name: string;
  weather: Array<any>;
};

const useGetWeather = () => {
  const { isLoading, error, data } = useQuery("getWeather", () =>
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=37.9735346&lon=-122.5310874&appid=${process.env.WEATHER_API_TOKEN}&units=imperial`
    ).then((res) => res.json())
  );
  return { isLoading, error, data };
};

export default useGetWeather;

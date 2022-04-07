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
      "https://api.openweathermap.org/data/2.5/weather?lat=37.9735346&lon=-122.5310874&appid=34eea8a1df134c110672f8a2b6fce63a&units=imperial"
    ).then((res) => res.json())
  );
  return { isLoading, error, data };
};

export default useGetWeather;

import { useQuery, UseQueryResult } from "@tanstack/react-query";

export type Weather = {
  base: string;
  main: { temp: number; feels_like: number; temp_min: number };
  name: string;
  weather: Array<any>;
};

const useGetWeather = (location: string) => {
  const { isInitialLoading, error, data } = useQuery<Weather, Error>(
    [`${location}-weather`],
    () =>
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?${location}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_TOKEN}&units=imperial`
      ).then((res) => res.json())
  );
  return { isInitialLoading, error, data };
};

export default useGetWeather;

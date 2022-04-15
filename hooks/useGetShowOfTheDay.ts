import React from "react";
import { useQuery, UseQueryResult } from "react-query";
const UseGetShowOfTheDay = () => {
  const { data, error, isLoading } = useQuery("show-of-the-day", () => {});
  return;
};

export default UseGetShowOfTheDay;

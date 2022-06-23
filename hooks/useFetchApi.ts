import { useQuery, UseQueryResult } from "react-query";

const baseUrl = "https://cal-dead-strapi.herokuapp.com";

const UseFetchApi = async (path: string) => {
  const url = `${baseUrl}/${path}`;

  const response = await fetch(`${url}`);
  const data = await response.json();

  return data;
};
export default UseFetchApi;

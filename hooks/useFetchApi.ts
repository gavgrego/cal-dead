import { useQuery, UseQueryResult } from "react-query";

const baseUrl = "https://cal-dead-strapi.herokuapp.com/";

const UseFetchApi = async (path: string, params = null) => {
  let url;
  if (params !== null) {
    url = `${baseUrl}/${path}/${params}`;
  } else {
    url = `${baseUrl}/${path}`;
  }

  const response = await fetch(`${url}`);
  const data = await response.json();
  return data;
};
export default UseFetchApi;

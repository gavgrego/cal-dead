import { useQuery, UseQueryResult } from "react-query";

const baseUrl = "http://localhost:1337";

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

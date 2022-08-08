const baseUrl = process.env.NEXT_PUBLIC_API_URL;

console.log(baseUrl);

const UseFetchApi = async (path: string) => {
  const url = `${baseUrl}/${path}`;

  const response = await fetch(`${url}`);
  const data = await response.json();

  return data;
};
export default UseFetchApi;

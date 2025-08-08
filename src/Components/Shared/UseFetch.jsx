const UseFetch = async (api) => {
  const response = await fetch(api);
  if (!response.ok) {
    throw new Error("Error while fetching data");
  }
  const data = await response.json();
  return data;
};

export default UseFetch;

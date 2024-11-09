const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};

export const getApiUrl = async (path: string) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}${path}`,
    options,
  );
  return response.json();
};

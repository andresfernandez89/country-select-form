import { getApiUrl } from "../config";

export const getCitiesByState = async (
  country: string,
  state: string,
): Promise<string[]> => {
  const response = await getApiUrl({
    path: "/countries/state/cities",
    options: {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ country, state }),
    },
  });
  return response.data.data
    .map((city: string) => city)
    .sort((a: string, b: string) => a.localeCompare(b));
};

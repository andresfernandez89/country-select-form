import { ICountry } from "../../types/api";
import { getApiUrl } from "../config";

export const getAllCountries = async () => {
  const response = await getApiUrl({
    path: "/countries/info?returns=flag",
    options: {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    },
  });
  return response.data.data
    .map((country: ICountry) => country.name)
    .sort((a: string, b: string) => a.localeCompare(b));
};

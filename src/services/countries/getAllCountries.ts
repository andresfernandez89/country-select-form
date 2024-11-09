import { ICountry } from "../../types/api";
import { getApiUrl } from "../config";

export const getAllCountries = async () => {
  const response = await getApiUrl({
    path: "/countries/info?returns=flag",
    method: "GET",
  });
  return response.data.map((country: ICountry) => country.name);
};

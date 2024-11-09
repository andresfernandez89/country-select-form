import { ICountry } from "../../types/api";
import { getApiUrl } from "../config";

export const getAllCountries = async () => {
  const response = await getApiUrl(`/countries/info?returns=flag`);
  return response.data.map((country: ICountry) => country.name);
};

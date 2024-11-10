import { IState } from "../../types/api";
import { getApiUrl } from "../config";

export const getStatesByCountry = async (
  country: string,
): Promise<string[]> => {
  const response = await getApiUrl({
    path: "/countries/states",
    options: {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ country }),
    },
  });
  return response.data.data.states
    .map((state: IState) => state.name)
    .sort((a: string, b: string) => a.localeCompare(b));
};

import { useEffect, useState } from "react";
import { getAllCountries } from "../services/countries/getAllCountries";

export function useCountry() {
  const [countries, setCountries] = useState<string[]>([]);
  useEffect(() => {
    getAllCountries().then((response) => setCountries(response));
  }, []);
  return { countries };
}

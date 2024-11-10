import { useEffect, useState } from "react";
import { getCitiesByState } from "../services/cities/getCitiesByEstate";

export function useCity(country: string | null, state: string | null) {
  const [cities, setCities] = useState<string[]>([]);
  useEffect(() => {
    if (country && state) {
      getCitiesByState(country, state).then((response) => setCities(response));
    } else {
      setCities([]);
    }
  }, [state]);
  return { cities };
}

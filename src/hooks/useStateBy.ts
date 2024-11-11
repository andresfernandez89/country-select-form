import { useEffect, useState } from "react";
import { getStatesByCountry } from "../services/states/getStatesByCountry";

export function useStateBy(country: string | null) {
  const [states, setStates] = useState<string[]>([]);
  useEffect(() => {
    if (country) {
      getStatesByCountry(country).then((response) => setStates(response));
    } else {
      setStates([]);
    }
  }, [country]);
  return { states };
}

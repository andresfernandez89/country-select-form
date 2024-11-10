import { ChangeEvent, useState } from "react";
import { useCity } from "./useCity";
import { useCountry } from "./useCountry";
import { useStateBy } from "./useStateBy";

export function useFormUser() {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [countrySelected, setCountrySelected] = useState<string | null>(null);
  const [stateSelected, setStateSelected] = useState<string | null>(null);
  const { countries } = useCountry();
  const { states } = useStateBy(countrySelected);
  const { cities } = useCity(countrySelected, stateSelected);

  const handleCountryChange = (
    e: ChangeEvent<HTMLSelectElement>,
    resetValues: (field: string, value: string) => void,
  ) => {
    setCountrySelected(e.target.value);
    setStateSelected(null);
    resetValues("province", "");
    resetValues("city", "");
  };

  const handleStateChange = (
    e: ChangeEvent<HTMLSelectElement>,
    resetValues: (field: string, value: string) => void,
  ) => {
    setStateSelected(e.target.value);
    resetValues("city", "");
  };

  return {
    countries,
    states,
    cities,
    countrySelected,
    handleCountryChange,
    handleStateChange,
    modalShow,
    setModalShow,
  };
}

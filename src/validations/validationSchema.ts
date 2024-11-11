import * as yup from "yup";

const schema = yup.object().shape({
  country: yup
    .string()
    .required("El país es obligatorio")
    .notOneOf(["Selecciona un país"], "Selecciona un país válido"),
  province: yup
    .string()
    .required("La provincia es obligatoria")
    .notOneOf(["Selecciona una provincia"], "Selecciona una provincia válida"),
  city: yup
    .string()
    .required("La ciudad es obligatoria")
    .notOneOf(["Selecciona una ciudad"], "Selecciona una ciudad válida"),
  fullName: yup.string().required("El nombre completo es obligatorio").trim(),
  email: yup
    .string()
    .email("Debe ser un correo electrónico válido")
    .required("El correo electrónico es obligatorio")
    .trim(),
  address: yup.string().optional().trim(),
});

export { schema };

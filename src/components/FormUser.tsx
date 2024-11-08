import * as formik from "formik";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import * as yup from "yup";
import styles from "./formUser.module.css";

function FormUser() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    country: yup
      .string()
      .required("El país es obligatorio")
      .notOneOf(["Selecciona un país"], "Selecciona un país válido"),
    province: yup
      .string()
      .required("La provincia es obligatoria")
      .notOneOf(
        ["Selecciona una provincia"],
        "Selecciona una provincia válida",
      ),
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

  return (
    <Container
      className={`${styles.containerForm} md:w-75 h-100 d-flex align-items-center justify-content-center`}
    >
      <Formik
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
        }}
        enableReinitialize:true
        initialValues={{
          country: "",
          province: "",
          city: "",
          fullName: "",
          email: "",
          address: "",
        }}
      >
        {({
          handleSubmit,
          handleChange,
          values,
          touched,
          errors,
          handleReset,
        }) => (
          <Form className="w-75" noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="fullName">
                <Form.Label>Nombre Completo</Form.Label>
                <Form.Control
                  type="text"
                  name="fullName"
                  value={values.fullName}
                  onChange={handleChange}
                  isValid={touched.fullName && !errors.fullName}
                  isInvalid={!!errors.fullName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.fullName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="email">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isValid={touched.email && !errors.email}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="address">
                <Form.Label>Dirección</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={values.address}
                  onChange={handleChange}
                  isValid={touched.address && !errors.address}
                  isInvalid={!!errors.address}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.address}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="selectCountry">
                <Form.Label>País</Form.Label>
                <Form.Select
                  aria-label="Seleccionar un país"
                  name="country"
                  value={values.country}
                  onChange={handleChange}
                  isValid={touched.country && !errors.country}
                  isInvalid={touched.country && !!errors.country}
                >
                  <option>Selecciona un país</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.country}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="selectProvince">
                <Form.Label>Provincia</Form.Label>
                <Form.Select
                  aria-label="Seleccionar una provincia"
                  name="province"
                  value={values.province}
                  onChange={handleChange}
                  isValid={touched.province && !errors.province}
                  isInvalid={touched.province && !!errors.province}
                >
                  <option>Selecciona una provincia</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.province}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="selectCity">
                <Form.Label>Ciudad</Form.Label>
                <Form.Select
                  aria-label="Seleccionar una ciudad"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  isValid={touched.city && !errors.city}
                  isInvalid={touched.city && !!errors.city}
                >
                  <option>Selecciona una ciudad</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.city}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <div className="d-flex column-gap-1 justify-content-end">
              <Button type="button" variant="danger" onClick={handleReset}>
                Cancelar
              </Button>
              <Button type="submit" variant="success">
                Guardar
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default FormUser;

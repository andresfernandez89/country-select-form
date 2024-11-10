import * as formik from "formik";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useCity } from "../../hooks/useCity";
import { useCountry } from "../../hooks/useCountry";
import { useStateBy } from "../../hooks/useStateBy";
import { schema } from "../../validations/validationSchema";
import ModalUser from "../ModalUser/ModalUser";
import styles from "./formUser.module.css";

function FormUser() {
  const [modalShow, setModalShow] = useState(false);
  const [countrySelected, setCountrySelected] = useState<string | null>(null);
  const [stateSelected, setStateSelected] = useState<string | null>(null);
  const { Formik } = formik;
  const { countries } = useCountry();
  const { states } = useStateBy(countrySelected);
  const { cities } = useCity(countrySelected, stateSelected);

  return (
    <Container
      className={`${styles.containerForm} col-12 col-sm-8 col-md-6 col-lg-4 col-xl-3 h-100 d-flex align-items-center justify-content-center`}
    >
      <Formik
        validationSchema={schema}
        onSubmit={() => {
          setModalShow(true);
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
          <div className="w-100 border border-1 rounded-3 p-4">
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group className="fw-medium" controlId="fullName">
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
              <Form.Group className="mt-3 fw-medium" controlId="email">
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
              <Form.Group className="mt-3 fw-medium" controlId="address">
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
              <Form.Group className="mt-3 fw-medium" controlId="selectCountry">
                <Form.Label>País</Form.Label>
                <Form.Select
                  aria-label="Seleccionar un país"
                  name="country"
                  value={values.country}
                  onChange={(e) => {
                    handleChange(e);
                    setCountrySelected(e.target.value);
                    setStateSelected(null);
                  }}
                  isValid={touched.country && !errors.country}
                  isInvalid={touched.country && !!errors.country}
                >
                  <option>Selecciona un país</option>
                  {countries &&
                    countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.country}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mt-3 fw-medium" controlId="selectProvince">
                <Form.Label>Provincia</Form.Label>
                <Form.Select
                  aria-label="Seleccionar una provincia"
                  name="province"
                  value={values.province}
                  onChange={(e) => {
                    handleChange(e);
                    setStateSelected(e.target.value);
                  }}
                  isValid={touched.province && !errors.province}
                  isInvalid={touched.province && !!errors.province}
                >
                  <option>Selecciona una provincia</option>
                  {states &&
                    states.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.province}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mt-3 fw-medium" controlId="selectCity">
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
                  {cities &&
                    cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.city}
                </Form.Control.Feedback>
              </Form.Group>
              <div className="d-flex column-gap-1 justify-content-between mt-4">
                <Button type="button" variant="secondary" onClick={handleReset}>
                  Cancelar
                </Button>
                <Button type="submit" variant="primary">
                  Guardar
                </Button>
              </div>
            </Form>
            <ModalUser show={modalShow} onHide={() => setModalShow(false)} />
          </div>
        )}
      </Formik>
    </Container>
  );
}

export default FormUser;

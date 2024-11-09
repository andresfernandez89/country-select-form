import { useFormikContext } from "formik";
import { FormEvent } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { IFormValues } from "../../types/form";
import { IModalUserProps } from "../../types/modal";

function ModalUser({ show, onHide }: IModalUserProps) {
  const { values, handleReset } = useFormikContext<IFormValues>();
  function handleOnSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert(`Datos confirmados:
      Nombre Completo: ${values.fullName}
      Correo electrónico: ${values.email}
      Dirección: ${values.address}
      País: ${values.country}
      Provincia: ${values.province}
      Ciudad: ${values.city}`);

    handleReset();
    onHide();
  }
  return (
    <Modal
      show={show}
      centered
      className="col-11 col-md-8 col-lg-6 col-xl-4 m-auto"
    >
      <Modal.Body>
        <Form noValidate onSubmit={handleOnSubmit}>
          <Form.Group className="fw-medium" controlId="fullName">
            <Form.Label>Nombre Completo</Form.Label>
            <Form.Control
              type="text"
              name="fullName"
              value={values.fullName}
              disabled
            />
          </Form.Group>
          <Form.Group className="mt-3 fw-medium" controlId="email">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control
              type="text"
              name="email"
              value={values.email}
              disabled
            />
          </Form.Group>
          <Form.Group className="mt-3 fw-medium" controlId="address">
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              type="text"
              name="address"
              value={values.address}
              disabled
            />
          </Form.Group>

          <Form.Group className="mt-3 fw-medium" controlId="selectCountry">
            <Form.Label>País</Form.Label>
            <Form.Select
              aria-label="Seleccionar un país"
              name="country"
              value={values.country}
              disabled
            >
              <option>{values.country}</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mt-3 fw-medium" controlId="selectProvince">
            <Form.Label>Provincia</Form.Label>
            <Form.Select
              aria-label="Seleccionar una provincia"
              name="province"
              disabled
            >
              <option>{values.province}</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mt-3 fw-medium" controlId="selectCity">
            <Form.Label>Ciudad</Form.Label>
            <Form.Select
              aria-label="Seleccionar una ciudad"
              name="city"
              disabled
            >
              <option>{values.city}</option>
            </Form.Select>
          </Form.Group>
          <div className="d-flex column-gap-1 justify-content-between mt-5">
            <Button type="button" variant="secondary" onClick={onHide}>
              Volver
            </Button>
            <Button type="submit" variant="primary">
              Confirmar datos
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ModalUser;

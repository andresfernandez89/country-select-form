import { useFormikContext } from "formik";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { IFormValues } from "../../types/form";
import { IModalUserProps } from "../../types/modal";
import showConfirmationAlert from "../alert/showConfirmationAlert";
import styles from "./modalUser.module.css";

function ModalUser({ show, onHide }: IModalUserProps) {
  const { values, handleReset } = useFormikContext<IFormValues>();
  function handleOnClick() {
    showConfirmationAlert().then(() => {
      handleReset();
      onHide();
    });
  }
  return (
    <Modal
      show={show}
      centered
      className={`col-11 col-md-8 col-lg-6 col-xl-4 m-auto ${styles.containerModal}`}
    >
      <Modal.Body>
        <Card className={styles.containerBody}>
          <Card.Body>
            <Card.Title>Nombre Completo</Card.Title>
            <Card.Text className="text-secondary-emphasis">
              {values.fullName}
            </Card.Text>
            <Card.Title>Correo electrónico</Card.Title>
            <Card.Text className="text-secondary-emphasis">
              {values.email}
            </Card.Text>
            <Card.Title>Dirección</Card.Title>
            <Card.Text className="text-secondary-emphasis">
              {values.address}
            </Card.Text>
            <Card.Title>País</Card.Title>
            <Card.Text className="text-secondary-emphasis">
              {values.country}
            </Card.Text>
            <Card.Title>Provincia</Card.Title>
            <Card.Text className="text-secondary-emphasis">
              {values.province}
            </Card.Text>
            <Card.Title>Ciudad</Card.Title>
            <Card.Text className="text-secondary-emphasis">
              {values.city}
            </Card.Text>
          </Card.Body>
          <div
            className={`d-flex column-gap-1 justify-content-between ${styles.containerButtons}`}
          >
            <Button type="button" variant="secondary" onClick={onHide}>
              Volver
            </Button>
            <Button type="button" variant="primary" onClick={handleOnClick}>
              Confirmar datos
            </Button>
          </div>
        </Card>
      </Modal.Body>
    </Modal>
  );
}

export default ModalUser;

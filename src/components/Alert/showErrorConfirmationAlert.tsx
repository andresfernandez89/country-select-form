import Swal from "sweetalert2";

export function showErrorConfirmationAlert() {
  return Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Error al enviar el formulario",
    confirmButtonColor: "#6c757d",
    confirmButtonText: "Volver",
  });
}

export default showErrorConfirmationAlert;

import Swal from "sweetalert2";

export function showConfirmationAlert() {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  return Toast.fire({
    icon: "success",
    title: "Enviando datos",
    confirmButtonColor: "#0d6efd",
  });
}

export default showConfirmationAlert;

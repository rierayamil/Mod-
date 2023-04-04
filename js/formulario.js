const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");

registerButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

loginButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

/* ---------------------------------------------------------------------------------------------Fin Animaciones */



/* --------------------------------------------------------------------------------------------VALIDACIONES// */
const formulario2 = document.getElementById('formulario2');
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input , #formulario2 input');


const expresiones = {
  usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, números, guion y guion_bajo
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  contraseña: /^.{5,14}$/, // 4 a 12 dígitos.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7,14}$/ // 7 a 14 números.
}




const campos = {
  usuario: false,
  contraseña: false,
  email: false
}



const validarFormulario = (e) => {
  switch (e.target.name) {
    case "usuario":
      validarCampo(expresiones.usuario, e.target, 'usuario');
      break;

    case "email":
      validarCampo(expresiones.email, e.target, 'email');
      break;

    case "contraseña":
      validarCampo(expresiones.contraseña, e.target, 'contraseña');
      break;

    case "email2":
      validarCampo(expresiones.email, e.target, 'email2');
      break;

    case "contraseña2":
      validarCampo(expresiones.contraseña, e.target, 'contraseña2');
      break;


  }
}

const validarCampo = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
    document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
    document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
    document.querySelector(`#grupo__${campo} i`).classList.add('bx-check');
    document.querySelector(`#grupo__${campo} i`).classList.remove('bxs-error-circle');
    document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
    campos[campo] = true;

  } else {
    document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
    document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
    document.querySelector(`#grupo__${campo} i`).classList.add('bxs-error-circle');
    document.querySelector(`#grupo__${campo} i`).classList.remove('bx-check');
    document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
    campos[campo] = false;
  }
}


inputs.forEach((input) => {
  input.addEventListener('keyup', validarFormulario);
  input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  const terminos = document.getElementById('terminos');
  if (campos.usuario && campos.email && campos.contraseña) {
    formulario.reset();


    document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
    setTimeout(() => {
      document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
    }, 4000);

    document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
      icono.classList.remove('formulario__grupo-correcto');
    });
  }

  else {
    document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
  }


});
/* -------------------------------------------------------------------------------------------------------------Fin validaciones */
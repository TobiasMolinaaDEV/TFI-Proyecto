document.addEventListener("DOMContentLoaded", function () {
// Busca todos los formularios de búsqueda:
    //    - El que está en la barra de navegación (<nav form[role='search']>)
    //    - Cualquier formulario dentro del contenedor de inicio (#buscador form)
    const formulariosBusqueda = document.querySelectorAll(
        "nav form[role='search'], #buscador form"
    );

    // Itera por cada formulario de búsqueda presente en la página
    formulariosBusqueda.forEach(function (formulario) {
        
        // Escucha el evento de envío (al hacer clic en "Buscar" o presionar Enter)
        formulario.addEventListener("submit", function (evento) {
            
            // Cancela el envío tradicional para evitar que el navegador recargue la página por defecto
            evento.preventDefault();

            // Localiza el campo de entrada de texto dentro de este formulario
            const input = formulario.querySelector("input[name='query']");
            
            // Si el campo no existe, corta la ejecución
            if (!input) return;

            // Lee el valor escrito y elimina espacios en blanco al inicio y al final
            const texto = input.value.trim();

            if (texto !== "") {
                // Si el usuario escribió un término, redirige a servicios.html pasando el texto codificado en la URL
                window.location.href = "servicios.html?query=" + encodeURIComponent(texto);
            } else {
                // Si el campo se envió vacío, redirige a servicios.html limpio (sin parámetros) para restablecer la vista
                window.location.href = "servicios.html";
            }
        });
    });


    // Busca el contenedor principal del catálogo de servicios (solo existe en servicios.html)
    const contenedorServicios = document.querySelector("#hanging-icons");

    // Verifica si el usuario se encuentra actualmente en la página del catálogo
    if (contenedorServicios) {
        
        // Obtiene la lista de todas las tarjetas de servicios (cada elemento con clase .col)
        const tarjetas = contenedorServicios.querySelectorAll(".col");
        
        // Obtiene el contenedor visual para mostrar el mensaje de "sin resultados"
        const mensajeSinResultados = document.querySelector("#mensaje-sin-resultados");
        
        // Obtiene el input de búsqueda del menú para sincronizar su texto si vino desde otra página
        const inputBuscar = document.querySelector("nav input[name='query']");

        // Lee y procesa los parámetros que vienen en la URL actual (lo que está tras el signo '?')
        const parametros = new URLSearchParams(window.location.search);
        
        // Extrae el valor de la variable 'query' (por ejemplo: "?query=gas" -> "gas")
        const consulta = parametros.get("query");

        // Función auxiliar para facilitar la coincidencia:
        // - toLowerCase(): pasa todo a minúsculas
        // - normalize("NFD"): separa las letras de sus acentos o tildes
        // - replace(...): elimina los acentos para que "Plomería" coincida con "plomeria"
        function normalizar(texto) {
            return texto
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "");
        }

        // Caso A: Si la URL incluye un parámetro de búsqueda con texto
        if (consulta && consulta.trim() !== "") {
            
            // Normaliza el término buscado
            const textoConsulta = normalizar(consulta);

            // Coloca el término buscado dentro de la caja de texto del navegador para que el usuario vea qué filtró
            if (inputBuscar) {
                inputBuscar.value = consulta;
            }

            // Contador para registrar cuántas tarjetas coinciden con la búsqueda
            let encontrados = 0;

            // Recorre cada tarjeta para comprobar si su título coincide
            tarjetas.forEach(function (tarjeta) {
                
                // Busca el encabezado donde está el título del servicio
                const tituloElemento = tarjeta.querySelector("h3, h5, .card-title");
                
                // Extrae y limpia el texto del título
                const textoTitulo = tituloElemento
                    ? normalizar(tituloElemento.textContent.trim())
                    : "";

                // Si el título contiene la palabra buscada
                if (textoTitulo.includes(textoConsulta)) {
                    // Remueve 'd-none' para asegurarse de que la tarjeta sea visible
                    tarjeta.classList.remove("d-none");
                    encontrados++; // Suma una coincidencia
                } else {
                    // Oculta la tarjeta agregando la clase 'd-none' de Bootstrap
                    tarjeta.classList.add("d-none");
                }
            });

            // Si ninguna tarjeta coincidió con la búsqueda
            if (encontrados === 0) {
                if (mensajeSinResultados) {
                    // Inserta el aviso explicativo en pantalla
                    mensajeSinResultados.textContent = "No encontramos servicios relacionados con: " + consulta;
                    // Muestra el contenedor de aviso retirando 'd-none'
                    mensajeSinResultados.classList.remove("d-none");
                }
            } else {
                // Si hubo al menos una coincidencia, asegura que el mensaje de error permanezca oculto
                if (mensajeSinResultados) {
                    mensajeSinResultados.classList.add("d-none");
                }
            }

        } else {
            // Caso B: Si la búsqueda está vacía o se ingresa a servicios.html directamente
            
            // Muestra todas las tarjetas sin excepción
            tarjetas.forEach(function (tarjeta) {
                tarjeta.classList.remove("d-none");
            });

            // Oculta cualquier mensaje de aviso previo
            if (mensajeSinResultados) {
                mensajeSinResultados.classList.add("d-none");
            }
        }
    }

  // Busca en todo el documento todos los elementos HTML que tengan asignada la clase CSS "servicio"
  const serviciosInicio = document.querySelectorAll(".servicio");

  // Recorre cada uno de los elementos encontrados en la lista
  serviciosInicio.forEach(function (servicio) {
    // Escucha cuando el cursor del ratón entra en el área del elemento
    servicio.addEventListener("mouseenter", function () {
      // Agranda el tamaño del elemento un 2% respecto a su escala original (efecto zoom)
      servicio.style.transform = "scale(1.02)";
      // Define que la animación de transformación tarde 0.2 segundos, logrando una transición suave
      servicio.style.transition = "transform 0.2s";
    });

    // Escucha cuando el cursor del ratón sale fuera del área del elemento
    servicio.addEventListener("mouseleave", function () {
      // Restaura la escala del elemento a su tamaño original (100%) con la misma suavidad de 0.2s
      servicio.style.transform = "scale(1)";
    });
  });

  // Busca el campo de texto de detalles por su ID único (#floatingDetails)
  const campoDetalles = document.querySelector("#floatingDetails");

  // Verifica que el campo exista en la página actual antes de ejecutar el resto
  if (campoDetalles) {
    // Obtiene el elemento <form> padre más cercano que contiene al campo
    const formularioContacto = campoDetalles.closest("form");

    // Busca el contenedor dentro del formulario donde se escribirá el texto del mensaje
    const mensajeEstado = formularioContacto.querySelector("#mensaje-estado");

    // Escucha el evento de envío del formulario al hacer clic en enviar o presionar Enter
    formularioContacto.addEventListener("submit", function (evento) {
      // Evita que la página se recargue o intente enviar la petición por defecto
      evento.preventDefault();

      // Extrae el valor del campo de nombre y quita los espacios en blanco iniciales/finales
      const nombre = formularioContacto
        .querySelector("#floatingName")
        .value.trim();

      // Extrae el valor del campo de email y quita los espacios sobrantes
      const email = formularioContacto
        .querySelector("#floatingEmail")
        .value.trim();

      // Extrae el valor del campo de detalles y quita los espacios sobrantes
      const detalles = campoDetalles.value.trim();

      // Valida si alguno de los tres campos obligatorios quedó vacío
      if (nombre === "" || email === "" || detalles === "") {
        if (mensajeEstado) {
          // Muestra el aviso de error en la página
          mensajeEstado.textContent = "Por favor, completa todos los campos.";
          // Aplica clases de Bootstrap: margen superior y texto en color rojo
          mensajeEstado.className = "mt-3 text-danger";
        }
        // Detiene la ejecución del código para no continuar con el envío
        return;
      }

      // Valida que el email contenga al menos un carácter '@'
      if (!email.includes("@")) {
        if (mensajeEstado) {
          // Muestra el aviso de formato inválido en la página
          mensajeEstado.textContent = "Ingresa un email válido.";
          // Aplica formato visual de error (rojo)
          mensajeEstado.className = "mt-3 text-danger";
        }
        // Detiene la ejecución del código
        return;
      }

      // Si todas las comprobaciones anteriores pasaron con éxito:
      if (mensajeEstado) {
        // Escribe el mensaje de confirmación debajo del formulario
        mensajeEstado.textContent = "Mensaje enviado.";
        // Aplica clases de Bootstrap: margen superior, texto verde y negrita (permanece visible)
        mensajeEstado.className = "mt-3 text-success fw-bold";
      }
    });
  }

  // Busca en el documento el campo de entrada para la nueva contraseña por su ID
  const nuevaPassword = document.querySelector("#floatingNewPassword");

  // Condicional de seguridad: comprueba que el elemento exista en la página antes de continuar
  if (nuevaPassword) {
    // Obtiene el elemento <form> ascendente más cercano que contiene al campo
    const formularioRegistro = nuevaPassword.closest("form");

    // Escucha el evento 'submit' que se dispara al presionar el botón de registro o la tecla Enter
    formularioRegistro.addEventListener("submit", function (evento) {
      // Previene el comportamiento nativo del navegador (evita que la página se recargue)
      evento.preventDefault();

      // Referencias a los campos de entrada dentro del formulario
      const inputNombre = formularioRegistro.querySelector("#floatingName");
      const inputEmail = formularioRegistro.querySelector("#floatingEmail");
      const inputConfirmar = formularioRegistro.querySelector(
        "#floatingConfirmPassword",
      );
      const checkTerminos = formularioRegistro.querySelector("#checkTerms");

      // Referencias a los contenedores <div> donde se inyectará el texto de error de cada campo
      const errorNombre = formularioRegistro.querySelector("#errorName");
      const errorEmail = formularioRegistro.querySelector("#errorEmail");
      const errorPassword = formularioRegistro.querySelector("#errorPassword");
      const errorConfirm = formularioRegistro.querySelector(
        "#errorConfirmPassword",
      );
      const errorTerms = formularioRegistro.querySelector("#errorTerms");
      const estadoGeneral =
        formularioRegistro.querySelector("#registro-estado");

      // Captura los valores ingresados:
      // .trim() elimina espacios en blanco accidentales al inicio y al final en nombre y correo
      const nombre = inputNombre.value.trim();
      const email = inputEmail.value.trim();
      // Las contraseñas se leen sin trim() para respetar espacios intencionales
      const password = nuevaPassword.value;
      const confirmarPassword = inputConfirmar.value;
      // .checked devuelve un booleano (true si la casilla está marcada, false si no)
      const terminos = checkTerminos.checked;

      // Función auxiliar para reiniciar los avisos visuales de envíos previos
      function limpiarErrores() {
        // Lista con los campos de entrada de texto
        const inputs = [inputNombre, inputEmail, nuevaPassword, inputConfirmar];
        inputs.forEach(function (campo) {
          // Remueve el borde rojo provisto por la clase 'is-invalid' de Bootstrap
          campo.classList.remove("is-invalid");
        });
        // Vacía los textos de error de cada contenedor
        errorNombre.textContent = "";
        errorEmail.textContent = "";
        errorPassword.textContent = "";
        errorConfirm.textContent = "";
        errorTerms.textContent = "";
        if (estadoGeneral) estadoGeneral.textContent = "";
      }

      // Ejecuta el limpiado previo al análisis de datos
      limpiarErrores();
      // Bandera o indicador de estado: si alguna comprobación falla, cambiará a false
      let esValido = true;

      // 1. Validación del Nombre completo
      if (nombre === "") {
        inputNombre.classList.add("is-invalid"); // Marca el input con borde rojo
        errorNombre.textContent = "Por favor, ingresa tu nombre completo.";
        esValido = false;
      }

      // 2. Validación del Correo electrónico
      if (email === "") {
        inputEmail.classList.add("is-invalid");
        errorEmail.textContent = "Por favor, ingresa tu email.";
        esValido = false;
      } else if (!email.includes("@")) {
        // Comprueba que contenga el símbolo arroba
        inputEmail.classList.add("is-invalid");
        errorEmail.textContent = "Ingresa un email válido (debe incluir @).";
        esValido = false;
      }

      // Expresión regular (RegEx) para validar los requisitos de la contraseña:
      // ^              -> inicio de la cadena
      // (?=.*[a-z])    -> aserción positiva: al menos una letra minúscula
      // (?=.*[A-Z])    -> aserción positiva: al menos una letra mayúscula
      // (?=.*\d)       -> aserción positiva: al menos un dígito numérico
      // (?=.*[\W_])    -> aserción positiva: al menos un símbolo o carácter especial
      // .{8,}          -> longitud mínima de 8 caracteres cualesquiera
      // $              -> fin de la cadena
      const patronPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

      // 3. Validación de la Contraseña
      if (password === "") {
        nuevaPassword.classList.add("is-invalid");
        errorPassword.textContent = "Por favor, ingresa una contraseña.";
        esValido = false;
      } else if (!patronPassword.test(password)) {
        // .test() evalúa la contraseña contra la expresión regular
        nuevaPassword.classList.add("is-invalid");
        errorPassword.textContent =
          "Debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un símbolo.";
        esValido = false;
      }

      // 4. Validación de la Confirmación de contraseña
      if (confirmarPassword === "") {
        inputConfirmar.classList.add("is-invalid");
        errorConfirm.textContent = "Confirma tu contraseña.";
        esValido = false;
      } else if (password !== confirmarPassword) {
        // Comprueba que ambos campos contengan exactamente la misma cadena
        inputConfirmar.classList.add("is-invalid");
        errorConfirm.textContent = "Las contraseñas no coinciden.";
        esValido = false;
      }

      // 5. Validación de la Aceptación de Términos y Condiciones
      if (!terminos) {
        errorTerms.textContent = "Debes aceptar los términos y condiciones.";
        esValido = false;
      }

      // Resultado final: se ejecuta únicamente si todas las condiciones anteriores fueron aprobadas
      if (esValido) {
        if (estadoGeneral) {
          // Muestra el mensaje de éxito debajo del botón
          estadoGeneral.textContent = "Registro realizado correctamente.";
          // Aplica clases de Bootstrap: margen inferior, texto verde y tipografía en negrita
          estadoGeneral.className = "mb-3 text-success fw-bold";
        }
      }
    });
  }

  // Busca el campo de entrada de email para verificar si estamos en la pantalla de inicio de sesión
  const campoLogin = document.querySelector("#floatingInput");

  // Verifica que el campo exista en la página actual
  if (campoLogin) {
    // Obtiene el elemento <form> padre que lo contiene
    const formularioLogin = campoLogin.closest("form");

    // Escucha el evento de envío del formulario
    formularioLogin.addEventListener("submit", function (evento) {
      // Evita que la página se recargue automáticamente
      evento.preventDefault();

      // 1. Captura referencias a los campos interactivos
      const inputEmail = campoLogin;
      const inputPassword = formularioLogin.querySelector("#floatingPassword");
      const mensajeExito = formularioLogin.querySelector(
        "#mensaje-login-exito",
      );

      // 2. Captura los contenedores de texto de error
      const errorEmail = formularioLogin.querySelector("#errorLoginEmail");
      const errorPassword = formularioLogin.querySelector(
        "#errorLoginPassword",
      );

      // 3. Limpia los estilos de error previos quitando la clase 'is-invalid' de Bootstrap
      [inputEmail, inputPassword].forEach(function (campo) {
        if (campo) {
          campo.classList.remove("is-invalid");
        }
      });

      // Oculta el mensaje de éxito en caso de intentos anteriores
      if (mensajeExito) {
        mensajeExito.classList.add("d-none");
      }

      // Bandera de control
      let formularioValido = true;

      // --- Validación de Email ---
      const emailValor = inputEmail.value.trim();
      if (emailValor === "") {
        errorEmail.textContent = "Por favor, completa este campo.";
        inputEmail.classList.add("is-invalid");
        formularioValido = false;
      } else if (!emailValor.includes("@")) {
        errorEmail.textContent = "Ingresa un email válido.";
        inputEmail.classList.add("is-invalid");
        formularioValido = false;
      }

      // --- Validación de Contraseña ---
      const passValor = inputPassword.value;
      if (passValor === "") {
        errorPassword.textContent = "Por favor, completa este campo.";
        inputPassword.classList.add("is-invalid");
        formularioValido = false;
      } else if (passValor.length < 8) {
        errorPassword.textContent =
          "La contraseña debe tener al menos 8 caracteres.";
        inputPassword.classList.add("is-invalid");
        formularioValido = false;
      }

      // --- Resultado final ---
      // Si ambas comprobaciones fueron exitosas, muestra el aviso de confirmación en la página
      if (formularioValido) {
        if (mensajeExito) {
          mensajeExito.classList.remove("d-none");
        }
      }
    });
  }
});

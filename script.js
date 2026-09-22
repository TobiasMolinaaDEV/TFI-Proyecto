document.addEventListener("DOMContentLoaded", function () {

    


    const formulariosBusqueda = document.querySelectorAll(
        "nav form[role='search'], #buscador form"
    );

    formulariosBusqueda.forEach(function (formulario) {

        formulario.addEventListener("submit", function (evento) {
            evento.preventDefault();

            const input = formulario.querySelector("input[name='query']");

            if (!input) {
                return;
            }

            const texto = input.value.trim();

            if (texto !== "") {
                window.location.href =
                    "servicios.html?query=" + encodeURIComponent(texto);
            }
        });

    });


    const contenedorServicios = document.querySelector("#hanging-icons");

    if (contenedorServicios) {

        const tarjetas = contenedorServicios.querySelectorAll(
            ".col.d-flex.align-items-start"
        );

        const inputBuscar = document.querySelector(
            "nav input[name='query']"
        );

        const parametros = new URLSearchParams(
            window.location.search
        );

        const consulta = parametros.get("query");


        // Función para facilitar las búsquedas
        function normalizar(texto) {
            return texto
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "");
        }


        if (consulta) {

            const textoConsulta = normalizar(consulta);

            if (inputBuscar) {
                inputBuscar.value = consulta;
            }

            let encontrados = 0;

            tarjetas.forEach(function (tarjeta) {

                const contenido = normalizar(
                    tarjeta.textContent
                );

                if (contenido.includes(textoConsulta)) {
                    tarjeta.style.display = "";
                    encontrados++;
                } else {
                    tarjeta.style.display = "none";
                }

            });


            if (encontrados === 0) {
                alert(
                    "No encontramos servicios relacionados con: " +
                    consulta
                );
            }
        }
    }


    const serviciosInicio = document.querySelectorAll(".servicio");

    serviciosInicio.forEach(function (servicio) {

        servicio.addEventListener("mouseenter", function () {
            servicio.style.transform = "scale(1.02)";
            servicio.style.transition = "transform 0.2s";
        });

        servicio.addEventListener("mouseleave", function () {
            servicio.style.transform = "scale(1)";
        });

    });




    const campoDetalles = document.querySelector("#floatingDetails");

    if (campoDetalles) {

        const formularioContacto = campoDetalles.closest("form");

        formularioContacto.addEventListener("submit", function (evento) {

            evento.preventDefault();

            const nombre = formularioContacto
                .querySelector("#floatingName")
                .value
                .trim();

            const email = formularioContacto
                .querySelector("#floatingEmail")
                .value
                .trim();

            const detalles = campoDetalles.value.trim();


            if (nombre === "" || email === "" || detalles === "") {
                alert("Por favor, completa todos los campos.");
                return;
            }

            if (!email.includes("@")) {
                alert("Ingresa un email válido.");
                return;
            }

            alert("Formulario enviado correctamente.");

            formularioContacto.reset();

        });

    }


    const nuevaPassword = document.querySelector("#floatingNewPassword");

    if (nuevaPassword) {

        const formularioRegistro = nuevaPassword.closest("form");

        formularioRegistro.addEventListener("submit", function (evento) {

            evento.preventDefault();

            const nombre = formularioRegistro
                .querySelector("#floatingName")
                .value
                .trim();

            const email = formularioRegistro
                .querySelector("#floatingEmail")
                .value
                .trim();

            const password = nuevaPassword.value;

            const confirmarPassword = formularioRegistro
                .querySelector("#floatingConfirmPassword")
                .value;

            const terminos = formularioRegistro
                .querySelector("#checkTerms")
                .checked;


            if (
                nombre === "" ||
                email === "" ||
                password === "" ||
                confirmarPassword === ""
            ) {
                alert("Por favor, completa todos los campos.");
                return;
            }

            if (!email.includes("@")) {
                alert("Ingresa un email válido.");
                return;
            }

            if (password.length < 6) {
                alert(
                    "La contraseña debe tener al menos 6 caracteres."
                );
                return;
            }

            if (password !== confirmarPassword) {
                alert("Las contraseñas no coinciden.");
                return;
            }

            if (!terminos) {
                alert(
                    "Debes aceptar los términos y condiciones."
                );
                return;
            }

            alert("Registro realizado correctamente.");

            formularioRegistro.reset();

        });

    }



    const campoLogin = document.querySelector("#floatingInput");

    if (campoLogin) {

        const formularioLogin = campoLogin.closest("form");

        formularioLogin.addEventListener("submit", function (evento) {

            evento.preventDefault();

            const email = campoLogin.value.trim();

            const password = formularioLogin
                .querySelector("#floatingPassword")
                .value;


            if (email === "" || password === "") {
                alert(
                    "Por favor, completa el email y la contraseña."
                );
                return;
            }

            if (!email.includes("@")) {
                alert("Ingresa un email válido.");
                return;
            }

            if (password.length < 6) {
                alert(
                    "La contraseña debe tener al menos 6 caracteres."
                );
                return;
            }

            alert("Inicio de sesión correcto.");

        });

    }

});
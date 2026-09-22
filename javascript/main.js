(function inyectarComponentes() {
  // 1. Inyectar Header
  const contenedorHeader = document.querySelector("#header-global");
  if (contenedorHeader) {
    contenedorHeader.innerHTML = `
      <header>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">

        <a class="navbar-brand text-white fw-bold" href="/index.html">
          <img src="/img/loro.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
          OficiosYA
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarOficiosYA"
          aria-controls="navbarOficiosYA" aria-expanded="false" aria-label="Abrir menú" data-bs-theme="dark">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarOficiosYA">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active text-white fw-bold" href="/index.html">Inicio</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle text-white fw-bold" href="/servicios.html" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                Servicios
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item fw-bold" href="/servicios.html">Todos los servicios</a></li>
                <li><a class="dropdown-item fw-bold" href="/servicios.html?query=Plomería#">Plomería</a></li>
                <li><a class="dropdown-item fw-bold" href="/servicios.html?query=Instalaciones de Gas#">Instalaciones de
                    Gas</a></li>
                <li><a class="dropdown-item fw-bold" href="/servicios.html?query=Albañilería y Reformas#">Albañilería y
                    Reformas</a></li>
                <li><a class="dropdown-item fw-bold" href="/servicios.html?query=Electricidad#">Electricidad</a></li>
                <li><a class="dropdown-item fw-bold" href="/servicios.html?query=Carpintería y Ebanistería#">Carpintería
                    y Ebanistería</a></li>
                <li><a class="dropdown-item fw-bold" href="/servicios.html?query=Pintura y Decoración#">Pintura y
                    Decoración</a></li>
                <li><a class="dropdown-item fw-bold" href="/servicios.html?query=Jardinería y Paisajismo#">Jardinería y
                    Paisajismo</a></li>
                <li><a class="dropdown-item fw-bold" href="/servicios.html?query=Limpieza y Mantenimiento#">Limpieza y
                    Mantenimiento</a></li>
                <li><a class="dropdown-item fw-bold" href="/servicios.html?query=Mudanzas y Transporte#">Mudanzas y
                    Transporte</a></li>
                <li><a class="dropdown-item fw-bold" href="/servicios.html?query=Cerrajería#">Cerrajería</a></li>
                <li><a class="dropdown-item fw-bold"
                    href="/servicios.html?query=Aire Acondicionado y Climatización#">Aire Acondicionado y
                    Climatización</a></li>
                <li><a class="dropdown-item fw-bold" href="/servicios.html?query=Herrería y Soldadura#">Herrería y
                    Soldadura</a></li>
                <li><a class="dropdown-item fw-bold"
                    href="/servicios.html?query=Construcción en Seco y Durlock#">Construcción en Seco y Durlock</a></li>
                <li><a class="dropdown-item fw-bold"
                    href="/servicios.html?query=Impermeabilización y Techado#">Impermeabilización y Techado</a></li>
                <li><a class="dropdown-item fw-bold"
                    href="/servicios.html?query=Reparación de Electrodomésticos y Línea Blanca#">Reparación de
                    Electrodomésticos y Línea Blanca</a></li>
                <li><a class="dropdown-item fw-bold"
                    href="/servicios.html?query=Refrigeración Comercial e Industrial#">Refrigeración Comercial e
                    Industrial</a></li>
                <li><a class="dropdown-item fw-bold"
                    href="/servicios.html?query=Redes, Cableado Estructurado y Fibra Óptica#">Redes, Cableado
                    Estructurado y Fibra Óptica</a></li>
                <li><a class="dropdown-item fw-bold"
                    href="/servicios.html?query=Soporte Técnico y Mantenimiento Informático#">Soporte Técnico y
                    Mantenimiento Informático</a></li>
                <li><a class="dropdown-item fw-bold"
                    href="/servicios.html?query=Seguridad Electrónica, Cámaras y CCTV#">Seguridad Electrónica, Cámaras y
                    CCTV</a></li>
                <li><a class="dropdown-item fw-bold"
                    href="/servicios.html?query=Automatización de Portones y Control de Acceso#">Automatización de
                    Portones y Control de Acceso</a></li>
                <li><a class="dropdown-item fw-bold"
                    href="/servicios.html?query=Energía Solar y Paneles Fotovoltaicos#">Energía Solar y Paneles
                    Fotovoltaicos</a></li>
                <li><a class="dropdown-item fw-bold" href="/servicios.html?query=Tornería y Mecanizado#">Tornería y
                    Mecanizado</a></li>
                <li><a class="dropdown-item fw-bold"
                    href="/servicios.html?query=Mantenimiento y Mecánica Automotriz#">Mantenimiento y Mecánica
                    Automotriz</a></li>
                <li><a class="dropdown-item fw-bold"
                    href="/servicios.html?query=Bombas de Agua y Presurizadoras#">Bombas de Agua y Presurizadoras</a>
                </li>
                <li><a class="dropdown-item fw-bold"
                    href="/servicios.html?query=Control de Plagas y Fumigación#">Control de Plagas y Fumigación</a></li>
                <li><a class="dropdown-item fw-bold"
                    href="/servicios.html?query=Tratamiento y Pulido de Pisos#">Tratamiento y Pulido de Pisos</a></li>
                <li><a class="dropdown-item fw-bold"
                    href="/servicios.html?query=Reparación de Celulares y Microelectrónica#">Reparación de Celulares y
                    Microelectrónica</a></li>
                <li><a class="dropdown-item fw-bold"
                    href="/servicios.html?query=Grupo Electrógeno y Grupos Térmicos#">Grupo Electrógeno y Grupos
                    Térmicos</a></li>
                <li><a class="dropdown-item fw-bold" href="/servicios.html?query=Domótica e Inmótica#">Domótica e
                    Inmótica</a></li>
                <li><a class="dropdown-item fw-bold"
                    href="/servicios.html?query=Vidriería y Carpintería de Aluminio#">Vidriería y Carpintería de
                    Aluminio</a></li>
                <li><a class="dropdown-item fw-bold"
                    href="/servicios.html?query=Aislación Térmica y Acústica#">Aislación Térmica y Acústica</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white fw-bold" href="/contacto.html">Contacto</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white fw-bold" href="/about_me.html">Sobre Nosotros</a>
            </li>
          </ul>

          <div class="d-flex gap-2">
            <form role="search" action="http://127.0.0.1:5500/servicios.html#" method="GET">
              <input class="form-control" type="search" id="buscar" name="query" placeholder="Buscar servicios"
                aria-label="Buscar Servicios">
            </form>

            <a class="btn btn-primary fw-bold" href="/signup.html">
              Registrarse
            </a>
            <a class="btn btn-primary fw-bold" href="/login.html">
              Iniciar sesión
            </a>
            <!--<a class="btn btn-primary" href="/login.html">
              Conviértete en profesional
            </a >-->
          </div>

        </div>

      </div>
    </nav>
  </header>
    `;
  }

  // 2. Inyectar Footer
  const contenedorFooter = document.querySelector("#footer-global");
  if (contenedorFooter) {
    contenedorFooter.innerHTML = `
      <footer class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-6 col-md-2 mb-3">
          <h5>Secciones</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="/index.html" class="nav-link p-0 text-body-secondary">Inicio</a></li>
            <li class="nav-item mb-2"><a href="/servicios.html" class="nav-link p-0 text-body-secondary">Servicios</a>
            </li>
            <li class="nav-item mb-2"><a href="/contacto.html" class="nav-link p-0 text-body-secondary">Contacto</a>
            </li>
            <li class="nav-item mb-2"><a href="/about_me.html" class="nav-link p-0 text-body-secondary">Sobre
                Nosotros</a></li>
          </ul>
        </div>
        <div class="col-md-5 offset-md-1 mb-3">
        </div>
      </div>
      <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>&copy; 2026 OficiosYA. Todos los derechos reservados.</p>
        <ul class="list-unstyled d-flex">
          <li class="ms-3"><a class="link-body-emphasis" href="#" aria-label="Instagram"><svg class="bi" width="24"
                height="24">
                <use xlink:href="#instagram"></use>
              </svg></a></li>
          <li class="ms-3"><a class="link-body-emphasis" href="#" aria-label="Facebook"><svg class="bi" width="24"
                height="24" aria-hidden="true">
                <use xlink:href="#facebook"></use>
              </svg></a></li>
        </ul>
      </div>
    </div>
  </footer>
    `;
  }
})();
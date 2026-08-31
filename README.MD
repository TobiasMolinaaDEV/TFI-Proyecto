### TFI-PROYECTO

## Integrantes: 
---- Moschino Molina Tobias
---- Gonzalez Raflo Luz
---- Monetti Camila

## Descripción breve
OficiosYa es un sitio web que conecta a personas que necesitan resolver un problema del hogar (plomería, gas,electricidad, albañilería, carpintería, pintura,jardinería, limpieza, mudanzas, cerrajería y climatización) con profesionales de oficios. Incluye una pagina de inicio con presentación de servicios y buscador, y una página de contacto con formulario para solicitar presupuestos.

## ¿Tecnologías utilizadas?
Al ser un proyecto en constante crecimiento y ahora hablar de un prototipo en su version 0.0.2 actualmente
utilizamos 2 principales tecnologias HTML para el maquetado de nuestra web y CSS para agregarle una parte de estilos.
Además de HTML y CSS, utilizamos Git y GitHub para el control de versiones y trabajo en equipo, Google Fonts para la tipografía,  y Open Graph junto con datos estructurados JSON_LD (Schema.org) para mejorar el posicionamiento SEO del sitio.

## ¿Dónde utilizaron Flexbox?
`.section-logo`: logo y botones de "Registrate/Inicia sesión" / "Conviértete en Profesional", alinedos en fila.
`.navbar ul`: menú de navegación principal, en fila y centrado.
`. text-overlay`: contenido superpuesto sobre la imagen principal (hero), centrado en columna.
`text-overlay a`: botón "Ponte en contacto con nosotros".
`#pepito`: título de la sección de servicios, centrado en fila.
`.servicio a`: enlace "Ver detalles" dentro de cada tarjeta de servicio.


## ¿Dónde utilizaron Grid?
`#servicios`: grilla de 3 columnas (repeat(3, 1fr)) que organiza las 11 tarjetas de oficios (Plomería, Gas, Albañilería, Electricidad, Carpintería, Pintura, Jardinería,Limpieza, Mudanzas, Cerrajería, Climatización).
`#servicios .servicio`: dentro de cada tarjeta, grid de 3 filas (repeat(3, 1fr)) para ordenar título, descripción y enlace.

## ¿Qué variables CSS crearon?
Definidas en `root`: `--color-primary` (#OD7A5F), `--color-accent`(D8F373), `--color-bg-buscador` (#FFCE4), `--color-footer-bg` (#67727E), `--color-white`, `--color-text-dark `, `--font-body`, `--radius-btn`(20px), `--radius-card`(10px), `--gap-md` (20px) y `--gap-sm`(10px).

## ¿Cómo implementaron el Responsive Design?
Con dos media queries: en tablet (`max-width: 900px`) la grilla de servicios pasa de 3 a 2 columnas; en mobile (`max- width: 600px`) pasa a 1 columna, el header se apila en columna, el titulo del hero se achica y se reducen los paddings del buscador y del footer. 

## Estrategias de SEO implementadas
1. **Meta etiquetas esenciales**: `title` único y descriptivo por página, `meta descrption`, `meta robots` (index,follow) y `link rel="canonical"`.
2. **Open Graph**: `og:type`, `og;title`, `og:description`, `og;image` y `og:url para optimizar cómo se comparte eñ sitio en redes sociales (Facebook, LinkedIn).
3. **Datos estructrurados Json-LD (Schema.org)**: marcado `HomeAndConstructionBusiness`con dirección, teléfono y catálogo completo de servicios (`OfferCatalog`), para que Google entienda el rubro del negocio.
4. **Jerarquía de encabezados clara**: un único `H1` por página con la palabra clave principal, y estructura `H2 → H3` en la sección de servicios.
5. **Enlaces descriptivos con atributo `title`**: cada "Ver detalles" incluye texto de anclaje único y un `title` específico del oficio, en vez de "click aquí".
6. **HTML semántico**: uso de `header`, `nav`, `main`, `section`, `article` y `footer`/`address`, que ayuda a los buscadores a interpretar la estructura del contenido.
7. **Texto alternativo en imágenes**: atributo `alt` descriptivo en las imágenes (ej. la del hero).
8. **Optimización de carga de fuentes**: `preconnect` a Google Fonts, lo que mejora la velocidad de carga y es un factor de posicionamiento.
9. **Formulario de búsqueda con método GET**: genera URLs rastreables por los buscadores en vez de ocultar los parámetros de búsqueda.


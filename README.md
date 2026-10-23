Absolute Cinema - Tarea 2 (Sitio Dinámico)

- Estudiante: Jairo Llanquileo 
- Proyecto: Absolute Cinema (Plataforma social de películas)  
- URL Pública AWS: http://3.219.68.241 
- URL JSON: http://[TU-ELASTIC-IP]/data/peliculas.json  

Descripción
Versión interactiva del frontend de Absolute Cinema. Permite explorar un catálogo de películas cargado dinámicamente desde un archivo JSON, realizar búsquedas en tiempo real y enviar reseñas con validación, sin necesidad de recargar la página.

Tecnologías Utilizadas
- HTML5, CSS y Bootstrap 
- Alpine.js: Utilizado para la reactividad, manejo de estado (`cinemaApp`), vinculación de inputs (`x-model`), renderizado de listas dinámicas (`x-for`), visibilidad condicional (`x-show`) y consumo asíncrono con `fetch()`.

Estructura de Archivos
- `index.html`: Portada principal y películas en tendencia.
- `catalogo.html`: Vista de catálogo interactivo con buscador reactivo.
- `registro.html`: Formulario para añadir reseñas con validación.
- `css/style.css`: Estilos personalizados para diseño responsivo.
- `javascript/app.js`: Lógica central de Alpine.js.
- `data/peliculas.json`: Base de datos estática en formato JSON.

Flujo de Datos y Búsqueda
1. Al cargar la vista de catálogo, `init()` ejecuta un `fetch()` asincrónico a `./data/peliculas.json`.
2. Los datos se almacenan en el arreglo `peliculas`.
3. El getter `peliculasFiltradas` filtra los registros en memoria comparando `busqueda` en minúsculas con los títulos y directores.

IP de Servidor

- IP Elástica: 3.219.68.241

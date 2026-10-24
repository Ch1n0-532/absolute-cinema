# Absolute Cinema - Tarea 2 (Sitio Dinámico)

**Estudiante:** Jairo Llanquileo
**Proyecto:** Absolute Cinema (Plataforma social de películas)  
**URL Pública AWS:** http://3.219.68.241  
**URL JSON:** http://3.219.68.241/data/peliculas.json  

## Descripción
Versión interactiva del frontend de Absolute Cinema. Permite explorar un catálogo de películas cargado dinámicamente desde un archivo JSON, realizar búsquedas en tiempo real y enviar reseñas con validación, sin necesidad de recargar la página.

## Tecnologías Utilizadas e Integración de Alpine.js
- **HTML5, CSS3 y Bootstrap 5**
- **Alpine.js v3** : Utilizado para la reactividad, manejo de estado (`cinemaApp`), vinculación de inputs (`x-model`), renderizado de listas dinámicas (`x-for`), visibilidad condicional (`x-show`) y consumo asíncrono con `fetch()`.

## Estructura de Archivos
- `index.html`: Portada principal y películas en tendencia.
- `catalogo.html`: Vista de catálogo interactivo con buscador reactivo.
- `registro.html`: Formulario para añadir reseñas con validación.
- `css/style.css`: Estilos personalizados para diseño responsivo.
- `javascript/app.js`: Lógica central de Alpine.js.
- `data/peliculas.json`: Base de datos estática en formato JSON.

## Flujo de Datos y Búsqueda
1. Al cargar la vista de catálogo, `init()` ejecuta un `fetch()` asincrónico a `./data/peliculas.json`.
2. Los datos se almacenan en el arreglo `peliculas`.
3. El getter `peliculasFiltradas` filtra los registros en memoria comparando `busqueda` en minúsculas con los títulos y directores.

## Instrucciones de Prueba
- **Búsqueda:** Escriba en el buscador (ej. "Spiderman" o "Miyazaki"). La lista se filtra instantáneamente.
- **Sección Oculta:** Presione el botón "¿Cómo buscar?" para alternar la visibilidad de las instrucciones con `x-show`.
- **Formulario:** Intente enviar el formulario de reseña vacío para ver el mensaje de error, luego complételo para ver la confirmación.
- **Estado de Error:** Para probar la alerta de error de carga, cambie temporalmente la ruta del JSON en `app.js` a una ruta inexistente.

## Limitaciones Conocidas
- Los datos modificados o reseñas enviadas se almacenan únicamente en el estado local de Alpine.js y se pierden al recargar la página.

document.addEventListener('DOMContentLoaded', function () {

    
    const buscador = document.getElementById('inputBuscador');

    if (buscador) {
        buscador.addEventListener('input', function () {
            const textoBusqueda = buscador.value.toLowerCase().trim();
            const tarjetas = document.querySelectorAll('.tarjeta-pelicula');

            tarjetas.forEach(function (tarjeta) {
                const tituloElemento = tarjeta.querySelector('.titulo-pelicula');
                if (tituloElemento) {
                    const titulo = tituloElemento.textContent.toLowerCase();
                    if (titulo.includes(textoBusqueda)) {
                        tarjeta.style.display = 'block';
                    } else {
                        tarjeta.style.display = 'none';
                    }
                }
            });
        });
    }

    
    const formulario = document.getElementById('formResena');

    if (formulario) {
        formulario.addEventListener('submit', function (e) {
            e.preventDefault(); 

            const nombre = document.getElementById('nombreUsuario').value.trim();
            const pelicula = document.getElementById('selectPelicula').value;
            const puntuacion = document.getElementById('puntuacion').value;
            const resena = document.getElementById('textoResena').value.trim();
            const alerta = document.getElementById('mensajeAlerta');

            
            if (nombre === '' || pelicula === '' || puntuacion === '' || resena === '') {
                alerta.innerHTML = `
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>¡Error!</strong> Por favor, completa todos los campos antes de enviar.
                        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                    </div>
                `;
            } else {
                alerta.innerHTML = `
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>¡Éxito!</strong> Tu reseña para <strong>${pelicula}</strong> se ha publicado correctamente.
                        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                    </div>
                `;
                formulario.reset();
            }
        });
    }

});
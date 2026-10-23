document.addEventListener('alpine:init', () => {
    Alpine.data('cinemaApp', () => ({

        peliculas: [],
        busqueda: '',
        cargando: true,
        errorCarga: false,
        mostrarAyuda: false,


        nombreUsuario: '',
        peliculaSeleccionada: '',
        puntuacion: '',
        textoResena: '',
        mensajeAlerta: null, 


        async init() {
            try {
                const respuesta = await fetch('./data/peliculas.json');
                if (!respuesta.ok) {
                    throw new Error('No se pudo cargar el JSON');
                }
                this.peliculas = await respuesta.json();
            } catch (err) {
                console.error(err);
                this.errorCarga = true;
            } finally {
                this.cargando = false;
            }
        },


        get peliculasFiltradas() {
            if (!this.busqueda.trim()) {
                return this.peliculas;
            }
            const query = this.busqueda.toLowerCase().trim();
            return this.peliculas.filter(p => 
                p.titulo.toLowerCase().includes(query) ||
                p.director.toLowerCase().includes(query)
            );
        },


        enviarResena() {
            if (!this.nombreUsuario || !this.peliculaSeleccionada || !this.puntuacion || !this.textoResena) {
                this.mensajeAlerta = {
                    tipo: 'danger',
                    texto: '¡Error! Por favor, completa todos los campos obligatorios.'
                };
                return;
            }

            this.mensajeAlerta = {
                tipo: 'success',
                texto: `¡Éxito! Tu reseña para "${this.peliculaSeleccionada}" ha sido registrada. (Nota: Cambios guardados en memoria local).`
            };

            this.nombreUsuario = '';
            this.peliculaSeleccionada = '';
            this.puntuacion = '';
            this.textoResena = '';
        }
    }));
});
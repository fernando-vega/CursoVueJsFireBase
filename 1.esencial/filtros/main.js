const vm = new Vue({

  el: 'main',
  data: {
    busqueda: '',
    busquedaGenero: '',
    minimo: 5,
    juegos: [
      {titulo: 'NeedForSpeed', genero: 'Carreras', puntuacion:8},
      {titulo: 'FIFA', genero: 'Deporte', puntuacion:9},
      {titulo: 'Limbo', genero: 'RPG', puntuacion: 10},
    ]
  },
  computed: {
    mejoresJuegos(){
      return this.juegos.filter((juego) => juego.puntuacion >= this.minimo);
    },

    buscarJuego(){
      return this.juegos.filter((juego) => juego.titulo.includes(this.busqueda));
    },

    buscarJuegoPorGenero(){
      return this.juegos.filter((juego) => juego.genero.includes(this.busquedaGenero));
    }
  }

});
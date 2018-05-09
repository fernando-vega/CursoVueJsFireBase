const vue = new Vue({
  el: 'main',
  data: {
    /**
     * Matriz
     */
    dias: ['lunes','martes','miercoles','jueves','viernes','sabado','domingo'],
    
    /**
     * Matriz de objetos (Collection)
     */
    tareas: [
      {nombre: 'Hacer ejercicio', prioridad: 'alta'},
      {nombre: 'Leer', prioridad: 'baja'},
      {nombre: 'Aprender Vue.js + firebase', prioridad: 'media'},
    ],

    /**
     * Objeto
     */
    vehiculo: {
      marca: 'Mazda',
      color: 'Azul',
      tipo: 'Camioneta'
    },
  }
});
const vm = new Vue({
  el: 'main',
  data: {
    message: 'Hola',

    tareas: [
      {titulo: 'Aprender JS', prioridad: true, antiguedad: '53'},
      {titulo: 'Aprender Vue', prioridad: false, antiguedad: '26'},
      {titulo: 'Aprender FireBase', prioridad: true, antiguedad: '65'},
    ]
  },
  computed: {
    reversedMessage(){
     return this.message.split('').reverse().join('')
    },
    tareasConPrioridad(){
      return this.tareas.filter((tarea) => tarea.prioridad);
    },
    tareasPorAntiguedad(){
      return this.tareas.sort((a, b) => b.antiguedad - a.antiguedad);
    }
  }
});
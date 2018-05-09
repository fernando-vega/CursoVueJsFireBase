const vm = new Vue({

  el: 'main',
  data: {
    tareas: [
      {titulo: 'Hacer el desayuno', completado: false},
      {titulo: 'Desayunar', completado: true},
      {titulo: 'Hacer ejercicio', completado: false},
      {titulo: 'Ducharme', completado: true},
      {titulo: 'Hacer actividades diarias', completado: false},
      {titulo: 'Leer noticias', completado: false},
    ]
  },
  methods: {
    completarTarea(tarea){
      tarea.completado = !tarea.completado;
    }
  },
  computed: {
    tareasCompletadas(){
      return this.tareas.filter((tarea) => tarea.completado);
    }
  },
});
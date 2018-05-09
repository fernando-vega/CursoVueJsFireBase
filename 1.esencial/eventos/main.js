const vm = new Vue({
  el: 'main',
  data: {
    nuevaTarea: null,
    tareas: [
      'Levantarme',
      'Desayunar',
      'Trotar',
      'Ducharme'
    ]
  },
  methods: {
    agregarTarea() {
      //This hace referencia a la instancia Vue
      this.tareas.unshift(this.nuevaTarea);
      this.nuevaTarea = null;
    }
  }
});
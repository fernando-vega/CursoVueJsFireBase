Vue.component('mis-tareas', {
  props: ['listado'],
  template: '#mis-tareas-template'
});

new Vue({
  el: 'main',
  data: {
    tareas: [
      {titulo: 'Desayunar'},
      {titulo: 'Hacer ejercicio'},
      {titulo: 'Ducharme'},
      {titulo: 'Leer cada día'},
    ]
  }
});
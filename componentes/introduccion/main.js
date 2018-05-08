Vue.component('mis-tareas', {
  template: '<ul><li v-for="dato in datos"> {{dato.title}} </li></ul>',
  mounted(){
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((respuesta) => {
      this.datos = respuesta.data;
    });
  },
  data() {
    return {
      datos: [],
    }
  }
});

new Vue({
  el: 'main',
  /* mounted(){
    this.cargarDatos();
  },
  data: {
    datos: [],
    datosLocales: [
      {title: 'Desayunarme'},
      {title: 'Hacer ejercicio'},
      {title: 'Ducharme'},
    ]
  },

  methods:{
    cargarDatos(){
      axios.get('https://jsonplaceholder.typicode.com/todos').then((respuesta) => {
        this.datos = respuesta.data;
      })
    }
  }, */

});
Vue.component('autor', {
  props: ['nombre'],
  mounted(){
    /**Las props son accesibles desde this (proxy) */
    //alert(this.nombre);
  },
  template: `<div><h1> {{ modificado }} </h1><button @click="cambiarProp">Cambiar</button></div>`,
  
  methods: {
    cambiarProp() {
      this.modificado = this.modificado.toUpperCase()
    }
  },

  data(){
    return {
      modificado: this.nombre
    }
  }
  /* methods: {
    cambiarProp() {
      this.nombre = this.nombre.toUpperCase();
    }
  } */
});

new Vue({
  el: 'main',
  data: {
    autor: 'Fernando Vega'
  }
});
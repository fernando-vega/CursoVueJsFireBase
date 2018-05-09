
const vm1 = new Vue({
  
  /**
   ** Lifecycle Diagram **
   * Captura de los eventos antes de la creación de la instancia
   */

  /* beforeCreate(){
    alert('Antes de crear');
  },

  created(){
    alert('Instancia creada');
  }, */

  el: 'main',
  data: {
    mensaje: 'Mensaje Uno'
  },

  
  /**
   * Captura de los eventos antes de la modificación de la instancia
   */

  beforeUpdate() {
    alert('Antes de modificar modelo');
  },

  updated() {
    alert('Se modifico el modelo');
  },

  methods: {
    alReves() {
      this.mensaje = this.mensaje.split('').reverse().join('');
      vm2.mensaje = ' Modificando instancia dos deste instancia 1 '
    }
  }

});

const vm2 = new Vue({

  el: '#app',
  data: {
    mensaje: 'Mensaje Dos'
  }

});
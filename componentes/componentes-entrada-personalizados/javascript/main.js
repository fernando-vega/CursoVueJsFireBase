Vue.component('contrasena', {
  props: ['contrasena'],
  template: `<input :value="contrasena" @input="comprobarContrasena($event.target.value)" ref="pass">`,
  methods: {
    comprobarContrasena(contrasena) {
      if (this.noValidas.includes(contrasena)) {
        this.$refs.pass.value = contrasena = '';
      }
      this.$emit('input', contrasena);
    }
  },
  data() {
    return {
      noValidas: ['abc', 'admin', '1234', 'root'],
    }
  }
});

new Vue({

  el: 'main',
  data: {
    contrasena: 'ese3s1991*/--'
  }

});
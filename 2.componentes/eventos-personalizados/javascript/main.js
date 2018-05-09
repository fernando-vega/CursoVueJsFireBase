Vue.component('alerta', {
  props: ['tipo','posicion'],
  template: `
            <section class="alerta" :class="[tipo,posicion]">
              <header class="alerta__header">
                <slot name="header">Hola</slot>
                <a href="#" @click="ocultarWidget">cerrar</a> 
              </header>
              <div class="alerta__contenido">
                <slot name="content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, odio facere. Quam quisquam aspernatur amet, quae voluptas repellendus voluptatem cum ut facilis, assumenda provident odio facere rerum, similique expedita ratione.
                </slot>
              </div>
              <footer class="alerta__footer">
                <slot name="footer">Este es el footer</slot>
              </footer>
            </section> `,
  methods: {
    ocultarWidget() {
      this.$emit('ocultar');
    }
  }
});

new Vue({

  el: 'main',
  data: {
    mostrarExito: false,
    mostrarError: false,
  },

});
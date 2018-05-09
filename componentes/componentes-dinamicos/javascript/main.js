Vue.component('lista-tareas', {
  template: `<div>
              <h1> <slot>  </slot> </h1>
              <ul>
                <tarea v-for="tarea in tareas" :tarea="tarea"></tarea>
              </ul>
            </div>`,
  data() {
    return {
      tareas: [
        'Finalizar sección componentes',
        'Iniciar workflow con Vue CLI Webpack',
        'Terminar de estudar la documentación de Vuex',
        'Seguir jugando con Vue Router y grabar el primer vídeo',
      ]
    }
  },
});

Vue.component('tarea', {
  props: ['tarea'],
  template: `<li> {{tarea}} </li>`,
});

Vue.component('contacto', {
  template: `<div><a href="mailito:juanfe.vega@gmail.com">juanfe.vega@gmail.com</a><hr></div>`
});

Vue.component('bio', {
  template: `<div><p>Lorem ipsum dolor sit amet, consectetur</p></div>`,
});

new Vue({
  el: 'main',
  data: {
    seleccionado: 'lista-tareas'
  }
});
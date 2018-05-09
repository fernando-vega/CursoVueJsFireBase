Vue.component('candidato', {
  /* prop: ['nombre', 'correo', 'imagen'], */
  props: {
    /**
     * Validaciones
     * * Permite lealizar validaciones en las propiedades que tiene el modelo del template
     */
    nombre: {
      type: String,
      required: true
    },
    correo: {
      type: String,
      default: 'juan@mail.com'
    },
    imagen: String,
    /**
     * Validaciones con objetos
     * *Validara el Objeto según lo que nosotros especifiquemos, por ejemplo: en caso de que falte un elemento en el template tomara el valor que dejemos por default
     */
    location: {
      type: Object,
      default() {
        return {
          ciudad: "Belén",
        }
      }
    }
  },
  template: '#candidato-template',
});

new Vue({
  el: 'main',
  
  mounted() {
    this.obtenerCandidatos();
  },

  data: {
    candidatos: [],
  },

  methods: {
    obtenerCandidatos() {
      axios.get('https://randomuser.me/api/?results=100')
                .then((respuesta) => {
                  this.candidatos = respuesta.data.results;
                });
    }
  }

});
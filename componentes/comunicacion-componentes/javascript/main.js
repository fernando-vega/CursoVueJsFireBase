const evenBus = new Vue();

Vue.component('listado-productos', {
  props: ['productos'],
  template: `
            <section>
              <ul>
                <li v-for="producto in productos">
                  {{ producto.nombre }} -
                  <small>$ {{producto.precio}} </small>
                  <button @click="eliminarProducto(producto.precio)">-</button>
                  <button @click="agregarProducto(producto.precio)">+</button>
                </li>
              </ul>
            </section>`,
    methods: {
      agregarProducto(precio) {
        evenBus.$emit('anadir', precio);
      },
      
      eliminarProducto(precio) {
        evenBus.$emit('eliminar', precio);
      },
    }
});

Vue.component('carrito-compra', {
  template: `
            <section>
              <h1>$ {{total}} </h1>
              <h3> {{cantidadProductos}} productos </h3>
            </section>`,
  data() {
    return {
      cantidadProductos: 0,
      total: 0,
    }
  },
  created() {
    evenBus.$on('anadir', (precio) => {
      if (this.total >= 0){
        this.total += precio;
        this.cantidadProductos++
      }
    });
    evenBus.$on('eliminar', (precio) => {
      if(this.total > 0) {
        this.total -= precio;
        this.cantidadProductos--;      
      }
    });
  }
});

new Vue({
  el: 'main',
  data: {
    productos: [
      {nombre: 'Libro ES6', precio: 50000},
      {nombre: 'Libro CSS3', precio: 55000},
      {nombre: 'Portatil', precio: 1500000},
      {nombre: 'Teclado', precio: 45000},
      {nombre: 'Cargador', precio: 60000},
      {nombre: 'Mouse', precio: 20000},
    ]
  }
}); 
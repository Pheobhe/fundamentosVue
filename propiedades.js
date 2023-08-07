var app = Vue.createApp({
    data() {
        return {
        precios: [100.2, 300, 300.5, 400.5],
        cantidades: [20, 10, 30, 90],
        productos:[
            'zapatos',
            'camisetas',
            'gorras',
            'lentes'],
            precioDolar: 3.45
        }
    },
    computed:{
         montoPagar() {
            var total = 0
          
            for (let i = 0; i < this.precios.length; i++){
                var monto = 
                    this.precios[i]*this.cantidades[i];
                    total = total + monto
            }
            return total*parseFloat(this.precioDolar);
         }
         
    },
    methods: {
        SumarVentas() {
            var total = 0;
          
            for (let i = 0; i < this.precios.length; i++){
                var monto = this.precios[i]*this.cantidades[i];
                total = total + monto
            }
            return total;
         }
    }
})

app.mount('#propiedadesApp')
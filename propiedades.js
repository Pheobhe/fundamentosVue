const {propiedadesApp} = Vue 

createAp ({
    data() {
        return{
        precios: [100.2, 300, 300.5, 400.5],
        cantidades: [20, 10, 30, 90],
        productos:[
            'zapatos',
            'camisetas',
            'gorras',
            'lentes'],
        }
    },
    computed:{
         montoPagar() {
            var total = 0
          
            for (let i = 0; i < this.precios.length; i++){
                const monto = this.precios[i]*this.cantidades[i];
                total = total + monto
            }
            return total
         }
         
    },
    methods: {
        SumarVentas: function() {
            var total = 0
          
            for (let i = 0; i < this.precios.length; i++){
                const monto = this.precios[i]*this.cantidades[i];
                total = total + monto
            }
            return total
         }
    }

}).mount('#propiedadesApp');
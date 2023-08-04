const {miApp} = Vue
createApp({
    data() {
        return {
        titulo:'Nueva instancia: Mi App - Directivas',
        aparece: true,
        num1: 5,
        num2: 5,
        frutas:['uva', 'manzana', 'banana', 'melon'],
        ingredientes:[
            { 'id': '001', 'name': 'Arroz'},
            { 'id': '002', 'name': 'Aceite'},
            { 'id': '002', 'name': 'Harina'},
        ],
        contador: 10,
        numero1: 0,
        numero2: 0,
    }
    },

    methods: {
        
        Saludar: function(){
            console.log('Saludando desde los methods de vue')
        },
        ProbandoParametros: function (a , b){
            console.log( a + b )
            return a + b
        },
        IncrementarContador: function(){ 
            this.contador = this.contador + 108 -3
            return this.contador
        },
        SumarNumeros: function(){
            return parseInt(this.numero1) + parseInt(this.numero2)
        }
        },

}).mount('#miApp');
const { createApp } = Vue 

createApp({
    data() {
        return {
        mensaje:'Hola desde instancia uno',
        numero1: 10,
        numero2: 30,
        mensaje2: 'Hola desde instancia 2'
    }
    
}
}).mount('#instanciaUno')


// const { createApp2 } = Vue 

// createApp2({
//     data() {
//        return {
//         mensaje2: 'Hola desde instancia 2'
//        }
// }
// }).mount('#instanciaDos')
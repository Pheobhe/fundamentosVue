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
        ]
    }
}
}).mount('#miApp');
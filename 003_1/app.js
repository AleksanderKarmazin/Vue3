const App ={
    data() {
        return {
            title: "Title is here",
            myHtml: '<h1>Vue 3</h1>',
            person:{
                first_name: 'Aleksandr',
                last_name: 'Karmazin',
                age: 27
            },
            items:[1,2,3,4,5,6,7,8]

        }
    },methods: {
        stopPropagations(e){
            e.stopPropagation()
        },
        addItem(event){
            this.items.unshift(this.$refs.myInput.value)
            console.log("$refs", this.$refs);
            console.log("$refs", this.$refs.myInput.value);
            console.log(event);
        },
        remove(i){
            this.items.splice(i, 1) 
        },
        log(item){
            console.log(item)
        }
    },
    computed: {
        evenItems () {
            // возвращаем только те элементы
            // которые делятся на 2 без остатка 
            return this.items.filter(i => i % 2 === 0)
        }
    },
}


const app = Vue.createApp(App).mount('#app')
const App ={
    // template: `
    // <div class="card center">
    //   <h1>{{title}}</h1>
    // </div>`
    // ,
    data() {
        return {
            title: "VUE 3"
        }
    },
    methods: {
        al(){
            alert(this.title)
        },
        dis() {
            setTimeout(() => {
                app2.unmount()
            }, 1000)  
        }
        

    },
    /**
     * Здесь мы ещё не имеем доступа к дом дереву 
      beforeCreate() {},
      created() {},
      beforeMount() {},
     */
    beforeCreate() {
        console.log('beforeCreate');
    },
    created() {
        console.log('created');
    },
    beforeMount() {
        console.log('beforeMount');
    },
    /**
     * Здесь мы ещё не имеем доступа к дом дереву 
     */
        
    /**
     * ЕСТЬ Доступ  к DOM
     */
    mounted() {
        console.log('mounted');
    },
    /**
     * ТОЛЬКО ЕСЛИ ВЫЗВАН МЕТОД  app.unmounted то => 
     */
    beforeUnmount() {
        console.log("beforeUnmount");
    },
    unmounted() {
        console.log("unmounted");
    },

    /**
     * ТОЛЬКО ЕСЛИ ВЫЗВАНО ИЗМЕНЕНИЕ модели данных  
     */
    beforeUpdate() {
        console.log('beforeUpdate')
    },
    updated() {
        console.log('updated')
    },





}

const App2 ={
    // template: `
    // <div class="card center">
    //   <h1>{{title}}</h1>
    // </div>`
    // ,
    data() {
        return {
            title: "VUE 3 ВТОРОЙ"
        }
    },
    methods: {
        al(){
            alert(this.title)
        },
        dis() {
            setTimeout(() => {
                app2.unmount()
            }, 1000)  
        }
        

    },
    /**
     * Здесь мы ещё не имеем доступа к дом дереву 
      beforeCreate() {},
      created() {},
      beforeMount() {},
     */
    beforeCreate() {
        console.log('beforeCreate');
    },
    created() {
        console.log('created');
    },
    beforeMount() {
        console.log('beforeMount');
    },
    /**
     * Здесь мы ещё не имеем доступа к дом дереву 
     */
        
    /**
     * ЕСТЬ Доступ  к DOM
     */
    mounted() {
        console.log('mounted');
    },
    /**
     * ТОЛЬКО ЕСЛИ ВЫЗВАН МЕТОД  app.unmounted то => 
     */
    beforeUnmount() {
        console.log("beforeUnmount");
    },
    unmounted() {
        console.log("unmounted");
    },

    /**
     * ТОЛЬКО ЕСЛИ ВЫЗВАНО ИЗМЕНЕНИЕ модели данных  
     */
    beforeUpdate() {
        console.log('beforeUpdate')
    },
    updated() {
        console.log('updated')
    },





}

const app = Vue.createApp(App)

app.mount('#app')

// setTimeout(() => {
//     app.unmount()
// }, 2000)


const app2 = Vue.createApp(App2)

app2.mount('#app2')

// setTimeout(() => {
//     app2.unmount()
// }, 1000)
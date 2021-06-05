const App ={
    data() {
        return {
            counter: 0,
            placeholder: "Enter note`s name",
            inputValue:'',
            arr:["ARRR1","ARRR2","ARRR3","ARRR4","ARRR5",]
        }
    },
    methods:{
        // v-model="inputValue" заменяет следующую функцию и прослушку события 
        // - это двухстороння привязка 
        // inputChage(event){
        //     // console.log("event", event.target.value );
        //     this.inputValue = event.target.value
        // },
        addNote(){
            this.arr.push(this.inputValue)
            this.inputValue = ''
        },
        keypressInput(event){
            if (event.key === 'Enter') {
                this.addNote()
            }
            // console.log(event.key);
        },
        removeNote(idx){
            this.arr.splice(idx, 1)
        },
        toLowerCaseMy(item){
            return item.toLowerCase()
        },
        doubleCount(){
            console.log('doubleCount');
            return this.arr.length * 2
        }

    },
    computed: {
        // Решает проблему производительности 
        // 1. Должнв что-то возвращать 
        // 2. Вычесляют из значений модели в поле data
        // 3. Эти методы будут вычисляться только если будет изменяться 
        // переменная которая в них участвует 
        doubleCountComp(){
            // console.log('doubleCountComp');
            return this.arr.length * 2
        }
    },
    watch: {
        // c watch мы можем слидить за изменением любых перенных 
        // для этого мы создаём метод название которого совпадает с названием 
        // переменной inputValue и inputValue()
        inputValue(value){
            console.log("inputValueWATCH",value);
        }

    },
}

// const app = Vue.createApp(App)
// app.mount('#app')

const app = Vue.createApp(App).mount('#app')
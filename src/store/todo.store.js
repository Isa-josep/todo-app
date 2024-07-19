import { Todo } from "../todo/models/todo-model";

const Filters={
    All:'all',
    Completed:'completed',
    Pendind:'pending'
}
const state= {
    todos:[
        new Todo('Learn Vue.js'),
        new Todo('Learn Vuex'),
        new Todo('Learn Vue Router'),
    ],
    filter: Filters.All
}

const initStore =()=>{
    console.log(state)
    console.log('initStore')
}

export default {
    initStore,
}
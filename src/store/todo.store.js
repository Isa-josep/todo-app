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
    console.log(state);
    console.log('initStore');
}

const loadStore=()=>{
    throw new Error('Not implemented');
}

const getTodos=(filter = Filters.All)=>{
    throw new Error('Not implemented');
}

const addTodo=(todoId)=>{
    throw new Error('Not implemented');
}

const toggleTodo=(todoId)=>{
    throw new Error('Not implemented');
}

const deleteTodo=(todoId)=>{
    throw new Error('Not implemented');
}

const deleteCompleted=()=>{
    throw new Error('Not implemented');
}

const setFilter=(newFilters = Filters.All)=>{
    throw new Error('Not implemented');
}

const getCurrentFilter=()=>{
    throw new Error('Not implemented');
}

export default {
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    setFilter,
    toggleTodo,
}
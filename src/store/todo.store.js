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
    loadStore();
    console.log('initStore');
}

const loadStore=()=>{
    if(!localStorage.getItem('state')) return;
    const { todos=[], filter=filter.All } = JSON.parse(localStorage.getItem('state'));
    state.todos= todos;
    state.filter= filter;

}   

const saveStateToLocaleStorage=()=>{
    localStorage.setItem('state',JSON.stringify(state));
}

const getTodos=(filter = Filters.All)=>{
    switch(filter){
        case Filters.All:
            return [...state.todos];
        
        case Filters.Completed:
            return state.todos.filter( todo => todo.done);

        case Filters.Pendind:
            return state.todos.filter( todo => !todo.done);

        default:
            throw new Error('Invalid filter');
    }
    
}

const addTodo=(description)=>{
    if(!description){
        throw new Error('Description is required');
    }
    state.todos.push(new Todo (description));
    saveStateToLocaleStorage();
}

const toggleTodo=(todoId)=>{

    state.todos = state.todos.map(todo=>{
        if(todo.id ===todoId ){
            todo.done = !todo.done;
        }
        return todo;
    });
    saveStateToLocaleStorage();
}

const deleteTodo=(todoId)=>{
    state.todos= state.todos.filter(todo => todo.id !== todoId);
    saveStateToLocaleStorage();
}

const deleteCompleted=()=>{
    state.todos= state.todos.filter(todo => todo.done);
    saveStateToLocaleStorage();
}

const setFilter=(newFilters = Filters.All)=>{
    state.filter = newFilters;
    saveStateToLocaleStorage();
}

const getCurrentFilter=()=>{
    return state.filter;
}

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}
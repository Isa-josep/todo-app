import { Todo } from "../models/todo-model"
import { createTodoHtml } from "./create-todo-html";
/**
 * 
 * @param {String} elementId 
 * @param {Todo} todos 
 */
let element;
export const renderTodos=(elementId,todos=[])=>{
    if(!element){
        element=document.querySelector(elementId);
    }
    if(!element){
        throw new Error('Invalid element');
    }
    element.innerHTML='';
    todos.forEach(todo=>{

        element.append(createTodoHtml(todo));
    });
}
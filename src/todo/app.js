import html from './app.html?raw';
import todoStore from '../store/todo.store';
import { renderTodos } from './use-cases';
/**
 * 
 * @param {String} elementId 
 */
const ElementIds={
    TodoList:'.todo-list',
    NewTodoInput:'#new-todo-input',

}
export const App =(elementId)=>{
    const displayTodos=()=>{
        const todos=todoStore.getTodos( todoStore.getCurrentFilter());
        renderTodos(ElementIds.TodoList,todos);
    }

    (()=>{
        const app=document.createElement('div');
        app.innerHTML=html;
        document.querySelector(elementId).append(app);
        displayTodos();

    })();
    //referencias 
    const newDescriptionInput = document.querySelector(ElementIds.NewTodoInput);
    const todoListUL = document.querySelector(ElementIds.TodoList);

    newDescriptionInput.addEventListener('keyup', (event)=>{
        if(event.keyCode!==13) return;
        if(event.target.value.trim().length === 0) return;
        todoStore.addTodo (event.target.value);
        displayTodos();
        
        event.target.value='';
    });
    todoListUL.addEventListener('click',(event)=>{
        const element =event.target.closest('[data-id]');
        todoStore.toggleTodo(element.getAttribute('data-id'));
        displayTodos();
    });
}
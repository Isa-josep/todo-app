import html from './app.html?raw';
import todoStore from '../store/todo.store';
import { renderTodos } from './use-cases';
/**
 * 
 * @param {String} elementId 
 */
const ElementId={
    TodoList:'.todo-list',

}
export const App =(elementId)=>{
    const displayTodos=()=>{
        const todos=todoStore.getTodos( todoStore.getCurrentFilter());
        renderTodos(ElementId.TodoList,todos);
    }

    (()=>{
        const app=document.createElement('div');
        app.innerHTML=html;
        document.querySelector(elementId).append(app);
        displayTodos();

    })();
}
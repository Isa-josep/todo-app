import html from './app.html?raw';
import todoStore, { Filters } from '../store/todo.store';
import { renderTodos,renderPending } from './use-cases';
/**
 * 
 * @param {String} elementId 
 */
const ElementIds={
    ClearCompleted:'.clear-completed',
    TodoList:'.todo-list',
    NewTodoInput:'#new-todo-input',
    TodoFilters: '.filtro',
    PendingCountLabel:'#pending-count'
}
export const App =(elementId)=>{
    const displayTodos=()=>{
        const todos=todoStore.getTodos( todoStore.getCurrentFilter());
        renderTodos(ElementIds.TodoList,todos);
        updatePendingCount();
    }

    const updatePendingCount=()=>{
        renderPending(ElementIds.PendingCountLabel);
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
    const clearCompletedButton = document.querySelector(ElementIds.ClearCompleted);
    const filtersLis = document.querySelectorAll(ElementIds.TodoFilters);

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

    todoListUL.addEventListener('click',(event)=>{
        const isDestroyElement =event.target.className === 'destroy';
        const element =event.target.closest('[data-id]');
        if( !element || !isDestroyElement) return;
        todoStore.deleteTodo (element.getAttribute('data-id'));
        displayTodos();
    });

    clearCompletedButton.addEventListener('click',(event)=>{
        console.log('click',event);
        todoStore.deleteCompleted();
        displayTodos();
    });

    filtersLis.forEach(element=>{
        element.addEventListener('click',(element)=>{
            filtersLis.forEach(el=>{
                el.classList.remove('selected');
            });
            element.target.classList.add('selected');
            switch(element.target.text){
                case 'Todos':
                    todoStore.setFilter(Filters.All);
                    break;
                case 'Pendientes':
                    todoStore.setFilter(Filters.Pendind);
                    break;
                case 'Completados':
                    todoStore.setFilter(Filters.Completed);
                    break;
                    
                }
            displayTodos();
        });
    });

}
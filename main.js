const todos=[];

window.onload=()=>{
    const form= document.getElementById('todo-form');
    form.onsubmit = (e) => {
        e.preventDefault();//previene el refresco de ventana que ocasiona submit
        const todo = document.getElementById('todo');
        const todoText = todo.value;
        todo.value='';
        todos.push(todoText);
        const todolist = document.getElementById('todo-list');
        todolist.innerHTML='';
        for(let t=0; t<todos.length; t++){
            todolist.innerHTML += '<li>' + todos[t] + '</li>';
        }
        console.log(todoText);
    }
}
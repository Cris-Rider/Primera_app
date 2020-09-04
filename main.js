const todos= JSON.parse(localStorage.getItem('todos')) || []; //retorna los elementos de todo o lo muestra vacio

const render = () => {
    const todolist = document.getElementById('todo-list');
    const todosTemplate = todos.map(t=>'<li>'+t+'</li>');
    todolist.innerHTML = todosTemplate.join('');
    const elementos = document.querySelectorAll('#todo-list li') 
    elementos.forEach((elemento, i)=>{
        elemento.addEventListener('click',() => {
            elemento.parentNode.removeChild(elemento);
            todos.splice(i, 1)
            actualizatodos(todos)
            render()
        })
    })
}

const actualizatodos =(todos)=>{//actualiza los elementos del localStorage con los elementos de la lista todos
    const todostrings=JSON.stringify(todos);
    localStorage.setItem('todos', todostrings);
}

window.onload=()=>{
    render()
    const form= document.getElementById('todo-form');
    form.onsubmit = (e) => {
        e.preventDefault();
        const todo = document.getElementById('todo');
        const todoText = todo.value;
        todo.value='';
        todos.push(todoText);
        actualizatodos(todos)
        render();
    }
}
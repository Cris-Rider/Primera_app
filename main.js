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
        const todosTemplate = todos.map(t=>'<li>'+t+'</li>');
        todolist.innerHTML = todosTemplate.join('');
        const elementos = document.querySelectorAll('#todo-list li')
        //ELIMINANDO ELEMENTOS 
        elementos.forEach((elemento, i)=>{
            elemento.addEventListener('click',() => {//al registrar el evento de click, addEventListener imprimira el elemento en la consola
                elemento.parentNode.removeChild(elemento);//elimina elementos de la lista
                todos.splice(i, 1)
                console.log(todos,i)
            })
        })

    }
}
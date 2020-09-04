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
        const todosTemplate = todos.map(t => '<li>'+t+'</li>');
        todolist.innerHTML = todosTemplate.join('');
        //INSPECCIONANDO ELEMENTOS DE LA TO DO LIST PRIMERA FORMA
        //document.querySelectorAll('#todo-list')
        //const todolist = document.querySelectorAll('#todo-list')
        //Array.from(todolist)
        //const elementos = document.querySelectorAll('#todolist li')
        //Array.from(elementos)
        //elementos.forEach(x => console.log(x))
        const elementos = document.querySelectorAll('#todo-list li')
        elementos.forEach((elemento, i)=>{
            elemento.addEventListener('click',() => {
                console.log(elemento,i)
            })
        })

    }
}
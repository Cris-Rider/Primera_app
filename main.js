window.onload=()=>{
    const form= document.getElementById('todo-form');
    form.onsubmit = (e) => {
        e.preventDefault();//previene el refresco de ventana que ocasiona submit
        const todo = document.getElementById('todo');
        const todoText = todo.value;
        todo.value='';
        console.log(todoText);
    }
}
window.onload=()=>{
const parrafo= document.getElementById('text')//consigue los elementos de html segun su id
parrafo.innerText = 'Texto actualizado'//podemos cambiar contenido de etiquetas
parrafo.innerHTML = '<li>elemento 1</li><li>elemento 2</li>'//podemos agregar elementos html a otro elemento html
}
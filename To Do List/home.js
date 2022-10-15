let addToDoButton = document.getElementById('add');
let todoContainer= document.getElementById('todoC');
let inputField= document.getElementById('inputField');

addToDoButton.addEventListener('click',function(){
    var par= document.createElement('p');
    par.classList.add('paragraph-styling');
    par.innerText=inputField.value;
    todoContainer.appendChild(par);
    inputField.value= "";

    par.addEventListener('click', function(){
        par.style.textDecoration = "line-through";
    })
    par.addEventListener('doubleclick',function(){
        todoContainer.removeChild(par);
    })
})
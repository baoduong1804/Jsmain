const form = document.querySelector('.form');
const input = document.querySelector('.input');
const submitBtn = document.querySelector('.submit');

const list = document.querySelector('.list');

form.onsubmit = e =>{
    e.preventDefault();
    let valueInput = input.value.trim()
    if(valueInput){
        createItem(valueInput)
    }
    saveTodoList()
}

function createItem(valueInput){
    let li = document.createElement('li');
    li.classList.add('item');
    li.innerHTML=`
        <span>${valueInput}</span>
        <ion-icon name="trash" class="delete-btn"></ion-icon>
    `

    li.querySelector('span').onclick = function(){
        this.classList.toggle('active')
    }

    li.querySelector('.delete-btn').onclick = function(){
        this.parentElement.remove();
        saveTodoList()
    }

    list.appendChild(li);
    input.value = '';
    localStorage.setItem('valueInput', valueInput);
}

function saveTodoList(){
    let todoList = document.querySelectorAll('li');
    let storageBox = [];
    todoList.forEach( item=>{
        let text = item.querySelector('span').innerText;
        // let status = item.querySelector('item')
        storageBox.push(text)
        
    })
    localStorage.setItem('storageBox', JSON.stringify(storageBox));
}

function init(){
    let data = JSON.parse(localStorage.getItem('storageBox'))
    data.forEach(item =>{
        createItem(item)
    })

    
}

init()
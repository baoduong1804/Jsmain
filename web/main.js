
const list = document.querySelectorAll('.tea__item');

let thisPage = 1;
const limit = 6;

function loadItem(){
    let beginItem = limit*(thisPage - 1);
    let endItem = limit*thisPage - 1;
    list.forEach((item,key)=>{
        if(key >= beginItem && key <= endItem){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    });
    listPage();
}

loadItem();

function listPage(){
    const count = Math.ceil(list.length/limit);
    const listPage = document.querySelector('.tea__listPage');
    listPage.innerHTML = '';
    for(let i=1;i<=count;i++){
        const newPage = document.createElement('li');
        newPage.innerText = i;
        if(i == thisPage){
            newPage.classList.add('active');
        }
        newPage.setAttribute('onclick',`changePage(${i})`);
        listPage.appendChild(newPage);
    }
    
}
function changePage(i){
    thisPage= i;
    loadItem();
}
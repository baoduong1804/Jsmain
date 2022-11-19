
const list = document.querySelectorAll('.tea__item');
const boxCart = document.querySelector('.tea__cart');
const iconCart = document.querySelector('.tea__icon-cart');
const iconClose = document.querySelector('.tea__cart-close');
const cartContainer = document.querySelector('.tea__cart-container');



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

iconCart.onclick = () =>{
    boxCart.style.display = 'block';
}

iconClose.onclick = () => {
    boxCart.style.display = 'none';
}
var addCart = document.querySelectorAll('.tea__item-add');
for(let i=0; i < addCart.length; i++){
addCart[i].onclick = () =>{
    addCart[i].classList.add('add');
    addCart[i].innerText = 'Added to cart';
    let itemNew = addCart[i].parentElement.parentElement.cloneNode(true);
    cartContainer.appendChild(itemNew);
    let itemInContainer = document.querySelectorAll('.tea__cart-container .tea__item');
}
}

function getItemInContainer(){

}
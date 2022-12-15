
const list = document.querySelectorAll('.tea__item');
const boxCart = document.querySelector('.tea__cart');
const iconCart = document.querySelector('.tea__icon-cart');
const iconClose = document.querySelector('.tea__cart-close');
const cartContainer = document.querySelector('.tea__cart-container');
const renderBtn = document.querySelector('.nav__render');
const navBar = document.querySelector('.nav');
const accountBtn = document.querySelector('.nav__item-account');
const modalForm = document.querySelector('.modal-form');
const modal = document.querySelector('.modal');
const inputLogin = document.querySelectorAll('.form__container-input');
const passwordLogin = document.querySelectorAll('.form__container-password');
const registerBtn = document.querySelectorAll('.button-register');
const loginBtn = document.querySelectorAll('.button-login');
const formLogin = document.querySelector('.form--login');
const formRegister = document.querySelector('.form--register');

for(let i=0;i<2;i++){
    registerBtn[i].onclick = ()=>{
        formLogin.classList.remove('form--active')
        formRegister.classList.add('form--active')
    }
    loginBtn[i].onclick = ()=>{
        formRegister.classList.remove('form--active')
        formLogin.classList.add('form--active')
    }
}

let thisPage = 1;
const limit = 6;

let amountStart = document.querySelectorAll('.amount-input');
for(let i=0; i < amountStart.length; i++){
    amountStart[i].value = 1;
}

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
let deleteBtn = document.querySelectorAll('.tea__item__added-delete');
let listItem = [];
let itemAdded = document.querySelectorAll('.tea__item__added');
// for(let i=0; i < itemInCart.length; i++){
//     itemInCart[i].style.display = 'flex';
// }
let numberProductInCart  = 0;
for(let i=0; i < addCart.length; i++){
addCart[i].onclick = () =>{
    numberProductInCart++;

addCart[i].innerText = 'Added to cart';

if(!addCart[i].classList.contains('add')){
    let itemNew = addCart[i].parentElement.parentElement.cloneNode(true);
    cartContainer.appendChild(itemNew);
    
}
addCart[i].classList.add('add');
let itemAddedInCart = document.querySelectorAll('.tea__cart-container .tea__item__added')[numberProductInCart-1];
let amountInput = itemAddedInCart.querySelector('.amount-input');
let amountMinus = itemAddedInCart.querySelector('.amount-minus');
let amountPlus = itemAddedInCart.querySelector('.amount-plus');
listItem.push({
    id:numberProductInCart,
    item:addCart[i].parentElement.parentElement,
    itemInCart:itemAddedInCart.parentElement.parentElement,
    deleteBtn:itemAddedInCart.parentElement.parentElement.querySelector('.tea__item__added-delete')  
});

   itemAddedInCart.style.display = 'flex';

amountMinus.onclick = () =>{   
    if(amountInput.value>1){
        --amountInput.value;
    }
}
    
amountPlus.onclick = () =>{
    ++amountInput.value;
}

amountInput.onchange = (e) =>{
    console.log(e.target.value)
}
for(let j=0;j<numberProductInCart;j++){
    listItem[j].deleteBtn.onclick = () =>{
        listItem[j].itemInCart.remove();
        listItem.splice(j,1)
        numberProductInCart--;
        console.log(listItem)
    }
}
console.log(listItem)



//     let deleteBtn = document.querySelectorAll('.tea__item__added-delete');
//     let deleteBtnInCart = document.querySelectorAll('.tea__cart-container .tea__item__added-delete');
    
//         for(let j=0; j < deleteBtn.length; j++){
//             let deleteBtn = document.querySelectorAll('.tea__item__added-delete');
//             let deleteBtnInCart = document.querySelectorAll('.tea__cart-container .tea__item__added-delete');
//             console.log(deleteBtnInCart)
//         deleteBtn[j].onclick = () =>{
//             console.log(i)
//             deleteBtn[i].parentElement.parentElement.querySelector('.add').classList.remove('add')
//             deleteBtnInCart[i].parentElement.parentElement.parentElement.remove();
//     }
// }
}
}

const navItem = document.querySelectorAll('.nav__item');
const teaContainer = document.querySelector('.tea__container');
const home = document.querySelector('.home');
    for(let i=0;i<navItem.length;i++){
        navItem[i].onclick = () =>{
            for(let j=0;j<navItem.length;j++){
            navItem[j].classList.remove('active');
        }
            navItem[i].classList.add('active');
            if(i===0){
                home.style.display = 'flex';
                teaContainer.style.display = 'none';
                boxCart.style.display = 'none';
            }
            else if(i===1){
                home.style.display = 'none';
                teaContainer.style.display = 'flex';
            }
            else if(i===2){
                boxCart.style.display = 'block';
            }
            else if(i===3){
                modal.style.display = 'block'
                modalForm.style.display ='flex';  
            }else{
                boxCart.style.display = 'none';
                teaContainer.style.display = 'none';
                home.style.display = 'none';
            }
        }
        
    }


renderBtn.onclick = () =>{
    if(navBar.classList.contains('open')){
        navBar.classList.remove('open');
        renderBtn.innerHTML = '<i class="fa-solid fa-arrow-right"></i>'
        // renderBtn.style.transform = 'rotate(360deg)'
    }else{
        navBar.classList.add('open');
        renderBtn.innerHTML = '<i class="fa-solid fa-arrow-left"></i>'
        // renderBtn.style.transform = 'rotate(180deg)'
    };
}

modal.onclick = ()=>{
    modal.style.display = 'none'
    modalForm.style.display ='none';
}

for(let i=0;i<inputLogin.length;i++){
    inputLogin[i].onchange = e =>{
        if(e.target.value.trim() !== ''){
            inputLogin[i].classList.add('has-value')
        }else{
            inputLogin[i].classList.remove('has-value')
        }
    }
}

for(let i=0;i<passwordLogin.length;i++){
    passwordLogin[i].onchange = e =>{
        if(e.target.value !== ''){
            passwordLogin[i].classList.add('has-value')
        }else{
            passwordLogin[i].classList.remove('has-value')
        }
    }
}







const list = document.querySelector('.list');
const input = document.querySelector('.input');
// const itemPrice = document.querySelector('.item__price');
const boxProduct = [];
init()

async function getProducts(){
    const productsAPI = 'https://fakestoreapi.com/products';
    const data = await fetch(productsAPI);
    const products = await data.json();
         products.forEach(item=>{
            const li = document.createElement('li');
            li.classList.add('item');
            boxProduct.push(li)
            li.innerHTML = `           
                    <div class="item__image">
                        <img src="${item.image}">
                    </div>
                    <div class="item__infor">
                        <div class="item__title">${item.title}</div>
                        <div class="item__price">$${item.price}</div>
                    </div>
            `
            list.appendChild(li)
        });  
        
}

function init(){
    getProducts();
    input.oninput = (e)=>{
        let valueInput = e.target.value.trim().toLowerCase();
        boxProduct.forEach(product =>{
            if(product.innerText.toLowerCase().includes(valueInput)){
                product.classList.remove('hide')
            }else{
                product.classList.add('hide')
            }
        })
    }
}


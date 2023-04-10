const btnCart = document.querySelector('.container-cart-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})


/*======================*/

const cartInfo = document.querySelector('.cart-product')
const rowProduct = document.querySelector('.rowProduct')


// lista

const productList = document.querySelector('.container-items')


// Variable de arreglos de Productos
let allProducts = []


productList.addEventListener ('click' , e =>{
       
     console.log(e.target.classList.contains('price'))

})




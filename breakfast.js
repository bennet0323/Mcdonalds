let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    console.log('works');

    body.classList.add('active');
})
closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
})

// string, number, boolear

// array, object
// let number1 = 10, number2 = 10;
// let g = [10, 12];

// let obj = {
//     id: 1,
//     name: 'PRODUCT NAME 1',
//     image: '1.PNG',
//     price: 8.99
// }

function showAlert() {
    alert("Thank You For Purchasing!")
}


let products = [
    {
        id: 1,
        name: 'Bacon, Egg, &Cheese Sandwhich',
        image: '1.png',
        price: 8.99
    },
    {
        id: 2,
        name: 'Egg McMuffin®',
        image: '2.png',
        price: 6.99
    },
    {
        id: 3,
        name: 'Sausage McMuffin',
        image: '3.png',
        price: 10
    },
    {
        id: 4,
        name: 'ham, egg&Cheese',
        image: '4.png',
        price: 11.99
    },
    {
        id: 5,
        name: 'lovin it',
        image: '5.png',
        price: 7.99
    },
    {
        id: 6,
        name: 'Ronald special',
        image: '6.png',
        price: 4.99
    },
];

let listCards = [];

function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img class="remove" src="./images/${value.image}"/>
            <p>${value.name}</p>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick ="addToCard(${key})">Add to Cart</button>
        `;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key) {
    if (listCards[key] == null) {
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    }

    reloadCard();
}
function reloadCard() {


    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            <div><img src="./images/${value.image}"/></div>
            <div>${value.name}</div>
            <div>${value.price.toLocaleString()}</div>
            <div>
            <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
            <div class="count">${value.quantity}</div>
             <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
            </div>
            `;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}


function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}


function orderNow() {
    const popUpEl = document.getElementById("order-pop-down");
    popUpEl.style.display = 'flex'
  }
  
  function closeNow() {
    const popUpEl = document.getElementById("order-pop-down");
    popUpEl.style.display = 'none'
  
  }
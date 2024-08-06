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
        id: 6,
        name: 'Big Mac',
        image: '7.png',
        price: 8.99
    },
    {
        id: 7,
        name: 'Quarter Pounder',
        image: '8.png',
        price: 6.99
    },
    {
        id: 8,
        name: 'Double quarter pounder',
        image: '9.png',
        price: 10
    },
    {
        id: 9,
        name: 'double big mac',
        image: '10.png',
        price: 11.99
    },
    {
        id: 10,
        name: 'kind of lovin it',
        image: '11.png',
        price: 7.99
    },
    {
        id: 11,
        name: 'frick with it',
        image: '12.png',
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
const popUpEl = document.getElementById("order-pop-down")
popUpEl.style.display = "flex"
}

function closeNow() {
    const popUpEl = document.getElementById("order-pop-down")
    popUpEl.style.display = "none"
    }
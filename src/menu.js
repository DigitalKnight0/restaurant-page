import black from './images/black.jpg'
import latte from './images/latte.jpeg'
import cappuccino from './images/cappuccino.jpg'
import americano from './images/americano.jpeg'
import mocha from './images/mocha.jpeg'
import irish from './images/irish.jpeg'



const menu = document.createElement('div')
menu.classList.add('menu-div')

const menuWrapper = document.createElement('div')
menuWrapper.classList.add('menu-wrap')

const info = document.createElement('p')
info.classList.add('menu-info')
info.textContent = "Welcome to our menu. Please choose from a variety of exiquite Coffees"

const coffeeTypes = ['Black', 'Latte', 'Cappuccino', 'Americano', 'Mocha', 'Irish']
const coffeeImgs = [black, latte, cappuccino, americano, mocha, irish]

function getRandomPrice(){
    return Math.floor(Math.random() * 100)
}

coffeeTypes.forEach((coffee, index) => {
    const card = document.createElement('div')
    card.classList.add('card')

    const title = document.createElement('p')
    title.classList.add('card-title')
    title.textContent = coffee
    card.appendChild(title)

    const img = document.createElement('img')
    img.classList.add('menu-image')
    img.src = coffeeImgs[index]
    card.appendChild(img)

    const buyBox = document.createElement('div')
    buyBox.classList.add('buy-box')

    const price = document.createElement('p')
    price.textContent = `$${getRandomPrice()}`

    const buyBtn = document.createElement('button')
    buyBtn.textContent = 'Order Now'

    buyBox.appendChild(price)
    buyBox.appendChild(buyBtn)
    card.appendChild(buyBox)
    menu.appendChild(card)
})

menuWrapper.appendChild(info)
menuWrapper.appendChild(menu)

export default function(){
    const wrapper = document.createElement('div')
    wrapper.classList.add('main')
    wrapper.appendChild(menuWrapper)

    return wrapper
}
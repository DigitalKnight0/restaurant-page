import homeIcon from './images/home.svg'
import phoneIcon from './images/phone.svg'
import mailIcon from './images/email.svg'

const wrapper = document.createElement('div')
wrapper.classList.add('main')

const info = document.createElement('div')
info.classList.add('contact-box')

const title = document.createElement('p')
title.textContent = 'Contact Us'

const contacts = document.createElement('div')
contacts.classList.add('contacts')

const address = document.createElement('div')
const addressImg = document.createElement('img')
addressImg.classList.add('icon')
addressImg.src = homeIcon
const addressText = document.createElement('p')
addressText.textContent = "Street 143, Miller Square, Timberlake"
address.appendChild(addressImg)
address.appendChild(addressText)

const phone = document.createElement('div')
const phoneImg = document.createElement('img')
phoneImg.classList.add('icon')
phoneImg.src = phoneIcon
const phoneText = document.createElement('p')
phoneText.textContent = "192-199-0321"
phone.appendChild(phoneImg)
phone.appendChild(phoneText)

const mail = document.createElement('div')
const mailImg = document.createElement('img')
mailImg.classList.add('icon')
mailImg.src = mailIcon
const mailText = document.createElement('p')
mailText.textContent = "192-199-0321"
mail.appendChild(mailImg)
mail.appendChild(mailText)

contacts.appendChild(address)
contacts.appendChild(phone)
contacts.appendChild(mail)

info.appendChild(title)
info.appendChild(contacts)

export default function(){
    const wrapper = document.createElement('div')
    wrapper.classList.add('main')
    wrapper.appendChild(info)

    return wrapper
}


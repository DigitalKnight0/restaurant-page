import "./style.css"
import getHeader from './header.js'
import getMain from './main-page.js'
import getMenu from './menu.js'
import getContacts from './contact.js'

const content = document.querySelector('.content');

(function(){
    content.appendChild(getHeader())
    content.appendChild(getMain())
})()

const menuBtn = document.querySelector('.menu')
const contactBtn = document.querySelector('.contact')
const mainBtn = document.querySelector('.home')

menuBtn.addEventListener('click', ()=>{
    content.removeChild(content.lastElementChild)
    content.appendChild(getMenu())
})

contactBtn.addEventListener('click', ()=>{
    content.removeChild(content.lastElementChild)
    content.appendChild(getContacts())
})

mainBtn.addEventListener('click', ()=>{
    content.removeChild(content.lastElementChild)
    content.appendChild(getMain())
});

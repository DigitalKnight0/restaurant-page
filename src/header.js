const header = document.createElement('div')
const logo = document.createElement('div')
const links = document.createElement('ul')

const linkTabs = ['Home', 'Menu', 'Contact']

for(let i = 0; i < 3; i++){
    const link = document.createElement('li')
    link.textContent = linkTabs[i]
    link.classList.add(linkTabs[i].toLowerCase())
    links.appendChild(link)
}

header.classList.add('header')
logo.classList.add('logo')
logo.textContent = "Cafe Timber"
links.classList.add('links')

export default function(){
    header.appendChild(logo)
    header.appendChild(links)
    return header
}
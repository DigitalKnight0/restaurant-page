import bgImg from './images/hero.jpeg'


const hero = document.createElement('div')
const heading = document.createElement('h1')
const intro = document.createElement('p')
const heroImg = document.createElement('img')



hero.classList.add('hero')

heading.textContent = "Coffee Redefined ~"

intro.textContent = "Cafe Timber offers the finest coffee in the town, Made with care. Our Cafe showcases finely grained and handpicked coffee beans just for you"

const heroText = document.createElement('div')
heroText.classList.add('hero-text')

heroImg.classList.add('hero-image')
heroImg.alt = "Coffee Image"
heroImg.src = bgImg

heroText.appendChild(heading)
heroText.appendChild(intro)
hero.appendChild(heroText)
hero.appendChild(heroImg)

export default function(){
    const wrapper = document.createElement('div')
    wrapper.classList.add('main')
    wrapper.appendChild(hero)
    
    return wrapper
} 

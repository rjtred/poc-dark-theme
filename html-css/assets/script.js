let body = document.querySelector('body')
let themeSwitcher = document.querySelector('#theme-switcher')

const getnext = () => currentTheme === 'light' ? 'dark' : 'light'

var currentTheme = localStorage.getItem('theme') || 'light'
var nextTheme = getnext()

const themeLoad = () => {
  localStorage.setItem('theme', currentTheme)
  body.className = `theme-${currentTheme}`

  themeSwitcher.innerHTML = `${nextTheme}_mode`
}

let darkmode 
function addDarkmodeWidget() {
  darkmode = new Darkmode()
}

const themeSwitch = () => {
  nextTheme = currentTheme
  currentTheme = getnext()

  // themeLoad()
  darkmode.toggle();
}

themeSwitcher.addEventListener('click', themeSwitch)

const addCardsNavigationHandlers = (navigation) => {
  let data = navigation.dataset
  let target = document.querySelector(data.target)
  let item = target.querySelector(data.item)

  let itemWidth = item.clientWidth
  let targetWidth = target.clientWidth

  let prevButton = navigation.querySelector('.navigation-prev')
  let nextButton = navigation.querySelector('.navigation-next')

  prevButton.addEventListener('click', () => {
    target.scrollBy(
      {
        top: 0,
        left: -itemWidth,
        behaviour: 'smooth'
      }
    )
  })

  nextButton.addEventListener('click', () => {
    target.scrollBy(
      {
        top: 0,
        left: itemWidth,
        behaviour: 'smooth'
      }
    ) 
  })
}

const initCardsNavigations = () => {
  const cardsNavigations = document.querySelectorAll('.cards-navigation')
  cardsNavigations.forEach(addCardsNavigationHandlers)
}

window.addEventListener('load', () => {
  addDarkmodeWidget()
  // themeLoad()
  initCardsNavigations()
})

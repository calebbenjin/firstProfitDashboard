'use strict'
// Open Toggle Function
document.querySelector('.mobile-toggle').addEventListener('click', function(){
  document.querySelector('aside').classList.add('show-nav')
  document.querySelector('aside').classList.remove('hide-nav')
})

// Close Toggle Function
document.querySelector('.close-toggle').addEventListener('click', function(){
  document.querySelector('aside').classList.add('hide-nav')
})

// Operation tabs Components
const tabs = document.querySelectorAll('.operations_tab');
const tabsContainer = document.querySelector('.tabs__container')
const tabsContent = document.querySelectorAll('.operation__content')

// tabs.forEach(tab => tab.addEventListener('click', () => {
//   console.log('TABS!!!')
// }))

tabsContainer.addEventListener('click', (e) => {
  const clicked = e.target.closest('.operations_tab')

  // Guard clause ( is basically an if statement that will return early if some conditions is matched )
  if(!clicked) return

  // Active tabs
  tabs.forEach(t => t.classList.remove('operations__tab--active'))
  clicked.classList.add('operations__tab--active')

  // Active Content
  // console.log(clicked.dataset.tab)
  tabsContent.forEach(t => t.classList.remove('operation__content--active'))
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operation__content--active')

  // console.log(clicked)
})


const transNext = document.querySelector('.trans-next')
const formContent = document.querySelectorAll('.form__content')
const nextBtn = document.querySelector('.next__btn')
const formContainer = document.querySelector('.slide__form')


// transNext.addEventListener('click', function() {
//   console.log("Hello world")
// })
// convertNext.addEventListener('click', function() {
//   console.log("Hello world")
// })

formContainer.addEventListener('click', (e) => {
  const cliks = e.target.closest('.next__btn')
  console.log(cliks)

  if(!cliks) return
  
console.log(formContent)
  formContent.forEach(t => t.classList.remove('form__content--active'))
  const activeCotent = document.querySelector(`.forms__content--${cliks.dataset.tab}`).classList.add('form__content--active')
  console.log(activeCotent)
})
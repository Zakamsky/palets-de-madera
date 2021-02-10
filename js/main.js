const nav = document.querySelector('.navigation')
nav.classList.remove('--no-js')

const page =  document.querySelector('body')
const navBtn = document.querySelector('.menu-opener')

navBtn.addEventListener( 'click', function(){
  menuToggle()
})
nav.addEventListener('click', function (evt)  {
  console.log(evt.target);
  if ( evt.target.classList.contains('--open')) {
    menuToggle()
  }
})

const menuToggle = function () {
  page.classList.toggle('--fixed')
  nav.classList.toggle('--open')
}

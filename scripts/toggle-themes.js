toggleButtonElement = document.querySelector('.js-toggle-button');
toggleMenuElement = document.querySelector('.js-toggle-menu');
toggleButtonElement.addEventListener('click',()=>{
  toggleMenuElement.classList.toggle('toggle-menu-on');
})

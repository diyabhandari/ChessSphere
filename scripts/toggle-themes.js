const toggleButtonElement = document.querySelector('.js-toggle-button');
const toggleMenuElement = document.querySelector('.js-toggle-menu');
toggleButtonElement.addEventListener('click',()=>{
  toggleMenuElement.classList.toggle('toggle-menu-on');
})
pageElement = document.querySelector('.page-container');
themeOptionElement = document.querySelectorAll('.toggle-menu-option');
if(localStorage.getItem('storedTheme')===null){
  localStorage.setItem('storedTheme','classic');
  pageElement.classList.add(`${storedTheme}`);
}
//if theres a theme stored in ls alr from last time, it gets that instead

themeOptionElement.forEach((theme)=>{
  theme.addEventListener('click',()=>{
    const storedTheme= localStorage.getItem('storedTheme');
    pageElement.classList.remove(`${storedTheme}`);
    pageElement.classList.add(`${theme.dataset.theme}`);
    localStorage.setItem('storedTheme', `${theme.dataset.theme}`);
    //console.log(`New stored theme: ${localStorage.getItem('storedTheme')}`);
  })
});










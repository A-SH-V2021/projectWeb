const mobileMenu=document.querySelector('.mobile')
const menumobileLeft=document.querySelector('.menu_mobile')
const mobileBtnClose=document.querySelector('.mobile_btn')
const hambergurIcon=document.querySelector('.nav__menu_btn')

hambergurIcon.addEventListener('click',()=>{
  mobileMenu.style.display='block'
 
  hambergurIcon.style.display='none'
})

mobileBtnClose.addEventListener('click',()=>{
  mobileMenu.style.display='none'
  hambergurIcon.style.display='block'
})
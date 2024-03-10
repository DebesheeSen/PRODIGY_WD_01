const menu = document.querySelector('#icon');
const list = document.querySelector('ul');
menu.addEventListener("click",()=>{ 
    list.classList.toggle('show');
});
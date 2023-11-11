let loader = document.getElementById('loader');
loader.style.display = 'flex';
window.addEventListener('load', () => {
    // loader.style.display = 'flex';
    setTimeout(() => {
        loader.style.display = 'none';
    }, 1000)
})


let menuMovil = document.getElementById('menuMovil');
let menu  = document.getElementById('menu');

menuMovil.style.display = 'none';

menu.addEventListener('click', () => {
    
    if(menuMovil.style.display == 'none'){
        menuMovil.style.display = 'flex';
    }
    else{
        menuMovil.style.display = 'none';
    }
})



















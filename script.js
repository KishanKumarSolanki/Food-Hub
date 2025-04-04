const mark = document.querySelector('#xmark');
const bar = document.querySelector('#bar'); 
const navbar = document.querySelector('#navbar');

bar.addEventListener('click', () => {
    bar.classList.add('hide');
    xmark.classList.remove('hide');  
    navbar.classList.remove('hide');  
});

xmark.addEventListener('click', () => {
    xmark.classList.add('hide');
    bar.classList.remove('hide');  
    navbar.classList.add('hide');
});
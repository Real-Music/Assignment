const bar = document.querySelector('#bars');
const sideBar = document.querySelector('#side-bar');
const btn = document.querySelector('.container');
const main = document.querySelector('main');


btn.addEventListener('click', function () {
    if (bar.className == 'icon') {
        bar.classList.add('active');
        sideBar.classList.add('active');
        main.style.marginLeft = '55px';
    } else if (bar.className == 'icon active') {
        bar.classList.remove('active');
        sideBar.classList.remove('active');
        main.style.marginLeft = '180px';
    }
})
let btn = document.querySelector('#btn');
let light = document.querySelector('.light');
let ct = document.querySelector('#cts');
let hero = document.querySelector('.hero');
let heros = document.querySelector('.hero-box');


function toggleBtn() {
    btn.classList.toggle('active');
    light.classList.toggle('light-on');
}

function toggleBtns() {
    ct.classList.toggle('chat-box');
    hero.classList.toggle('hero');
    hero.classList.toggle('hero-box');
}


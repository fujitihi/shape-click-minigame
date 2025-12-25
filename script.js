const container = document.querySelector('.container');
const msg = document.querySelector('#msg');
const circle = document.querySelector('#circle');
const square = document.querySelector('#square');
const dot = document.querySelector('#dot');

circle.addEventListener('click', () => {
    circle.classList.add("is-fixed");
    msg.textContent = "丸い図形って言いましたよね？";
});

square.addEventListener('click', () => {
    msg.textContent = "それは四角い図形ですよ？";
});

dot.addEventListener('click', () => {
    msg.style.color = "green";
    msg.textContent = "Clear";
    container.classList.add("is-done");
});
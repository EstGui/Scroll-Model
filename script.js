const slide = document.querySelector(".slide");
let elementosHTML = [];
let position = 0;
let qtd = 5;
let range = qtd * 3 + 2;
let marginCards = 15;

const doc = document.documentElement;
doc.style.setProperty('--qtd', qtd);
doc.style.setProperty('--margin', marginCards);

let numeros = Array.from({ length: qtd * 4}, (v, i) => i + 1);

numeros.forEach((num) => {
    const cardContainer = document.createElement('li');
    cardContainer.classList.add("cardContainer");
    
    cardContainer.innerHTML = num
    
    elementosHTML.push(cardContainer)
})

position = (position - (qtd + 1) + elementosHTML.length) % elementosHTML.length;

const loadContent = () => {
    slide.innerHTML = ``;
    for (let i = 0; i < range; i++) {
        slide.appendChild(
            elementosHTML[(i + position) % elementosHTML.length]
        );
    }
}

loadContent();

document.querySelector(".left-btn").addEventListener('click', () => {
    position = (position - qtd + elementosHTML.length) % elementosHTML.length;
    slide.classList.add('animating-right');
})

document.querySelector(".right-btn").addEventListener('click', () => {
    position = (position + qtd) % elementosHTML.length;
    slide.classList.add('animating-left');
})


slide.addEventListener("animationend", () => {
    slide.classList.remove('animating-left')
    slide.classList.remove('animating-right')
    loadContent();
});

const slide = document.querySelector(".slide");
let offsetX = 0;
let elementosHTML = [];
let deslocamento = 1213;
let position = 0;
let q = 7;

let numeros = Array.from({ length: 14 }, (v, i) => i + 1);



numeros.forEach((num) => {
    const cardContainer = document.createElement('li');
    cardContainer.classList.add("cardContainer");
    cardContainer.innerHTML = num

    elementosHTML.push(cardContainer)

    console.log(cardContainer)
})


const loadContent = () => {
    // for (let i = position * q; i < (position - 1) * q; i++) {
    //     slide.appendChild(elementosHTML[i % elementosHTML.length]);
    // }
    
    for (let i = position * q; i < (position + 1) * q; i++) {
        slide.appendChild(elementosHTML[i % elementosHTML.length]);
    }
    
    for (let i = (position + 1) * q; i < (position + 2) * q; i++) {
        slide.appendChild(elementosHTML[i % elementosHTML.length]);
    }
}

loadContent();

document.querySelector(".left-btn").addEventListener('click', () => {
    offsetX += deslocamento;
    slide.style.transform = `translateX(${offsetX}px)`;
})

document.querySelector(".right-btn").addEventListener('click', () => {
    offsetX -= deslocamento;
    slide.style.transform = `translateX(${offsetX}px)`;
    loadContent()
})
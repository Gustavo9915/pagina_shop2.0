const cards = document.querySelectorAll(`.card`);
window.addEventListener(`scroll`, () => {
    cards.forEach(card => {
        const posicion = card.getBoundingClientRect().top;
        const pantalla = window.innerHeight;

        if(posicion < pantalla -100){
            card.classList.add(`mostrar`)
        }
    })
})
const pasos = document.querySelectorAll(`.paso`);
window.addEventListener(`scroll`, () => {
    pasos.forEach(paso => {
        const posicion = paso.getBoundingClientRect().top;
        const pantalla = window.innerHeight;

        if(posicion < pantalla -100){
            paso.classList.add(`mostrar`);
        }
    })
})

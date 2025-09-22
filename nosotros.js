const images = document.querySelectorAll(`.carrusel img`);
const prevBtn = document.querySelector(`.prev`);
const nextBtn = document.querySelector(`.next`);
let current = 0;

function showImage(index){
    images.forEach((img, i) => {
        img.classList.toggle(`active`, i == index )
    });
}

prevBtn.addEventListener(`click`,() =>{
    current = (current - 1 + images.length) % images.length;
    showImage(current);
})

nextBtn.addEventListener(`click`,() =>{
    current = (current + 1) % images.length;
    showImage(current)
})
setInterval(() =>{
    current = (current + 1) % images.length;
    showImage(current);

}, 4000)

function subirProgreso(card) {
            let barra = card.querySelector("progress");

            let progreso = parseInt(barra.value) || 0;

            if (progreso < 100) {
            barra.value = progreso + 10;
        }
    }
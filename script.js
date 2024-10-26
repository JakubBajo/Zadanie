let currentSize = 2; // Stredná veľkosť je predvolená

// Funkcia na aktualizáciu veľkosti textu a zobrazenie veľkosti na posuvníku
function updateFontSize(value) {
    currentSize = parseInt(value);
    applyFontSize();
}

// Zväčšiť veľkosť textu
function increaseFontSize() {
    if (currentSize < 3) {
        currentSize++;
        document.getElementById('sizeSlider').value = currentSize;
        applyFontSize();
    }
}

// Zmenšiť veľkosť textu
function decreaseFontSize() {
    if (currentSize > 1) {
        currentSize--;
        document.getElementById('sizeSlider').value = currentSize;
        applyFontSize();
    }
}

// Aplikovať veľkosť textu a nastaviť data-size pre zvýraznenie
function applyFontSize() {
    const section = document.getElementById('sekcia_zmena');
    const slider = document.getElementById('sizeSlider');
    let fontSize, sizeText;

    if (currentSize === 1) {
        fontSize = '14px';
        sizeText = 'Malé';
    } else if (currentSize === 2) {
        fontSize = '18px';
        sizeText = 'Stredné';
    } else if (currentSize === 3) {
        fontSize = '22px';
        sizeText = 'Veľké';
    }

    section.style.fontSize = fontSize;
    slider.setAttribute('data-size', sizeText); // Aktualizácia textu
}

function toggleDetails(id) {
        // Skryje všetky detaily
        const details = document.querySelectorAll('.hobby-details');
        details.forEach(detail => {
            if (detail.id !== id) {
                detail.style.display = 'none';
            }
        });
        // Prepnúť zobrazenie pre konkrétne ID
        const currentDetail = document.getElementById(id);
        currentDetail.style.display = (currentDetail.style.display === 'block') ? 'none' : 'block';
    }


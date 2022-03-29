const imgs = document.getElementById('img');
const img = document.querySelectorAll('#img img');

let idx = img.length;

function carrossel () {
    img[idx - 1].style.left = `-100%`;

    idx--;

    if (idx === 0) {
        idx = img.length;

        img.forEach(element => element.style.left = '0');
    }
}

setInterval(carrossel, 1800);
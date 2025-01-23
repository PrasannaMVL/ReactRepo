let price = document.querySelector('.price-details')
window.addEventListener('scroll', () => {
    if(window.scrollY > 100) {
        price.classList.add('show')
    }
    else {
        price.classList.remove('show')
    }
}) 
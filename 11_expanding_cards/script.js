const innerContainer = document.querySelectorAll('.inner-container');

function removeActiveClass() {
    innerContainer.forEach(function(card) {
        card.classList.remove('active')
    })
}

innerContainer.forEach(function(card) {
    card.addEventListener('click', function(e) {
        // console.log(e.target)
        removeActiveClass();
        card.classList.add('active')
    })
})
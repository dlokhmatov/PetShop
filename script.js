const petCards = [...document.querySelectorAll(".pet-card")];
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
let cardIndex = 0;

function hideElement(element) {
    element.classList.replace("visible", "hidden");
};

function showElement(element) {
    element.classList.replace("hidden", "visible");

};

function nextSlide() {
    if (petCards.length - cardIndex > 3) {
        hideElement(petCards.at(cardIndex));
        cardIndex++;
        console.log(cardIndex);
    } else {
        nextButton.setAttribute('disabled', 'disabled');
    };
};

function prevSlide() {
    if (cardIndex > 0) {
        prevButton.removeAttribute('disabled');
        cardIndex--;
        showElement(petCards.at(cardIndex));
        console.log(cardIndex);
    } else {
        prevButton.setAttribute('disabled', 'disabled');
    };
};

prevButton.addEventListener('click', () => {
    prevSlide();
});

nextButton.addEventListener('click', () => {
    nextSlide();
});

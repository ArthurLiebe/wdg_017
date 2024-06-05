// get dom elements

const form = document.querySelector('form');
const ul = document.querySelector('ul');
const reloadBtn = document.querySelector('#reload');

// event listeners
window.addEventListener('load', () => {
    const data = JSON.parse(localStorage.getItem('data')) || [];
    data.forEach(addQuote);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const input = e.target.elements.userInput.value;
    if (!input) alert('Please provide an input');

    addToLocalStorage(input);
    addQuote(input);

    form.reset();
});

reloadBtn.addEventListener('click', () => {
    window.location.reload();
});

// functions

function addQuote(input) {
    const li = document.createElement('li');
    li.textContent = input;
    ul.insertBefore(li, ul.firstElementChild);
}

function addToLocalStorage(item) {
    const data = JSON.parse(localStorage.getItem('data')) || [];
    data.unshift(item);
    localStorage.setItem('data', JSON.stringify(data));
}

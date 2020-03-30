// Load your images on page-load
function preloader() {
    const imagesPaths = [
        "./images/img-1.jpg",
        "./images/img-2.jpg",
        "./images/img-3.jpg"
];
    const images = [];
    for (let i = 0; i < imagesPaths.length; i++) {
        images[i] = new Image();
        images[i].src = imagesPaths[i];
    }

    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};
window.addEventListener("load", preloader);

// creating shortcut for printing
const p = console.log;

// get the references to interactive HTML elements
const ctrlBtns = document.querySelectorAll('.controls button');
const cntnr = document.querySelector('.container');
let btnsArray = [
    ctrlBtns[0],
    ctrlBtns[1],
    ctrlBtns[2]
];

// create array that will store the data
let pages = [
    {
        heading: "Water Energy",
        bodyText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        thumb: "./images/img-1.jpg"
    },
    {
        heading: "Wind Energy",
        bodyText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        thumb: "./images/img-2.jpg"
    },
    {
        heading: "Electronic Energy",
        bodyText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        thumb: "./images/img-3.jpg"
    }
];
// create function that handles click-event
function clickBtn(ev) {

    // Brightspsce Ref: Week 6
    let clickedButton = ev.target;

    // MDN Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
    let index = btnsArray.indexOf(clickedButton);
    p(index);

    // MDN Ref: https://developer.mozilla.org/en-US/docs/Web/API/Element
    p(clickedButton.id);
    // handle moving id-active to the currently clicked button 

    // remove currently present id="active"
    for (let i = 0; i < ctrlBtns.length; i++) {
        // claiming that current element in the loop containe attribute
        if (ctrlBtns[i].id) {
            // MDN ref: https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute
            ctrlBtns[i].removeAttribute('id');
        }
    }


    clickedButton.id = 'active';


    cntnr.innerHTML = `
        <h2>${pages[index].heading}</h2>
         <figure>
        <img src="${pages[index].thumb}" alt="${pages[index].heading}">
         </figure>
        <p class="bodyText">${pages[index].bodyText}</p>
    `;
}
// register your buttons for click event
for (let i = 0; i < ctrlBtns.length; i++) {
    ctrlBtns[i].addEventListener('click', clickBtn);
}

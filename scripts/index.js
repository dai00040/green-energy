const p = console.log;

const ctrlBtns = document.querySelectorAll('.controls button');
const cntnr = document.querySelector('.container');
let btnsArray = [
    ctrlBtns[0],
    ctrlBtns[1],
    ctrlBtns[2]
];

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

function clickBtn(ev) {
    let clickedButton = ev.target;
    let index = btnsArray.indexOf(clickedButton);
    p(index);
    p(clickedButton.id);

    for (let i = 0; i < ctrlBtns.length; i++) {
        if (ctrlBtns[i].id) {
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

for (let i = 0; i < ctrlBtns.length; i++) {
    ctrlBtns[i].addEventListener('click', clickBtn);
}

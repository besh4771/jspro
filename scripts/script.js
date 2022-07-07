const myPosition = document.querySelector('h1');
myPosition.textContent = 'Software Engineer';

const myCompany = document.querySelector('h2');
myCompany.textContent = 'Teknohub';

let Name = "Benjamin";

// let lastName = 'Benjamin';
// if(lastName === 'Benjamin'){
//     alert('yay, Thats my last name');
// } else {
//     alert('awww, my last name is Okumu');
// }


function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}
console.log(multiply(4, 7));


// document.querySelector('html').addEventListener('click',
// funsction(), {
//     alert('ouch! Stop poking me');
// }
// );

// let myHTML = document.querySelector('html');
// myHTML.addEventListener('click', function() {
//     alert('Ouch! Stop poking me!');
// });  // Anonymous functions

// document.querySelector('html').addEventListener('click', () => {
//     alert('Ouch! Stop poking me!');
// });   // Anonymous functions

////Adding image changer

// let myImage = document.querySelector('img');

// myImage.onclick = function() {
//     let mySrc = myImage.getAttribute('src');
//     if(mySrc === 'images/img1.png') {
//         myImage.setAttribute('src', 'images/img2.png');
//     } else {
//         myImage.setAttribute('src', 'images/img1.png')
//     }
// }

// let myButton = document.querySelector('button');
// function setUserName() {
//     let myName = prompt('Please enter your name.');
//     localStorage.setItem('name', myName);
//     myHeading.textContent = 'Javascript is cool, ' + myName;
// }
// if(!localStorage.getItem('name')) {
//     setUserName();
// } else {
//     let storedName = localStorage.getItem('name');
//     myHeading.textContent = 'Javascript is cool, ' + storedName;
// }

const btn = document.querySelector('button');
const txt = document.querySelector('p');


btn.addEventListener('click', updateBtn);

function updateBtn() {
    if (btn.textContent === 'Startmachine') {
        btn.textContent = 'Stop machine';
        txt.textContent = 'The machine has started';
    } else {
        btn.textContent = 'Start machine';
        txt.textContent = 'The machine is stopped';

    }
}

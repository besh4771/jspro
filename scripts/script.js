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

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/img1.png') {
        myImage.setAttribute('src', 'images/img2.png');
    } else {
        myImage.setAttribute('src', 'images/img1.png')
    }
}
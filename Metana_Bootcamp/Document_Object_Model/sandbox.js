// JavaScript & the DOM (Document Object Model)

// const para1 = document.querySelector('p'); // selects the first instance of element
// console.log(para1.innerHTML); // logs the content of the first <p> elemen 

// const para2 = document.querySelector('body > div:nth-child(2) > p:nth-child(2)'); // use selecter to select the second paragraph
// console.log(para2.innerHTML); // logs the content of the second <p> elemen

// const error1 = document.querySelector('.error'); // selects the first instance of element
// console.log(error1.innerHTML); // logs the content of the first <p> elemen

// const diverror1 = document.querySelector('div.error'); // selects the first instance of element
// console.log(diverror1.innerHTML); // logs the content of the first <p> elemen


// // multiple elements
// const paras = document.querySelectorAll('p'); // selects all <p> elements
// paras.forEach(para => {
//     console.log(para.innerHTML); // logs the content of each <p> element
// });
// console.log(paras[0].innerHTML); // logs the <p> element at index 0

// const errors = document.querySelectorAll('.error'); // selects all elements with class error
// console.log(errors); // logs all elements with class error in a NodeList

// errors.forEach(error => {
//     console.log(error.innerHTML); // logs the content of each element with class error
// });

// // get an element by ID
// const title = document.getElementById('page-title'); // selects the element with the ID page-title
// console.log(title); // logs the element with the ID page-title

// // get elements by their class name
// const errors = document.getElementsByClassName('error'); // selects all elements with the class error
// console.log(errors); // logs all elements with the class error in a HTMLCollection  

// // get elements by their tag name
// const paras = document.getElementsByTagName('p'); // selects all <p> elements
// console.log(paras); // logs all <p> elements in a HTMLCollection

// changing text content
// const para = document.querySelector('p');
// console.log(para.innerText); // logs the text content of the <p> element
// para.innerText = 'ninjas are awesome!'; // changes the text content of the <p> element

// const paras = document.querySelectorAll('p');
// paras.forEach(para => {
//      console.log(para.innerText); // logs the text content of each <p> element
//     para.innerText += ' new text'; // changes the text content of each <p> element
// })

// const content = document.querySelector('.content'); // selects the element with the class content
// // console.log(content.innerHTML); // logs the content of the element with the class content
// // content.innerHTML += '<h2>This is a new H2</h2>'; // changes the content of the element with the class content

// const people = ['mario', 'luigi', 'yoshi'];
// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`;
// }) 

// const link = document.querySelector('a'); // selects the first <a> element

// console.log(link.getAttribute('href')); // logs the value of the href attribute
// link.setAttribute('href', 'https://www.thenetninja.co.uk'); // changes the value of the href attribute
// link.innerText = 'The Net Ninja Website'; // changes the text content of the <a> element

// const mssg = document.querySelector('.error'); // selects the first element with the class error
// console.log(mssg.getAttribute('class')); // logs the value of the class attribute
// mssg.setAttribute('class', 'success'); // changes the value of the class attribute
// mssg.setAttribute('style', 'color: green;');

// const title = document.querySelector('h1'); // selects the first <h1> element 

// // title.setAttribute('style', 'margin: 50px;'); // changes the value of the style attribute

// console.log(title.style); // logs the style object of the <h1> element
// console.log(title.style.color); // logs the color property of the style object

// title.style.margin = '50px'; // changes the margin property of the style object
// title.style.color = 'crimson'; // changes the color property of the style object
// title.style.fontSize = '60px'; // changes the font-size property of the style object
// title.style.margin = ''; // removes the margin property of the style object

// const content = document.querySelector('.error'); // selects the first <p> element

// console.log(content.classList); // logs the classList of the <p> element
// content.classList.add('success'); // adds the class success to the <p> element
// content.classList.remove('error'); // removes the class error from the <p> element

// const paras = document.querySelectorAll('p'); // selects all <p> elements
// paras.forEach(para => {
//     if (para.textContent.includes('error')) {
//         para.classList.add('error');
//     }
//     if (para.innerText.includes('success')) {
//         para.classList.add('success');
//     }
// });


// Your code goes here
const navBar = document.querySelector('.nav');
const headerColor = document.querySelector('header');
const clickBorder = document.querySelector('.intro img');
const doubleClick = document.querySelector('.intro h2');
const resize = document.querySelector('.img-content');
const useFocus = document.querySelector('.nav-link');
const resizing = document.querySelector('footer');
const scrolling = document.querySelector('.container h2');
const clickIntro = document.querySelector('.intro');


//mouseover
navBar.addEventListener('mouseover',(event) => {event.target.style.color = 'blue'});
//mouseout
navBar.addEventListener('mouseout',(event) => {event.target.style.color = 'black'});
//keypress
document.addEventListener('keypress',(event) => {
    if(event.key === 'g'){
        headerColor.style.backgroundColor = 'green';
    } else if(event.key === 'r'){
        headerColor.style.backgroundColor = 'red';
    } else if(event.key === 'b'){
        headerColor.style.backgroundColor = 'blue';
    } else {
        headerColor.style.backgroundColor = 'pink';
    }
});
//load
window.addEventListener('load',(event) => {alert('Congratulation! You are our 1,000,000th customer! Click "OK" to claim your prize.')});
//click
clickBorder.addEventListener('click',(event) => {
    clickBorder.style.border = '3px solid blue';
    event.stopPropagation();
});

//dblclick
doubleClick.addEventListener('dblclick',(event) => {doubleClick.style.fontSize = '5rem'});
//wheel
resize.addEventListener('wheel',(event) => {
    if(event.deltaY < 0){
        resize.style.width = '40%'
    } else {
        resize.style.width = '20%'
    }
});
//focus
useFocus.addEventListener('focus',(event) => {useFocus.style.backgroundColor = 'red'});
//resize
window.addEventListener('resize',(event) => {resizing.style.backgroundColor = 'yellow'});
//scroll
window.addEventListener('scroll',(event) => {
    if(window.scrollY > 0){
        scrolling.style.fontFamily = 'Arial, Helvetica, sans-serif';
    }
});
//nesting similar event to 'click' above. used stopPropagation above.
clickIntro.addEventListener('click',(event) => {clickIntro.style.background = 'pink'});

//preventDefault
navBar.addEventListener('click',(event) => {
    event.preventDefault();
});
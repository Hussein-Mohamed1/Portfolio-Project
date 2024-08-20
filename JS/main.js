// click in nav par links functionality
let links = document.querySelectorAll('.btn');
links.forEach((link) => {
    link.addEventListener('click',() => {
        let section = document.querySelector(`.${link.getAttribute('name')}`);
        console.log(getComputedStyle(section).getPropertyValue('display'));
    })
})


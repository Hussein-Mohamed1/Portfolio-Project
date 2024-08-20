// click in nav par links functionality
let navlinks = document.querySelectorAll('.header-links li');
navlinks.forEach((link) => {
    link.addEventListener('click',(e) => {
        let cursection = document.querySelector('.active');
        console.log(e.target)
        let sectiontoshow  = document.querySelector(`.${e.target.getAttribute('name')}`);
        cursection.classList.remove('active');
        sectiontoshow.classList.add('active');
    })
})


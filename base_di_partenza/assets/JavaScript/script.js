document.addEventListener('scroll', () => {
    let header = document.querySelector('header');
    let button = document.querySelector('button');
    if (window.scrollY > 395 ) {
        header.classList.add('scroll');
        button.classList.add('scrollButton');
    }
    else {
        header.classList.remove('scroll');
        button.classList.remove('scrollButton');
    }
})
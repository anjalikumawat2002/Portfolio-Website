const navSlide=() => {
    const copy=document.querySelector('.copy');
    const nav=document.querySelector('.nav-links');
    const navLinks=document.querySelectorAll('.nav-links li');
copy.addEventListener('click' , () => {
    nav.classList.toggle('nav-active');
});


}

navSlide();

$(document).ready(function(){
    const track = document.querySelector('.carousel-container .track');
    const sectionBtns = document.querySelectorAll('.c-nav span');

    for (let i = 0; i < sectionBtns.length; i++) {
        sectionBtns[i].addEventListener('click', function () {
            var carouselWidth = document.querySelector('.carousel-container').offsetWidth;
            var activeSection = document.querySelector('.c-nav span.s-active');
            var activeSectionNumber = activeSection.getAttribute('data-value');

            if (this.getAttribute('data-value') !== activeSectionNumber) {
                track.style.transform = `translateX(-${carouselWidth * i}px)`;
                activeSection.classList.remove('s-active');
                this.classList.add('s-active');
            }
        })
    }
});
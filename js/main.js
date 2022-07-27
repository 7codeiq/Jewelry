function mobileMenu() {
    document.getElementById("mobile").classList.toggle("active");
    document.getElementById("1").classList.toggle("up-line-active");
    document.getElementById("2").classList.toggle("line-active");
    document.getElementById("3").classList.toggle("down-line-active");
};


const sr = ScrollReveal ({
    distance: '45px',
    duration: 2700,
    reset: true

})

sr.reveal('.photo', {delay:350, origin:'bottom'})
sr.reveal('.num-slide', {delay:350, origin:'right'})
sr.reveal('.social', {delay:200, origin:'left'})

sr.reveal('.flex-home', {delay:200, origin:'right'})
sr.reveal('.flex-home-shop', {delay:200, origin:'left'})
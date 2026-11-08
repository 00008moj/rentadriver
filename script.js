ScrollReveal().reveal(".flex-container, #about, #drivers, #reviews, #cta, #contact", {
    distance: "20px",
    origin: "bottom",
    duration: 450,
    delay: 0,
    easing: "ease-out",
    reset: false,
    viewFactor: 0.15
});

ScrollReveal().reveal(".hero-buttons button", {
    distance: "20px",
    origin: "bottom",
    duration: 450,
    delay: 0,
    interval: 80,
    easing: "ease-out",
    reset: false
});

ScrollReveal().reveal(".about-container div", {
    distance: "20px",
    origin: "bottom",
    duration: 450,
    delay: 0,
    interval: 80,
    easing: "ease-out",
    reset: false
});

ScrollReveal().reveal(".driver-reveal", {
    distance: "20px",
    origin: "bottom",
    duration: 450,
    delay: 0,
    interval: 80,
    easing: "ease-out",
    reset: false
});

ScrollReveal().reveal(".client-reveal", {
    distance: "20px",
    origin: "bottom",
    duration: 450,
    delay: 0,
    interval: 80,
    easing: "ease-out",
    reset: false
});

ScrollReveal().reveal(".cta-buttons button", {
    distance: "20px",
    origin: "bottom",
    duration: 450,
    delay: 0,
    interval: 80,
    easing: "ease-out",
    reset: false
});

window.addEventListener("pageshow", () => {
    document.querySelector("form").reset();

});

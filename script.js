let animationObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            if(entry.target.classList.contains('services-section')){
                let i = 0;
                entry.target.querySelectorAll('.service-item').forEach(element => {
                    requestAnimationFrame(() => startAnimation(element, i++));
                });
            } else {
                entry.target.querySelectorAll('*').forEach(element => {
                    requestAnimationFrame(() => startAnimation(element, 0));
                });
            }
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

function startAnimation(element, delay) {
    setTimeout(() => {
        element.style.animationPlayState = 'running';
    }, 250 * delay);
}

document.querySelectorAll('section').forEach(element => {
    animationObserver.observe(element);
});

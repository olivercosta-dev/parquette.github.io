let animationObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            if(entry.target.classList.contains('services-section')){
                let i = 0
                entry.target.querySelectorAll('.service-item')
                 .forEach(element => {
                    setTimeout(() => {
                        element.style.animationPlayState = 'running'}, 250 * i++)
                 })
            } else {
                entry.target
                 .querySelectorAll('*')
                    .forEach((element) => {
                        element.style.animationPlayState = 'running'
                    }
                )
            }
            observer.unobserve(entry.target)
        }
    })
}, {
    threshold: 0.5
}
)

document.querySelectorAll('section').forEach(element => {
    animationObserver.observe(element)
})
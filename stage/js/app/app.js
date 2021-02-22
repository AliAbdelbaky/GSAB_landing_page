const navbutton = document.querySelector(".nav-btn"),
    navOpen = document.querySelector(".nav-open");
const tl = new TimelineLite({ paused: true, reversed: true });
//to(object, time , {animate})
tl
    .to(".cover", 0.5, {
        width: "60%",
        ease: Power2.easeInOut
    })
    .to(".nav-closed", 0.4, {
        width: "40%",
        ease: Power2.easeInOut
    })
    .to("nav", 0.5, {
        height: "100%",
        width: "40%",
        ease: Power2.easeInOut
    }, "-=.5")
    .fromTo(".nav-open", 0.5, {
        opacity: 0,
        x: 50,
        ease: Power2.easeInOut
    }, {
        opacity: 1,
        x: 0,
        onComplete: () => {
            navOpen.style.pointerEvents = "auto";
        }
    })
navbutton.addEventListener('click', (e) => {
    if (tl.isActive()) {
        e.preventDefault();
        e.stopImmediatePropagation();
        return false
    };
    toggleTween(tl);
});

function toggleTween(tween) {
    tween.reversed() ? tween.play() : tween.reverse();
};
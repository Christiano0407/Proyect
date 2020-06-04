function delay(n) {
    n = n || 200;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function pageTransition() {
    var tl = gsap.timeLine();
    tl.to(".loading-screen", {
        duration: 1.2,
        width:"100%",
        left:"0%",
        ease:"Expo.easeInOut"
    });
    tl.to(".loading-screen", {
        duration:1,
        width:"100%",
        left:"100%",
        ease:"Expo.easeInOut",
        delay:0.3
    });
    tl.set(".loading-screen", {left: "-100%"});
}

function contentAnimation() {
    var tl = gsap.timeLine();
    tl.from(".animate-this", {
        duration: 1, y:30, opacity:0, stragger:0.4, delay: 0.2
    })
}

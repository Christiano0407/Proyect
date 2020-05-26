const section = document.querySelectorAll(`section`);
const bubble = document.querySelector(`.bubble`);

const gradients = [ 
    "linear-gradient(to right top, #0e0300, #310101",
   "linear-gradient(to right top, #e53935, #e35d5b",
   "linear-gradient(to right top, #00973f, #953675",
   "linear-gradient(to right top, #037cc7, #050763",
   "linear-gradient(to right top, #e5cb35, #220101"

];

const options = {
    threshold:0.7
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
    entries.forEach(entry => {
        const className = entry.target.className;
     /*    console.log(className); */
     const activeAnchor = document.querySelector(`[data-page=${className}]`);
     const gradientIndex = entry.target.getAttribute(`data-index`);
     const coords = activeAnchor.getBoundingClientRect();
     const directions = {
         height: coords.height,
         width: coords.width,
         top: coords.top,
         left: coords.left
     };
    
     if (entry.isIntersecting){
         bubble.style.setProperty("left", `${directions.left}px`);
         bubble.style.setProperty("top", `${directions.top}px`);
         bubble.style.setProperty("width", `${directions.width}px`);
         bubble.style.setProperty("height", `${directions.height}px`);
         bubble.style.background = gradients[gradientIndex];
     }
    })
    }
    
    section.forEach(section => {
        observer.observe(section);
    });
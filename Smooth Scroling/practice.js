
let scrollContainer = document.querySelector('#scrollContainer');
let containerHeight = scrollContainer.getBoundingClientRect().height;
document.body.style = `height: ${containerHeight}px;`

window.addEventListener('scroll', ()=> {
    let data = Math.trunc(scrollY);
    let scroll = `translateY(-${data}px)`
    scrollContainer.style.transform = scroll; 
})




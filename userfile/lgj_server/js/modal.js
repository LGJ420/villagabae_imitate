const modal1OpenButton = document.querySelector('.modal1_open');
const modal1CloseButton = document.querySelector('.modal1_close');
const modal1 = document.querySelector('.modal1');

modal1OpenButton.addEventListener("click", ()=>{
    modal1.style.display = "block"
})

modal1CloseButton.addEventListener("click", ()=>{
    modal1.style.display = "none"
})

const modal2OpenButton = document.querySelector('.modal2_open');
const modal2CloseButton = document.querySelector('.modal2_close');
const modal2 = document.querySelector('.modal2');

modal2OpenButton.addEventListener("click", ()=>{
    modal2.style.display = "block"
})

modal2CloseButton.addEventListener("click", ()=>{
    modal2.style.display = "none"
})
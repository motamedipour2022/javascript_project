const container = document.querySelector(".container");
const toggle = document.querySelector(".toggel");

toggle.addEventListener('click',()=>{
    container.classList.toggle("dark");
});

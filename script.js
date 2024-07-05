const information = document.querySelector("#Informations")
const closeButton = document.querySelector(".close")
const mobileButton = document.querySelector(".mobile");
const menu = document.querySelector(".menu")

closeButton.addEventListener("click", ()=>{
  mobileButton.style.display = "none";
})

menu.addEventListener("click", ()=>{

  mobileButton.style.display = "block"
})
information.addEventListener("click", ()=>{
  window.location.href = "./informations.html"
})

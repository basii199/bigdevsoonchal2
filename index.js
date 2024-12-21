document.querySelectorAll("ul button").forEach((button)=>{

  button.addEventListener("click", (e)=>{

    document.querySelectorAll("ul button").forEach((button2)=>{
      button2.classList.remove("activate")
    })

    let elem = e.target
    elem.classList.add("activate")
  })
})

function changeImage(val){
  document.querySelector(".main-image").src = `images/vintage-${val}.jpg`
}

document.querySelectorAll("ol img").forEach((but)=>{
  
  but.addEventListener("click", (e)=>{
    
    document.querySelectorAll("ol img").forEach((but2)=>{
      but2.classList.remove("selected")
    })

    let el = e.target
    el.classList.add("selected")
  })  
})
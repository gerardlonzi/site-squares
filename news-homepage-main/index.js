const pp = document.querySelector(".pp")
const nav1 = document.querySelector(".nav1")
const mm = document.querySelector(".mm")


function sock(){
    if(nav1.classList.contains("close")){
        nav1.classList.remove("close")

    }
    else{
        nav1.classList.toggle("open")

    }
}

pp.addEventListener("click",()=>{
   sock()
  
})
mm.addEventListener("click",()=>{
    nav1.classList.toggle("close")
})
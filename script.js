// const form=document.querySelector(".subscribe_form")

// const  register_btn=document.querySelector("main .subscribe_form .susbcribe_input button")
// const  email_input=document.querySelector("main .subscribe_form .susbcribe_input input")
// register_btn.addEventListener("click",()=>{
//     console.log(email_input.value)
// })


// setTimeout(()=>{
//    form.classList.remove("subscribe_form_hide")
    
// },4000)


let header=document.querySelector("header")
window.addEventListener("scroll",()=>{
    header.classList.toggle("active_header",window.scrollY>0)
    
})


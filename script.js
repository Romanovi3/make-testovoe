let sbar = document.getElementById('sidebar')
let inputEmail = document.getElementById('input-email')
let inputLabel = document.getElementById('input-label')
let erMessage = document.getElementById('error-message')

console.log(inputEmail, inputLabel, erMessage)

let validation = ()=>{
    setInterval(()=>{
        if (inputEmail.validity.valid){
            console.log('valid')
        }
        else{
            console.log('invalid')
        }
        clearInterval(checking)
    },100)

}

let checkValidation= ()=>{
    inputEmail.addEventListener('input', validation())
}
let checkScroll = ()=>{
    if (window.scrollY >= 340){
        sbar.classList.add('sidebar-fixed')
    }
    else{
        sbar.classList.remove('sidebar-fixed')
    }
}

const checking = setInterval(()=>{
    checkScroll()
    checkValidation()
},100)


let sbar = document.getElementById('sidebar')
let inputEmail = document.getElementById('input-email')
let inputLabel = document.getElementById('input-label')
let erMessage = document.getElementById('error-message')


console.log(inputEmail, inputLabel, erMessage)


let checkValidation = ()=>{
    inputEmail.addEventListener('focusout', ()=>{
        const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;
        if(emailPattern.test(inputEmail.value)){
            inputEmail.classList.remove('input-invalid')
            inputLabel.classList.remove('input-label-invalid')
            erMessage.innerText = ''
            console.log('xyu')
        }
        else{
            inputEmail.classList.add('input-invalid')
            inputLabel.classList.add('input-label-invalid')
            console.log('golova')
            erMessage.innerText = 'Введите корректный E-mail...'
        }
    })
}

document.addEventListener('DOMContentLoaded', checkValidation())

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
},100)


let sbar = document.getElementById('sidebar')
console.log(sbar)

let checkScroll = ()=>{
    if (window.scrollY >= 370){
        sbar.classList.add('sidebar-fixed')
    }
    else{
        sbar.classList.remove('sidebar-fixed')
    }
}

setInterval(()=>{
    checkScroll()
},100)
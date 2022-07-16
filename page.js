const hamburger = document.querySelector('.hamburger')
const sideBar = document.querySelector('.sidebar')
const hideBar = document.querySelectorAll('nav .sidebar li a')


hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('active')
    sideBar.classList.toggle('active')
})

hideBar.forEach(function(element){
    element.addEventListener('click', () =>{
        sideBar.classList.add('active')
        hamburger.classList.remove('active')
    })
})

// Caraousel
const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')

let idx = 0

// let interval = setInterval(run, 2000)


function run() {
    idx++
    changeImage()
}

function changeImage() {
    if(idx > img.length - 1){
        idx = 0
    }else if(idx < 0){
        idx = img.length - 1
    }

    //imgs -> stylecss -> transform: translateX $idx(nama var) | {perhitungan}
    imgs.style.transform = `translateX(${-idx * 500}px)`

}

function resetInterval(){
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

rightBtn.addEventListener('click', () => {
    idx ++ 
    changeImage()
    resetInterval()
    console.log('kanan')
})

leftBtn.addEventListener('click', () =>{
    idx--
    changeImage()
    resetInterval()
    console.log('kiri')
})











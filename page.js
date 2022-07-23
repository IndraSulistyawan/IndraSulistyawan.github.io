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

//script untuk menghubungkan ke google sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbye8DHiLVxm_kdczMSSoIFcfsmJxUAeil3FknLhMg_Igg2cBvuwVX5RNe0eGqFDR-7I/exec'
        const form = document.forms['submit-to-google-sheet']

        



        

        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                console.log('Success!', response)
                alert("Pesan Berhasil Dikirimkan")
                const sending = document.getElementById('sending').innerHTML = "Submit"
                setTimeout(function(){
                    window.location.reload();
                },4000)

            })
            .catch(error => {console.error('Error!', error.message)
                alert("Pesan Gagal Dikirim")
                setTimeout(function(){
                    window.location.reload();
                },3000)
            })
        })


function mengirim(){
    const sending = document.getElementById('sending')
    sending.innerHTML = "Sending";
    sending.style.padding = "10px 15px";

}











const hamburger = document.querySelector(".hamburger");
const sideBar = document.querySelector(".sidebar");
const hideBar = document.querySelectorAll("nav .sidebar li a");

document.onclick = function (e) {
  if (e.target.id !== "sidebar" && e.target.id !== "hamburger") {
    sideBar.classList.add("active");
    hamburger.classList.remove("active");
  }
};

hideBar.forEach(function (element) {
  element.addEventListener("click", () => {
    sideBar.classList.add("active");
    hamburger.classList.remove("active");
  });
});

hamburger.onclick = function () {
  hamburger.classList.toggle("active");
  sideBar.classList.toggle("active");
};

//script untuk menghubungkan ke google sheet
const scriptURL =
  "https://script.google.com/macros/s/AKfycbye8DHiLVxm_kdczMSSoIFcfsmJxUAeil3FknLhMg_Igg2cBvuwVX5RNe0eGqFDR-7I/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);
      // modal
      const modal = document.getElementById("modal");
      modal.innerHTML +=
        '<h1>Selamat</h1><p>pesan berhasil Terkirim</p><button type="button" id="close-modal">Okay</button>';

      modal.style.display = "block";
      const modalbutton = document.getElementById("close-modal");

      modalbutton.addEventListener("click", () => {
        modal.style.display = "none";
        window.location.reload();
      });

      document.onclick = function (e) {
        if (e.target == modal) {
          modal.style.display = "none";
        }
      };
      // setTimeout(function(){
      //     window.location.reload();
      // },4000)
    })
    .catch((error) => {
      console.error("Error!", error.message);
      // modal
      const modal = document.getElementById("modal");
      modal.innerHTML +=
        '<h1>GAGAL</h1><p>pesan tidak Terkirim</p><button type="button" id="close-modal">Okay</button>';

      modal.style.display = "block";
      const modalbutton = document.getElementById("close-modal");

      modalbutton.addEventListener("click", () => {
        modal.style.display = "none";
        window.location.reload();
      });
      window.onclick = function (e) {
        if (e.target == modal) {
          modal.style.display = "none";
        }
      };
      // setTimeout(function(){
      //     window.location.reload();
      // },3000)
    });
});

function mengirim() {
  const sending = document.getElementById("sending");
  sending.innerHTML = "Sending";
  sending.style.padding = "10px 15px";
}

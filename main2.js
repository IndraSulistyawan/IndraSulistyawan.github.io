const logoswitch = document.getElementById("logo-switch");
const switchbtn = document.querySelector(".switch-btn");
const circlebtn = document.querySelector(".circle");
const body = document.body;

switchbtn.addEventListener("click", () => {
  switchbtn.classList.toggle("mode");
  circlebtn.classList.toggle("mode");
  switchMode();
});

function switchMode() {
  body.classList.toggle("light");
}

const hamburger = document.querySelector(".hamburger");
const sideBar = document.querySelector(".sidebar");
const hideBar = document.querySelectorAll("nav .sidebar li a");

hideBar.forEach(function (element) {
  element.addEventListener("click", () => {
    sideBar.classList.toggle("active");
    hamburger.classList.toggle("active");
  });
});

hamburger.onclick = function () {
  hamburger.classList.toggle("active");
  sideBar.classList.toggle("active");
};

const iconskill = document.querySelectorAll(".icon-skill");

setInterval(() => {
  if (sideBar.classList.contains("active")) {
    hamburger.style.position = "absolute";
    console.log("sidebar active");
  } else {
    console.log("sidebar nonaktif");
  }

  if (body.classList.contains("light")) {
    switchbtn.classList.add("mode");
    circlebtn.classList.add("mode");
    iconskill[0].src = "assets/img/html-dark.png";
    iconskill[1].src = "assets/img/css-dark.png";
    iconskill[2].src = "assets/img/java-script-dark.png";
    iconskill[3].src = "assets/img/git-dark.png";
  } else {
    switchbtn.classList.remove("mode");
    circlebtn.classList.remove("mode");
    iconskill[0].src = "assets/img/html-light.png";
    iconskill[1].src = "assets/img/css-light.png";
    iconskill[2].src = "assets/img/java-script-light.png";
    iconskill[3].src = "assets/img/git-light.png";
  }
  switchDarkModeLocalStorage();
}, 300);

//web storage
function switchDarkModeLocalStorage() {
  let tema;
  if (body.classList.contains("light")) {
    tema = "LIGHT";
  } else {
    tema = "DARK";
  }
  //save to local storage
  localStorage.setItem("USERMODE", JSON.stringify(tema));
  return;
}
let getTheme = JSON.parse(localStorage.getItem("USERMODE"));
console.log(getTheme);

if (getTheme === "LIGHT") {
  body.classList = "light";
}

//progress bar and image project
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const fillbar = document.querySelectorAll(".fillbar");
fillbar.forEach((el) => observer.observe(el));

const imageproject = document.querySelectorAll(".imageproject");
imageproject.forEach((el) => observer.observe(el));

const innerskilltext = document.querySelectorAll(".skilltext");

//progress text persen

let forhtml = 0;
const textPersenHtml = setInterval(() => {
  forhtml += 1;
  innerskilltext[0].innerText = forhtml + "%";
  // console.log(forhtml);
  if (forhtml > 59) {
    fillbar[0].style.width = forhtml + "%";
    clearInterval(textPersenHtml);
  }
}, 20);

let forcss = 0;
const textPersenCss = setInterval(() => {
  forcss += 1;
  innerskilltext[1].innerText = forcss + "%";
  // console.log(forcss);
  if (forcss > 74) {
    fillbar[1].style.width = forcss + "%";
    clearInterval(textPersenCss);
  }
}, 20);

let forjs = 0;
const textPersenJs = setInterval(() => {
  forjs += 1;
  innerskilltext[2].innerText = forjs + "%";
  // console.log(forjs);
  if (forjs > 54) {
    fillbar[2].style.width = forjs + "%";
    clearInterval(textPersenJs);
  }
}, 20);

let forgit = 0;
const textPersenGit = setInterval(() => {
  forgit += 1;
  innerskilltext[3].innerText = forgit + "%";
  // console.log(forgit);
  if (forgit > 19) {
    fillbar[3].style.width = forgit + "%";

    clearInterval(textPersenGit);
  }
}, 20);

function sendMail() {
  var link = "mailto:indrasulistyawanne@gmail.com"
          //  + "?cc=myCCaddress@example.com" 
           + "?subject=" + encodeURIComponent("From " + document.getElementById("subjek").value )
           + "&body=" + encodeURIComponent(document.getElementById('pesan-email').value)
  ;
  
  window.location.href = link;
}

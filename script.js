let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector("#nav-menu");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

// Dark Mode / light mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};

      

document.getElementById('resume-link-1').addEventListener("click", () => {
  console.log("Script file loaded successfully");
  window.open("https://drive.google.com/file/d/1hLDlhuaX22KHckAUQVnxO5DabjbjBz2x/view?usp=sharing", "_blank");
});

document.getElementById('resume-link-2').addEventListener("click", () => {
  console.log("Script file loaded successfully");
  window.open("https://drive.google.com/file/d/1hLDlhuaX22KHckAUQVnxO5DabjbjBz2x/view?usp=sharing", "_blank");
});

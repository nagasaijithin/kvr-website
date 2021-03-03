import "../scss/style.scss";

let form = document.querySelector(".submit-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

let mbleEqltFormBtn = document.querySelector(".mbl-cancel-btn");
let mbleEqltFormParent = document.querySelector(".mbl-eqf-wapper");

mbleEqltFormBtn.addEventListener("click", (e) => {
  mbleEqltFormParent.classList.add("out");
  mbleEqltFormParent.classList.remove("in");
});
let mbleEqltFormActvBtn = document.querySelector(".mbl-eqf-active-btn");

mbleEqltFormActvBtn.addEventListener("click", (e) => {
  mbleEqltFormParent.classList.remove("out");
  mbleEqltFormParent.classList.add("in");
});

window.onscroll = function () {
  scrollFunction();
};

let navbar = document.querySelector("nav");
function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    navbar.classList.add("fixed-nav");
    navbar.classList.remove("nrml-nav");
  } else {
    navbar.classList.remove("fixed-nav");
    navbar.classList.add("nrml-nav");
  }
}

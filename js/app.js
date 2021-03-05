import "../scss/style.scss";

let form = document.querySelector(".form-sub");

let mbleEqltFormBtn = document.querySelector(".mbl-cancel-btn");
let mbleEqltFormParent = document.querySelector(".mbl-eqf-wapper");

form.addEventListener("submit", (e) => {
  let templateParams = {
    from_name: "KVR COMMUNICATIONS",
    input_name: document.querySelector("#name2").value,
    input_phone: document.querySelector("#phone2").value,
    input_email: document.querySelector("#email2").value,
  };
  emailjs
    .send("service_wqodyyi", "template_bqpdy5u", templateParams)
    .then((data) => {
      document.querySelector("#name2").value = "";
      document.querySelector("#phone2").value = "";
      document.querySelector("#email2").value = "";
      data.status = 200 ? alert("Message Send") : alert("Message Not Send");
    });
  e.preventDefault();
});

let form2 = document.querySelector(".form-sub2");
form2.addEventListener("submit", (e) => {
  let templateParams = {
    from_name: "KVR COMMUNICATIONS",
    input_name: document.querySelector("#name1").value,
    input_phone: document.querySelector("#phone1").value,
    input_email: document.querySelector("#email1").value,
  };
  emailjs
    .send("service_nllcyfb", "template_e52mzfa", templateParams)
    .then((data) => {
      document.querySelector("#name1").value = "";
      document.querySelector("#phone1").value = "";
      document.querySelector("#email1").value = "";
      data.status = 200 ? alert("Message Send") : alert("Message Not Send");
      mbleEqltFormParent.classList.add("out");
      mbleEqltFormParent.classList.remove("in");
    });
  e.preventDefault();
});

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

let mblelinkBtn = document.querySelector(".mbl-c2");
let mblelinkWapper = document.querySelector(".mble-hide-links");

mblelinkBtn.addEventListener("click", () => {
  if (!mblelinkBtn.classList.contains("clicked")) {
    mblelinkWapper.classList.add("mble-show-tab");
    mblelinkBtn.classList.add("clicked");
    mblelinkBtn.innerHTML = "X";
  } else {
    mblelinkWapper.classList.remove("mble-show-tab");
    mblelinkBtn.classList.remove("clicked");
    mblelinkBtn.innerHTML = "|||";
  }
});

let mbleAlllink = document.querySelectorAll(".mble-hide-links ul li");

mbleAlllink.forEach((each) => {
  each.addEventListener("click", () => {
    mblelinkBtn.classList.remove("clicked");
    mblelinkWapper.classList.remove("mble-show-tab");
    mblelinkBtn.innerHTML = "|||";
  });
});

let loader = document.querySelector(".loading-wapper");
setTimeout(() => {
  loader.classList.add("loading-wapper-fideout");
  setTimeout(() => {
    loader.classList.add("loading-wapper-hide");
  }, 2000);
}, 6000);

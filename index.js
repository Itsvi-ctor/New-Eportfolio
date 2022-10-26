// template_qnzpzhw
//service_q73cbtt
//user_WmQT8HB5yYTIZTqW4YiLt

let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    // Added rotate after tutorial
    shapes[i].style.transform = `translate(${x * boolInt}px, ${
      y * boolInt
    }px) rotate(${x * boolInt * 10}deg)`;
  }
}

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
}
//service_hbb7dmz
//template_gv7jtnb

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  const fail = document.querySelector(".modal__overlay--fail");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_hbb7dmz",
      "template_gv7jtnb",
      event.target,
      "dQKxWodp6gLdyklYs"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch((err) => {
      loading.classList.remove("modal__overlay--visible");
      fail.classList += " modal__overlay--visible";
    });
}

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}

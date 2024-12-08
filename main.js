let share = document.querySelector("main .container .info .share");
let contact = document.querySelector("main div.contact");
share.addEventListener("click", function () {
  contact.classList.toggle("active");
});

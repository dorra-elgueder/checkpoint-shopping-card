console.log("test if they are linked");
const qtes = document.querySelectorAll(".quantity");
const btnsPlus = document.querySelectorAll(".btn-plus");
for (let i = 0; i < btnsPlus.length; i++) {
  btnsPlus[i].addEventListener("click", function () {
    // qtes[i].innerHTML = +qtes[i].innerHTML + 1;
    // qtes[i].innerHTML++;
    if (qtes[i].innerHTML < 100) {
      btnsPlus[i].previousElementSibling.innerHTML =
        +btnsPlus[i].previousElementSibling.innerHTML + 1;
      totale();
    } else {
      alert("100 is the maximum quntity");
    }
  });
}
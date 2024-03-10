document.addEventListener("DOMContentLoaded", function () {
    const hamb = document.querySelector("#hamb");
    const popup = document.querySelector("#popup");
    const menu = document.querySelector("#menu").cloneNode(1);
    const body = document.body;
    const links = Array.from(menu.children);
  
    hamb.addEventListener("click", hambHandler);
  
    function hambHandler(e) {
      e.preventDefault();
      popup.classList.toggle("open");
      hamb.classList.toggle("active");
      body.classList.toggle("noscroll");
      renderPopap();
    }
  
    function renderPopap() {
      popup.appendChild(menu);
    }
  
    links.forEach((link) => {
      link.addEventListener("click", closeOnClick);
    });
  
    function closeOnClick() {
      popup.classList.remove("open");
      hamb.classList.remove("active");
      body.classList.remove("noscroll");
    }
})
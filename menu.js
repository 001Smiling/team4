
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
    var animateButton = function(element) {

        // Reset animation
        element.classList.remove('animate');
        // Add animation class
        element.classList.add('animate');
        setTimeout(function(){
          element.classList.remove('animate');
        }, 700); // Remove animation class after 700 ms
    };
      
      var bubblyButtons = document.getElementsByClassName("bubbly-button");
      
      for (var i = 0; i < bubblyButtons.length; i++) {
        setInterval(animateButton, 1000, bubblyButtons[i]); // Repeat animation every 1000 ms (1 second)
      }
})
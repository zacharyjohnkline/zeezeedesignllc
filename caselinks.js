'use strict';
function caseLinks(event) {
    window.removeEventListener("wheel", listening);
    console.log(event.target);
    if (event.target.alt === "weveel") {
      container.style.gridTemplateRows = "1fr";
      container.innerHTML = weveel;
    }
  }
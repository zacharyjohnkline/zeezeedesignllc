"use strict";
// const userAgent = navigator.userAgent;

// const isMobile =
//   /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
//     userAgent
//   );
// const isTablet = /iPad|Kindle/i.test(userAgent);
// const isDesktop = !isMobile && !isTablet;

// console.log("Is Mobile:", isMobile);
// console.log("Is Tablet:", isTablet);
// console.log("Is Desktop:", isDesktop);

//DEFINE UNIVERSAL VARIABLES
const container = document.querySelector(".container");
const containerHTML = homeHTML + homeTagline;
const header = document.head;
container.innerHTML = containerHTML;

//POSITION KEEPS TRACK OF THE WHEEL EVENT
let position = 1500;
let initialY = undefined;

//PAGE KEEPS TRACK OF WHICH PAGE IS CURRENTLY DISPLAYED
let page = 0;

let pageArray = scrollPages;

//LISTENINGTOWHEEL TURNS OFF INCREASING THE PAGE AFTER IT HAS CHANGED
let listeningToWheel = true;

//CAPTURE PAGE DIVISION VARIABLES
function defineVariables() {
  const topContainer = document.querySelector(".top-container");
  const service = document.getElementById("current-service");
  const tagline = document.getElementById("tagline");
  const currentServiceContainer = document.querySelector(".current-service");
  return [topContainer, service, tagline, currentServiceContainer];
}

//FROM AN INDIVIDUAL CASE STUDY TO THE CASE STUDY PAGE
function goBack() {
  pageArray = scrollPages;
  container.style.gridTemplateRows = "1.5fr 0.5fr 1fr";
  container.innerHTML = containerHTML;
  const [topContainer, service, tagline] = [...defineVariables()];
  let pageHTML =
    `<div id="corner-logo" onclick="goHome()>
        <p>zee</p>
        <p>zee</p>
    </div>
    ` + pageArray[4].content;
  console.log(pageHTML);
  topContainer.innerHTML = pageHTML;
  console.log(topContainer.innerHTML);
  service.innerText = pageArray[4].name;
  tagline.innerText = pageArray[4].tagline;
  page = 4;
  listeningToWheel = true;
  position = 1500;
  listener();
}

//SEND EMAIL
function sendEmail(event) {
  event.preventDefault();
  const [email, details] = [
    document.getElementById("email-field"),
    document.getElementById("details-field"),
  ];
  console.log(email.value, details.value);
}

//ADDS STYLE TO PAGE TRANSITIONS
function slideInOut(direction, array) {
  const [topContainer, service, tagline, currentServiceContainer] = [
    ...defineVariables(),
  ];
  if (array === scrollPages2) {
    service.style.fontSize = "calc(80px + 50 * ((100vw - 320px) / 680))";
  } else {
    service.style.fontSize = "calc(130px + 50 * ((100vw - 320px) / 680))";
  }
  pageArray = array;
  let pageHTML = `<div id="corner-logo" onclick="goHome()">
        <p>zee</p>
        <p>zee</p>
    </div>
    ${array[page].content}`;
  if (array[page].form) {
    console.log("there is a form on this page");
  }
  if (array[page].bgColor) {
    currentServiceContainer.style.backgroundColor = "white";
    service.style.color = "black";
    container.style.backgroundColor = "black";
    tagline.style.color = "white";
  } else {
    tagline.style.color = "black";
    container.style.backgroundColor = "white";
    currentServiceContainer.style.backgroundColor = "black";
    service.style.color = "white";
  }
  //sliding in left
  if (direction === "left") {
    service.style.left = "-100vw";
    tagline.style.opacity = "0";
    topContainer.style.opacity = "0";
    setTimeout(() => {
      service.style.transition = " left 0s";
      service.style.left = "100vw";
      setTimeout(() => {
        service.style.transition = "left .15s";
        service.style.left = "5px";
        tagline.style.opacity = "1";
        topContainer.style.opacity = "1";
        service.innerText = pageArray[page].name;
        tagline.innerText = pageArray[page].tagline;
        topContainer.innerHTML = pageHTML;
      }, 150);
    }, 50);
  }
  //sliding in right
  else {
    service.style.left = "100vw";
    setTimeout(() => {
      service.style.transition = "left 0s";
      service.style.left = "-100vw";
      tagline.style.opacity = "0";
      topContainer.style.opacity = "0";
      setTimeout(() => {
        service.style.transition = "left .15s";
        service.style.left = "5px";
        tagline.style.opacity = "1";
        topContainer.style.opacity = "1";
        service.innerText = pageArray[page].name;
        tagline.innerText = pageArray[page].tagline;
        if (page <= 0) {
          page = 0;
          container.innerHTML = containerHTML;
        } else {
          topContainer.innerHTML = pageHTML;
        }
      }, 150);
    }, 50);
  }
}

function handleTouchStart(event) {
  initialY = event.touches[0].clientY; // Store initial Y position
  // console.log(initialY);
}

//DEFINE MECHANICS OF THE WHEEL EVENT LISTENER
function listening(event) {
  console.log(page);
  if (page === 0) {
    pageArray = scrollPages;
  }
  let deltaY = event.wheelDeltaY;
  if (page >= pageArray.length - 1 && deltaY <= 0) {
    listeningToWheel = false;
  } else if (page >= pageArray.length - 1 && deltaY >= 0) {
    listeningToWheel = true;
  } else if (page <= 0 && deltaY >= 0) {
    listeningToWheel = false;
  } else if (page <= 0 && deltaY <= 0) {
    listeningToWheel = true;
  }
  if (listeningToWheel) {
    position += deltaY;
    if (position <= 0) {
      if (page >= pageArray.length - 1) {
        page = pageArray.length - 2;
      }
      page++;
      listeningToWheel = false;
      slideInOut("left", pageArray);
      position = 1500;
      setTimeout(() => {
        listeningToWheel = true;
      }, 1000);
    } else if (position >= 3000) {
      if (page <= 0) {
        page = 1;
      }
      page--;
      listeningToWheel = false;
      slideInOut("right", pageArray);
      position = 1500;
      setTimeout(() => {
        listeningToWheel = true;
      }, 1000);
    }
  }
}

function listenEventMobile(event) {
  if (initialY !== null) {
    const currentY = event.touches[0].clientY;
    const yPos = currentY - initialY;

    // Avoid accidental flickers — set a threshold
    const swipeThreshold = 30;

    if (Math.abs(yPos) > swipeThreshold) {
      event.preventDefault(); // 🔒 Block pull-to-refresh if swipe is real

      if (yPos > 0 && listeningToWheel) {
        if (page <= 0) page = 1;
        page--;
        listeningToWheel = false;
        slideInOut("right", pageArray);
        setTimeout(() => (listeningToWheel = true), 1000);
      } else if (yPos < 0 && listeningToWheel) {
        if (page < pageArray.length - 1) {
          page++;
          listeningToWheel = false;
          slideInOut("left", pageArray);
          setTimeout(() => (listeningToWheel = true), 1000);
        }
      }

      initialY = currentY;
    }
  }
}

//SERVICE PAGE
function servicePage(event) {
  let servicePage = event.target.id;
  page = servicePage;
  slideInOut("left", scrollPages2);
}

function goHome() {
  page = 0;
  slideInOut("right", scrollPages);
}

//APPLY WHEEL EVENT
function listener() {
  window.addEventListener("wheel", listening);
  window.addEventListener("touchstart", handleTouchStart);
  window.addEventListener("touchmove", listenEventMobile, { passive: false });
}

//INITIALIZE THE WHEEL LISTENER
listener();

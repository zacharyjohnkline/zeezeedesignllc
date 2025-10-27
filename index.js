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
container.innerHTML = containerHTML;

//POSITION KEEPS TRACK OF THE WHEEL EVENT
let position = 1500;

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
// Replace your current goBack() with this:
function goBack() {
  // 1) Always re-select live nodes (avoid stale refs)
  const root = document.querySelector('.container');
  if (!root) {
    console.error('[goBack] .container not found');
    return;
  }
  root.style.display = "grid";
  root.style.gridTemplateRows = "1.5fr 0.5fr 1fr";

  // 2) Restore the base home structure
  //    (containerHTML should be your saved initial markup for the home view)
  root.innerHTML = containerHTML;

  // 3) Restore grid rows (guarded)
  if (root && root.style) {
    root.style.gridTemplateRows = "1.5fr 0.5fr 1fr";
  }

  // 4) Rebind the per-view elements now that DOM is rebuilt
  //    defineVariables() should return [topContainer, service, tagline]
  const [topContainer, service, tagline] = defineVariables();

  // 5) Inject the CASES page content (index 4) into the right place
  const cases = scrollPages[4];            // name/content/tagline live here
  const pageHTML = `
    <div id="corner-logo" onclick="goHome()">
      <p>pivot</p><p>CPG</p>
    </div>
    ${cases.content}
  `;
  topContainer.innerHTML = pageHTML;
  service.innerText = cases.name;
  tagline.innerText = cases.tagline;

  // 6) Reset nav state
  pageArray = scrollPages;
  page = 4;
  listeningToWheel = true;
  position = 1500;
  const grid = document.querySelector(".case-images");
  const indFrames = document.querySelectorAll('.case-frame');
  const framesArray = Array.from(indFrames);
  for (let i = 0; i < framesArray.length; i++) {
    framesArray[i].addEventListener('mouseenter', () => {
      console.log(`hovering!${framesArray[i]}`);
      grid.classList = "case-images";
      grid.classList.add(`case-images${i+1}`);
    });
  }
  grid.addEventListener("mouseleave", () => {
    grid.classList = "case-images";
  })

  // 7) Cleanly reattach the wheel listener
  try { window.removeEventListener('wheel', listening); } catch (e) {}
  listener();
}


//SEND EMAIL
(function initEmailForm(){
  document.addEventListener('submit', async function(e){
    const form = e.target;
    if (form && form.id === 'email-form') {
      e.preventDefault();
      const emailInput = document.getElementById('email-field');
      const detailsInput = document.getElementById('details-field');
      const statusEl = document.getElementById('email-status');

      // Basic validation
      const email = (emailInput?.value || '').trim();
      const details = (detailsInput?.value || '').trim();
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!emailOk) {
        if (statusEl) { statusEl.textContent = 'Please enter a valid email address.'; statusEl.className = 'error'; }
        emailInput?.focus();
        return;
      }
      if (!details) {
        if (statusEl) { statusEl.textContent = 'Please include a short message.'; statusEl.className = 'error'; }
        detailsInput?.focus();
        return;
      }

      // Disable UI while sending
      const btn = document.getElementById('email-button');
      const prev = btn ? btn.textContent : '';
      if (btn) { btn.disabled = true; btn.textContent = 'Sending...'; }
      if (statusEl) { statusEl.textContent = ''; statusEl.className = ''; }

      try {
        // Replace with your Formspree endpoint (create one and paste it here)
        const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xnnjvrpg';
        const payload = { email, message: details };

        const resp = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (resp.ok) {
          if (statusEl) { statusEl.textContent = 'Thanks! Your message has been sent.'; statusEl.className = 'ok'; }
          if (form) form.reset();
        } else {
          const data = await resp.json().catch(() => ({}));
          const err = data?.error || data?.message || resp.statusText || 'Something went wrong.';
          if (statusEl) { statusEl.textContent = 'Unable to send right now: ' + err; statusEl.className = 'error'; }
        }
      } catch (err) {
        if (statusEl) { statusEl.textContent = 'Network error. Please try again.'; statusEl.className = 'error'; }
      } finally {
        if (btn) { btn.disabled = false; btn.textContent = prev || 'send'; }
      }
    }
  }, true);
})();

//ADDS STYLE TO PAGE TRANSITIONS
function slideInOut(direction, array) {
  const [topContainer, service, tagline, currentServiceContainer]=[...defineVariables()];
  if(array === scrollPages2){
    service.style.fontSize = 'calc(80px + 50 * ((100vw - 320px) / 680))';
  }else{
    service.style.fontSize = 'calc(130px + 50 * ((100vw - 320px) / 680))';
  }
  pageArray = array
  let pageHTML = `<div id="corner-logo" onclick="goHome()">
        <p>pivot</p>
        <p>CPG</p>
    </div>
    ${array[page].content}`;
    if(array[page].bgColor){
      currentServiceContainer.style.backgroundColor = 'white';
      service.style.color = 'black';
      container.style.backgroundColor = 'black';
      tagline.style.color = 'white';
    }else{
      tagline.style.color = 'black';
      container.style.backgroundColor = 'white';
      currentServiceContainer.style.backgroundColor = 'black';
      service.style.color = 'white';
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
  if(page == 4){
    setTimeout(() => {
    const grid = document.querySelector(".case-images");
    const indFrames = document.querySelectorAll('.case-frame');
    const framesArray = Array.from(indFrames);
    for (let i = 0; i < framesArray.length; i++) {
      framesArray[i].addEventListener('mouseenter', () => {
        console.log(`hovering!${framesArray[i]}`);
        grid.classList = "case-images";
        grid.classList.add(`case-images${i+1}`);
      });
    }
    grid.addEventListener("mouseleave", () => {
      grid.classList = "case-images";
    })
  }, 210);

  }
}

//DEFINE MECHANICS OF THE WHEEL EVENT LISTENER
function listening(event) {
  // console.log(page);
  if(page === 0){
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

//SERVICE PAGE
function servicePage(event){
  let servicePage = event.target.id;
  page = servicePage;
  slideInOut("left", scrollPages2);
}
function contactPage(event){
  let contactPage = event.target.id;
  page = contactPage;
  slideInOut("left", scrollPages);
}
function casePage(event){
  let casePage = event.target.id;
  page = casePage;
  slideInOut("left", scrollPages);
}

function goHome(){
  page = 0;
  slideInOut("right", scrollPages);
}

//APPLY WHEEL EVENT
function listener() {
  window.addEventListener("wheel", listening);
}

//INITIALIZE THE WHEEL LISTENER
listener();
/* ===== MOBILE TOUCH: forward-only paging ===== */
(function initMobileForwardOnly(){
  let touchStartY = 0;
  let touchStartX = 0;
  let gestureArmed = false;

  // how much finger travel counts as a swipe
  const SWIPE_THRESHOLD = 45;       // px
  const MAX_X_DEVIATION = 60;       // ignore mostly-horizontal swipes

  function triggerForward() {
    // only advance if there is a next page and we're allowed
    if (page < pageArray.length - 1 && listeningToWheel) {
      listeningToWheel = false;
      page++;
      slideInOut("left", pageArray);
      position = 1500;
      // same cooldown you already use for wheel
      setTimeout(() => { listeningToWheel = true; }, 1000);
    }
  }

  function onTouchStart(e) {
    if (!e.touches || e.touches.length !== 1) return;
    const t = e.touches[0];
    touchStartY = t.clientY;
    touchStartX = t.clientX;
    gestureArmed = true;
  }

  function onTouchMove(e) {
    if (!gestureArmed) return;

    const t = e.touches[0];
    const dy = touchStartY - t.clientY;        // >0 means finger moved up (page forward)
    const dx = Math.abs(t.clientX - touchStartX);

    // Ignore mostly-horizontal gestures (e.g., carousels)
    if (dx > MAX_X_DEVIATION) return;

    if (dy > SWIPE_THRESHOLD) {
      // Forward swipe -> advance a page
      triggerForward();
      gestureArmed = false;
      // prevent scroll/ptr glow
      e.preventDefault();
      return;
    }

    if (dy < -SWIPE_THRESHOLD) {
      // Backward swipe -> BLOCK (do nothing) but prevent rubber-band/PTR
      e.preventDefault();
      return;
    }
    // small moves: do nothing
  }

  function onTouchEnd() {
    gestureArmed = false;
  }

  // Attach listeners
  window.addEventListener('touchstart', onTouchStart, { passive: true });
  // passive:false so we *can* preventDefault() to stop PTR/bounce
  window.addEventListener('touchmove',  onTouchMove,  { passive: false });
  window.addEventListener('touchend',   onTouchEnd,   { passive: true });
})();

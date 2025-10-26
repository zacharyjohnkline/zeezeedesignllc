"use strict";

// === Mobile & unified scroll helpers ===
let touchStartY = 0;
let touchStartX = 0;
let lastTouchY = 0;
const SWIPE_Y_THRESHOLD = 28;
const SWIPE_X_TOLERANCE = 22;
const TOUCH_GAIN = 45;
const SCROLL_INVERT_WHEEL = 1; // wheel natural
const SCROLL_INVERT_TOUCH = -1; // reverse touch to feel natural

function onWheel(e) {
  const deltaY = (e.wheelDeltaY || -e.deltaY || 0) * SCROLL_INVERT_WHEEL;
  listening({ wheelDeltaY: deltaY });
};


function onTouchStart(e) {
  if (!e.touches || e.touches.length === 0) return;
  touchStartY = lastTouchY = e.touches[0].clientY;
  touchStartX = e.touches[0].clientX;
}

function onTouchMove(e) {
  if (!e.touches || e.touches.length === 0) return;
  const y = e.touches[0].clientY;
  const x = e.touches[0].clientX;
  const absX = Math.abs(x - touchStartX);
  const absY = Math.abs(y - touchStartY);
  if (absX > SWIPE_X_TOLERANCE && absX > absY) return;
  const dy = (lastTouchY - y);
  lastTouchY = y;
  if (Math.abs(y - touchStartY) < SWIPE_Y_THRESHOLD) return;
  const deltaY = dy * TOUCH_GAIN * SCROLL_INVERT_TOUCH;
  // feed into legacy wheel handler
  listening({ wheelDeltaY: deltaY });
  // prevent browser rubber-banding while we're handling it
  try { e.preventDefault(); } catch (_) {}
}

function addScrollInputs() {
  window.addEventListener("wheel", onWheel, { passive: true });
  window.addEventListener("touchstart", onTouchStart, { passive: true });
  window.addEventListener("touchmove", onTouchMove, { passive: false });
}

function removeScrollInputs() {
  window.removeEventListener("wheel", onWheel);
  window.removeEventListener("touchstart", onTouchStart);
  window.removeEventListener("touchmove", onTouchMove);
}

// === Dynamic viewport & nav height support ===
(function setupViewportVars(){
  const docEl = document.documentElement;
  function computeNavH() {
    // try common ids/classes; fall back to 0
    const cand = document.getElementById('topnav')
              || document.querySelector('[data-role="topnav"]')
              || document.querySelector('nav[role="navigation"]')
              || document.querySelector('header[role="banner"]')
              || document.querySelector('nav.topnav')
              || null;
    const h = cand ? Math.round(cand.getBoundingClientRect().height) : 0;
    docEl.style.setProperty('--nav-h', h + 'px');
  }
  function computeVH() {
    // prefer 100svh when supported; fallback to window.innerHeight
    const vh = window.innerHeight;
    docEl.style.setProperty('--app-safe-vh', vh + 'px');
  }
  computeNavH();
  computeVH();
  window.addEventListener('resize', () => { computeNavH(); computeVH(); });
  window.addEventListener('orientationchange', () => { computeNavH(); computeVH(); });
})();

// === Helper to jump to the Email page ===
function goToEmail(){
  try{
    const idx = (scrollPages || []).findIndex(p => p && p.name === 'email');
    if (idx >= 0) {
      page = idx;
      slideInOut('left', scrollPages);
    }
  }catch(e){ console.error('goToEmail error', e); }
}

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
  
  try { removeScrollInputs(); } catch(e){}
  addScrollInputs();
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
        const _cbtn = document.getElementById('contact-btn');
        if (_cbtn) { _cbtn.addEventListener('click', goToEmail); }
  service.innerText = cases.name;
  tagline.innerHTML = cases.tagline;

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
        if (pageArray[page].name === 'design') {
          tagline.innerHTML = (typeof homeTagline !== 'undefined') ? homeTagline : pageArray[page].tagline;
        } else {
          tagline.innerHTML = pageArray[page].tagline;
        }
        topContainer.innerHTML = pageHTML;
        const _cbtn = document.getElementById('contact-btn');
        if (_cbtn) { _cbtn.addEventListener('click', goToEmail); }
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
        if (pageArray[page].name === 'design') {
          tagline.innerHTML = (typeof homeTagline !== 'undefined') ? homeTagline : pageArray[page].tagline;
        } else {
          tagline.innerHTML = pageArray[page].tagline;
        }
        if (page <= 0) {
          page = 0;
          container.innerHTML = containerHTML;
        } else {
          topContainer.innerHTML = pageHTML;
        const _cbtn = document.getElementById('contact-btn');
        if (_cbtn) { _cbtn.addEventListener('click', goToEmail); }
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
  let deltaY = (event && typeof event.wheelDeltaY === 'number' ? event.wheelDeltaY : 0);
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
  console.log(contactPage);
  page = contactPage;
  slideInOut("left", scrollPages)
}

function casePage(event){
  let casePage = event.target.id;
  console.log(casePage);
  page = casePage;
  slideInOut("left", scrollPages)
}

function goHome(){
  page = 0;
  slideInOut("right", scrollPages);
}

//APPLY WHEEL EVENT
function listener(){
  addScrollInputs();
}

//INITIALIZE THE WHEEL LISTENER
listener();

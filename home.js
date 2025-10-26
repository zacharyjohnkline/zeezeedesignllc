"use strict";
const homeHTML = `
<div class="top-container">
        <div id="zeezee">
          <p id="zee-top">Pivot</p>
        </div>
        <div id="service-list">
          <ul id="list">
            <li class="list-item" onclick="servicePage(event)" id='1'>bags</li>
            <li class="list-item" onclick="servicePage(event)" id='2'>boxes</li>
            <li class="list-item" onclick="servicePage(event)" id='3'>PDQs</li>
            <li class="list-item" onclick="servicePage(event)" id='4'>displays</li>
            <li class="list-item" onclick="servicePage(event)" id='5'>dielines</li>
            <li class="list-item" onclick="servicePage(event)" id='6'>3D printing</li>
            <li class="list-item" onclick="servicePage(event)" id='7'>consulting</li>
          </ul>
        </div>
      </div>
      <div class="current-service">
        <p id="current-service">CPG</p>
      </div>`
const homeTagline = `
      <div class="tagline">
        <p id="tagline">Turn your packaging concepts into reality.<br><br><span id="scroll-span">Scroll to see our process!</span></p>
        <div class="contact-us"><p onclick="contactPage(event)" id="6">contact us</p><p onclick="casePage(event)" id="4">case studies</div
      </div>`;

"use strict";
const homeHTML = `
<div class="top-container">
        <div id="zeezee">
          <p id="zee-top">zee</p>
          <p id="zee-bot">zee</p>
        </div>
        <div id="service-list">
          <ul id="list">
            <li class="list-item" onclick="servicePage(event)" id='1'>bags</li>
            <li class="list-item" onclick="servicePage(event)" id='2'>boxes</li>
            <li class="list-item" onclick="servicePage(event)" id='3'>cdus</li>
            <li class="list-item" onclick="servicePage(event)" id='4'>displays</li>
            <li class="list-item" onclick="servicePage(event)" id='5'>vinyls</li>
            <li class="list-item" onclick="servicePage(event)" id='6'>dielines</li>
            <li class="list-item" onclick="servicePage(event)" id='7'>3D Printing</li>
          </ul>
        </div>
      </div>
      <div class="current-service">
        <p id="current-service">design</p>
      </div>`
const homeTagline = `
      <div class="tagline">
        <p id="tagline">Turn your packaging concepts into reality.</p>
      </div>`;

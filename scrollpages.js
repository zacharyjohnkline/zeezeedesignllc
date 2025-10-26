'use strict';
const scrollPages = [
    {
      name: "design",
      content: homeHTML,
      tagline: "Turn your packaging concepts into reality.<br><br>Scroll to see our process!",
    },
    {
      name: "print",
      content: "<img src='./images/print.webp' alt='' class='banner-image'>",
      tagline: "Wide‑format printers to meet any print size.",
    },
    {
      name: "cut",
      content: "<img src='./images/cut.jpg' alt='' class='banner-image'>",
      tagline: "Advanced cutting tech to match any dieline.",
    },
    {
      name: "sell",
      content: "<img src='./images/sell.jpg' alt='' class='banner-image'>",
      tagline: "Your prototypes will sell in any showroom!",
    },
    {
      name: "cases",
      content: `<div class='case-images'>
                    <div class="case-frame"><img src='./images/makeitreal.png' alt='makeitreal' class='case-image' onclick='caseLinks(event)'/></div>
                    <div class="case-frame"><img src='./images/weveel.png' alt='weveel' class='case-image' onclick='caseLinks(event)'/></div>
                    <div class="case-frame"><img src='./images/siriusXM.jpg' alt='siriusXM' class='case-image' onclick='caseLinks(event)'/></div>
                    <div class="case-frame"><img src='./images/canaltoys.png' alt='canaltoys' class='case-image' onclick='caseLinks(event)'/></div>
                    <div class="case-frame"><img src='./images/uniquepetz.png' alt='uniquepetz' class='case-image' onclick='caseLinks(event)'/></div>
                </div>
                `,
      tagline:
        "Package prototyping, full service design, or custom scripting, we work hard to meet the needs of our clients!",
    },
    {
        name: "about",
        content: `<div class='location-top'>
                    <ul class='selling-points'>
                    <li class='sp-list-item'>Located in Millstone Twp, NJ</li>
                    <li class='sp-list-item'>10+ yrs. experience</li>
                    <li class='sp-list-item'>Fast turnaround</li>
                    <li class='sp-list-item'>Competitive pricing</li>
                    <li class='sp-list-item'>Premium Strategic Consulting</li>
                    </ul>
                    <div id='location-image-container'>
                    <img src="./images/printer_room.jpg" alt="printer room" id="location-image1"/>
                    </div>
                    </div>`,
        tagline: "We love helping our clients increase efficiency, bring their concepts into reality, boost sales, and make money!"
    },
    {
        name: "email",
        content: `<div id='email-form-container'>
                        <form id='email-form' name='email-form'>
                            <label>
                            <input type='text' name='email' placeholder='joesomebody@gmail.com' id='email-field'>
                            email:</label>
                            <label>
                            <textarea rows='10' cols='30' name='details' placeholder='message details here' id='details-field'></textarea>
                            details:</label>
                            <button type='submit' id="email-button">send</button>
                            <p id='email-status' role='status' aria-live='polite'></p>
                        </form>
                    </div>`,
        tagline: 'Send us a message, and we would love to talk to you about how we can partner with you to bring your concepts to the shelf!<br><br>Phone: (732)814-8561',
        bgColor: 'white',
        color: 'black',
    }
  ];
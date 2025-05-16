'use strict';
const scrollPages = [
    {
      name: "design",
      content: homeHTML,
      tagline: "Turn Your packaging concepts into reality",
    },
    {
      name: "print",
      content: "<img src='./images/print.webp' alt='' class='banner-image'>",
      tagline: "Wide format printers to meet any print size",
    },
    {
      name: "cut",
      content: "<img src='./images/cut.jpg' alt='' class='banner-image'>",
      tagline: "Advanced cutting tech to match any dieline.",
    },
    {
      name: "sell",
      content: "<img src='./images/sell.jpg' alt='' class='banner-image'>",
      tagline: "Your Prototypes will sell in any showroom!",
    },
    {
      name: "cases",
      content: `<div class='case-images'>
                  <img src='./images/uniquepetz.png' alt='uniquepetz' class='case-image' onclick='caseLinks(event)'/>
                  <img src='./images/makeitreal.png' alt='makeitreal' class='case-image' onclick='caseLinks(event)'/>
                  <img src='./images/weveel.png' alt='weveel' class='case-image' onclick='caseLinks(event)'/>
                  <img src='./images/canaltoys.png' alt='canaltoys' class='case-image' onclick='caseLinks(event)'/>
                  <img src='./images/kangaru.png' alt='kangaru' class='case-image' onclick='caseLinks(event)'/>
                  </div>
                  `,
      tagline:
        "Package prototyping, full service design, or custom scripting, we work hard to meet the needs of our clients!",
    },
    {
        name: "about",
        content: `<div class='location-top'>
                    <ul class='selling-points'>
                    <li class='sp-list-item'>Located in Newtown, PA</li>
                    <li class='sp-list-item'>10+ yrs. experience</li>
                    <li class='sp-list-item'>Fast turnaround</li>
                    <li class='sp-list-item'>Competitive pricing</li>
                    </ul>
                    <div id='location-image-container'>
                    <img src="./images/location.jpg" alt="newtown location" id="location-image"/>
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
                            <textarea rows='10' cols='50' name='details' placeholder='message details here' id='details-field'></textarea>
                            details:</label>
                            <button onclick='sendEmail(event)' id="email-button">send</button>
                        </form>
                    </div>`,
        tagline: 'Send us a message, and we would love to talk to you about how we can partner with you to bring your concepts to the shelf!',
        bgColor: 'white',
        color: 'black',
    }
  ];
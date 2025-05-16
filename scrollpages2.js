'use strict';
const scrollPages2 = [
    {
      name: "design",
      content: `<div id="zeezee">
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
              </div>`,
      tagline: "Turn Your packaging concepts into reality",
    },
    {
      name: "bags",
      content: `<img src="./images/bags.jpg" alt="bags" class="banner-image" />`,
      tagline: `We print graphic bags on a variety of different substrates.  Zip seals can be added if the project calls for it.  If you need a bag with a window, we can handle that!
                Minimum order: 3 bags`,
    },
    {
      name: "boxes",
      content: "<img src='./images/weveel_ss.jpg' alt='boxes' class='banner-image'>",
      tagline: `We print graphic boxes on a variety of different substrates.  Do you have a custom dieline?  No problem!  We can handle any dieline you need with our advanced box cutting tech.  Our prototype boxes have helped sell countless products to major retailers around the globe.  You will not be disappointed.
                Minimum order: 3 boxes`,
    },
    {
      name: "CDUs",
      content: "<img src='./images/sell.jpg' alt='CDUs' class='banner-image'>",
      tagline:`We print graphic CDUs on a variety of different substrates.  Custom dieline?  No problem!  No dieline is a big deal for our advanced cutting tech.`,
    },
    {
      name: "displays",
      content: "<img src='./images/displays.jpg' alt='sidekicks' class='banner-image'>",
      tagline: `We print graphic sidekicks -- any dieline, any size, any time.  Need a POP display to drive your sale, let us know and we'll be happy to make your custome sidekick display.`,
    },
    {
      name: "vinyls",
      content: "<img src='./images/vinyls.webp' alt='vinyls' class='banner-image'>",
      tagline: `If you need large vinyl garphics for a tradeshow installation or an interior wall, we got you.  Whatever your needs may be, we print on large vinyl, with and without adhesive backing.`,
    },
    {
      name: "dielines",
      content: "<img src='./images/dielines.jpg' alt='dielines' class='banner-image'>",
      tagline: `We also have a lot of experience in creating custom dielines to match your project needs.  If you need to have the ability to alter the dimensions to the custom dieline, ask us about our adobe scripting pricing.  We'll script it, you'll have it forever to use and reuse, saving countless hours of daily design time.`,
    },
    {
      name: "3D printing",
      content: "<img src='./images/3dprinting2.webp' alt='3dprinting' class='banner-image'>",
      tagline: `We offer fast, affordable 3d printing solutions for all kinds of product prototypes.  Utilizing both FDM and UV resin printers, we have years of experience bringing product concepts to life through 3D printing.`,
      bgColor: 'black',
      color: 'white',
    },
  ];
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
      tagline: "Turn your packaging concepts into reality.",
    },
    {
      name: "bags",
      content: `<img src="./images/bags.jpg" alt="bags" class="banner-image" />`,
      tagline: `We print graphic bags on a variety of substrates. Zip seals can be added if the project calls for it. If you need a bag with a window, we can handle that!
                Minimum order: 3 bags.`,
    },
    {
      name: "boxes",
      content: "<img src='./images/weveel_ss.jpg' alt='boxes' class='banner-image'>",
      tagline: `We print graphic boxes on a variety of substrates. Have a custom dieline? No problem! We can handle any dieline you need with our advanced box‑cutting tech.
                Minimum order: 3 boxes.`,
    },
    {
      name: "PDQs",
      content: "<img src='./images/sell.jpg' alt='CDUs' class='banner-image'>",
      tagline:`We print graphic CDUs on a variety of substrates. Custom dieline? No problem! No dieline is too big a deal for our advanced cutting tech.`,
    },
    {
      name: "displays",
      content: "<img src='./images/displays.jpg' alt='sidekicks' class='banner-image'>",
      tagline: `We print graphic sidekicks—any dieline, any size, any time. Need a POP display to drive your sales? Let us know and we'll be happy to make your custom sidekick display.`,
    },
    {
      name: "dielines",
      content: "<img src='./images/dielines.jpg' alt='dielines' class='banner-image'>",
      tagline: `We also have extensive experience creating custom dielines to match your project needs. If you want the ability to alter dimensions on your custom dieline, ask us about our Adobe scripting pricing. We'll script it—you'll have it forever to reuse, saving countless hours of daily design time.`,
    },
    {
      name: "3D printing",
      content: "<img src='./images/3dprinting2.webp' alt='3dprinting' class='banner-image'>",
      tagline: `We offer fast, affordable 3D printing solutions for all kinds of product prototypes.  Utilizing both FDM and UV resin printers, we have years of experience bringing product concepts to life through 3D printing.`,
    },
    {
      name: "consulting",
      content: "<img src='./images/consulting.png' alt='consulting' class='banner-image'>",
      tagline: `From A to Z, concept to shelf, we have helped numerous companies, create, source, and land countless products on retail shelves around the globe.`,
      bgColor: 'black',
      color: 'white',
    }
  ];


'use strict';

// Central case study content registry
const CASE_DATA = {
  uniquepetz: {
    title: "Unique Petz",
    banner: "./images/uniquepetz.png",
    color: "green",
    description: "Unique Petz is a pet supplies company with a focus on innovative quality products for pets of all shapes and sizes.  We've partnered with them to produce top-teir sales samples for key account meetings and tradeshow presentations around the globe.",
    sections: [
      { type: "heading", text: "Sales Samples" },
      { type: "image", src: "./images/weveel_scripts.png", alt: "Script Banner", className: "sample-banner" },
      { type: "paragraph", text: "We created custom adobe illustrator scripts to create dielines for their cdus, boxes, adding measurements to mechanical files, and for adding internal file information for all of their working files. These scripts have saved them countless hours every week, and been invaluable in their design and production process." } 
    ]
  },
  weveel: {
    title: "WeVeel",
    banner: "./images/weveel.png",
    color: "lightblue",
    description: "WeVeel is a toy and stationery company with a focus on bright, engaging, and joyful products. We've partnered with them to produce sales samples, tradeshow visualizations, and production automations to help their team move faster and present more clearly.",
    sections: [
      { type: "heading", text: "Sales Samples" },
      { type: "image", src: "./images/weveel_ss.jpg", alt: "WeVeel sales sample banner", className: "sample-banner" },
      { type: "imageText", image: "./images/weveel_halfpallet_lr.png", imageAlt: "WeVeel Half Pallet Display", imageClass: "half-image",
        text: "We designed the dieline for this display, created custom illustrations, laid out the graphics, printed and cut out the display for delivery to the BJ's Model Store." },
      { type: "textImage", image: "./images/weveel_4way_lr.png", imageAlt: "WeVeel Half Pallet Display", imageClass: "half-image",
        text: "We designed the dieline for this display, created custom illustrations, laid out the graphics, printed and cut out the display for delivery to the Sam's Club sales meeting." },
      { type: "heading2", text: "Product Development" },
      { type: "image", src: "./images/weveel_sellsheet.jpg", alt: "WeVeel Sell Sheet", className: "sample-banner" },
      { type: "imageText", image: "./images/weveel_chalktools.png", imageAlt: "WeVeel Chalk Tools", imageClass: "half-image",
        text: "We created the concepts, the renders, the 3D prints and the sales prototypes. This was to extend their chalk tools line of products." },
      { type: "textImage", image: "./images/weveel_bakery.png", imageAlt: "Bakery Build Kit", imageClass: "half-image",
        text: "We did the illustration, the dieline the 3D render, the foam prototype and the packaging design for this foam, construction kit." },
      { type: "imageText", image: "./images/weveel_frankenstein.png", imageAlt: "Mad Scientist Build Kit", imageClass: "half-image",
        text: "We did the illustration, the dieline, the 3D render, the foam prototype and the packaging design for this foam construction kit."},
      { type: "textImage", image: "./images/weveel_doodleformz.png", imageAlt: "DoodleFormz Kit", imageClass: "half-image",
        text: "We did the illustration, the dieline, the 3D render, the sales prototype and the packaging design for this air dry clay play kit." },
      { type: "heading2", text: "Tradeshow Visualization" },
      { type: "image", src: "./images/weveel_tradeshow.jpg", alt: "WeVeel tradeshow booth mockup", className: "sample-banner" },
      { type: "paragraph", text: "We did to-scale 3D renders for several of WeVeels tradeshow booths to assist the design team in the design of their tradeshow displays, and then to visualize what the end result would look like after the design of the booth had been completed." },
      { type: "heading2", text: "Custom Adobe Scripts" },
      { type: "image", src: "./images/weveel_scripts.png", alt: "Script Banner", className: "sample-banner" },
      { type: "paragraph", text: "We created custom adobe illustrator scripts to create dielines for their cdus, boxes, adding measurements to mechanical files, and for adding internal file information for all of their working files. These scripts have saved them countless hours every week, and have been invaluable in their design and production process." }
    ]
  },
  makeitreal: {
    title: "Make It Real",
    banner: "./images/makeitreal.png",
    color: "teal",
    description: "Make It Real is a toy and craft company that challenges the standard of kids craft kits, raising the bar by ensuring the end result is more than just a toy. We've partnered with them to produce sales samples, tradeshow signage, and production automations to help their team move faster and present more clearly.",
    sections: [
      { type: "heading", text: "Sales Samples & Tradeshow Signage" },
      { type: "image", src: "./images/sell.jpg", alt: "Make It Real sales sample banner", className: "sample-banner" },
      { type: "paragraph", text: "We continue to partner with Make It Real in providing production quality, lightning fast, samples for their sales teams around the globe.  Whether it is a series of boxes to mock up or tradeshow signage with custom dielines, we are proud to be a production partner with Make It Real."},
      { type: "heading2", text: "Dieline Automation" },
      { type: "image", src: "./images/dielines.jpg", alt: "Make It Real dielines", className: "sample-banner" },
      { type: "paragraph", text: "Throughout the years, we have created several dieline automation scripts in order to streamline and democratize the creation of dielines for their entire design team.  Simply type in the dimensions and the script will automatically build the box dieline as specified."}
    ]
  },
  siriusxm: {
    title: "Sirius XM",
    banner: "./images/siriusXMcase.jpg",
    color: "black",
    description: "Sirius XM is a major provider of satelite radio.  We continue to partner with Sirius XM to help supply various printing and design needs, working with their event coordination staff to help provide a first class event every time.",
    sections: [
      { type: "heading", text: "Event Signage" },
      { type: "image", src: "./images/siriusXM.jpg", alt: "Sirius XM signage banner", className: "sample-banner" },
      { type: "paragraph", text: "We continue to partner with Sirius XM in providing premium quality, lightning fast, printing and die-cutting for their parties and events."},
    ]
  },
  canaltoys: {
    title: "Canal Toys",
    banner: "./images/canaltoys.png",
    color: "teal",
    description: "Canal Toys is a toy and craft company that specializes in extremely memorable sensory arts and crafts products. We've partnered with them to produce many specialty sales samples, including printed specialty boxes and bags.",
    sections: [
      { type: "heading", text: "Sales Samples" },
      { type: "image", src: "./images/canaltoysbags.jpg", alt: "Canal Toys sample banner", className: "sample-banner" },
      { type: "paragraph", text: "We have provided many specialty foil bag samples for various lines of slime and bath bomb kits for Canal Toys.  Every bag was printed on a reflective foil bag, and given a zip seal to enable opening and closing to get the sales sample as close to production as possible."},
    ]
  },
};

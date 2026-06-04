/**   Purpose: manage site display.
 *
 *    The website is initially blank with a chain. The user must:
 *       -  click the chain to load the website    or
 *       -  wait [time] for chain to self-pull
 *
 */

// time before auto-pull
let time = 2000;

// get unhidden and hidden areas, typewriter display
let chain = document.querySelector(".chain");
let webpage = document.getElementById("hidden");
let type_name = document.querySelector(".type_name");

start();

// start timer
async function start() {
  await sleep(time);
  load_site();
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// loads site after a) chain clicked, or b) timer expiration
async function load_site() {
  // class for CSS animation
  chain.classList.toggle("is_running");

  // Slight delay between chain animation & loading site properties
  sleep(300).then(() => {
    document.body.style.backgroundColor = "#00203F";

    // removes id "hidden" from the webpage
    webpage.removeAttribute("id");

    // begin typewriter attributes
    type_name.classList.add("active_name");

    chain.style.display = "none";
  });
}

// accessibility: users can pull chain with TAB + ENTER
chain.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    load_site();
  }
});

// contact form TBD
function sendEmail() {
  alert("Received! Thank you!");
}

/**
 *
 * Resources:
 *
 * https://freefrontend.com/css-border-animations/
 * https://2colors.colorion.co/#google_vignette
 * https://codepen.io/emared/pen/gWGBLR
 * https://www.shapedivider.app/
 * https://mycolor.space/
 *
 *
 */

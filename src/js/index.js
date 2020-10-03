import lottie from "lottie-web-light";
import VoiceRSS from "./voicerss-tts.min";
import animation from "../assets/wave.json";

// Create Constant
const audioElement = document.getElementById("audio");
const button = document.getElementById("button");
const container = document.getElementById("container");

// Create Lottie Files Play
const anim = lottie.loadAnimation({
  container: container,
  renderer: "svg",
  loop: true,
  autoplay: false,
  animationData: animation,
});

// Disable and enable Button
function toggleButton() {
  button.disabled = !button.disabled;
  if (button.disabled) {
    anim.setDirection(1);
    anim.play();
  } else {
    anim.goToAndStop(0, true);
  }
}

// Passing Joke to VoiceRSS API
function tellMe(joke) {
  VoiceRSS.speech({
    key: "d711aa8bb4f84314aac4903ffc0a8daa",
    src: joke,
    hl: "en-us",
    v: "John",
    r: 0,
    c: "mp3",
    f: "44khz_16bit_stereo",
    ssml: false,
  });
  anim.setDirection(1);
  anim.play();
}

// Get Jokes from Joke API
async function getJokes() {
  let joke = "";
  const apiUrl = "https://sv443.net/jokeapi/v2/joke/Any";

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.setup) {
      joke = `${data.setup} ... ${data.delivery}`;
    } else {
      joke = data.joke;
    }

    //Text to speach
    tellMe(joke);
    // Diable button
    toggleButton();
  } catch (error) {
    // Catch Errors
    // eslint-disable-next-line no-console
    console.log(`Whoops, ${error}`);
  }
}

// Event Listeners
button.addEventListener("click", getJokes);
audioElement.addEventListener("ended", toggleButton);

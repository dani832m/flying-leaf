// Variable assignment
const head = document.head;
const body = document.body;
const leafDiv = document.createElement("div");
const leafP1 = document.createElement("p");
const leafP2 = document.createElement("p");
const leafHeading = document.createTextNode("VIDSTE DU AT…");
const leafContent = document.createTextNode(
  "I dag er hovedparten af de danske skove kultur skov, der er tilplantede for at fremme skovdrift."
);
const keyframes = document.createElement("style");

// Appending to DOM
head.appendChild(keyframes);
body.appendChild(leafDiv);
leafDiv.appendChild(leafP1);
leafDiv.appendChild(leafP2);
leafP1.appendChild(leafHeading);
leafP2.appendChild(leafContent);

// Styles for leaf div element
leafDiv.style.width = "250px";
leafDiv.style.height = "438px";
leafDiv.style.position = "fixed";
leafDiv.style.right = "-500px";
leafDiv.style.bottom = "40px";
leafDiv.style.backgroundImage = "url('boeg.png')";
leafDiv.style.display = "flex";
leafDiv.style.flexDirection = "column";
leafDiv.style.justifyContent = "center";
leafDiv.style.color = "#fff";
leafDiv.style.fontFamily = "'Manrope', Arial, sans-serif";
leafDiv.style.lineHeight = "1.30";
leafDiv.style.animation = "flying-leaf 2s linear 5s forwards";

// Styles for leaf paragraph #1 element (Heading)
leafP1.style.textAlign = "center";
leafP1.style.margin = "30px 0 10px 0";
leafP1.style.fontSize = "22px";
leafP1.style.opacity = 0;
leafP1.style.animation = "fading-text 1.2s linear 7.2s forwards";

// Styles for leaf paragraph #2 element (Content)
leafP2.style.textAlign = "center";
leafP2.style.margin = "0";
leafP2.style.padding = "0 35px";
leafP2.style.fontSize = "20px";
leafP2.style.opacity = 0;
leafP2.style.animation = "fading-text 1.2s linear 7.2s forwards";

// Adding keyframe flying-leaf to style element
keyframes.sheet.insertRule(`
  @keyframes flying-leaf {
      0% {
      opacity: 0;
      transform: translateX(-100%) translateY(-85%) skewY(40deg) rotate(-120deg);
    }
    100% {
      opacity: 1;
      right: 40px;
      transform: translateX(0px) translateY(0px) skewY(0deg) rotate(0deg);
    }
  }
`);

// Adding keyframe fading-text to style element
keyframes.sheet.insertRule(`
  @keyframes fading-text {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`);

// Adding media query to avoid display on mobile devices
if (window.matchMedia("(max-width: 767px)").matches) {
  leafDiv.style.display = "none";
}

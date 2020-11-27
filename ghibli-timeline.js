function toggleCard(event) {
  event.stopPropagation();

  const itemsToClear = document.querySelectorAll(".clicked");
  if (itemsToClear) {
    itemsToClear.forEach((itemToClear) =>
      itemToClear.classList.remove("clicked")
    );
  }

  const item = event.target;
  item.classList.add("clicked");
}

function hideCards() {
  const itemsToClear = document.querySelectorAll(".clicked");
  if (itemsToClear) {
    itemsToClear.forEach((itemToClear) =>
      itemToClear.classList.remove("clicked")
    );
  }
}

function clickLeft() {
  console.log("previous");
  const timeline = document.querySelector(".timeline");
  timeline.classList.add("scroll-left");
}

let currentTranslateValue = timeline.style.transform
  ? timeline.style.transform.substring(11, 15)
  : 0;

console.log(currentTranslateValue);
function clickRight() {
  // const timeline = document.querySelector(".timeline");
  // timeline.classList.add("scroll-right");
  // const timeline = document.getElementById("timeline");
  // const translate = timeline.style.transform;
  // const currentTranslateValue = timeline.style.transform
  //   ? timeline.style.transform.substring(11, 15)
  //   : 0;
  // console.log(currentTranslateValue);
  // const newTranslateValue = Number(currentTranslateValue + 300);
  const newTranslateValue = Number(currentTranslateValue + 300);
  const translate = `translateX(${newTranslateValue})`;
  timeline.style.transform = translate;
  currentTranslateValue = newTranslateValue;
  console.log(newTranslateValue);
}

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
  const container = document.getElementById("timeline-wrapper");
  sideScroll(container, "left", 1, 1000, 10);
}

function clickRight() {
  const container = document.getElementById("timeline-wrapper");
  sideScroll(container, "right", 1, 1000, 10);
}

function sideScroll(element, direction, speed, distance, step) {
  scrollAmount = 0;
  const slideTimer = setInterval(function () {
    if (direction == "left") {
      element.scrollLeft -= step;
    } else {
      element.scrollLeft += step;
    }
    scrollAmount += step;
    if (scrollAmount >= distance) {
      window.clearInterval(slideTimer);
    }
  }, speed);
}

// calculate relative spacing between the year timestamps

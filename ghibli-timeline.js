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

(function relativeTimelineSpacing() {
  // 1. List all years in an array
  const years = document.querySelectorAll(".timeline-item .timeline-year");
  let allYears = [];
  years.forEach((year) => {
    allYears.push(year.textContent);
  });
  for (i = 0; i < years.length; i++) {
    // 3. For every year, calculate the difference/distance with the next year
    // One year difference is 60px
    let diff = years[i + 1].textContent - years[i].textContent;
    if (diff === 0) {
      diff = 1;
    }
    const margin = diff * 60;
    // 4. Position the item by converting the relative value into margin-right
    years[i].style.marginRight = `${margin}px`;
  }
})();

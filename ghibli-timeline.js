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

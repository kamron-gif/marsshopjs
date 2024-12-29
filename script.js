function filterItems() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const items = document.querySelectorAll(".item");

  items.forEach((item) => {
    const itemName = item.getAttribute("data-name").toLowerCase();
    if (itemName.includes(searchInput)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}

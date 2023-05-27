let search = document.querySelector(".search");

search.addEventListener("keyup", (event) => {
  const items = document.querySelectorAll(".menuItem");
  Array.from(items).forEach((elem) => {
    elem.style.display = "none";
  });
  const text = event.target.value;

  let filtered = [];
  Array.from(items).forEach((elem) => {
    if (elem.innerText.toLowerCase().indexOf(text) > -1) {
      filtered.push(elem);
    }
  });
  filtered.forEach((elem) => {
    elem.style.display = "block";
  });
});

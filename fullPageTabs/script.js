function openPage(event, pageName, elem, color) {
  Array.from(document.querySelectorAll(".tabcontent")).forEach((elem) => {
    elem.style.display = "none";
  });

  Array.from(document.querySelectorAll(".tablink")).forEach((elem) => {
    elem.style.backgroundColor = "";
  });

  document.querySelector(`#${pageName}`).style.display = "block";
  event.target.style.backgroundColor = `${color}`;
}

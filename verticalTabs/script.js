function openCity(event, city) {
  Array.from(document.querySelectorAll(".tablinks")).forEach((element) => {
    element.classList.remove("active");
  });
  Array.from(document.querySelectorAll(".tabcontent")).forEach((element) => {
    element.style.display = "none";
  });

  document.querySelector(`#${city}`).style.display = "block";
  event.target.classList.add("active");
}

document.querySelector("#default").click();

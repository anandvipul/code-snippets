function openCity(e, cityName) {
  Array.from(document.getElementsByClassName("tablinks")).forEach((element) => {
    element.classList.remove("active");
  });

  Array.from(document.getElementsByClassName("tabcontent")).forEach(
    (element) => {
      element.style.display = "none";
    }
  );
  e.target.classList.toggle("active");
  document.getElementById(`${cityName}`).style.display = "block";
}

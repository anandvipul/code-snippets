function myfunction() {
  let x = document.getElementById("myTopnav");
  console.log(x);
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

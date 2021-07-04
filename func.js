function myFunction() {
  var element = document.getElementById("sb");
  element.classList.add("sidebar-extra");
  var overlay = document.getElementById("overlay");
  overlay.style.display = "inline";
}

function hideSideBar() {
  var sb = document.getElementById("sb");
  sb.classList.remove("sidebar-extra");
  var overlay = document.getElementById("overlay");
  overlay.style.display = "none";
  console.log("hello");
}

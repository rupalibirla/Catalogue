/** @format */

fetch("header.html")
  .then((response) => response.text())
  .then((headerContent) => {
    // Insert the header content into the current page
    document.body.insertAdjacentHTML("afterbegin", headerContent);
  })
  .catch((error) => console.error("Error fetching header:", error));
fetch("footer.html")
  .then((response) => response.text())
  .then((footerContent) => {
    // Insert the footer content at the end of the <body> element
    document.body.insertAdjacentHTML("beforeend", footerContent);
  })
  .catch((error) => console.error("Error fetching footer:", error));
//  ******** gallery images javascript ************
function openFullscreen(element) {
  const overlay = document.getElementById("overlay");
  const img = document.createElement("img");
  img.src = element.src;
  overlay.appendChild(img);
  overlay.style.display = "flex";
  document.body.style.overflow = "hidden"; // Disable scrolling
}
function closeFullscreen() {
  const overlay = document.getElementById("overlay");
  overlay.innerHTML = "";
  overlay.style.display = "none";
  document.body.style.overflow = "auto"; // Enable scrolling
}

/* ========================================= hamburger menu =======================================*/

function showsidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
    // sidebar.style.transition = '0.7s'
}
function hidesidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
    // sidebar.style.transition = '0.7s'
}

/* ========================================== search box ========================================= */

function redirect() {
    var searchTerm = document.getElementById("searchInput").value.toLowerCase();
    
    // Assuming your HTML pages are named one.html, two.html, ..., ten.html
    var validPages = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'pimple'];

    if (validPages.includes(searchTerm)) {
        window.location.href = searchTerm + '.html';
    } else {
        alert('Page not found for the entered search term.');
    }
}

// ============================================= log in =================================================

function login(){
    const log = document.querySelector('.flexloginmodal')
    log.style.display = 'flex'
}
function closeloginmodal(){
    const close = document.querySelector('.flexloginmodal')
    close.style.display = 'none'
}

// ============================================= Blogs slide show ===============================================

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "flex";  
}

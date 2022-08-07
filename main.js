const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    document.getElementById("menu_active_items").style.display = "block";
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    document.getElementById("menu_active_items").style.display = "none";
    menuOpen = false;
  }
});
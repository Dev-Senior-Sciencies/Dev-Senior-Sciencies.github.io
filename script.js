let links = document.getElementsByClassName('links');

links[0].addEventListener("mouseover", function onClick(e) {
  e.target.classList.add('active')
});

links[0].addEventListener("mouseout", function onClick(e) {
  e.target.classList.remove('active')
});

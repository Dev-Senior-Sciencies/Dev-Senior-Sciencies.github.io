let links = document.getElementsByClassName('links');

links[0].addEventListener("mouseover", function onClick(e) {
  e.target.classList.add('active')
  e.target.classList.remove('active')
});

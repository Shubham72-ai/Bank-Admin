
var slideIndex = 0;
var slideIndexCurrent = 0;
showSlides();





function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  
  slides[slideIndex-1].style.display = "block";  


  setTimeout(showSlides, 3000); 
}



$('.policy_name').each(function() {
  $(this).on('click', function(){
    $(this).next().slideToggle();
  })
})



const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(event) {
 
  tabPanels.forEach(panel => panel.hidden = true);

  tabButtons.forEach(tab => tab.setAttribute("aria-selected", false));

  event.currentTarget.setAttribute("aria-selected", true);

  const { id } = event.currentTarget;

  const tabPanel = tabPanels.find(
    panel => panel.getAttribute('aria-labelledby') === id
  );
  tabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));







var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




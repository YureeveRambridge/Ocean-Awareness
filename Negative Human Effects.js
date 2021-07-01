item4.innerHTML += `<h1>Habitat Destruction</h1>
Virtually all Ocean habitats have been affected in some way via drilling or mining, 
dredging for aggregates for concrete and other building materials, destructive anchoring, 
removal of corals and land “reclamation”. <i onclick="myFunction(this)" class="fa fa-thumbs-up"></i><hr>`;

item5.innerHTML += `<h1>Carbon Emissions</h1>
Since the industrial revolution, humans have increased carbon dioxide in the atmosphere 
to levels that have caused Ocean acidification and Ocean warming, amongst other climate 
related negative effects. <i onclick="myFunction(this)" class="fa fa-thumbs-up"></i><hr>`;

item6.innerHTML += `<h1>Deep Sea Mining</h1>
A new issue facing the Ocean is that of deep sea mining.  The metals required in our 
laptops, phones and batteries can be found on the seafloor – but what damage will we do? <i onclick="myFunction(this)" class="fa fa-thumbs-up"></i><hr>`;

item7.innerHTML += `<h1>Deoxygenation</h1>
The increase in the use of fertilisers for agriculture and warming ocean waters has 
contributed to eutrophication of the Ocean in certain areas of the world.
This means there is less available dissolved oxygen for native sea life, which can 
negatively impact biological processes. <i onclick="myFunction(this)" class="fa fa-thumbs-up"></i><hr>`;

item8.innerHTML += `<h1>Surface runoff</h1>
With increased urbanisation, tarmac and other manmade land surfaces contribute to petrol,
diesel and other harmful chemicals easily flowing into rivers or directly into the Ocean. <i onclick="myFunction(this)" class="fa fa-thumbs-up"></i><hr>`;

item9.innerHTML += `<h1>Destructive Fishing</h1>
Certain fishing practices not only contribute to overfishing of their target species, 
but also damage the environment by dredging the seabed or catching other species that 
are thrown back dead. <i onclick="myFunction(this)" class="fa fa-thumbs-up"></i><hr>`;

item10.innerHTML += `<h1>Overfishing</h1>
In many areas, factory fishing has destroyed local fish stocks, leaving too few adults 
to breed for the future. <i onclick="myFunction(this)" class="fa fa-thumbs-up"></i><hr>`;

item11.innerHTML += `<h1>Plastic pollution</h1>
The world has woken up to the millions of tonnes of plastic that have entered the Ocean 
over the past 100 years. The impacts of this scourge will last a lot longer. <i onclick="myFunction(this)" class="fa fa-thumbs-up"></i><hr>`;

var slideIndex = 0;
showSlides();
// slideshow effect function
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// Slides pictures up and down
$(document).ready(function () {
  function animateBoxes() {
    $(".grid-container")
      .animate({ right: "500px" }, 1000)
      .animate({ left: "500px" }, 1000);
    $(".grid-container").slideUp(4000).slideDown(4000);
  }

  setInterval(animateBoxes, 4000);
  animateBoxes();

});

// Function which can stop the animation of the above 
$(document).ready(function() {
  jQuery.fx.off = true;
  $('#stop').click(function(){
      $('#anime').toggle("slow");
  });
});

// Saves texts
const wrap = document.getElementById('wrap');

wrap.addEventListener('click', (event2) => {
  const isButton = event2.target.nodeName === 'INPUT';
  if (!isButton) {
    return;
  }
  incrementValue()
  let iden = event2.target.id;
  var value = parseInt(document.getElementById('number').value, 10);
  var textToWrite2 = document.getElementById(iden).innerHTML;
  localStorage.setItem(`secondPage${value}`, textToWrite2 );

});



// reffs:
/* https://www.w3schools.com/html/default.asp */
// <!-- https://oceanconservationtrust.org/think-ocean/ways-to-think-ocean/ -->

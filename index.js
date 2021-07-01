para.innerHTML += `Just by looking at images of Earth from space, it's clear that the ocean is a significant piece of the Earth's story. 
In fact, the ocean represents over 70% of the Earth's surface and contains 97% of all water on Earth. 
The ocean stores heat like a "fly wheel" for climate. Its huge capacity as a heat and water reservoir moderates the climate of Earth. 
Within this Earth system, both the physical and biological processes of the ocean play a key role in the water cycle, the carbon cycle, and climate variability.`;


para2.innerHTML += `Even if you live nowhere near the ocean, you will still experience the ocean's influence in our Earth system. 
Most of the rain that falls on landcomes from the tropical ocean. 
The ocean is the primary driver of weather and climate and can give us clues to global phenomenon such as El Niño. 
The phytoplankton (microscopic plants) that live in the ocean are responsible for almost half the oxygen you inhale and play a vital role in the carbon cycle. 
Far inland from the ocean, fields of crops enjoy rainwater that traveled through the water cycle and spent a few days or perhaps thousands of years cycling through the ocean.
Learn more about the ocean's influence on the Earth system:       
<ul>
<li><a href="https://science.nasa.gov/earth-science/oceanography/ocean-earth-system/climate-variability" target="_blank">Climate Variability</a></li>
<li><a href="https://science.nasa.gov/earth-science/oceanography/ocean-earth-system/ocean-carbon-cycle" target="_blank">Carbon Cycle</a></li>
<li><a href="https://science.nasa.gov/earth-science/oceanography/ocean-earth-system/ocean-water-cycle" target="_blank">Water Cycle</a></li>
</ul>`;


para3.innerHTML += `With every breath we take, every drop we drink, we're connected to the ocean. 
Our planet depends on the vitality of the ocean to support and sustain it. 
But our ocean faces major threats: global climate change, pollution, habitat 
destruction, invasive species, and a dramatic decrease in ocean fish stocks. 
These threats to the ocean are so extensive that more than 40 percent of the ocean 
has been severely affected and no area has been left untouched. Consequently, humanity 
is losing the food, jobs, and critical environmental services that a healthy ocean generates. 
National Geographic Society's Ocean Initiative aims to restore health and productivity to the 
ocean by inspiring people to care and act, reducing the impact of fishing, and promoting 
the creation of marine protected areas.`;

h11.innerHTML += `The ocean is the largest ecosystem on Earth, and it is the planet’s life support system.`;

para4.innerHTML += `The ocean is essential for all life on Earth, including humans. To ensure a sustainable 
future, we must protect and preserve healthy marine ecosystems.`;

h12.innerHTML+=`For far too long, people assumed that the ocean was limitless and immune to human impacts.`;

para5.innerHTML += `Only recently, scientists have come to understand the devastating impact and continued threat 
of human activities. Overfishing, climate change, pollution, habitat destruction, invasive 
species, and other forms of human exploitation have put our ocean at risk. No area has been 
left untouched.`;

quote.innerHTML += `“With every drop of water you drink, every breath you take, you’re connected to the sea.”
— Sylvia Earle`;




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

// Stores Subcribers
let emailList = [];

function emailSub() {
    let email = document.getElementById("frm1");
    emailList.push(email);
    document.getElementById("frm1").value = "";
}


// Hide show image
function change(){
    var btn_text = $("#btn1").val();
    if(btn_text == "Hide")
    {
      $("#wrapper").hide();
      $("#btn1").val("Show");
    }
    else if(btn_text == "Show")
    {
      $("#wrapper").show();
      $("#btn1").val("Hide");
    }
}

// Save articals
const wrapper = document.getElementById('wrapper');

wrapper.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'INPUT';
  if (!isButton) {
    return;
  }
  incrementValue()
  let iden = event.target.id;
  var value = parseInt(document.getElementById('number').value, 10);
  var textToWrite = document.getElementById(iden).innerHTML;
  localStorage.setItem(`index${value}`, textToWrite );

});


// Drop-down menu with the use of an accordion animation style.
$(function () {
  var Accordion = function (el, multiple) {
    this.el = el || {};

    this.multiple = multiple || false;

    var links = this.el.find(".link");

    links.on(
      "click",
      { el: this.el, multiple: this.multiple },
      this.dropdown
    );
  };

  Accordion.prototype.dropdown = function (e) {
    var $el = e.data.el;

    ($this = $(this)), ($next = $this.next());

    $next.slideToggle();

    $this.parent().toggleClass("open");

    if (!e.data.multiple) {
      $el.find(".submenu").not($next).slideUp().parent().removeClass("open");
    }
  };

  var accordion = new Accordion($("#accordion"), false);
});

// Fade paragraphs
$(".button12").click(function () {
  $(".box").fadeOut(3000);
});

// Saves images 
function imgSave(){
  incrementValue()
  bannerImage = document.getElementById('bannerImg');
  imgData = getBase64Image(bannerImage);
  localStorage.setItem("imgData", imgData);
  getBase64Image(img);
}

function imgSave2(){
  incrementValue()
  bannerImage = document.getElementById('bannerImg2');
  imgData2 = getBase64Image(bannerImage);
  localStorage.setItem("imgData2", imgData2);
  getBase64Image(img);

}



// reffs:
// https://www.nationalgeographic.org/media/why-ocean-matters/
// https://www.dotnetlovers.com/Article/50/how-to-hide-and-show-a-control-on-button-click-using-jquery
// https://learncodeweb.com/jquery/animation-and-slide-methods-in-jquery-with-example/
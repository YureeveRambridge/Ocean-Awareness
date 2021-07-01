// Save images for second page
const imgWrap = document.getElementById('imgWrap');

imgWrap.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'INPUT';
  if (!isButton) {
    return;
  }

  incrementValue()

  let iden = event.target.id;

  bannerImage = document.getElementById(iden);
  imgData = getBase64Image(bannerImage);
  localStorage.setItem(iden, imgData);

});

// Converts image to a string
function getBase64Image(img) {
  
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;

  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);

  var dataURL = canvas.toDataURL("image/png");

  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
} 

// loads page 2 images
function imgLoad2() {

  for (let c=1; c<localStorage.length +1 ; c++){
      var dataImage = localStorage.getItem(`img${c}`);
      if (dataImage == null) {
      } else {
         imgPush(dataImage);
      }
  }

}
// displays image on html
function imgPush(dataImage) {
  var x = document.createElement("IMG");

  x.src = "data:image/png;base64," + dataImage;

  document.body.appendChild(x);
}

// loads page 1 images 
function imgLoad() {
  var dataImage = localStorage.getItem('imgData');
  var dataImage2 = localStorage.getItem('imgData2');

  bannerImg = document.getElementById('tableBanner');
  bannerImg2 = document.getElementById('tableBanner2');

  bannerImg.src = "data:image/png;base64," + dataImage;
  bannerImg2.src = "data:image/png;base64," + dataImage2;
}

// Counts how many items are stored
function incrementValue()
{
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
  alert(`Saved items ${value}`);

}

//  loads save articals for page 1
function loadIndex() {

    for (let c=1; c<localStorage.length+1; c++){
        var myBlob = localStorage.getItem(`index${c}`);
        if (myBlob == null) {
        } else {
          var btn = document.createElement("P");
          btn.innerHTML = `${myBlob} `;
          document.body.appendChild(btn);
        }
    }

}

//  loads save articals for page 2
function loadSecondPage() {

  for (let c=1; c<localStorage.length +1; c++){
      var myBlob = localStorage.getItem(`secondPage${c}`);
      if (myBlob == null) {
      } else {
        var btn = document.createElement("P");
        btn.innerHTML = `${myBlob} `;
        document.body.appendChild(btn);
      }
  }

}





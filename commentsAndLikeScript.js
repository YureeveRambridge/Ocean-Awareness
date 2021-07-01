//  Lest user enter comments
let add = () => {
    let name = document.querySelector('.container #name'); 
    let comment = document.querySelector('.container #comment'); 
     
    if (name.value !== "" && comment.value != "") { 
     
      let list = document.querySelector('.list'); 
      let time = new Date();
      let h = time.getHours(); 
      let m = time.getMinutes(); 
      let s = time.getSeconds(); 
      let now = h + " : " + m + " : " + s;
      let list_item = document.createElement ("l1"); 
     
      list_item.innerHTML = `
      <span>
      <p>${name.value} @ ${now}</p> 
      </span>
      <p>${comment.value}                 / <i onclick="myFunction(this)" class="fa fa-thumbs-up"></i></p>
      <hr class ="c">
      `;
      list.append(list_item); 
    }
     
    if (name.value == "" || comment.value == "") {
      let list = document.querySelector('.list'); 
      let list_item = document.createElement ("l2"); 
      var warn = 'Please enter name & comment!';  
      list_item.innerHTML = `
      <span>
      <p>${warn}</p> 
      </span><hr class ="c">
      `;
      list.append(list_item); 
    }
    name.value=comment.value = "";
}
  
// for like button
function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
}
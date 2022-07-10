var toggler = document.getElementsByClassName("div");
var i;
var slct = "None"

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".branch").classList.toggle("active");
  });
  toggler[i].addEventListener("click", function() {
  slct = this.textContent
  document.getElementById("slct").textContent = slct
  })
}
var files = document.getElementsByClassName("file")
for (i = 0; i < files.length; i++) {
   files[i].parentNode.addEventListener("click",  function(){
  slct = this.textContent
  document.getElementById("slct").textContent = slct
   })
}

$(document).ready(function(){
    $("#discount").click(function(){
      alert("Pegando desconto...");
      $("#title").hide()
      $("#discount").hide()
      var ShowDiscounts = document.querySelector('#ShowDiscount')
      ShowDiscounts.innerHTML+=`
    <div id="ShowDiscount">
        <video autoplay loop>
            <source src="video.mp4" type="video/mp4">
        </video>
    </div>
      `
    });
  });
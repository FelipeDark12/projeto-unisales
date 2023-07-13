
// Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

//Script to password
function myFunction() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

//modal
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

// Script para egresso
function yesnoCheck() {
  if (document.getElementById('inlineRadio1').checked) {
      document.getElementById('ifYes').style.display = 'block';
      document.getElementById('ifNo').style.display = 'none';
  }
  else {
      document.getElementById('ifYes').style.display = 'none';
      document.getElementById('ifNo').style.display = 'block';
  }
       

}

function envio1() {
  if (document.getElementById('0').click){
      document.getElementById('ifYes').style.display = 'block';
  }
  else {
    document.getElementById('ifYes').style.display = 'none';
  }
}

function envio2() {
  if (document.getElementById('1').click){
      document.getElementById('Sim').style.display = 'block';
  }
  else {
    document.getElementById('Sim').style.display = 'none';
  }
}

//

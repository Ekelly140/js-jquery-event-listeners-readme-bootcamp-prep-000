function getIt(){
  $('p').on("click", function(){
    alert('hey!');
  });
}

function frameIt() {
  $('img').on('load', function(){
  //actions you want to happen
});
}

function pressIt (){
  $(document).on('keydown', function(key) {
  if (key.which ==71){
    alert('G was pressed');
  }
});
}

$(document).ready(function(){

getIt();
pressIt();
  
});

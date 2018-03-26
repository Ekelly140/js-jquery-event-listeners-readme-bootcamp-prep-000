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


$(document).ready(function(){

getIt();

  
});

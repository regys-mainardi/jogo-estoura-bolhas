function addBola(){
  var x = Math.floor(Math.random()*800); //renderiza posicionamento horizontal de 0até 800.
  var y = Math.floor(Math.random()*500); //renderiza posicionamento vertical de 0até 500.
  var z = Math.floor(Math.random()*4); //define cor da bola

  var bola = $('<div class="bola"></div>');
  bola.css('left',x+'px');
  bola.css('top',y+'px');

  switch(z){
    case 0:
       bola.css('background', 'blue');
       break;
    case 1:
       bola.css('background', 'red');
       break;
    case 2:
       bola.css('background', 'yellow');
       break;
    case 3:
       bola.css('background', 'black');
       break;
    case 4:
       bola.css('background', 'green');
       break;
 
  }
  bola.bind('click', function(){
    $(this).fadeOut('fast'); 
    placar++; 
    updatePlacar();
    
  }); 

  $(document.body).append(bola);  
}

function updatePlacar(){
  $('#placar').html(placar); 
}
var placar = 0; 
$(function(){
$('#comecar').bind('click',function(){
  setInterval(addBola,1000);

});
}); 
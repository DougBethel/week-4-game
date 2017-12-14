
$(document).ready(function() {

var computerNumber = Math.floor(Math.random() * (121 - 19) + 19);
var random1 = Math.floor(Math.random()*11+1);
var random2 = Math.floor(Math.random()*11+1);
var random3 = Math.floor(Math.random()*11+1);
var random4 = Math.floor(Math.random()*11+1);
var userTotal = 0;
var winTotal = 0;
var lossTotal = 0;

$('#randomNumber').text(computerNumber);



function reset(){
  computerNumber=Math.floor(Math.random()*101+19);
  $('#randomNumber').text(computerNumber);
  random1= Math.floor(Math.random()*11+1);
  random2= Math.floor(Math.random()*11+1);
  random3= Math.floor(Math.random()*11+1);
  random4= Math.floor(Math.random()*11+1);
  userTotal= 0;
  $('#userNumber').text(userTotal);
  }

  function winMessage(){
      alert("You win!");
      winTotal++;
    $('#Wins').text(winTotal);
    reset();
  }

  function loser(){
  alert ("You lose!");
  lossTotal++;
  $('#losses').text(lossTotal);
  reset();
}

$('#one').on ('click', function(){
userTotal = userTotal + random1;
console.log("New userTotal= " + userTotal);
$('#userNumber').text(userTotal);
     //sets win/lose conditions
   if (userTotal == computerNumber){
     winMessage();
   }
   else if ( userTotal > computerNumber){
     loser();
   }
 });

 $('#two').on ('click', function(){
userTotal = userTotal + random2;
console.log("New userTotal= " + userTotal);
$('#userNumber').text(userTotal);
      //sets win/lose conditions
    if (userTotal == computerNumber){
      winMessage();
    }
    else if ( userTotal > computerNumber){
      loser();
    }
  });

  $('#three').on ('click', function(){
 userTotal = userTotal + random3;
 console.log("New userTotal= " + userTotal);
 $('#userNumber').text(userTotal);
       //sets win/lose conditions
     if (userTotal == computerNumber){
       winMessage();
     }
     else if ( userTotal > computerNumber){
       loser();
     }
   });

   $('#four').on ('click', function(){
  userTotal = userTotal + random4;
  console.log("New userTotal= " + userTotal);
  $('#userNumber').text(userTotal);
        //sets win/lose conditions
      if (userTotal == computerNumber){
        winMessage();
      }
      else if ( userTotal > computerNumber){
        loser();
      }
    });
});

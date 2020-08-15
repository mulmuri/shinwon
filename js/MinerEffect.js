function exceptionHandling() {
  switch (horse.parentNode.id) {
    case 'No19': {document.getElementById('No0').style.zIndex = "0"; break;}
    case 'No0': {document.getElementById('No0').style.zIndex = "2"; break;}
  }
}
function oneturnscore() {
  var score = 1;
  if (destination === 0) {
    switch(horse.id) {
      case 'horseA': {document.getElementById('scoreA').innerHTML = Number(document.getElementById('scoreA').innerHTML)+score; break;}
      case 'horseB': {document.getElementById('scoreB').innerHTML = Number(document.getElementById('scoreB').innerHTML)+score; break;}
    }
  }
}

function setPosition() {
  switch(horse.id) {
    case 'horseA': {setPositionA(); break;}
    case 'horseB': {setPositionB(); break;}
  }
}
function setPositionA() {
  var horsePosition = document.getElementById('horseA').style
  var parent = document.getElementById('horseA').parentNode.id;
  horsePosition.top = "15px";
  horsePosition.left = "15px";
  switch(parent) {
    case 'No0': {
      horsePosition.top = "65px";
      horsePosition.left = "65px";
      break;
    }
    case 'No4': {
      horsePosition.left = "65px";
      break;
    }
    case 'No14': {
      horsePosition.top = "65px";
      break;
    }
  }
  document.getElementById('horseA').style.zIndex = 11;
  document.getElementById('horseB').style.zIndex = 10;
}
function setPositionB() {
  var horsePosition = document.getElementById('horseB').style
  var parent = document.getElementById('horseB').parentNode.id;
  horsePosition.bottom = "15px";
  horsePosition.right = "15px";
  switch(parent) {
    case 'No10': {
      horsePosition.bottom = "65px";
      horsePosition.right = "65px";
      break;
    }
    case 'No4': {
      horsePosition.bottom = "65px";
      break;
    }
    case 'No14': {
      horsePosition.right = "65px";
      break;
    }
  }
  document.getElementById('horseA').style.zIndex = 10;
  document.getElementById('horseB').style.zIndex = 11;
}

function orderSelect(Turn) {
  if (run) return;
  var targetA = document.getElementById('horseA').style;
  var targetB = document.getElementById('horseB').style;
  switch(Turn) {
    case 'A':
      horse = document.getElementById('horseA');
      targetA.boxShadow = "0px 0px 5px 5px skyblue";
      targetA.border = "none";
      targetB.boxShadow = "none";
      targetB.border = "2px black solid";
      document.getElementById('horseA').style.zIndex = 11;
      document.getElementById('horseB').style.zIndex = 10;
      break;
    case 'B':
      horse = document.getElementById('horseB');
      targetB.boxShadow = "0px 0px 5px 5px skyblue";
      targetB.border = "none";
      targetA.boxShadow = "none";
      targetA.border = "2px black solid";
      document.getElementById('horseA').style.zIndex = 10;
      document.getElementById('horseB').style.zIndex = 11;
      break;
  }
}

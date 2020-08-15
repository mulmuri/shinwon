horse = null;
function turnStart() {
  if (diceNum) {
    diceNum -= 1;
    exceptionHandling();
    var dir = horse.parentNode.dataset.dir;
    switch(horse.id) {
      case 'horseA': {mul = Number(horse.parentNode.dataset.mula); break;}
      case 'horseB': {mul = Number(horse.parentNode.dataset.mulb); break;}
    }
    count = 20;
    dis = 0;
    switch(dir) {
      case 'T': {setTimeout("moveStartT()",300); break;}
      case 'L': {setTimeout("moveStartL()",300); break;}
      case 'B': {setTimeout("moveStartB()",300); break;}
      case 'R': {setTimeout("moveStartR()",300); break;}
    }
  } else {
    turnEndEffect();
  }
}

function moveStartT() {
  count -= 1;
  dis += 5;
  horse.style.transform = 'translateY(-'+dis*mul+'px)'
  if (count) setTimeout("moveStartT()", 50);
  else moveEnd();
}
function moveStartL() {
  count -= 1;
  dis += 5;
  horse.style.transform = 'translateX(-'+dis*mul+'px)'
  if (count) setTimeout("moveStartL()", 50);
  else moveEnd();
}
function moveStartB() {
  count -= 1;
  dis += 5;
  horse.style.transform = 'translateY('+dis*mul+'px)'
  if (count) setTimeout("moveStartB()", 50);
  else moveEnd();
}
function moveStartR() {
  count -= 1;
  dis += 5;
  horse.style.transform = 'translateX('+dis*mul+'px)'
  if (count) setTimeout("moveStartR()", 50);
  else moveEnd();
}

function moveEnd() {
  destination = (Number(horse.parentNode.id.substr(2))+1)%20;
  document.getElementById('No'+destination).appendChild(horse);
  horse.style.transform = "translateX(0px)";
  horse.style.transform = "translateY(0px)";
  setPosition();
  oneturnscore();
  exceptionHandling();
  turnStart()
}

var level0 = 'white'
var level1 = 'cornflowerblue'
var level2 = 'gold'
var level3 = '#ff4500'
var color = [
  level0, level2, level1, level3,
  level0, level1, level2, level1, level2, level3,
  level0, level1, level2, level1,
  level0, level1, level3, level2, level1, level0
]
function turnEndEffect() {
  var target = document.getElementById('board').style;
  setTimeout(function() {
    document.getElementsByClassName('scoreBoardA')[0].style.display = 'none';
    document.getElementsByClassName('scoreBoardB')[0].style.display = 'none';
    document.getElementsByClassName('hasMissionCleared')[0].style.display = 'none';
    document.getElementById('diceTable').style.display = 'none';
    switch(horse.parentNode.id) {
      case 'No0': {
        target.backgroundImage = 'url("image/start.png")';
        target.backgroundSize = '548px 408px';
        target.backgroundPosition = '182px 150px';
        break;
      }
      case 'No4': {
        target.backgroundImage = 'url("image/goldenKey.png")';
        target.backgroundSize = '612px 408px';
        target.backgroundPosition = '150px 150px';
        break;
      }
      case 'No10': {
        target.backgroundImage = 'url("image/dual.png")';
        target.backgroundSize = '446px 408px';
        target.backgroundPosition = '233px 150px';
        break;
      }
      case 'No14': {
        target.backgroundImage = 'url("image/island.png")';
        target.backgroundSize = '463px 408px';
        target.backgroundPosition = '224px 150px';
        break;
      }
      case 'No19': {
        target.backgroundColor = 'silver';
        target.backgroundImage = 'url("image/boom.jpg")';
        target.backgroundSize = '408px 408px';
        target.backgroundPosition = '252px 150px';
        break;
      }
      default: {
        document.getElementById('diceTable').style.display = 'block';
        target.backgroundColor = color[Number(horse.parentNode.id.substr(2))];
        target.backgroundImage = 'none';
        break;
      }
    }
  },1000);
  setTimeout(function() {
    document.getElementsByClassName('scoreBoardA')[0].style.display = 'block';
    document.getElementsByClassName('scoreBoardB')[0].style.display = 'block';
    document.getElementsByClassName('hasMissionCleared')[0].style.display = 'block';
    document.getElementById('diceTable').style.display = 'block';
    target.backgroundColor = 'white';
    target.backgroundImage = "url(image/nightSky.jpg)";
    target.backgroundSize = '912px 708px';
    target.backgroundPosition = '0px 0px';
  },5000);
  setTimeout(function() {
    run2 = true;
    run = false;
    diceout();
    run = true;
  },5000);
}

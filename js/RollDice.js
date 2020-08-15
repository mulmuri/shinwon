oldNum = 0;
newNum = 0;
function randomInt(from, to) {return(Math.floor((Math.random()*(to - from + 1)) + from))}
function imageFunction() {
  while (newNum === oldNum) newNum = randomInt(1,6);
  oldNum = newNum;
  document.getElementById('diceTable').style.backgroundImage = "url('image/diceNo"+newNum+".png')";
  diceImage = setTimeout("imageFunction()", 100);
}

run = false;
function dicein() {
  if (run) return;
  var target = document.getElementById('diceTable').style;
  target.backgroundSize = "200px 200px";
  target.backgroundPosition = "50px 50px";
  setTimeout("imageFunction()");
}
function diceout() {
  if (run) return;
  clearTimeout(diceImage);
  var target = document.getElementById('diceTable').style;
  target.backgroundImage = "url('image/marble.png')";
  target.backgroundSize = "346px 346px";
  target.backgroundPosition = "-23px -34px";
}
function throwTheDice() {
  if (!horse) {alert("차례를 선택해주세요."); return;}
  if (run) return;
  else run = true;
  clearTimeout(diceImage);
  lastPlace = horse.parentNode.id;
  randomSet = [1,2,3,4,5,6];
  if (!controlD) controlDNo1();
  else controlDNo2();
  controlD = false;
  console.log(randomSet);
  diceNum = randomSet[randomInt(0,randomSet.length-1)];
  var target = document.getElementById('diceTable').style;
  target.backgroundImage = "url('image/diceNo"+diceNum+".png')"
  target.backgroundSize = "200px 200px";
  target.backgroundPosition = "50px 50px";
  turnStart();
}

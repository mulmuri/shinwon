function giveScore(team, dir) {
  var score = 1;
  switch(team) {
    case 'A':
      switch(dir) {
        case 'up': {document.getElementById('scoreA').innerHTML = Number(document.getElementById('scoreA').innerHTML)+score; break;}
        case 'down': {document.getElementById('scoreA').innerHTML = Number(document.getElementById('scoreA').innerHTML)-score; break;}
      } break;
    case 'B':
      switch(dir) {
        case 'up': {document.getElementById('scoreB').innerHTML = Number(document.getElementById('scoreB').innerHTML)+score; break;}
        case 'down': {document.getElementById('scoreB').innerHTML = Number(document.getElementById('scoreB').innerHTML)-score; break;}
      } break;
  }
}

function allowDrop(ev) {ev.preventDefault()}
function drag(ev) {
  if (run) return;
  ev.dataTransfer.setData("text", ev.target.id)
}
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  if (ev.target.id !== 'horseA' && ev.target.id !== 'horseB') {
    ev.target.appendChild(document.getElementById(data));
    switch(data) {
      case 'horseA': {setPositionA(); break;}
      case 'horseB': {setPositionB(); break;}
    }
  }
}
function touchfun(ev) {ev.preventDefault()}

stateA = 'easy';
stateB = 'easy';
function controlDNo1() {
  var target = null
  var last = Number(lastPlace.substr(2));
  for (var i=1; i<=6; i++) if ((last+i)%20 === 19) {target = i; break;};
  if (target === null) return;
  switch(horse.id) {
    case 'horseA': {state = stateA; break;}
    case 'horseB': {state = stateB; break;}
  }
  switch(state) {
    case 'easy': {randomSet.splice(randomSet.indexOf(target),1); break;}
    case 'hard': {
      if (1<=target && target <=3) randomSet = [target];
      else randomSet = [1,2,3];
      break;
    }
  }
}

controlD = false;
function controlDNo2() {
  var target = null
  var last = Number(lastPlace.substr(2));
  for (var i=1; i<=6; i++) if ((last+i)%20 === controlD) {target = i; break;};
  if (target === null) return;
  randomSet = [target];
}

run2 = false;
function success() {
  if (!run2) return;
  nextt();
}
function failed() {
  if (!run2) return;
  document.getElementById(lastPlace).appendChild(horse);
  setPosition();
  nextt();
}
function nextt() {
  run2 = false;
  run = false;
  switch (horse.id) {
    case 'horseA': {orderSelect('B'); break;}
    case 'horseB': {orderSelect('A'); break;}
  }
}

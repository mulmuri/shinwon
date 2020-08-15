for (var i=0; i<=19; i++) {
  var target = document.getElementById('No'+i);
  target.setAttribute("ondrop", "drop(event)");
  target.setAttribute("ondragover", "allowDrop(event)")
}
setPositionA();
setPositionB();

document.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
  }
}, true);

// Basic animation DOM 
var id = setInterval(frame, 5){
    function frame(){
        if (/* test for finished */){
            clearInterval(id)
        }else{
            /* code to change elem style */
        }
    }
}

function myMove() {
    var elem = document.getElementById("animate");   
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + 'px'; 
        elem.style.left = pos + 'px'; 
      }
    }
  }
  //Change the content of an element when a user clicks
  <h1 onclick = "inner.html = 'Again'">Click here!</h1>

  //Call a function from the event handler
  <h2 onclick = "changeThis(text)">Click here</h2>
  function changeThis(id) {
      id.innerHTML = "Try me";
  }
  //event listener
  element.addEventListener(event, function useCapture);
  
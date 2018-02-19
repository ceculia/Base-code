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
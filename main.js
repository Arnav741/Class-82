var mouse_event = "empty";
var lasty,lastx ;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width=1;
canvas.addEventListener("mousedown",mymousedown);
function mymousedown (e) {
    mouse_event = "mousedown";
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup (e) {
    mouse_event = "mouseup";
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave (e) {
    mouse_event = "mouseleave";
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove (e) {
    currentx = e.clientX - canvas.offsetLeft;
    currenty = e.clientY - canvas.offsetTop ;
  if ( mouse_event=="mousedown") {
      ctx.beginPath();
      ctx.strokeStyle = color ;
      ctx.lineWidth = width ;
      console.log("last position of x and y");
      console.log("x =" + lastx + "y =" + lasty) ;
      ctx.moveTo(lastx,lasty) ;
      console.log("current position of x and y");
      console.log("x =" + currentx + "y =" + currenty ) ;
      ctx.lineTo(currentx,currenty); 
      ctx.stroke();
      
}
    lastx = currentx ;
    lasty = currenty ;
}
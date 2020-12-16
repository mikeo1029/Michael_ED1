
function setup() {
  createCanvas(displayWidth,displayWidth);
  background (0,0,0)
  stroke(0,0,0)
  frameRate(2)
}
function draw (){
  translate((windowPane+shift/2),(windowPane+shift/2));
  var windowPane=0;
  var width= windowWidth-2*windowPane
  var height=windowWidth-2*windowPane
  var shift =100;
  var space =20;
  var num=50; + random (-shift, shift)
 
    var sideLen=width/num;
   for(var y=0; y<displayWidth; y=y + sideLen){
   for( var x =0; x<displayWidth; x=x +sideLen){
     fill (random(70,210), random (200,50), random(17,255));
     quad (x+space+ random (-shift, shift), y + space + random (-shift, shift), x+ sideLen - space+ random (-shift, shift), y + space + random(-shift, shift), x+ sideLen- space+ random(-shift, shift), y + sideLen-space+ random (-shift, shift), x+ space + random (-shift, shift), y + sideLen- space+ random (-shift, shift));
   }
   }

}
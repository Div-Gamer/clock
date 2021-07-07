
var hr,sc,mn,scAngle,hrAngle,mnAngle


function setup() {
  createCanvas(400,400);
  angleMode(DEGREES)

}
function draw() {
  background(0,0,0); 
  hr=hour() 
  mn=minute()
  sc=second()

  scAngle=map(sc,0,60,0,360)
  hrAngle=map(hr%12,0,12,0,360)
  mnAngle=map(mn,0,60,0,360)

translate(200,200);
rotate(-90)
  push()
  rotate(scAngle)
  stroke("blue")
  strokeWeight(7)
  line(0,0,100,0)
 
  pop()

  
  
  point(0,0,)


 push()
 rotate(hrAngle)
  stroke("red")
  strokeWeight(7)
  line(0,0,50,0)

 pop()


 
push()
 rotate(mnAngle)
  stroke("green")
  strokeWeight(7)
  line(0,0,70,0)

 pop()
  



strokeWeight(8)
 stroke("green")

stroke("blue")





noFill()




arc(0,0,300,300,0,scAngle)
arc(0,0,330,330,0,mnAngle)

arc(0,0,270,270,0,hrAngle)

  console.log(mn)
  drawSprites();
}
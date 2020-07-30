//Create variables here
var dog,dogImg,gogImg2;
var database
var ref;
function preload()
{
	//load images here
  dogImg = loadImage("images/dogImg.png");
  dogImg2 = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(800, 700);
  
  database = firebase.database();
 

 // ref = database.ref('food');
  foodStuff = database.ref('food');
  foodStuff.on("value",readStocks);

 

  dog = createSprite(400,350,20,20);
  dog.addImage(dogImg);
  dog.scale=0.2
}


function draw() {  
background(46,139,87);
 textSize(20)
  fill("white");
 text("Plese press UP ARROW KEY to feed snoppy milk",200,200);

if(keyWentDown(UP_ARROW)){
  writeStocks(foods);
  dog.addImage(dogImg2);
}

drawSprites();
  
  
  //add styles here

}

function readStocks(data){
  foods = data.val();
  console.log(foods);
}

function writeStocks(x){
    if(x<= 0){
      x=0
    }else{
      x=x-1;
    } 
  
  
  database.ref('/').update({
      food : x
    })
}


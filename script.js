const canvas = document.getElementById('board');
const board = canvas.getContext('2d');
console.log(board.height)
const board_width=canvas.width=870;
const board_heigth=canvas.height=870;
let cellsize=board_width/15;
const size_red=board_width/6;
let x=0;
let y=0;

function boardl()
{
    for (let row = 0; row < 15; row++) {
        for (let col = 0; col < 15; col++) {
       
  
           x = col * cellsize;
           y = row * cellsize;

          board.strokeStyle='black';
          board.strokeRect(x, y, cellsize, cellsize);
        }
}
 }

function redgame()
{
    for (let row=1; row<6;row++){
        
            x=7*cellsize;
            y=row*cellsize;
            board.fillStyle='#d1040e'
            board.fillRect(y,x,cellsize,cellsize);
    }

    board.fillstyle='#d1040e'
    board.fillRect(58,348,cellsize,cellsize);
}
function greengame()
{
    for (let col=1; col<6;col++){
        
        x=col*cellsize;
        y=7*cellsize;
        board.fillStyle='#04d13e'
        board.fillRect(y,x,cellsize,cellsize);
}

board.fillstyle='#04d13e'
board.fillRect(464,58,cellsize,cellsize);
   
}
function bluegame()
{
    for (let col=9; col<14;col++){
        
            x=col*cellsize;
            y=7*cellsize;
            board.fillStyle='#043ed1'
            board.fillRect(y,x,cellsize,cellsize);
    }

    board.fillstyle='#043ed1'
    board.fillRect(348,754,cellsize,cellsize);
}
function yellowgame()
{
    for (let row=9; row<14;row++){
        
        x=7*cellsize;
        y=row*cellsize;
        board.fillStyle='#f5f118'
        board.fillRect(y,x,cellsize,cellsize);
}

board.fillstyle='#f5f118'
board.fillRect(754,464,cellsize,cellsize);
}
function red()
{
    
      board.strokeStyle='black';
      board.strokeRect(0,0,348,348);
      board.fillStyle='#d1040e';
      board.fillRect(0,0,348,348);
      board.fillStyle='white'
      board.fillRect(40,40,268,268);
      board.beginPath();
      board.fillStyle='#d1040e';
      board.arc(100,100,40,0,2*Math.PI);
      board.fill();
      board.beginPath();
      board.fillStyle='#d1040e';
      board.arc(240,100,40,0,2*Math.PI);
      board.fill();
      board.beginPath();
      board.fillStyle='#d1040e';
      board.arc(100,240,40,0,2*Math.PI);
      board.fill();
      board.beginPath();
      board.fillStyle='#d1040e';
      board.arc(240,240,40,0,2*Math.PI);
      board.fill();
      
}
function green()
{
    
      board.strokeStyle='black';
      board.strokeRect(522,0,348,348);
      board.fillStyle='#04d13e';
      board.fillRect(522,0,348,348);
      board.fillStyle='white'
      board.fillRect(562,40,268,268);
      board.beginPath();
      board.fillStyle='#04d13e';
      board.arc(622,100,40,0,2*Math.PI);
      board.fill();
      board.beginPath();
      board.fillStyle='#04d13e';
      board.arc(762,100,40,0,2*Math.PI);
      board.fill();
      board.beginPath();
      board.fillStyle='#04d13e';
      board.arc(622,240,40,0,2*Math.PI);
      board.fill();
      board.beginPath();
      board.fillStyle='#04d13e';
      board.arc(762,240,40,0,2*Math.PI);
      board.fill();
      
}
function blue()
{
    
      board.strokeStyle='black';
      board.strokeRect(0,522,348,348);
      board.fillStyle='#043ed1';
      board.fillRect(0,522,348,348);
      board.fillStyle='white'
      board.fillRect(40,562,268,268);
      board.beginPath();
      board.fillStyle='#043ed1';
      board.arc(100,622,40,0,2*Math.PI);
      board.fill();
      board.beginPath();
      board.fillStyle='#043ed1';
      board.arc(240,622,40,0,2*Math.PI);
      board.fill();
      board.beginPath();
      board.fillStyle='#043ed1';
      board.arc(100,762,40,0,2*Math.PI);
      board.fill();
      board.beginPath();
      board.fillStyle='#043ed1';
      board.arc(240,762,40,0,2*Math.PI);
      board.fill();
      
}
function yellow()
{
    
      board.strokeStyle='black';
      board.strokeRect(522,522,348,348);
      board.fillStyle='#f5f118';
      board.fillRect(522,522,348,348);
      board.fillStyle='white'
      board.fillRect(562,562,268,268);
      board.beginPath();
      board.fillStyle='#f5f118';
      board.arc(622,622,40,0,2*Math.PI);
      board.fill();
      board.beginPath();
      board.fillStyle='#f5f118';
      board.arc(762,622,40,0,2*Math.PI);
      board.fill();
      board.beginPath();
      board.fillStyle='#f5f118';
      board.arc(622,762,40,0,2*Math.PI);
      board.fill();
      board.beginPath();
      board.fillStyle='#f5f118';
      board.arc(762,762,40,0,2*Math.PI);
      board.fill();
      
}
function homerect()
{
    board.fillStyle="black";
    board.fillRect(348,348,174,174);
    board.fillStyle='#d1040e';
    board.beginPath()
    board.moveTo(348,348);
    board.lineTo(435,435);
    board.lineTo(348,522);
    board.lineTo(348,348);
    board.fill();
    board.closePath();
    board.fillStyle='#04d13e';
    board.beginPath()
    board.moveTo(348,348);
    board.lineTo(435,435);
    board.lineTo(522,348);
    board.lineTo(348,348);
    board.fill();
    board.closePath();
    board.fillStyle='#f5f118';
    board.beginPath()
    board.moveTo(522,348);
    board.lineTo(435,435);
    board.lineTo(522,522);
    board.lineTo(522,348);
    board.fill();
    board.closePath();
    board.fillStyle='#043ed1';
    board.beginPath()
    board.moveTo(348,522);
    board.lineTo(435,435);
    board.lineTo(522,522);
    board.lineTo(348,522);
    board.fill();
    board.closePath();

}
redgame();
greengame();
bluegame();
yellowgame();
boardl();
red();
green();
blue();
yellow();
homerect();



//red game

function game(){
    let randomNumber1=Math.floor(Math.random()*6+1);
    let randomDice= "dice"+randomNumber1+".jpg";
    let image1 =document.getElementById("img1");
    image1.setAttribute("src",randomDice);
    setTimeout(function plar4(){
    if (randomNumber1 !=6)
    {
      document.getElementById('img1').style.visibility="hidden";
      document.getElementById('img2').style.visibility="visible";
    }
},1000);
    }

{

}
var button =document.getElementById("img1")
 button.addEventListener("click", game)


//green gaem

 function game2(){
    let randomNumber2=Math.floor(Math.random()*6+1);
    let randomDice= "dice"+randomNumber2+".jpg";
    let image2 =document.getElementById("img2");
    image2.setAttribute("src",randomDice);
    setTimeout(function plar4(){
    if (randomNumber2 !=6)
    {
      document.getElementById('img2').style.visibility="hidden";
      document.getElementById('img3').style.visibility="visible";
    }
},1000);
    }

{

}
var button =document.getElementById("img2")
 button.addEventListener("click", game2)



 // blue game
 function game3(){
    let randomNumber3=Math.floor(Math.random()*6+1);
    let randomDice= "dice"+randomNumber3+".jpg";
    let image3 =document.getElementById("img3");
    image3.setAttribute("src",randomDice);
    setTimeout(function plar4(){
    if (randomNumber3 !=6)
    {
      document.getElementById('img3').style.visibility="hidden";
      document.getElementById('img4').style.visibility="visible";
    }
},1000);
    }

{

}
var button =document.getElementById("img3")
 button.addEventListener("click", game3)


 //yellow game
 function game4(){
    let randomNumber4=Math.floor(Math.random()*6+1);
    let randomDice= "dice"+randomNumber4+".jpg";
    let image4 =document.getElementById("img4");
    image4.setAttribute("src",randomDice);

    setTimeout(function plar4(){
     if (randomNumber4 !=6)
    {
      document.getElementById('img4').style.visibility="hidden";
      document.getElementById('img1').style.visibility="visible";
    }
},1000);
    }

{

}
var button =document.getElementById("img4")
 button.addEventListener("click", game4)
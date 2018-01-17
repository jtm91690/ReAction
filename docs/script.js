var start = new Date().getTime();
var highScore = 1000;

function getRandomColor()
{
 var letters = '0123456789ABCDEF'.split('');
 var color='#';
 for (var i = 0; i < 6; i++)
     {
         color += letters[Math.floor(Math.random() * 16)];
     }
 return color;
}

function makeShapeAppear()
{
 var top = Math.random() * 400;
 var left = Math.random() * 400;
 var width = (Math.random() * 200) + 100;

 if(Math.random() > .5)
     {
         document.getElementById("shape").style.borderRadius = "50%";
     }
 else
     {
         document.getElementById("shape").style.borderRadius = "0";
     }

 document.getElementById("shape").style.backgroundColor = getRandomColor();
 document.getElementById("shape").style.width = width + "px";
 document.getElementById("shape").style.height = width + "px";
 document.getElementById("shape").style.top = top + "px";
 document.getElementById("shape").style.left = left + "px";
 document.getElementById("shape").style.display = "block";
 start = new Date().getTime();
}
function appearAfterDelay()
{
setTimeout(makeShapeAppear,Math.random()*2000); 
}

appearAfterDelay();



document.getElementById("shape").onclick = function()
{
 document.getElementById("shape").style.display = "none"; 

     
 var end = new Date().getTime();
 var timeTaken = (end-start) / 1000;
    
    if (timeTaken < highScore)
        {
            highScore = timeTaken;
            document.getElementById("highScore").innerHTML = highScore + "s";
            document.getElementById("timeTaken").innerHTML = timeTaken + "s";
            console.log("New High Score");

        }
    else
        {
            document.getElementById("timeTaken").innerHTML = timeTaken + "s";
            //console.log("false");
        }


 appearAfterDelay();
}
    
        

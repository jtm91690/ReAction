//Declare Variables
var start = new Date().getTime();
var count = 0;
var highScore = 1000;
var average = 0;
var scoresArray = ["0.000","0.000","0.000","0.000","0.000"];

document.getElementById("lastFiveScores").innerHTML = scoresArray.join(" ");

//Random color function
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

//Make shape appear function
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

//Create time delay function
function appearAfterDelay()
{
setTimeout(makeShapeAppear,Math.random()*2000); 
}

//create counter function
function Counter()
{
   //add a counter to tries
     count++;
     document.getElementById("count").innerHTML = count; 
}

//Create Highscore function
function HighScore(timeTaken)
{
   //calculate highscore
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
}

//Create Average function
function Average(timeTaken)
{
   average =(average + timeTaken)/count;
    //console.log(count);
    document.getElementById("average").innerHTML = average.toFixed(3) + "s"; 
}

//Create Last 5 scores function
function LastFiveScores(timeTaken)
{
    scoresArray.push(timeTaken);
    scoresArray.shift();
    
    document.getElementById("lastFiveScores").innerHTML = scoresArray.join("s ") + ("s");
}


appearAfterDelay();


//Onclick
document.getElementById("shape").onclick = function()
{
    
 document.getElementById("shape").style.display = "none"; 

    //Call counter function
    Counter();
    
    //calculate time
    var end = new Date().getTime();
    var timeTaken = (end-start) / 1000; 
    
    //Call Average Function
    Average(timeTaken);
    
    //Call HighScore function
    HighScore(timeTaken);
    
    //Last 5 scores
    LastFiveScores(timeTaken);

    appearAfterDelay();
}
    
        

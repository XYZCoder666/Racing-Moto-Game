var blueCar = document.getElementById("bluecar");
var player = document.getElementById("player");
var result = document.getElementById("result")
const score =  document.getElementById("score")
var game =  document.getElementById("game");
var counter = 0;
var jumpsound = document.getElementById("jumpsound")

// bluecar move
blueCar.addEventListener("animationiteration", function(){
    var random = ((Math.floor(Math.random() * 3)) * 130)
    blueCar.style.left = random + "px";
    counter++
})

//rececar move
window.addEventListener("keydown", function(e){
   if(e.keyCode == "39"){ var playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue("left"))
    if(playerLeft < 260){player.style.left = (playerLeft + 130) + "px"}
    jumpsound.play()
};

    if(e.keyCode == "37"){
        var playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue("left"))
        if(playerLeft > 0){player.style.left = (playerLeft - 130) + "px"
        jumpsound.play()
    }

    }
})


//Game over
setInterval(function Gameover (){
    var blueCarTop = parseInt(window.getComputedStyle(blueCar).getPropertyValue("top"))
    var blueCarLeft = parseInt(window.getComputedStyle(blueCar).getPropertyValue("left"));
    var playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
        if((blueCarLeft === playerLeft) && (blueCarTop > 250) && (blueCarTop < 450)){
            result.style.display = "block";
            game.style.display = "none";
            score.innerHTML = `score: ${counter} `;

            counter = 0;
        }
}, 10)


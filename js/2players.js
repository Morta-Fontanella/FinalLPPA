var error = null;
var redplayer = null;
var blueplayer = null;
var playernames = [];

var validatered = function () {
    var redname = document.getElementById("redname");
    if (redname.value.length >= 3) {
        redplayer = redname.value;
    } else {
        document.getElementById("rederror").style.display = "flex";
        error = true;
    }
}

var validateblue = function () {
    var bluename = document.getElementById("bluename");
    if (bluename.value.length >= 3) {
        blueplayer = bluename.value;
    } else {
        document.getElementById("blueerror").style.display = "flex";
        error = true;
    }
}

var reseterror = function () {
    document.getElementById("rederror").style.display = "none";
    document.getElementById("blueerror").style.display = "none";
    error = false;
}

var saveplayernames = function () {
    playernames.push({ redplayer: redplayer, blueplayer: blueplayer });
    localStorage["playersnames"] = JSON.stringify(playernames);
}

var nextpage = function () {
    saveplayernames();
    var newgame = true;
    localStorage["newgame"] = JSON.stringify(newgame);
    location.href = "1vs1.html";
}

var startGame = function () {
    playbutton = document.getElementById("playbutton");
    playbutton.addEventListener("click", function () {
        reseterror();
        validatered();
        validateblue();
        if (error == false) {
            console.log(playernames);
            nextpage();
        }
    })
}

var init = function () {
    startGame();
}

window.onload = init;
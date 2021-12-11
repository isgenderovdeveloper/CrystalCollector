var crystal = {
    blue: {
        name: blue,
        value: 0
    },
    green: {
        name: blue,
        value: 0
    },
    red: {
        name: blue,
        value: 0
    },
    yellow: {
        name: blue,
        value: 0
    }
}
var targetScore = $('#targetScore')
var yourScore = $('#yourScore')

var compscore = 0;
var wincount = 0;
var losecount = 0;
var currentscore = 0;


var randomnumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


var startGame = () => {
    currentscore = 0;

    compscore = randomnumber(15, 110);
    crystal.blue.value = randomnumber(1, 15);
    crystal.green.value = randomnumber(1, 15);
    crystal.red.value = randomnumber(1, 15);
    crystal.yellow.value = randomnumber(1, 15);

    $('#yourScore').text(currentscore);
    $('#targetScore').text(compscore)

}

var WinGame = function() {
    if (currentscore > compscore) {
        alert('Unfortunately you lost!')
        losecount++
        $('#winCount').text(losecount)
        startGame();
    } else if (currentscore === compscore) {
        alert('Congrutilations,you win')
        win++
        $('#loseCount').text(wincount)
        startGame();
    }
}

var myValue = function(clicked) {
    currentscore += clicked.value;
    $('#yourScore').text(currentscore)

    WinGame()
}

startGame()

$('#blue').click(function() {
    myValue(crystal.blue);
})
$('#green').click(function() {
    myValue(crystal.green);
})
$('#red').click(function() {
    myValue(crystal.red);
})
$('#yellow').click(function() {
    myValue(crystal.yellow);
})
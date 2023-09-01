
const mankind_is = "HUMANIDADE ESTÁ";
const mankind_dead = "MORTA";

const blood_is = "SANGUE"
const blood_fuel = "É COMBUSTIVEL"

const hell_is_full = "INFERNO ESTÁ CHEIO"

var mankindIsPos = 0
var mankindDeadPos = 0

var bloodIsPos = 0
var bloodFuelPos = 0

var hellIsFullPos = 0

var speed=25

function mankindTitleLoop() {
  const intervalId = setTimeout(function() {
    document.getElementById("mankind-is-title").innerHTML += mankind_is.charAt(mankindIsPos)
    mankindIsPos++;
    if (mankindIsPos < mankind_is.length) {
      mankindTitleLoop()
    }else{
      clearTimeout(intervalId);
      mankindTitleSecondLoop();
    }
  }, speed);
}

function mankindTitleSecondLoop() {
  const intervalId = setTimeout(function() {
    document.getElementById("mankind-dead-title").innerHTML += mankind_dead.charAt(mankindDeadPos)
    mankindDeadPos++;
    if (mankindDeadPos < mankind_dead.length) {
      mankindTitleSecondLoop()
    }else{
      clearTimeout(intervalId);
      mankindTitleReseter()
    }
  }, speed);
}

function mankindTitleReseter(){
  setTimeout(function(){
    document.getElementById("mankind-is-title").innerHTML = "‎ "
    document.getElementById("mankind-dead-title").innerHTML = "‎ "
  }, 1500)

  setTimeout(function(){
    mankindIsPos = 0
    mankindDeadPos = 0
    mankindTitleLoop()
  }, 3000)
}

mankindTitleLoop();

function bloodTitleLoop() {
  const intervalId = setTimeout(function() {
    document.getElementById("blood-is-title").innerHTML += blood_is.charAt(bloodIsPos)
    bloodIsPos++;
    if (bloodIsPos < blood_is.length) {
      bloodTitleLoop()
    }else{
      clearTimeout(intervalId);
      bloodTitleSecondLoop();
    }
  }, speed);
}

function bloodTitleSecondLoop() {
  const intervalId = setTimeout(function() {
    document.getElementById("blood-fuel-title").innerHTML += blood_fuel.charAt(bloodFuelPos)
    bloodFuelPos++;
    if (bloodFuelPos < blood_fuel.length) {
      bloodTitleSecondLoop()
    }else{
      clearTimeout(intervalId);
      bloodTitleReseter()
    }
  }, speed);
}

function bloodTitleReseter(){
  setTimeout(function(){
    document.getElementById("blood-is-title").innerHTML = "‎ "
    document.getElementById("blood-fuel-title").innerHTML = "‎ "
  }, 1500)

  setTimeout(function(){
    bloodIsPos = 0
    bloodFuelPos = 0
    bloodTitleLoop()
  }, 2800)
}

bloodTitleLoop()

function hellTitleLoop() {
  const intervalId = setTimeout(function() {
    document.getElementById("hell-title").innerHTML += hell_is_full.charAt(hellIsFullPos)
    hellIsFullPos++;
    if (hellIsFullPos < hell_is_full.length) {
      hellTitleLoop()
    }else{
      clearTimeout(intervalId);
      hellTitleReseter();
    }
  }, speed);
}

function hellTitleReseter(){
  setTimeout(function(){
    document.getElementById("hell-title").innerHTML = "‎ "
  }, 1500)

  setTimeout(function(){
    hellIsFullPos = 0
    hellTitleLoop()
  }, 2800)
}

hellTitleLoop()


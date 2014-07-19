//alert("JavaScript works!");

//Coby Pilpel
//july 17th 2014
//SDI Project 2




var rocketShip = "MSS. Steve";
var survivingCrewNumber;
var targetOne = "Pluto";
var targetTwo = "Venus"
var numberOfDummies = 20;
var primaryTarget = "Pluto";
var secondaryTarget = "Venus";
var targetPlanet;
var survivingCrewNumber = 2;
var yayForDummies;
console.log("Welcome to MASA! Here at the Martian Air and Space Association there is no failure! Only examples of unintentional scientific explosions!");

//PROMPT

var targetSelected = prompt("What planet will the " + rocketShip + " crash....... I MEAN land on? ", targetOne + " or " + targetTwo);

//PROCEDURE

var targetPlanet = function (targetSelected, targetOne, targetTwo) {
var destination = targetSelected
    if (targetSelected === targetOne|| targetSelected === targetTwo) {
        console.log("The target you have selected for the first fly of the " + rocketShip + " is a " + destination + ".");
    } else {
        console.log("That isn't a good target. Who in their right mind would want to go there?");
    }
};
 
targetPlanet(targetSelected, targetOne, targetTwo);
//CONFIRM

var testDummies = confirm("We must have some test dummies up to the challenge right?")  
console.log("Let's test them just to be sure.")

//BOOLEAN FUNCTION

var areTestDummiesAvailable = function (testDummies) {
var yayForDummies = testDummies
var numberOfDummies = 20;
    while (testDummies === true && numberOfDummies > 5) {
        numberOfDummies--;
        console.log("While it is " + testDummies + " that we have available dummies we need to be sure they are up to the tast.");
        console.log("Let the tests commence!");
        console.log("Was he supposed to explode like that?");
        console.log("Well that one didn't make the cut. We have " + numberOfDummies + " remaining.");

    }
    console.log("There are five dummies that passed the tests! That is enough to crew the rocket!");
        return yayForDummies;
};

areTestDummiesAvailable(testDummies) 
//NUMBER FUNCTION

	
var crewStillAlive = function (survivingCrewNumber){
var survivedTheExplosion = survivingCrewNumber;
console.log ("There has been an explosion on the ship! The crew are currently jumping out!" + survivingCrewNumber + " crew members still need to jump out.")
for(var crewEscaped = 1;crewEscaped <= survivingCrewNumber;crewEscaped++){
    console.log("I have seen " + crewEscaped + " survivors jump clear of the ship. Hopefully more will make it out.");
    }
return survivedTheExplosion;
};	
crewStillAlive(survivingCrewNumber)	
//STRING FUNCTION     
        
var preferredDestinations = function (primaryTarget, secondaryTarget) {
var reachableDestinations = primaryTarget + " and " + secondaryTarget;
{console.log("The spacecraft can reach " + reachableDestinations + " the first target is preferable.");}
return reachableDestinations;};


//OUTPUT

console.log("The spacecraft will go to " + targetSelected + " and hopefully arrive in one piece");
console.log("We have enough dummies for the mission." + numberOfDummies + " should be enough.");
console.log("That mission was explosively scientific! Hopefully the " + survivingCrewNumber + " surviving dummies will be able to add to the scientific discovery!")

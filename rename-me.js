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



console.log("Welcome to MASA! Here at the Martian Air and Space Association there is no failure! Only examples of unintentional scientific explosions!");

//PROMPT

//var targetSelected = prompt("What planet will the " + rocketShip + " crash....... I MEAN land on? ", targetOne + " or " + targetTwo);

//PROCEDURE

var targetPlanet = function (targetSelected, targetOne, targetTwo) {
var destination = targetPlanet
    if (targetSelected === targetOne || targetSelected === targetTwo) { 
    	console.log("The target you have chosen for" + rocketShip +" is a " + destination + ".");} 
else {
console.log("That isn't a good target. Who in their right mind would want to go there?"); 
};
 
 targetPlanet(targetSelected, targetOne, targetTwo)   

//CONFIRM

var testDummies = confirm("We must have some test dummies up to the challenge right?")  
console.log("Let's test them just to be sure.")

//BOOLEAN FUNCTION

var testDummiesAvailable = function (testDummies){
var yayForDummies = testDummies
var numberOfDummies = 20
    while (testDummies === true && numberOfDummies > 5)
    {numberOfDummies--;
    console.log("While it is " + testDummies + " that we have available dummies we need to be sure they are up to the task.");
    console.log("Let the tests commence!");
    console.log("Was he supposed to explode like that?");
    console.log("Well that one didn't make the cut. We have " + numberOfDummies + " remaining.");}
console.log("We have found our dummies! These dummies have passed the tests and will fly this mission.")
return yayForDummies ;}

 
 
//NUMBER FUNCTION

var crewStillAlive = function (survivingCrewNumber)  {
var survivedTheExplosion = survivingCrewNumber;
console.log("The ship is going through an unplanned scientific explosion before it even leaves Mar's atmosphere! There are "  + survivingCrewNumber + " surviving crew members left on the ship!");{
for(var survivedTheMission = 1;   survivedTheMission <= survivingCrewNumber;
	survivedTheMission++)
	{console.log("That could have gone better! " + survivedTheMission + " survived to live another day");}
	return survivedTheExplosion};
	
//STRING FUNCTION     
        
var preferredDestinations = function (primaryTarget, secondaryTarget) {
var reachableDestinations = primaryTarget + " and " + secondaryTarget;
{console.log("The spacecraft can reach " + reachableDestinations + " the first target is preferable.");}
return reachableDestinations;};


//OUTPUT

console.log("The spacecraft will go to " + reachableDestinations + " and hopefully arrive in one piece");
console.log("We have enough dummies for the mission." + yayForDummies + " should be enough.");
console.log("That mission was explosively scientific! Hopefully the " + survivedTheExplosion + " dummies will be able to add to the scientific discovery!");}}

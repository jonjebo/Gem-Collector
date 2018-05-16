// Getting game ready once other parts of page loads
$(document).ready(function() {

//------------------CREATE GLOBAL VARIABLES---------------------------------------------
var allgemValues = 0;
var wins = 0;
var losses = 0;


//------------------START BUTTON--------------------------------------------------------
//HAVE COMPUTER SET RANDOM NUMBER BETWEEN 19-120
var computerPick = Math.floor(Math.random() * 102) + 19;

//Log the computer's pick to console to make it easier to troubleshoot
console.log("Computer Pick: " + computerPick);

//DISPLAY COMPUTERS RANDOM NUMBER ON SCREEN AFTER BUTTON CLICK
$("#jBtn").click(function () {
    var computerNum = $("<div>"); //creating an html element
    computerNum.text("Number to Reach-->  " + computerPick); 
    $("#root").html(computerNum); 
});


//------------------BLUE GEMS-----------------------------------------------------
//HAVE COMPUTER SET RANDOM NUMBER BETWEEN 1-12
var bluegemValue = Math.floor(Math.random() * 12) + 1;
console.log("Blue Gem Value: " + bluegemValue);
$('#blueGem').click(function () {
    allgemValues++;
    var bluegemNum = $("<div>");
    bluegemNum.text("Total-->  " + bluegemValue);
    $('#userTotal').html(bluegemNum);
})

var yellowgemValue = Math.floor(Math.random() * 12) + 1;
console.log("Yellow Gem Value: " + yellowgemValue);

var greengemValue = Math.floor(Math.random() * 12) + 1;
console.log("Green Gem Value: " + greengemValue);

var redgemValue = Math.floor(Math.random() * 12) + 1;
console.log("Red Gem Value: " + redgemValue);
//ADD VALUE TO

});
// I Know it isn't finished. But im trying to get my values to count up on screen to the total
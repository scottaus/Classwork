$(document).ready(function(){

    $("#comparisons").click(function(){
       output("#input1","#input2");
    })
    $("#conditional").click(function(){
        // output("#input1","#input2");
        // output(evenOrOdd(input("#input1")));
       output(canDrive());
       output(withdraw());
    })



});

var input = function(a){

    var userInput = $(a).val();

    return userInput;

}

var compare = function(a,b){

    return input(a) == input(b);

}


var output = function(a){

    $("#output").text(a);

}

//When checking for equality there are Two options. == or ===. Keep in mind that "=" is reserved for assigning values to variables. "--" is a LOOSE equality. Data types are not respected. Which means, a String 1 and the number 1 are equal. "===" is a strict equality which maintains datta types.

//A conditional is an if/then statement base on a coolean expression.

var conditional = function(a , b){

    if(a > b)
        return "A is bigger";
    if(a < b)
        return "B is bigger";
    if(a == b)
        return "They are the same";

}

var evenOrOdd = function(a){

    if(a%2===0){
        return (a + " is even");
    }
    else
        return "they are the same"

}

//Compound boolean expressions use AND (&&), OR (| |), NOR to make even deeper logical conjunctions.

// If you are 16 and have a license you can legally drive.

var canDrive = function(){

    var age = parseInt(input("#input1"));
    var license = input("#input2");

    if(age >= 16 && license == "yes"){
        return "you can drive"
    }
    else
         return "You SHOULD NOT DRIVE!!"
}

var withdraw = function(){

    var ap = (input("#input1"));
    var cs3 = (input("#input2"));

    if (ap === "yes" || cs3 === "yes"){
        return "you will be in law's class."
    }
    else
        return "You will NOT be in Law's class."
}
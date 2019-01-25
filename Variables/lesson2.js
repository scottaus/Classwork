/** This Lesson will demonstate how math and variables should work */

$(document).ready(function(){

        $("#add").click(function(){
            add();
        })
        $("#divide").click(function(){
            divide();
        })
        $("#modulos").click(function(){
            modulos();
        })
        $("#time").click(function(){
            time();
        })
        $("#sumDigit").click(function(){
            sumDigit();
        })
        $("#pow").click(function(){
            pow();
        })
        $("#abs").click(function(){
            abs();
        })
        $("#sqrt").click(function(){
            sqrt();
        })


});


// function wrong(){

//     var x = $("#number1").val();
//     var y = $("#number2").val();

//     var sum= x + y;
//     var message= x + " + " + y + " = " + sum;

//     $("#output").text(message + " All information from the user is considered String datatype. The 'sign', means to put the sto strings together.")

// }


 function right(){
    var x = $("#number1").val();
    var y = $("#number2").val();

    x = parseInt(x);
    y = parseInt(y);

    var sum= x + y;
    var message= x + " + " + y + " = " + sum;

    $("#output").text(message + " All information from the user is considered String datatype. The 'sign', means to put the sto strings together.");
}

var divide = function(){

    var x = $("#number1").val();
    var y = $("#number2").val();

    // x = parseInt(x);
    // y = parseInt(y);

    var quotient = x * y;
    
    $("#output").text(quotient);

}

var modulos = function(){

    var x = $("#number1").val();
    var y = $("#number2").val();

    var modulus = x % y;
    $("#output").text(modulus);

}

var time = function(){

   var secondsRe;
   var minutesRe;
   var hoursRe;
   var days;
   var minutes;
   var hours;

    var input = $("#number2").val();

    secondsRe = input%60;
    minutes = Math.floor(input/60);
    minutesRe = minutes%60;
    hours =  Math.floor(minutes/60);
    hoursRe = hours%60;
    days = Math.floor(hours/24);

    $("#output").text(input + " second is equal to " + days + " days, "  + hoursRe + " hours, " + minutesRe + " minutes, " + secondsRe + " seconds.");

} 

var sumDigit = function(){

    // 512 
    var input= $("#number3").val();
    
    var digit1 = input%10;
    var digit2 = Math.floor((input/10)%10);
    var digit3 = Math.floor((input/100)%10);

    var sum = digit1 + digit2 + digit3

    $("#output2").text("The sum of the digit is " + sum)

}

var pow = function(){

    //Math.pow(a, b) - raises a to the b power
    // Math.abs(a) - returns the absoules balue of a
    // Math.sqrt(a) - square roots a
    //Increment and Decrement

    var x = $("#number4").val();
    var y = $("#number5").val();

    var pow = Math.pow(x, y);
    $("#output3").text("The product is " + pow);

}

var abs = function(){

    var x = $("#number4").val();
    var y = $("#number5").val();

    var abs = Math.abs(x);
    $("#output3").text("The absolute value is " + abs);

}

var sqrt = function(){

    var x = $("#number4").val();
    var y = $("#number5").val();

    var sqrt = Math.sqrt(x);

    $("#output3").text("The square root is " + sqrt);

}



/** 
 * Math.floor = Always Down
 * Math.round = Round Normally
 * Math.ceil = Rounds up 
 * */
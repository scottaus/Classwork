/*
Scope

Global Varibales - the variables can be used throughout the entire document/script

Local Varibles - the variables can only be used in the section it was defined

*/
// $(document).ready(function(){

//     getInfo();
//     showInfo();

// });

var userName


function getInfo(){
    userName = $("#userName").val();
}

function showInfo(){
    getInfo();
    var message = "Hello " + userName + ", glad to meet you!";

    $("#output").text(message);
}
/*
Scope

Global Varibales - the variables can be used throughout the entire document/script

Local Varibles - the variables can only be used in the section it was defined

*/

//****************Not Needed for HTMML Riggering */
 $(document).ready(function(){

    $("#button").click(function(){

        showInfo ();

    })

 });
//************** */
var userName


function getInfo(){
    userName = $("#userName").val();
}

function showInfo(){
    getInfo();
    var message = "Hello " + userName + ", glad to meet you!";

    $("#output").text(message).show().animate({"top":"0px","opacity":"1"}, "slow")
}
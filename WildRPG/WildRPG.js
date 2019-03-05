var hasBow = false;
var hasPhaser = false;

$(document).ready(function(){

    updateNarrative(N1);
    $("footer").html(createButton("button1", O1A) + createButton("button2", O1B) + createButton("button3", "not used"));
    $("#button3").hide();

    $("#button1").click(function(){
         if($("#button1").text() === O1A){
            updateNarrative(N2);
            $("#button1").text(O2A)
            $("#button2").text(O2B)
            $("#button3").text(O2C)
            $("#button3").show()
        }
        else if($("#button1").text() === O5A){
            updateNarrative(N5);
            $("#button1").text(O4A)
            $("#button2").hide()
            $("#button3").hide()
        }
        else if($("#button1").text() === O4A){
            updateNarrative(N4);
            $("#button1").hide()
            $("#button2").hide()
            $("#button3").hide()
        }
        else if($("#button1").text() === O3A){
            updateNarrative(N7);
        }
        else if($("#button1").text() === O2A){
            updateNarrative(N9)
            $("#button1").hide()
            $("#button2").hide()
            $("#button3").hide()
        }
    })
 
    $("#button2").click(function(){
        if($("#button2").text() === O1B){
           updateNarrative(N3);
           $("#button1").text(O3A)
           $("#button2").text(O3B)
       }
       else if($("#button2").text() === O3B){
           updateNarrative(N6);
           $("#button1").text(O4A)
           $("#button2").hide()
           $("#button3").hide()
       }
       else if($("#button2").text() === O4A){
           updateNarrative(N4);
           $("#button1").hide()
           $("#button2").hide()
           $("#button3").hide()
       }
       else if($("#button2").text() === O2B){
        updateNarrative(N8);
        $("#button1").hide()
        $("#button2").hide()
        $("#button3").hide()
    }
   })

   $("#button3").click(function(){
    if($("#button3").text() === O2C){
        updateNarrative(N7);
        updateButton(O5A);
        $("#button2").hide()
        $("#button3").hide()
    }
})
});

var N1 = "Once upon a time in the Wild Wild West there lived a ...."
var N2 = "This ranger was the most dangerous archer known to man he loved to ......"
var N3 = "This robot had killer instincts. Purge the Wild West of all evil-doers. Armed with a phaser he ...."
var N4 = "YOU DIED"
var N5 = "The ranger approaches the insidious Mr.Pig. He raises his bow and ......."
var N6 = "The robot approaches the insidious Mr.Pig. he raises his phaser and ....."
var N7 = "You got an item"
var N8 = "You did a tie!"
var N9 = "Did not get bow /" + " Game OVER"
var O1A = "ranger."
var O1B = "robot."
var O2A = "chase tumbleweeds."
var O2B = "cook pancakes."
var O2C = "arrest bad robots"
var O3A = "heats his pork and beans."
var O3B = "purges the Wild West of all evil-doers."
var O4A = "shoots the arrow through Mr.Pig."
var O4B = "fires, vaporizing Mr. Pig."
var O5A = "Pick Up Item"

var updateNarrative = function(a){

    $("aritcle").text(a);

}
var updateButton = function(a, b, c){

    $("createButton").text(a , b, c);

}
var createButton = function(id , text){

    return "<button type=button id=" + id + ">" + text + "</button>"

}


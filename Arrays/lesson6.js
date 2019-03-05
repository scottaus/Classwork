$(document).ready(function(){

    output();

});


var numbers = ["somthing","twothings",5,7.26];

//ADDS ELEMENTS TO THE END OF THE ARRAY
numbers.push("one","two","three");

//ADDS ELEMENTS TO THE BEGINNING OF THE ARRAY
numbers.unshift("four","five",6);

//REMOVES AND ADD ELEMENTS AT THE SPECIGED PLACE
numbers.splice(2 , 1 , "somthing else");
numbers.splice(2 , 3);

//REMOVES ELEMENT FROM BEGINNING
numbers.shift();

//REMOVE ELEMENTS FROM THE END
numbers.pop();

//ASSIGN VALUES TO ARRAY
numbers[2] = "Replacement"

var output = function(){
    $("#output").text("end array" + numbers);
    //$("#output").append("/nRemoved ELEMENTS : " + removed);
}
// We should get promptArray and idArray from webpage from questions.js
console.log(promptArray)
console.log(idArray.length)

$(window).on("load", function() {
  addQuestions(promptArray, idArray);
});

function mySubmit() {
  /*$.ajax({
    method: "POST",
    url: "http://127.0.0.1:3000/customers",
    data: makeJSON(),
    dataType: "json"

  }).done(function(data) {
    $("#testArea").html(JSON.stringify(makeJSON())); 
  }).fail(function(data) {
    //addError("Error: response code "+data.status);
  });*/
  if (!validate()) {
    console.log("Errors");
    return;
  }
  $("#testArea").html(JSON.stringify(makeJSON())); 
  scoreFromJSON(makeJSON());
}



function validate() {
  // Raise some errors or return true
  return true;
}

function makeJSON() {
  // Turn all the form input into a nice format for http request
  let myJSON = {};
  myJSON["fname"] = $("#fname").val();
  myJSON["lname"] = $("#lname").val();
  myJSON["age"] = $("#age").val();
  myJSON["email"] = $("#email").val();
  $('input:checked').each(function(index, value){
    myJSON[this.name] = this.value;
  });
  return myJSON;
}

// Populate the form with our questions
function addQuestions(promptArray, idArray) {
  if (promptArray.length !== idArray.length) {
    return;
  }
  for (let i = 0; i<promptArray.length; i++) {
    let htmlString =
    "<label for='q"+i+"'>"+promptArray[i]+"</label>\
    <p>\
    No\
      <input type='radio' name='"+idArray[i]+"' value=1>\
      <input type='radio' name='"+idArray[i]+"' value=2>\
      <input type='radio' name='"+idArray[i]+"' value=3>\
      <input type='radio' name='"+idArray[i]+"' value=4>\
      <input type='radio' name='"+idArray[i]+"' value=5>\
    Yes\
    </p>";
    $("#questionArea").append(htmlString);
  }
}


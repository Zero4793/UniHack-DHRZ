// We should get the question details from somewhere
const promptArray = Array("Are you happy?", "Do you cry?", "Do you laugh?");
const idArray = Array("happy", "cry", "laugh");

$(window).on("load", function() {
  addQuestions(promptArray, idArray);
});

function mySubmit() {
/*  $.ajax({
    method: "POST",
    url: ""
    data: makeJSON(),
    dataType: "json"

  }).done(function(data) {

  }).fail(function(data) {
    addError("Error: response code "+data.status);
  });*/
  if (!validate()) {
    console.log("Errors");
    return;
  }
  $("#testArea").html(JSON.stringify(makeJSON())); 
}



function validate() {
  // Raise some errors or return true
  return true;
}

function makeJSON() {
  // Turn all the form input into a nice format for http request
  let myJSON = {};
  myJSON["someText"] = $("#someText").val();
  myJSON["numCats"] = $("#numCats").val();
  $('input:checked').each(function(index, value){
    myJSON[this.id] = this.value;
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
    "<label for='q1'>"+promptArray[i]+"</label>\
    <p>\
    No\
      <input type='radio' name='"+idArray[i]+"' id='"+idArray[i]+"' value=1>\
      <input type='radio' name='"+idArray[i]+"' id='"+idArray[i]+"' value=2>\
      <input type='radio' name='"+idArray[i]+"' id='"+idArray[i]+"' value=3>\
      <input type='radio' name='"+idArray[i]+"' id='"+idArray[i]+"' value=4>\
      <input type='radio' name='"+idArray[i]+"' id='"+idArray[i]+"' value=5>\
    Yes\
    </p>";
    $("#questionArea").append(htmlString);
  }
}


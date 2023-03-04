// Which questions score which traits. negative means reversed score. (5->1, 4->2, 3->3, 2->4, 1->5)
// Leaving in original format so it's typical format. will use code to reconfigure
const Extraversion = Array(1, -6, 11, 16, -21, 26, -31, 36)
const Agreeableness = Array(-2, 7, -12, 17, 22, -27, 32, -37, 42)
const Conscientiousness = Array(3, -8, 13, -18, -23, 28, 33, 38, -43)
const Neuroticism = Array(4, -9, 14, 19, -24, 29, -34, 39)
const Openness = Array(5, 10, 15, 20, 25, 30, -35, 40, -41, 44)
const Qnum = 44;  // Number of questions

// Set results start at 0
const ExtraversionScore = 0, AgreeablenessScore = 0, ConscientiousnessScore = 0, NeuroticismScore = 0, OpennessScore = 0;

// Create new arrays of each trait at length 44 (number of questions)
const ExtraversionPromts = Array(Qnum).fill(0);
const AgreeablenessPromts = Array(Qnum).fill(0);
const ConscientiousnessPromts = Array(Qnum).fill(0);
const NeuroticismPromts = Array(Qnum).fill(0);
const OpennessPromts = Array(Qnum).fill(0);

// Populate each trait array with the correct score for each question
for (let i = 0; i < Extraversion.length; i++) {
  //adds x/abs(x) so result is 1 or -1
  //all non specified stay at 0 as designated by above fill(0)
  ExtraversionPromts[Math.abs(Extraversion[i])] = Extraversion[i] / Math.abs(Extraversion[i]);
}
//we end up with a list of which questions score which traits and if they are reversed or not (0-> no score, 1-> normal, -1-> reversed)
//now to repeat for each trait
for (let i = 0; i < Agreeableness.length; i++) {
  AgreeablenessPromts[Math.abs(Agreeableness[i])] = Agreeableness[i] / Math.abs(Agreeableness[i]);
}
for (let i = 0; i < Conscientiousness.length; i++) {
  ConscientiousnessPromts[Math.abs(Conscientiousness[i])] = Conscientiousness[i] / Math.abs(Conscientiousness[i]);
}
for (let i = 0; i < Neuroticism.length; i++) {
  NeuroticismPromts[Math.abs(Neuroticism[i])] = Neuroticism[i] / Math.abs(Neuroticism[i]);
}
for (let i = 0; i < Openness.length; i++) {
  OpennessPromts[Math.abs(Openness[i])] = Openness[i] / Math.abs(Openness[i]);
}

//this system also allows for questions to score on multiple traits, even if example questions only score on one trait

function score() {
  // Get the answers from the radio buttons
  // Loop through each question
  for (let i = 0; i < answers.length; i++) {
    // If the question has been answered
    if (answers[i].checked) {
      // Add the score to the trait
      // if the question is reversed, we add the complement. (5->1, 4->2, 3->3, 2->4, 1->5)
      if (ExtraversionPromts[i] == 1) {
        ExtraversionScore += parseInt(answers[i].value);
      } else if (ExtraversionPromts[i] == -1) {
        ExtraversionScore += 6 - parseInt(answers[i].value);
      }
      if (AgreeablenessPromts[i] == 1) {
        AgreeablenessScore += parseInt(answers[i].value);
      } else if (AgreeablenessPromts[i] == -1) {
        AgreeablenessScore += 6 - parseInt(answers[i].value);
      }
      if (ConscientiousnessPromts[i] == 1) {
        ConscientiousnessScore += parseInt(answers[i].value);
      }
      else if (ConscientiousnessPromts[i] == -1) {
        ConscientiousnessScore += 6 - parseInt(answers[i].value);
      }
      if (NeuroticismPromts[i] == 1) {
        NeuroticismScore += parseInt(answers[i].value);
      }
      else if (NeuroticismPromts[i] == -1) {
        NeuroticismScore += 6 - parseInt(answers[i].value);
      }
      if (OpennessPromts[i] == 1) {
        OpennessScore += parseInt(answers[i].value);
      }
      else if (OpennessPromts[i] == -1) {
        OpennessScore += 6 - parseInt(answers[i].value);
      }
    }
  }
}

const prompts = Array("Talks a lot,","Notices other people’s weak points,","Does things carefully and completely,","Is sad, depressed,","Is original, comes up with new ideas,","Keeps their thoughts to themselves,","Is helpful and not selfish with others,","Can be kind of careless,","Is relaxed, handles stress well,","Is curious about lots of different things,","Has a lot of energy,","Starts arguments with others,","Is a good, hard worker,","Can be tense; not always easy going,","Clever; thinks a lot,","Makes things exciting,","Forgives others easily,","Isn’t very organized,","Worries a lot,","Has a good, active imagination,","Tends to be quiet,","Usually trusts people,","Tends to be lazy,","Doesn’t get upset easily; steady,","Is creative and inventive,","Has a good, strong personality,","Can be cold and distant with others,","Keeps working until things are done,","Can be moody,","Likes artistic and creative experiences,","Is kind of shy,","Kind and considerate to almost everyone,","Does things quickly and carefully,","Stays calm in difficult situations,","Likes work that is the same every time,","Is outgoing; likes to be with people,","Is sometimes rude to others,","Makes plans and sticks to them,","Get nervous easily,","Likes to think and play with ideas,","Doesn’t like artistic things(plays, music),","Likes to cooperate; goes along with others,","Has trouble paying attention,","Knows a lot about art, music and books,");


//const promptArray = Array("Are you happy?", "Do you cry?", "Do you laugh?","Are you concerned about AI development?");
//const idArray = Array("happy", "cry", "laugh", "fearAI");

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


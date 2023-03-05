let canvas;
$(window).on("load", async function() {
  canvas = $("#results").get(0);
  canvas.width = 640;
  canvas.height = 640;
  g = canvas.getContext('2d');
});

function draw5(attributes) {
  console.log(attributes);
  g.clearRect(0, 0, canvas.width, canvas.height);
  g.fillStyle = '#BECFEA';
  g.fillRect(0, 0, 640, 640);

  // width of one bar
  let width = (canvas.width-20)/5;
  let colours = Array("#70a0b0", "#a070b0", "#c09070", "#90c060", "#b0a040" )
  for (let i = 0; i < 5;i++) {
    let thisX = width*i;
    let height =  ((canvas.height-10) * (attributes[i]/100));
    
    let red = 50*i;
    let green = (101*i)%255
    let blue = 255 - (50*i)
    g.fillStyle = colours[i];
    g.fillRect(15+i*width, canvas.height - height, width-10, height-10);
      
  }

  summaryText = 
  "<h1 style='background: #70a0b0;'>Openness ("+attributes[0]+"%):</h1>\
  <p>\Abstract, intellectual rather than concrete and traditional.\</p>\
\
    <h1 style='background: #a070b0;'>Conscientiousness ("+attributes[1]+"%):</h1>\
    <p> Disciplined rather than impulsive.</p>\
\
    <h1 style='background: #c09070;'>Extraversion("+attributes[2]+"%):</h1>\
    <p> Seek stimulation from outside and attention rather than conserving energy.</p>\
\
    <h1 style='background: #90c060;'>Agreeableness ("+attributes[3]+"%):</h1>\
    <p>Put others needs first and cooperate rather than win/lose.</p>\
\
    <h1 style='background: #b0a040;'>Neuroticism ("+attributes[4]+"%): </h1>\
    <p> Tendency to experience negative emotions, react rather than move on.</p>"

  $("#summary").html(summaryText);
}
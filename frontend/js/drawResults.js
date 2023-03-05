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
  "Openness ("+attributes[0]+"%): Abstract, intellectual rather than concrete and traditional.<br>\
  Conscientiousness ("+attributes[1]+"%): Disciplined rather than impulsive.<br>\
  Extraversion ("+attributes[2]+"%): Seek stimulation from outside and attention rather than conserving energy.<br>\
  Agreeableness ("+attributes[3]+"%): Put others needs first and cooperate rather than win/lose.<br>\
  Neuroticism ("+attributes[4]+"%): Tendency to experience negative emotions, react rather than move on.<br>"

  $("#summary").html(summaryText);
}
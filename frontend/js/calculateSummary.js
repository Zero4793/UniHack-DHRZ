const Extroversion = Array(1, -6, 11, 16, -21, 26, -31, 36)
const Agreeableness = Array(-2, 7, -12, 17, 22, -27, 32, -37, 42)
const Conscientiousness = Array(3, -8, 13, -18, -23, 28, 33, 38, -43)
const Neuroticism = Array(4, -9, 14, 19, -24, 29, -34, 39)
const Openness = Array(5, 10, 15, 20, 25, 30, -35, 40, -41, 44)
const Qnum = 44;  // Number of questions


async function scoreFromJSON(input) {
  let ExtroversionScore = 0;
  let AgreeablenessScore = 0;
  let ConscientiousnessScore = 0;
  let NeuroticismScore = 0;
  let OpennessScore = 0;

  let scores = Array(0,0,0,0,0)

  const scoringArrays = Array(Extroversion, Agreeableness, Conscientiousness, Neuroticism, Openness)

  for (let a=0; a<5; a++) {
    dimension = scoringArrays[a];
    for (let i=0; i<dimension.length; i++) {
      let question = dimension[i];
      if (question<0) question *= -1;
      if (!input[question] ) {
        console.log("No answer for question "+question);
        //return;
      }
      let thisScore = input[question]
      if (Extroversion[i]<0) {
        thisScore = 6 - thisScore
      }
      scores[a] += parseInt(thisScore);
    }
    scores[a] -= dimension.length
    const max = 4*dimension.length
    scores[a] = scores[a]/max*100
  }
  console.log(scores)
  draw5(scores)
}

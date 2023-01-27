let score = 0;
let currentQuestion = 0;
let hintCount = 0;
let maxHints = 3;
let previousQuestion = -1;
let questions = [
  {
    question: "On a scale of 1/10 how much do you liek bread??",
    a: "bred",
    b: "8/10",
    c: "2/10",
    d: "5/10",
    image: "quizimages/q1.jpg",
    answer: "a",
  },
  {
    question: "whole wheat or white bread???",
    a: "Whole Wheat",
    b: "white",
    c: "bred",
    d: "they both suck.",
    image: "quizimages/q2.jpg",
    answer: "c",
  },
  {
    question: "Pitas or Tortillas",
    a: "pita",
    b: "bred",
    c: "torilla",
    d: "they both suck",
    image: "quizimages/q3.jpg",
    answer: "b",
  },
  {
    question: "Is subway bread actually bread",
    a: "no it has too much sugar to be classified as bread",
    b: "bred",
    c: "yes, why wouldnt it be",
    d: "*empty space*",
    image: "quizimages/q4.jpg",
    answer: "b",
  },
  {
    question:
      " Bread is a staple food prepared from a dough of flour and water, usually by baking. Throughout recorded history it has been popular around the world and is one of the oldest artificial foods, having been of importance since the dawn of agriculture.      ",
    a: "what?",
    b: "yes",
    c: "bred",
    d: "*BREAD*",
    image: "quizimages/q5.jpg",
    answer: "c",
  },
  {
    question: "rainbow bread.",
    a: "AYOOOO?",
    b: "yes",
    c: "get that goofy ahh bread ahh outta here",
    d: "*BREAD*",
    image: "quizimages/q6.jpg",
    answer: "c",
  },
  {
    question: "turtol",
    a: "Somebody baked my turtle into my bread",
    b: "yes",
    c: "save the turtles 😔",
    d: "bred",
    image: "quizimages/q7.jpg",
    answer: "a",
  },
  {
    question:
      "Which of the following countries used bread as currency in ancient times?",
    a: "Egypt",
    b: "france",
    c: "china",
    d: "canada",
    image: "quizimages/q8.jpg",
    answer: "a",
  },
  {
    question:
      "Which of the following type of bread is believed to be the oldest?",
    a: "pita",
    b: "tortilla",
    c: "flatbread",
    d: "Rye Bread",
    image: "quizimages/q9.jpg",
    answer: "c",
  },
  {
    question:
      "What is the name of the elastic and sticky protein substance that gives bread its texture?",
    a: "PROTIEN",
    b: "pita",
    c: "flatbread",
    d: "gluten",
    image: "quizimages/q10.jpg",
    answer: "d",
  },
];


if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js");
}


function loadQuestion() {
  // close light box for first question
  if (currentQuestion == 0) {
    closeLightBox();
  }


  // load the image
  let img = document.getElementById("image");
  img.src = questions[currentQuestion].image;
  img.style.maxWidth = "70vh";
  img.style.maxHeight = "80vh";


  // load the question and answers
  document.getElementById("question").innerHTML =
    questions[currentQuestion].question;
  document.getElementById("a").innerHTML = "A. " + questions[currentQuestion].a;
  document.getElementById("b").innerHTML = "B. " + questions[currentQuestion].b;
  document.getElementById("c").innerHTML = "C. " + questions[currentQuestion].c;
  document.getElementById("d").innerHTML = "D. " + questions[currentQuestion].d;
} // loadQuestion

function hintBtn() {
    if(currentQuestion != previousQuestion){
    if(hintCount < maxHints){
    document.getElementById("hint").style.visibility = "visible";
    
    
  
  
    if (currentQuestion == 0) {
      document.getElementById("hint").innerHTML = "Hint " + (hintCount + 1) + "/3: A sponge and this house could be somewhere in a kitchen...";
    }
    else if (currentQuestion == 1){
      document.getElementById("hint").innerHTML = "Hint " + (hintCount + 1) + "/3: G___ the snail";
    }
    else if (currentQuestion == 2){
      document.getElementById("hint").innerHTML = "Hint " + (hintCount + 1) + "/3: He plays it with his mouth...";
    }
    else if (currentQuestion == 3){
      document.getElementById("hint").innerHTML = "Hint " + (hintCount + 1) + "/3: He works as a frycook...";
    }
    else if (currentQuestion == 4){
      document.getElementById("hint").innerHTML = "Hint " + (hintCount + 1) + "/3: He is a horrible boater...";
    }
    else if (currentQuestion == 5){
      document.getElementById("hint").innerHTML = "Hint " + (hintCount + 1) + "/3: Squirrels put nuts somewhere in their mouths...";
    }
    else if (currentQuestion == 6){
      document.getElementById("hint").innerHTML = "Hint " + (hintCount + 1) + "/3: Plankton could use his small sneakiness for this...";
    }
    else if (currentQuestion == 7){
      document.getElementById("hint").innerHTML = "Hint " + (hintCount + 1) + "/3: A feline could make this sound...";
    }
    else if (currentQuestion == 8){
      document.getElementById("hint").innerHTML = "Hint " + (hintCount + 1) + "/3: D-bob...";
    }
    else{
      document.getElementById("hint").innerHTML = "Hint " + (hintCount + 1) + "/3: Patrick doesn't know his animals...";
    }
    
    hintCount++;
    }else{
    document.getElementById("hintbtn").style.backgroundColor = "#3f3d42";
    document.getElementById("hintbtn").style.border = "10px solid #3f3d42";
    document.getElementById("hintbtn").style.color = "grey";
    }
    previousQuestion = currentQuestion;
    }
  }
  

function markIt(ans) {
  let message = "";


  if (ans == questions[currentQuestion].answer) {
    // add 1 to score
    score++;


    // display score
    document.getElementById("score").innerHTML =
      score + " / " + questions.length;


    message = "Correct!!!! Your score is " + score + " / " + questions.length;
  } else {
    message = "Incorrect :< Your score is " + score + " / " + questions.length;
  } // else


  // move to the next question
  currentQuestion++;
  if (currentQuestion >= questions.length) {
    // create a special message
    message =
      "You are awesome or not ,or whatever, part of your mark is to give a good message based what the user's score is";
  } else {
    loadQuestion();
  }


  // show the lightbox
  document.getElementById("lightbox").style.display = "block";
  document.getElementById("message").innerHTML = message;
} // markIt


function closeLightBox() {
  document.getElementById("lightbox").style.display = "none";
} // closeLightbox

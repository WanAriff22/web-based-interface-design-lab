let questions = [
  {
    question: "Who holds the record for the most Formula 1 World Championships?",
    options: ["Fernando Alonso", "Lewis Hamilton", "Sebastian Vettel"],
    answer: 1
  },
  {
    question: "Which team is known for the 'Papaya Rules'?",
    options: ["Red Bull Racing", "Ferrari", "McLaren"],
    answer: 2
  },
  {
    question: "Which race is often called the 'snooze fest' of F1?",
    options: ["Monaco Grand Prix", "British Grand Prix", "Italian Grand Prix"],
    answer: 0
  },
  {
    question: "Where is the Silverstone Circuit located?",
    options: ["Spain", "Italy", "United Kingdom"],
    answer: 2
  },
  {
    question: "Who won the 2021 World Driver Championship?",
    options: ["Nicholas Goatifi", "Max Verstappen", "Lewis Hamilton"],
    answer: 1
  },
  {
    question: "When did Brawn GP won World Constructor Championship?",
    options: ["2009", "2000", "2007"],
    answer: 0
  },
  {
    question: "What does DRS stand for?",
    options: ["Downforce Reduction System", "Drag Reduction System", "Driver Response System"],
    answer: 1
  },
  {
    question: "Which team did Ayrton Senna win his three world titles with?",
    options: ["Williams", "McLaren", "Lotus"],
    answer: 1
  },
  {
    question: "Which track is known for the famous 'Eau Rouge' corner?",
    options: ["Spa-Francorchamps", "Suzuka", "Bahrain"],
    answer: 0
  },
  {
    question: "What country hosts the night race at Marina Bay Street Circuit?",
    options: ["UAE", "Singapore", "Japan"],
    answer: 1
  }
];
let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 10;
function shuffleQuestions() {
  questions.sort(() => Math.random() - 0.5);
}
function startTimer() {
  timeLeft = 10;
  document.getElementById("time").textContent = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("time").textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}
function displayQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").textContent = q.question;
  const optionsList = document.getElementById("options");
  optionsList.innerHTML = "";
  q.options.forEach((option, index) => {
    const li = document.createElement("li");
    li.textContent = option;
    li.onclick = () => checkAnswer(index);
    optionsList.appendChild(li);
  });
}
function checkAnswer(selected) {
  const correct = questions[currentQuestion].answer;
  if (selected === correct) {
    document.getElementById("feedback").textContent = "Correct!";
    score++;
    document.getElementById("score").textContent = score;
  } else {
    document.getElementById("feedback").textContent = "Wrong!";
  }
  clearInterval(timer);
}
function nextQuestion() {
  currentQuestion++;
  document.getElementById("feedback").textContent = "";
  if (currentQuestion < questions.length) {
    displayQuestion();
    startTimer();
  } else {
    endQuiz();
  }
}
function endQuiz() {
  document.getElementById("quiz-container").innerHTML = "<h2>🏁 Quiz Completed! 🏁</h2><p>Your final score is: " + score + "</p>";
}
function startQuiz() {
  shuffleQuestions();
  displayQuestion();
  startTimer();
}
startQuiz();
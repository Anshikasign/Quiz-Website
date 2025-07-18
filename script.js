import { genreQuestions } from './questions.js';

const selectedGenre = localStorage.getItem('selectedGenre');

if (!selectedGenre || !genreQuestions[selectedGenre]) {
  alert("Please select a valid genre.");
  window.location.href = "genre.html";
}

const questions = genreQuestions[selectedGenre];
let currentQuestion = 0;
let selectedAnswers = Array(questions.length).fill(null);
let score = 0;
let timeLeft = 60;

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").innerText = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.classList.add("option-btn");

    // Highlight if previously selected
    if (selectedAnswers[currentQuestion] === index) {
      btn.classList.add("selected-option");
    }

    btn.onclick = () => handleAnswer(index, btn);
    optionsDiv.appendChild(btn);
  });
}

function handleAnswer(index, clickedBtn) {
  selectedAnswers[currentQuestion] = index;
  updateScore();

  const allButtons = document.querySelectorAll("#options .option-btn");
  allButtons.forEach(btn => btn.classList.remove("selected-option"));
  clickedBtn.classList.add("selected-option");
}

function updateScore() {
  score = 0;
  questions.forEach((q, i) => {
    if (selectedAnswers[i] === q.answer) {
      score++;
    }
  });
}

function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    finishQuiz();
  }
}

function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }
}

function startTimer() {
  const timerElement = document.getElementById("timer");
  const timer = setInterval(() => {
    timeLeft--;
    timerElement.innerText = `Time Left: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      finishQuiz();
    }
  }, 1000);
}

function finishQuiz() {
  updateScore();
  localStorage.setItem("score", score);
  window.location.href = "result.html";
}

  window.onload = () => {
  loadQuestion();
  startTimer();

  // Attach button event listeners safely here
  document.getElementById("nextBtn").addEventListener("click", nextQuestion);
  document.getElementById("backBtn").addEventListener("click", prevQuestion);
};

  
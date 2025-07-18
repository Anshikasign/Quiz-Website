export const genreQuestions = {
  computerscience: [
    {
      question: "Who is the father of  modern computer science?",options: ["Charles Babbage", "Alan Turing", "John Bardeen", "Carl David Anderson"],answer: 1
    },
    {
      question: "Which language runs in a web browser?",options: ["Java", "C", "Python", "JavaScript"],answer: 3
    },
    {
      question: "What does CSS stand for?",options: ["Central Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets"],answer: 1
    },
    {
      question: "What year was JavaScript created?",options: ["1995", "2000", "1999", "2005"],answer: 0
    },
    {
      question: "Which tag is used for inserting an image?",options: ["<img>", "<image>", "<src>", "<pic>"],answer: 0
    }],
  math: [
    { question: "5 + 7 = ?", options: ["10", "12", "11", "13"], answer: 1 },
    { question: "9 × 3 = ?", options: ["27", "24", "30", "21"], answer: 0 },
    { question: "√81 = ?", options: ["7", "8", "9", "6"], answer: 2 },
    { question: "15 - 6 = ?", options: ["9", "8", "7", "6"], answer: 0 },
    { question: "20 ÷ 4 = ?", options: ["4", "5", "6", "3"], answer: 1 },
  ],
  science: [
    { question: "H2O is the formula of?", options: ["Oxygen", "Hydrogen", "Water", "Salt"], answer: 2 },
    { question: "Sun is a?", options: ["Planet", "Comet", "Star", "Asteroid"], answer: 2 },
    { question: "Boiling point of water?", options: ["90°C", "100°C", "110°C", "120°C"], answer: 1 },
    { question: "Which gas do plants absorb?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: 2 },
    { question: "Bones are connected by?", options: ["Muscles", "Ligaments", "Tendons", "Veins"], answer: 1 },
  ],
  gk: [
    { question: "Capital of India?", options: ["Mumbai", "Delhi", "Kolkata", "Chennai"], answer: 1 },
    { question: "Who is the President of India (2025)?", options: ["Modi", "Kovind", "Droupadi Murmu", "Shah"], answer: 2 },
    { question: "Largest ocean?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], answer: 2 },
    { question: "Which country gifted the Statue of Liberty?", options: ["France", "England", "Germany", "Spain"], answer: 0 },
    { question: "Currency of Japan?", options: ["Won", "Dollar", "Yen", "Rupee"], answer: 2 },
  ]
};

const selectedGenre = localStorage.getItem("selectedGenre");
const questions = genreQuestions[selectedGenre];

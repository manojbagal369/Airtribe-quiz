// Sample questions. DONT touch this data
const questions = [
  {
    text: "Which language is primarily used for web app development?",
    options: ["C#", "Python", "JavaScript", "Swift"],
    correct: 2,
  },
  {
    text: "Which of the following is a relational database management system?",
    options: ["Oracle", "Scala", "Perl", "Java"],
    correct: 0,
  },
  {
    text: "What does HTML stand for?",
    options: [
      "Hyperlink and Text Markup Language",
      "High Technology Modern Language",
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
    ],
    correct: 2,
  },
  {
    text: "What does CSS stand for?",
    options: [
      "Cascading Stylesheets",
      "Cascading Styling Styles",
      "Cascading Sheets for Stylings",
      "Cascaded Stylesheets",
    ],
    correct: 0,
  },
  {
    text: "Which of the following is not an object-oriented programming language?",
    options: ["Java", "C#", "Scala", "C"],
    correct: 3,
  },
  {
    text: "Which tool is used to ensure code quality in JavaScript?",
    options: ["JSLint", "TypeScript", "Babel", "Webpack"],
    correct: 0,
  },
  {
    text: "What is the primary use of the Git command 'clone'?",
    options: [
      "To stage changes",
      "To copy a repository",
      "To switch to a different branch",
      "To list all the files in a repository",
    ],
    correct: 1,
  },
  {
    text: "What does API stand for in the context of programming?",
    options: [
      "Apple Pie Interface",
      "Application Programming Interface",
      "Advanced Peripheral Integration",
      "Application Process Integration",
    ],
    correct: 1,
  },
  {
    text: "Javascript is a single threaded programming language",
    options: ["True", "False"],
    correct: 0,
  },
  {
    text: "API calls in Javascript can be done using the following method",
    options: ["setTimeout()", "setInterval()", "fetch()", "get()"],
    correct: 2,
  },
];

// Initialize variables to track the current question and the selected answer
let currentQuestionIndex = 0;
// this variable stores answers
let selectedAnswer = null;

// Function to load and display the current question and its options
function loadQuestion() {
  const questionElement = document.getElementById("question");
  const answerListElement = document.getElementById("answer-list");

  // Clear previous options
  answerListElement.innerHTML = "";

  // Load the current question and options
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.text;

  // Create list items with radio buttons for each option
  currentQuestion.options.forEach((option, index) => {
    const li = document.createElement("li");

    // Create a radio input
    const radioInput = document.createElement("input");
    radioInput.type = "radio";
    radioInput.name = "answer"; // Group all radios for this question
    radioInput.value = index;
    radioInput.id = `option-${index}`;

    // Add an event listener to update the selected answer
    radioInput.addEventListener("change", () => {
      selectedAnswer = index; // Update the selected answer index
    });

    // Create a label for the radio input
    const label = document.createElement("label");
    label.htmlFor = `option-${index}`;
    label.textContent = option;

    // Append the radio input and label to the list item
    li.appendChild(radioInput);
    li.appendChild(label);

    // Append the list item to the answer list
    answerListElement.appendChild(li);
  });
}

// Event listener for the Submit button to check the selected answer
document.getElementById("submit").addEventListener("click", () => {
  if (selectedAnswer === null) {
    alert("Please select an answer!");
    return;
  }

  const correctAnswer = questions[currentQuestionIndex].correct;
  if (selectedAnswer === correctAnswer) {
    alert("Correct!");
  } else {
    alert(
      "Wrong! The correct answer is: " +
        questions[currentQuestionIndex].options[correctAnswer]
    );
  }

  // Disable submit button after submission to prevent multiple submissions
  document.getElementById("submit").disabled = true;
});

// Event listener for the Next button to load the next question or end the quiz
document.getElementById("next").addEventListener("click", () => {
  // Check if there are more questions left
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    selectedAnswer = null; // Reset selected answer
    document.getElementById("submit").disabled = false; // Enable the submit button
    loadQuestion(); // Load the next question
  } else {
    alert("Quiz complete! Great job!");
    document.getElementById("next").disabled = true; // Disable the next button
  }
});

// Load the first question when the page loads
loadQuestion();

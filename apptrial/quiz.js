const questions = [
    {
      question: "Which data structure uses FIFO?",
      answers: ["Stack", "Queue", "Tree", "Graph"],
      correct: 1
    },
    {
      question: "Which is a cloud computing platform?",
      answers: ["Git", "AWS", "MySQL", "Linux"],
      correct: 1
    },
    {
      question: "What is the time complexity of searching in a balanced BST?",
      answers: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
      correct: 1
    },
    {
      question: "Which technology powers cryptocurrencies like Bitcoin?",
      answers: ["Blockchain", "Cloud", "Data Warehouse", "IoT"],
      correct: 0
    },
    {
      question: "Which is NOT a non-linear data structure?",
      answers: ["Graph", "Queue", "Tree", "Heap"],
      correct: 1
    }
  ];
  
  let current = 0;
  let score = 0;
  
  const questionBox = document.getElementById("question");
  const answersBox = document.getElementById("answers");
  const resultBox = document.getElementById("result");
  const scoreText = document.getElementById("score");
  
  function showQuestion() {
    const q = questions[current];
    questionBox.textContent = q.question;
    answersBox.innerHTML = "";
  
    q.answers.forEach((answer, idx) => {
      const btn = document.createElement("button");
      btn.textContent = answer;
      btn.addEventListener("click", () => selectAnswer(idx, btn));
      answersBox.appendChild(btn);
    });
  }
  
  function selectAnswer(index, btn) {
    const q = questions[current];
    const buttons = answersBox.querySelectorAll("button");
  
    buttons.forEach((button, i) => {
      button.disabled = true;
      if (i === q.correct) {
        button.classList.add("correct");
      } else if (i === index) {
        button.classList.add("wrong");
      }
    });
  
    if (index === q.correct) score++;
  
    setTimeout(() => {
      current++;
      if (current < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    }, 1000);
  }
  
  function showResult() {
    document.getElementById("question-box").classList.add("hidden");
    resultBox.classList.remove("hidden");
    scoreText.textContent = `You scored ${score} out of ${questions.length}`;
  }
  
  showQuestion();
  
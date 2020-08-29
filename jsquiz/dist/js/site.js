
let questions = [
  {
    id: 1,
    question: "Which of the following is server side JS object?",
    answer: "File",
    options: [
      "Function",
      "File Upload",
      "File",
      "Date"
    ]
  },
  {
    id: 2,
    question: "______ JavaScript is also called client-side JavaScript",
    answer: "Navigator",
    options: [
      "Microsoft",
      "Navigator",
      "LiveWire",
      "Native"
    ]
  },
  {
    id: 3,
    question: "The _______ method of an Array object adds and/or removes elements from an array.",
    answer: "Splice",
    options: [
      "Reverse",
      "Shift",
      "Slice",
      "Splice"
    ]
  },
  {
    id: 4,
    question: "____________ is the tainted property of a window object",
    answer: "Defaultstatus",
    options: [
      "Protocol",
      "Pathname",
      "Defaultstatus",
      "Host"
    ]
  },
  {
    id: 5,
    question: "Which of the following attribute can hold the JavaScript version?",
    answer: "Language",
    options: [
      "Language",
      "Script",
      "Version",
      "None of the Above"
    ]
  },
  {
    id: 6,
    question: "______ JavaScript is also called client-side JavaScript",
  answer: "Navigator",
  options: [
    "Microsoft",
    "Navigator",
    "LiveWire",
    "Native"
    ]
  },
    
  {
    id: 7,
    question: "Which of the following navigator object properties is the same in both   Netscape and IE?",
    answer: "navigator.appCodeName",
    options: [
      "navigator.appCodeName",
      "navigator.appName",
      "navigator.appVersion",
      "navigator.NameVersion"
    ]
  },
  {
    id: 8,
    question: "JavaScript entities start with _______ and end with _________.",
    answer: "Ampersand, semicolon",
    options: [
      "Semicolon, colon",
      "Semicolon, Ampersand",
      "Ampersand, colon",
      "Ampersand, semicolon"
    ]
  },
  {
    id: 9,
    question: "Which of the following is not considered a JavaScript operator?",
    answer: "this",
    options: [
      "new",
      "this",
      "delete",
      "typeof"
    ]
  },
  {
    id: 10,
    question: "JavaScript is interpreted by _________",
    answer: "Client",
    options: [
      "Client",
      "Server",
      "Object",
      "None of the Above"
    ]
  },
  
];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}

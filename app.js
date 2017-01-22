var qcount = 0;
var Questions = [{
    question: "Who is Your Teacher?",
    options: ["Sir Ali", "Sir Rehan", "None"],
    answer: "Sir Ali"
}, ];
var score = 0;
var tScore = 1;

function creator() {
    var divs = document.body.getElementsByTagName("div");
    for (i = 0; i < divs.length; i++) {
        divs[i].className = "hidden";
    }
    var creator = document.getElementById("creator").className = "show";
}

function Question(question, options, answer) {
    this.question = question;
    this.options = options;
    this.answer = answer;
}

function create(){
    var ques = document.getElementById("ques").value;
    var opt = []
    var opt1 = document.getElementById("opt1").value;
    var opt2 = document.getElementById("opt2").value;
    var opt3 = document.getElementById("opt3").value;
    opt.push(opt1, opt2, opt3);
    var ans = document.getElementById("ans").value;
    Questions.push(new Question(ques, opt, ans));
    tScore++;
    document.getElementById("ques").value = "";
    document.getElementById("opt1").value = "";
    document.getElementById("opt2").value = "";
    document.getElementById("opt3").value = "";
    document.getElementById("ans").value = "";
}

function start() {
    var divs = document.body.getElementsByTagName("div");
    for (i = 0; i < divs.length; i++) {
        divs[i].className = "hidden";
    }
    var quiz = document.getElementById("quiz");
    quiz.className = "show";
    quiz.innerHTML = Questions[qcount].question;
    for (var i = 0; i < 3; i++) {
        quiz.innerHTML += "<p><input type='radio' name='Question'>" + Questions[qcount].options[i] + "</p>";
    }
    quiz.innerHTML += "<input type='button' onclick='next();' value='Next Question'>";
}

function next() {
    var ps = document.body.getElementsByTagName("p");
    for (var i = 0; i < ps.length; i++) {
        if (ps[i].firstChild.checked && ps[i].lastChild.nodeValue === Questions[qcount].answer)  {
            score++;
            break;
            
            }
        }

        nextQues();
    }





function nextQues() {
    qcount++;
    if (tScore === qcount) {
        result();
    } else {

        var divs = document.body.getElementsByTagName("div");
        for (i = 0; i < divs.length; i++) {
            divs[i].className = "hidden";
        }
        var quiz = document.getElementById("quiz");
        quiz.className = "show";
        quiz.innerHTML = Questions[qcount].question;
        for (var i = 0; i < 3; i++) {
            quiz.innerHTML += "<p><input type='radio' name='Question'>" + Questions[qcount].options[i] + "</p>";
        }
        quiz.innerHTML += "<input type='button' onclick='next();' value='Next Question'>";
    }
}

function result() {
    var divs = document.body.getElementsByTagName("div");
    for (i = 0; i < divs.length; i++) {
        divs[i].className = "hidden";
    }
    var result = document.getElementById("result");
    result.className = "show";
    var percentage = (score / tScore) * 100;

    result.innerHTML = "<h1>Total Questions " + tScore + "</h1><h1>Correct Answers " + score + "</h1><h1>Percentage " + percentage + " % </h1>"
}
console.log(tScore);
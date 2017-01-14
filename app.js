// var question1 = new Question("what is your name?", ["usairim", "huzail", "altaf"], "usairim");
// document.getElementById('content').innerHTML += question1.question + "<br>";
// for (i = 0; i < question1.options.length; i++) {
//     var opt = "";
//     opt += "<p><input type='radio'  name='options'/>" + question1.options[i] + "</p>";
//     document.getElementById('content').innerHTML += opt;
// }
// document.getElementById('content').innerHTML += "<button onclick='clicked()'>Submit</button>";
// function Question(question, options, answer) {
//     this.question = question;
//     this.options = options;
//     this.answer = answer;
// }
var button = document.getElementById('content').innerHTML = "<input type = 'button' onclick='onStart();' value='Start'/> "
var questions = { 
    question1 : {
        question : "Which mountain is the tallest in the world?",
        option : ["Nanga Parbat", "k-2" , "Everest"],
        answer : 2
    },
    question2 : {
        question : "who is the Prime Minister of Pakistan?", 
        option : ["Mamnoon Hussain", "Nawaz Sharif" , "no one"],
        answer : 1
    }
};
var countOfQuestions = Object.keys(questions).length;
// console.log(countOfQuestions);
 
 function onStart(){
  document.getElementById('content').innerHTML = questions.question1.question;
    for(var i = 0 ; i<  questions.question1.option.length; i++){
         document.getElementById('content').innerHTML += "<p><input type = 'radio'; name = 'question1';/>" + questions.question1.option[i] + "</p>"; 
    } 
  document.getElementById('content').innerHTML += "<input type ='Submit' onclick='submit()' value='submit' />"
 }
 function submit(){
    var ans = document.getElementsByName("question1");
    for(var i = 0 ; i<  ans.length; i++){
     if(ans[i].checked = true){
        break;
     }
    }
     return check(i);
 }
 function check(){

 }
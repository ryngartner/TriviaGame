// Begin Javascript


$(document).ready(function() {



var score = 0
var correctGuess = 0
var IncorrectGuess = 0

var quiz = [{
    question: "Which Seinfeld writer voiced George Steinbrenner on and off from season 5 through 9?",
    panswer: ["Larry David", "Spike Feresten" , "Peter Mehlmen"],
    answer: 1 },
{   question: "In season six’s “The Doorman,” Frank Costanza wants to name the chest-support garment he and Kramer invent 'the Manssiere,' but Kramer prefers…",
    panswer: ["The Breast Man", "The Bro" , "Man's Best Friend"],
    answer: 1 },
{   question: "The Tao of Jerry: Newman is the _________ to his Superman.",
    panswer: ["Kryptonite", "Lois Lane", "Alf", "Lex Luther"],
    answer: 3 },
{   question: "In later seasons, Kramer frequently sought the counsel of an excitable attorney who parodied which member of O.J. Simpson’s defense team?",
    panswer: ["Robert Kardashian", "Alan Dershowitz", "F.Lee Bailey", "Johnnie Cochran"],
    answer: 3 },
{   question: "Elaine has many talents, including copyediting and recreational skiing. But, as we learn in season eight’s “The Little Kicks,” this skill is not one of them.",
    panswer: ["singing", "cooking", "dancing", "soccer"],
    answer: 2 },
];

// // create question contents according to question count
// function questionContent() {
//     // a for loop would be cool here...
//     $("#gameScreen").append("<p><strong>" + 
//         questions[questionCounter].question + 
//         "</p><p class='choices'>" + 
//         questions[questionCounter].choices[0] + 
//         "</p><p class='choices'>" + 
//         questions[questionCounter].choices[1] + 
//         "</p><p class='choices'>" + 
//         questions[questionCounter].choices[2] + 
//         "</p><p class='choices'>" + 
//         questions[questionCounter].choices[3] + 
//         "</strong></p>");
// }

var questionNumber;
// $(quiz).each(function(i,e){
    $.each(quiz, function(i, e) {
    // console.log( i + " : " + e);
    questionNumber = e;
    // console.log(e)
    // console.log(i)
for(i = 0; i < 3; i++){
    $("#possibleAnswers").append('<label class="radio-inline"><input type="radio" name="optradio' + questionNumber + '" value =' + (e)+'>' + (e.panswer[i]) + '</label>')
}});

$("#submit").click(function(){
    var radioValue = $("input[name='optradio']:checked").val();
   
    if (parseInt(radioValue) === quiz[0].answer){
        score ++;
    }
    else {
        // console.log("Incorrect");
    }
    $("#results").text(score);
});



});





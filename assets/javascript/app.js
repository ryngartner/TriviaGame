// Begin Javascript


$(document).ready(function() {


var questionCounter = 0;
var score = 0;


var quiz = [{
    question: "Which Seinfeld writer voiced George Steinbrenner on and off from season 5 through 9?",
    panswer: ["Larry David", "Spike Feresten" , "Peter Mehlmen"],
    answer: 0 },
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



  

$("#start").click(function() {
    alert("Hello World");
        
}); 


$(quiz).each(function(i,e){
    // $.forEach(quiz, function(i, e) {
    console.log( i + " : " + e);
    questionNumber = i;
    
    $("#question").append("<p id = q" + i + ">" + e.question + "</p>");
    // console.log(e)
    // console.log(i)
for(i = 0; i < quiz[questionNumber].panswer.length; i++){
    $("#q"+ questionNumber).append('<label class="radio-inline"><input type="radio" name="optradio' + questionNumber + '" value = ' + (i)+ '>' + (e.panswer[i]) + '</label>')
}});


$("#submit").click(function(){
    for (var i = 0; i < quiz.length; i++) {
        if (parseInt($("input[name='optradio" + i + "']:checked").val()) === quiz[i].answer){
            score ++;
        }
        $("#results").text(score);
        $("#submit").css("display","none");
    }
    
   
    
});

});





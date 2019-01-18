// Begin Javascript


$(document).ready(function() {


var questionCounter = 0;
var score = 0;
var questionCounter;
var timeleft;

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
    // alert("Hello World");
    timeleft = 30;
    var downloadTimer = setInterval(function(){
    timeleft--;
    document.getElementById("countdowntimer").textContent = timeleft;
    if(timeleft <= 0)
        clearInterval(downloadTimer);
    },1000);
    $("#start").css("display","none");
    $("#submit").css("display","block");
        
 


quiz.forEach(function(e,i){
    // $.forEach(quiz, function(i, e) {
    console.log( i + " : " + e);
    questionNumber = i;
 
    $("#question").append("<p id = q" + i + ">" + e.question + "</p>");
    // console.log(e)
    // console.log(i)
for(j = 0; j < quiz[questionNumber].panswer.length; j++){
    $("#q"+ questionNumber).append('<label style = "margin-left: 5px" class="radio-inline"><input type="radio" name="optradio' + questionNumber + '" value = ' + (j)+ '>' + (e.panswer[j]) + '</label>')
}});



$("#submit").click(function(){
    for (var i = 0; i < quiz.length; i++) {
        if (parseInt($("input[name='optradio" + i + "']:checked").val()) === quiz[i].answer){
            score ++;
        }
        $("#results").text(score);
        $("#submit").css("display","none");
    }
    clearInterval(downloadTimer);
   startFunction();
    
});

});
function startFunction() {
    //show start button
    //reset the timer back to 30 seconds
    //clear selected radio buttons
    $("#start").css("display","block");
    timeleft = 30;
    document.getElementById("countdowntimer").textContent = timeleft;
    $("input").prop('checked', false);
    $("#question").empty();
    $("#q0").remove();
    
}
});



<<<<<<< HEAD
// Begin Javascript


// $("#start").click(function(){
//     alert("Yay!");
// })

var score = 0

var quiz = [{
    question: "Kramer kramer kramer",
    panswer: ["Newman","Jerry","Elaine"],
    answer: 1 },
{question: "Jerry Jerry Jerry",
panswer: ["Soup Nazi","Jerry","Elaine"],
answer: 0 }
]
var questionNumber;
$(quiz).each(function(i,e){
    questionNumber=i;
    console.log(e)
    console.log(i)
for(i = 0;i < 4;i++){
    $("#possibleAnswers").append('<label class="radio-inline"><input type="radio" name="optradio' + questionNumber + '" value =' + (i)+'>' + (e.panswer[i]) + '</label>')
}})

$("#submit").click(function(){
    var radioValue = $("input[name='optradio']:checked").val();
   
    if (parseInt(radioValue) === quiz[0].answer){
        score ++;
    }
    else {
        console.log("Incorrect");
    }
    $("#results").text(score);
})







=======
// Begin Javascript
>>>>>>> 26bb7b1286d4800d35349be57da24cb38fe3d006

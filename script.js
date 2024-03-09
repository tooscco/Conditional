// Conditional statement

// var jamoSnack = 'Chin-chin'

// if (jamoSnack == 'Peanuts') {
//     console.log("Jamo will eat");
// } else if (jamoSnack == 'Biscuit') {
//     console.log("Buy 15");
// } else {
//     console.log('Buy whatever you see');
// }

// var score = 48
// if (score >= 0 && score < 40){
//     console.log('F - fail');
// } else if (score >= 40 && score < 45) {
//     console.log('E - pass');
// } else if ( score >= 45 && score < 50) {
//     console.log('D - Pass');
// }

// var food = "Amala"
// var soup = "Ewedu"
// var drink = "water"

// if (food == "Amala" && soup == "Ewedu") {
//     if ( drink == "sosa") {
//         console.log("Buy 7 wraps with 2 meats");
//     } else if (drink == "water"){
//         console.log("Buy 3 wraps and 4 meats");
//     } else {
//         console.log("Buy 3 wraps only");
//     }
// } else if (food == "Iyan" && soup == "Egusi"){
//     console.log("Buy 5 wraps and 5 meats");
// } else if (drink == "5 alive"){
//     console.log("Buy only that");
// } else {
//     console.log("Tell them to close down their restaurant");
// }

function CheckScore() {
    var userScore = Number(score.value)
    // console.log(userScore);
    if (userScore >= 0 && userScore < 40) {
    console.log('f - Fail');
    ayo.innerHTML = 'f - fail'
    var songFailure = new Audio ('audio/Wizkid_Ft_Zlatan_-_IDK.mp3')
    songFailure.play()
    } else if (userScore >= 40 && userScore < 45){
        console.log('E - pass');
        ayo.innerHTML = 'E - pass'
        var songPass = new Audio ('audio/Zinoleesky_-_SAKARA.mp3')
        songPass.play()
    }
}
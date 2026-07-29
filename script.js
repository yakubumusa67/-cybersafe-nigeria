function checkAnswer(answer){

if(answer === "correct"){

document.getElementById("result").innerHTML =
"Correct! This is a phishing scam. Never click suspicious links or give out your password.";

}

else{

document.getElementById("result").innerHTML =
"Incorrect! Legitimate banks and organizations do not ask for your password through urgent messages or suspicious links.";

}

}
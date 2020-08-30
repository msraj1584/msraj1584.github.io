var attempt = 5; // Variable to count number of attempts.
    // Below function Executes on click of login button.
    function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "SPINDLE MONK" && password == "studymonk"){
    alert ("Login successfully.. Click Ok to proceed");
    window.location = "https://msraj1584.github.io/jsquiz"; // Redirecting to other page.
    return false;
    }
    else{
    attempt --;// Decrementing by one.
    alert("WRONG AUTHENTICATION ... You have left "+attempt+" attempt;");
    // Disabling fields after 5 attempts.
    if( attempt == 0){
    document.getElementById("username").disabled = true;
    document.getElementById("password").disabled = true;
    document.getElementById("submit").disabled = true;
    return false;
    }
    }
    }
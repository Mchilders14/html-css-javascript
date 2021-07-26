// Example programming with Objects, Arrays and Data Structures.

function helloworld() {
    var hello = "hello there this is a string";
    console.log(hello);
}

var attempt = 3; // Variable to count number of attempts.

// Below function Executes on click of login button.
function validate() {

    //Gathering info from the document
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    //Successful Login
    if (username == "Formget" && password == "formget#123") {
        alert("Login successfully");
        window.location = "success.html"; // Redirecting to other page.
        return false;
    }

    //Unsuccessful Login
    else {
        attempt--;// Decrementing by one.
        alert("You have left " + attempt + " attempt;");
        // Disabling fields after 3 attempts.
        if (attempt == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}
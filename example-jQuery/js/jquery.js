
// Global variable nbr
let nbr = 0;

// jQuery Anonymous Function
$(() => {
    
    // Function to apply css style to div tags and id = nbr
    $("div, #nbr").css("text-align", "center").css("padding-top", "20px").css("background-color", "lightgrey");

    // Function on id = plus, event handler 'click' -> increment nbr
    $("#plus").on("click", () => {
        nbr++;
        display();
    });

    // Function on id = minus, event handler 'click' -> decrement nbr
    $("#minus").on("click", () => {
        nbr--;
        display();
    });


});

// Funtion to display current value of number through html id = nbr
const display = () => {
    $("#nbr").val(nbr);
    $("#nbr").css("color", (nbr % 2 == 0 ? "red" : "black"))
             .css("font-weight", (nbr % 3 == 0 ? "bold" : "normal"))
             .css("font-style", (nbr % 5 == 0 ? "italic" : "normal"));
    
};
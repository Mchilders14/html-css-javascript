
// Global number variable nbr
let nbr = 0;

// Global boolean variable red
let red = true;

// Global array topics
let topics = [
    { name: "Git/GitHub", rating: 4 },
    { name: "SQL", rating: 5 },
    { name: "Java/C#", rating: 3 }
];

// jQuery Anonymous Function
$(() => {
    
    // Function to apply css style to id = 'converter' and id = 'nbr'
    $("#converter, #nbr").css("text-align", "center").css("padding-top", "20px").css("background-color", "lightgrey");

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

    // Console display message
    console.log("The HTML is loaded!");

    // Call to UI display
    display();

    // Function on button id = 'toggle', event handler 'click' -> change heading color
    $("button#toggle").on("click", () => {
        toggle();
    });

    // Function on id = 'hide', event handler 'click' -> hide data
    $("#hide").on("click", () => {
        $("table").fadeToggle(); // Hide at id = 'table'
    });

    // Initial toggle set when page loads
    toggle();

    // Function on id = 'copy', event handler 'click' -> copy paste input data
    $("#copy").on("click", () => {
        let value = $("#in").val(); // Retrieve id = 'in' value
        $("#out").val(value); // Set id = 'out' value
    });
});

// Function to change style color of id = 'th'
const toggle = () => {
    if(red) {
        $("th").css("color", "red").css("fontStyle", "italic").css("fontSize", "1em");
    } else {
        $("th").css("color", "green").css("fontStyle", "normal").css("fontSize", "2em");
    }
    red = !red;
}

// Funtion to display current value of number through html id = nbr
const display = () => {

    let tbody = $("#tbody");

    $("#nbr").val(nbr);

    // Styling at id = 'nbr'
    $("#nbr").css("color", (nbr % 2 == 0 ? "red" : "black"))
             .css("font-weight", (nbr % 3 == 0 ? "bold" : "normal"))
             .css("font-style", (nbr % 5 == 0 ? "italic" : "normal"));

    // (for-each-of) Loop through array 'topics' -> Build html table
    for(let topic of topics) {
        let tr = $("<tr></tr>");
        let tdName = $(`<td>${topic.name}</td>`);
        tr.append(tdName);
        let tdRating = $(`<td></td>`);
        tdRating.append(`${topic.rating}`);
        tr.append(tdRating);
        tbody.append(tr);
    }
    
};
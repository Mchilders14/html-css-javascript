
/*
    This file contains the HTML 'PUT' method for updating a USER
*/

// Base URL for the controller
const baseurl = "http://localhost:8080/api/users";

//Anonymous function 
$(() => {

    // jQuery Funciton for clicking button with id = "getid"
    $("#getid").on("click", () => {
        var userId = $("#zId").val();
        getUserById(userId);
    })

    // jQuery Funciton for clicking button with id = "save"
    $("#save").on("click", () => {
        let user = {};
        getFromPage(user);
        updateUser(user);
    })
});

// Function to update a USER object.
const updateUser = (user) => {
    user.id = Number(user.id); // Changes ID value from string to a number

    // Using ajax
    $.ajax({
        method: "PUT",
        url: `${baseurl}/`, // Controller URL from JAVA or .NET lives here
        data: JSON.stringify(user),
        contentType: "application/json"

    })
        // Upon success
        .done(res => {
            console.log("Update Successful");
        })

        // Upon failure
        .fail(err => {
            console.error(err);
        })
}

// Function to retrieve object values from page and assign values to USER object
const getFromPage = (user) => {
    user.id = $("#zId").val();
    user.username = $("#xUsername").val();
    user.password = $("#xPassword").val();
    user.firstName = $("#xFirstName").val();
    user.lastName = $("#xLastName").val();
    user.phone = $("#xPhone").val();
    user.email = $("#xEmail").val();
    user.reviewer = $("#uReviewer").prop("checked"),
    user.admin = $("#uAdmin").prop("checked")
}

// Function to display a specific user by ID
const display = (user) => {
    $("#xId").val(user.id);
    $("#xUsername").val(user.username);
    $("#xPassword").val(user.password);
    $("#xFirstName").val(user.firstName);
    $("#xLastName").val(user.lastName);
    $("#xPhone").val(user.phone);
    $("#xEmail").val(user.email);
    $("#xReviewer").prop("checked", user.reviewer);
    $("#xAdmin").prop("checked", user.admin);
};

// Function to GET a user by ID
const getUserById = (userId) => {

    $.getJSON(`${baseurl}/${userId}`)

    .done(res => {
        console.debug(res);
        display(res);
    })

    .fail(err => { 
        console.error(err); 
    });
};
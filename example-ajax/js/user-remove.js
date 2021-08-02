
/*
    This file contains the HTML 'POST' method for adding a USER
*/

// Anonymous Funtion for the save button
$(() => {

    // jQuery Funciton for clicking button with id = "delete"
    $("#delete").on("click", () => {
        remove();
    })

    // jQuery Funciton for clicking button with id = "getid"
    $("#getid").on("click", () => {
        var userId = $("#zId").val();
        getUserById(userId);
    })
});

// Function to delete a USER object.
const removeUser = (id) => {
    user.id = Number(user.id); // Changes ID value from string to a number

    // Using ajax
    $.ajax({
        method: "DELETE",
        url: `${baseurl}/${id}`, // Controller URL from JAVA or .NET lives here
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
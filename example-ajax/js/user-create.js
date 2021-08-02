
/*
    This file contains the HTML 'POST' method for adding a USER
*/

// Anonymous Funtion for the save button
$(() => {

    // jQuery Funciton for clicking button with id = "save"
    $("#save").on("click", () => {
        add();
    })
});

//Function for adding a new USER
const add = () => {
    let newUser = {
        // For MySQL, comment 'id'
        // id: 0,
        username: $("#xUsername").val(),
        password: $("#xPassword").val(),
        firstName: $("#xFirstName").val(),
        lastName: $("#xLastName").val(),
        phone: $("#xPhone").val(),
        email: $("#xEmail").val(),
        reviewer: $("#xReviewer").prop("checked"),
        admin: $("#xAdmin").prop("checked")
    }

    // Using ajax
    $.ajax({
        method: "POST",
        url: "http://localhost:8080/api/users/",
        data: JSON.stringify(newUser),
        contentType: "application/json"
    })

      // Upon success
      .done(res => {
          console.debug(res, " - Added!");
      })
      
      // Upon failure
      .fail(err => {
          console.error(err);
      });
};
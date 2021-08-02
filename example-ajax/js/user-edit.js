
const baseurl = "http://localhost:8080/api/users";

$(() => {
    $("#getid").on("click", () => {
        var userId = $("#zId").val();
        getUserById(userId);
    })
});

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
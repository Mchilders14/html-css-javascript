
/*
    This file contains HTML 'GET' methods for getting a USER
*/

$(() => {
    console.log("Everything is ready!");
    getUserById(3);
}); 

// Funtion to get USER by assigned id
const getUserById = (id) => {
    $.getJSON(`http://localhost:8080/api/users/${id}`)
    .done(res => { console.debug(res);
        displayUser(res);
    })
    .fail(err => {
        console.error(err);
    });

};

// Funtion to display a USER by assigned id
const displayUser = (user) => {
    $("#dId").html(`<b>${user.id}</b>`);
    $("#dUsername").text(`${user.username}`);
    $("#dFirstname").text(`${user.firstName}`);
    $("#dLastname").text(`${user.lastName}`);
    $("#dPhone").text(`${user.phone}`);
    $("#dEmail").text(`${user.email}`);
    $("#dReviewer").text(`${(user.reviewer ? "Yes" : "No")}`);
    $("#dAdmin").text(`${(user.admin ? "Yes" : "No")}`);
}

// Funtion to get ALL USERS
const getAllUsers = () => {
    $.getJSON(`http://localhost:8080/api/users/`)
        .done(res => {
            console.debug(res);
            display(res);
        })
        .fail(err => {
            console.error(err);
        });
    }

// Funtion to display ALL USERS
const display = (users) => {
    let tbody = $("tbody");
    tbody.empty();
    for(let user of users) {
        let tr = $("<tr></tr>");
        tr.append( $(`<td>${user.id}</td>`) );
        tr.append( $(`<td>${user.username}</td>`) );
        tr.append( $(`<td>${user.firstName} ${user.lastName}</td>`) );
        tr.append( $(`<td>${user.phone}</td>`) );
        tr.append( $(`<td>${user.email}</td>`) );
        tr.append( $(`<td>${user.reviewer ? "Yes" : "No"}</td>`) );
        tr.append( $(`<td>${user.admin ? "Yes" : "No"}</td>`) );
        tbody.append(tr);
    }
};
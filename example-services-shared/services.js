
/*
    Services JavaScript : reuse of functions that interact with controller.
*/
const baseurl = "http://localhost:8080/api/vendors";

const vendorGetAll = () => {
    return $.getJSON(`${baseurl}/`);
}

const vendorGetById = (id) => {
    return $.getJSON(`${baseurl}/${id}`);
}

const vendorAdd = (vendor) => {
    return $.ajax({
        method: "POST",
        url: `${baseurl}/`,
        data: JSON.stringify(vendor),
        contentType: 'application/json'
    });
}

const vendorUpdate = (vendor) => {
    vendor.id = Number(vendor.id);
    return $.ajax({
        method: "PUT",
        url: `${baseurl}/`,
        data: JSON.stringify(vendor),
        contentType: 'application/json'
    });
}

const vendorDelete = (id) => {
    return $.ajax({
        method: "DELETE",
        url: `${baseurl}/${id}`
    });
}
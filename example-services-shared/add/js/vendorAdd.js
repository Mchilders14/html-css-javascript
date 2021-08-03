$(() => {
    $("#vSave").on("click", () => {
        add();
    })
});

const add = () => {
    let vendor = {};
    //vendor.id = $("#vId").val();  <- Muted for use with MySQL
    vendor.code = $("#vCode").val();
    vendor.name = $("#vName").val();
    vendor.address = $("#vAddress").val();
    vendor.city = $("#vCity").val();
    vendor.state = "OH"
    vendor.zip = $("#vZip").val();
    vendor.phone = $("#vPhone").val();
    vendor.email = $("#vEmail").val();
   
    vendorAdd(vendor)
        .done(res => {
            console.debug(res);
            console.log("Create Successful!");
        })
        .fail(err => console.error(err));
};

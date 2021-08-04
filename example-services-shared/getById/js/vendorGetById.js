
$(() => {

    let urlParms = parseUrl();
    let id = +urlParms.id;
    
    vendorGetById(id)
        .done(res => {
            console.debug(res);
            display(res);
        })
        .fail(err => console.error(err));
            
    // $("#wGet").on("click", () => {
    //     let id = $("#zId").val();
    //     vendorGetById(id)
    //         .done(res => {
    //             console.debug(res);
    //             display(res);
    //         })
    //         .fail(err => console.error(err));
    // })
});

const display = (vendor) => {
    $("#wId").val(vendor.id);
    $("#wCode").val(vendor.code);
    $("#wName").val(vendor.name);
    $("#wAddress").val(vendor.address);
    $("#wCity").val(vendor.city);
    $("#wState").val(vendor.state);
    $("#wZip").val(vendor.zip);
    $("#wPhone").val(vendor.phone);
    $("#wEmail").val(vendor.email);    
}
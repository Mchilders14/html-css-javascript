$(() => {
    $("#zGet").on("click", () => {
        let id = $("#aId").val();
        vendorGetById(id)
            .done(res => {
                console.debug(res);
                display(res);
            })
            .fail(err => console.error(err));
    })

    $("#zDelete").on("click", () => {
        let id = $("#aId").val();
        vendorDelete(id);
    })
});

const display = (vendor) => {
    $("#zId").val(vendor.id);
    $("#zCode").val(vendor.code);
    $("#zName").val(vendor.name);
    $("#zAddress").val(vendor.address);
    $("#zCity").val(vendor.city);
    $("#zState").val(vendor.state);
    $("#zZip").val(vendor.zip);
    $("#zPhone").val(vendor.phone);
    $("#zEmail").val(vendor.email);    
};



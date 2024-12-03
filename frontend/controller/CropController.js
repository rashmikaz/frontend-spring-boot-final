function saveCrop(){
    const formData = new FormData();

    formData.append("common_name",$("#crop_common_name").val());
    formData.append("scientific_name", $("#crop_scientific_name").val());
    formData.append("crop_image", $("#crop_image")[0].files[0]);
    formData.append("category", $("#crop_category").val());
    formData.append("season", $("#crop_season").val());
    formData.append("field", $("#field_details").val());

    $.ajax({
        url: " http://localhost:8081/spring-boot-final/api/v1/crop",
        method: "POST",
        contentType: false,
        processData: false,
        data: formData,
        success: function (result) {
            clearFields();
            console.log(result);
            alert("Crop Save Successfull");
            loadCrops();
        },
        error: function (result) {
            clearFields();
            console.log(result);
            alert("Crop Save Unsuccessfull");
            loadCrops();
        },
    });
}

function clearFields(){
    $("#crop_common_name").val("");
    $("#crop_scientific_name").val("");
    $("#crop_image").val("");
    $("#crop_category").val("");
    $("#crop_season").val("");
}
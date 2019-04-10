"use strict";

function routeToProductPage() {
    window.location.href = "/products";

}

function routeToVendorPage() {
    window.location.href = "/vendors";
	
}

function confirmVendorCancel() {
	confirmGeneralCancel("vendor");
}

function confirmProductCancel() {
	confirmGeneralCancel("product");
}

function confirmGeneralCancel(input) {
    var cancel = confirm("Are you sure you want to cancel creating this " + input + "? The information will not be saved!");
    if (cancel) {
        window.location.href = "/" + input + "s"
    }
}

function addNewTag() {
    var newTagName = $("#new_tag_field").val();
    var newTagNum = $(".tag").length;
    var namePrefix = "vendor[tags_attributes][" + newTagNum + "]";
    var idPrefix = "vendor_tags_attributes_" + newTagNum + "_";

    var newDiv = $("<div>").attr({class: "tag"});

    $("<label>").attr({for: idPrefix + "name"}).text("Name").appendTo(newDiv);
    $("<input>").attr({type: "text", value: newTagName, name: namePrefix + "[name]", id: idPrefix + "name"}).appendTo(newDiv);
    $("<input>").attr({type: "hidden", value: "0", name: namePrefix + "[_destroy]"}).appendTo(newDiv);
    $("<input>").attr({type: "checkbox", value: "1", name: namePrefix + "[_destroy]", id: idPrefix + "_destroy"}).appendTo(newDiv);
    $("<label>").attr({for: idPrefix + "_destroy"}).text("Remove Tag").appendTo(newDiv);
    newDiv.appendTo("#tags");
}

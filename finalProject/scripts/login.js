ocument.addEventListener("DOMContentLoaded", function(){
    var checkbox = document.getElementById("idSave");
    checkbox.addEventListener("click", function(){
        var label = this.nextElementSibling;
        var customCheckbox = label.querySelector(".custom-checkbox");

        if (this.checked) {
            customCheckbox.style.background = "url(../images/png/checkmark.png) no-repeat";
        } else {
            customCheckbox.style.background = "url(../images/png/check-mark.png) no-repeat";
        }
    });
});
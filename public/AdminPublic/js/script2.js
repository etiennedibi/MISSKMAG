/*INITIALIZE DATA TABLE*/
$('.mydatatable').DataTable()





$(document).ready(function () {
    
    // FOR UPLOAD-1
    $('.uploadButton1').click(function() {
        $('#file1').click()
    })

    // FOR UPLOAD-2
    $('.uploadButton2').click(function() {
        $('#file2').click()
    })

    // FOR UPLOAD-3
    $('.uploadButton3').click(function() {
        $('#file3').click()
    })

    // FOR UPLOAD-4
    $('.uploadButton4').click(function() {
        $('#file4').click()
    })



})



// PREVIEW FOR UPLOAD-1
const PubBox1 = document.querySelector(".PubBox1")
const inputFile = document.querySelector("#file1")
const imagePreview = document.querySelector("#imagePreview1")

inputFile.addEventListener("change", function () {
    const theFile = this.files[0];

    if (theFile) {
        const reader = new FileReader();
        imagePreview.style.visibility = "visible";
        PubBox1.style.background = "white";

        reader.addEventListener("load", function() {
            imagePreview.setAttribute("src", this.result);
        })

        reader.readAsDataURL(theFile);

    } else {
        imagePreview.style.visibility = null;
        imagePreview.setAttribute("src", "");

        PubBox1.style.background = null;
    }
})


// PREVIEW FOR UPLOAD-2
const PubBox2 = document.querySelector(".PubBox2")
const inputFile2 = document.querySelector("#file2")
const imagePreview2 = document.querySelector("#imagePreview2")

inputFile2.addEventListener("change", function () {
    const theFile = this.files[0];

    if (theFile) {
        const reader = new FileReader();
        imagePreview2.style.visibility = "visible";
        PubBox2.style.background = "white";

        reader.addEventListener("load", function() {
            imagePreview2.setAttribute("src", this.result);
        })

        reader.readAsDataURL(theFile);

    } else {
        imagePreview2.style.visibility = null;
        imagePreview2.setAttribute("src", "");

        PubBox2.style.background = null;
    }
})


// PREVIEW FOR UPLOAD-3
const PubBox3 = document.querySelector(".PubBox3")
const inputFile3 = document.querySelector("#file3")
const imagePreview3 = document.querySelector("#imagePreview3")

inputFile3.addEventListener("change", function () {
    const theFile = this.files[0];

    if (theFile) {
        const reader = new FileReader();
        imagePreview3.style.visibility = "visible";
        PubBox3.style.background = "white";

        reader.addEventListener("load", function() {
            imagePreview3.setAttribute("src", this.result);
        })

        reader.readAsDataURL(theFile);

    } else {
        imagePreview3.style.visibility = null;
        imagePreview3.setAttribute("src", "");

        PubBox3.style.background = null;
    }
})


// PREVIEW FOR UPLOAD-4
const PubBox4 = document.querySelector(".PubBox4")
const inputFile4 = document.querySelector("#file4")
const imagePreview4 = document.querySelector("#imagePreview4")

inputFile4.addEventListener("change", function () {
    const theFile = this.files[0];

    if (theFile) {
        const reader = new FileReader();
        imagePreview4.style.visibility = "visible";
        PubBox4.style.background = "white";

        reader.addEventListener("load", function() {
            imagePreview4.setAttribute("src", this.result);
        })

        reader.readAsDataURL(theFile);

    } else {
        imagePreview4.style.visibility = null;
        imagePreview4.setAttribute("src", "");

        PubBox4.style.background = null;
    }
})


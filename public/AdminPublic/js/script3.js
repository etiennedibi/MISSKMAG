$('.mydatatable').DataTable()



$(document).ready(function () {

	// FOR IMAGE UPLOARD 1

	$("#UploardLogo1").click(function() {
		$("#UploardInput1").click()
	})


})




	/***  FOR VIDEO POSTER PREVIEW *****/
	
    const illustration1 = document.querySelector("#illustration1")
    const UploardLogo1 = document.querySelector("#UploardLogo1")
    const inputFile1 = document.querySelector("#UploardInput1")
    
    
    illustration1.style.display = "none"
    
    
    inputFile1.addEventListener("change", function () {
        const theFile = this.files[0];
        console.log(theFile);
        
        if (theFile) {
            const reader = new FileReader();
            UploardLogo1.style.display = "none"
            illustration1.style.display = "block"
    
            reader.addEventListener("load", function() {
                illustration1.setAttribute("src", this.result);
            })
    
            reader.readAsDataURL(theFile);
    
        } else {
            UploardLogo1.style.display = "none";
            illustration1.style.display = null
    
            illustration1.setAttribute("src", "");
        }
    })
    



$('.mydatatable').DataTable()




/*SHOW THE FORM TO ADD AUTHOR*/


$(document).ready(function () {

	/***  FOR AUTHORS ADDING *****/
	$('.AddAuthorHeader').hide()
	$('.AddAuthorContainer').hide()

	$('.addArticle').click(function () {
		
			if ($('.AddAuthorContainer').is(':visible')) {
				$('.AddAuthorHeader').slideUp(300)
                $('.AddAuthorContainer').slideUp(300)
			} else {
                $('.AddAuthorHeader').slideDown(300)
				$('.AddAuthorContainer').slideDown(300)
            }
            
	})

        //Form validation notification

    


	/***  FOR AUTHOR PROFILE IMG UPLOARD *****/
	$('.profileAdd').click(function() {
        $('#file').click()
    })


})


// FOR PREVIEW
const inputFile = document.querySelector("#file")
const imagePreview = document.querySelector(".profileAdd")


inputFile.addEventListener("change", function () {
    const theFile = this.files[0];

    if (theFile) {
		const reader = new FileReader();
		
        reader.addEventListener("load", function() {
            imagePreview.setAttribute("src", this.result);
        })

        reader.readAsDataURL(theFile);

    } else {
        imagePreview.setAttribute("src", "");
    }
})






//CODE FOR PROFIL VIEWER

var profils = new Array()
profils = document.querySelectorAll(".viewProfil")
viewers =  document.querySelectorAll(".authorProfilViewer")
//document.querySelector(".authorProfilViewer").hidden = true

console.log(profils);



viewers.forEach(viewer => {
	viewer.hidden = true
});



profils.forEach(profil => {
	const attr = profil.getAttribute("data-adminProfilButton")
	
    profil.addEventListener("click", function () {
        console.log(".ProfilViewer" + attr);   
        document.querySelector(".ProfilViewer" + attr).hidden = false;   
    }, false)

    document.querySelector(".closeViewer" + attr).addEventListener("click", function () {
        document.querySelector(".ProfilViewer" + attr).hidden = true;     
    }, false)
    
});







//  CODE FOR PASSWORD GENERATED

const words = ['HHJH', 'YUAPEI', 'AZNSB', 'WJKDH', 'FNGQO', 'MANGER', 'POUET', 'ADORAR', 'OTHER']
const codes = ['12@J40', '4U5#8', '96&O5', '58%A4', '6X52$', '6X!52']
var today = new Date()

document.querySelector('.addArticle').addEventListener("click", function () {
    document.querySelector('#PassCodeBoot').value = 'AUTHOR' + today.getSeconds() + wordGeneration() + codeGeneration() + today.getHours()
})

function wordGeneration() {
    return words[Math.round(Math.random()*8)]
}
function codeGeneration() {
    return codes[Math.round(Math.random()*5)]
}

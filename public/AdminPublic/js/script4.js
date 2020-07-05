/*INITIALIZE DATA TABLE*/
$('.mydatatable').DataTable()






/*INITIALIZE TINYMCE*/
// tinymce.init(
// 	{
// 		selector:'textarea',
// 		menubar: 'file edit view format tc help',
// 		toolbar: 'undo redo | bold italic underline strikethrough | fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment',
// 		plugins: 'print preview powerpaste casechange importcss tinydrive searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link media mediaembed template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker imagetools textpattern noneditable help formatpainter permanentpen pageembed charmap tinycomments mentions quickbars linkchecker emoticons advtable',
// 	},
// );






/*SHOW THE FORM TO ADD ARTICLE*/

$(document).ready(function () {

	/***  FOR ARTICLE ADDING *****/
	$('.AddArticleHeader').hide()
	$('.AddArticleContainer').hide()

	$('.AddcategorieHeader').hide()
    $('.AddCategorieContainer').hide()



	$('.addArticle').click(function () {
		
			if ($('.AddArticleContainer').is(':visible')) {
				$('.AddArticleHeader').slideUp(300)
                $('.AddArticleContainer').slideUp(300)
			} else {
                $('.AddArticleHeader').slideDown(300)
				$('.AddArticleContainer').slideDown(300)
            }    
	})

	$('.AddarticleButton').click(function () {
		
		$('.AddcategorieHeader').slideUp(100)
		$('.AddCategorieContainer').slideUp(100)

		$('.AddArticleHeader').slideDown(300)
		$('.AddArticleContainer').slideDown(300)		
	})

	$('.AddCategorieButton').click(function () {
		
		$('.AddArticleHeader').slideUp(100)
		$('.AddArticleContainer').slideUp(100)

		$('.AddcategorieHeader').slideDown(300)
		$('.AddCategorieContainer').slideDown(300)	
	})









	// FOR IMAGE UPLOARD 1

	$("#UploardLogo1").click(function() {
		$("#UploardInput1").click()
	})

	$("#illustration1").click(function() {
		$("#UploardInput1").click()
	})

	// FOR IMAGE UPLOARD 2

	$("#UploardLogo2").click(function() {
		$("#UploardInput2").click()
	})

	$("#illustration2").click(function() {
		$("#UploardInput2").click()
	})
})



	/***  FOR ARTICLE ILLUSTRATION PREVIEW 1 *****/
	
const illustration1 = document.querySelector("#illustration1")
const UploardLogo1 = document.querySelector("#UploardLogo1")
const inputFile1 = document.querySelector("#UploardInput1")


illustration1.style.display = "none"


inputFile1.addEventListener("change", function () {
    const theFile = this.files[0];

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


/***  FOR ARTICLE ILLUSTRATION PREVIEW 2 *****/
	
const illustration2 = document.querySelector("#illustration2")
const UploardLogo2 = document.querySelector("#UploardLogo2")
const inputFile2 = document.querySelector("#UploardInput2")


illustration2.style.display = "none"


inputFile2.addEventListener("change", function () {
    const theFile = this.files[0];

    if (theFile) {
		const reader = new FileReader();
		UploardLogo2.style.display = "none"
		illustration2.style.display = "block"

        reader.addEventListener("load", function() {
            illustration2.setAttribute("src", this.result);
        })

        reader.readAsDataURL(theFile);

    } else {
		UploardLogo2.style.display = "none";
		illustration2.style.display = null

        illustration2.setAttribute("src", "");
    }
})


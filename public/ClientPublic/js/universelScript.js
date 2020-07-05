// document.querySelector("html").classList.add('js');

// var fileInput  = document.querySelector( ".input-file" ),  
//     button     = document.querySelector( ".input-file-trigger" ),
//     the_return = document.querySelector(".file-return");
      
// button.addEventListener( "keydown", function( event ) {  
//     if ( event.keyCode == 13 || event.keyCode == 32 ) {  
//         fileInput.focus();  
//     }  
// });
// button.addEventListener( "click", function( event ) {
//    fileInput.focus();
//    return false;
// });  
// fileInput.addEventListener( "change", function( event ) {  
//     the_return.innerHTML = this.value;  
// }); 












//CODE DE LECTURE DES VIDEOS

var videos = new Array()
videos = document.querySelectorAll(".video")
var transparentCover = document.querySelector(".cover-transaparent-of-the-page")


videos.forEach(video => {
    
    video.addEventListener("click", function () {
        transparentCover.style.display = "block";
        const attr = this.getAttribute("data-BlogVideoButton")
        console.log(".videoreader" + attr);
        
        document.querySelector(".videoreader" + attr).style.display = "block";   
    }, false)

    transparentCover.addEventListener("click", function () {
        const attr = video.getAttribute("data-BlogVideoButton")
        console.log(".videoreader" + attr);
        document.querySelector(".videoreader" + attr).style.display = "none";  
        
        transparentCover.style.display = "none";
    }, false)
    
});








$(document).ready(function() {


    //CODE DU BLOCK DE LA NEWSLETTER ET DU MESSAGE
    $(".newsletter-block").click(function() {
        $(".container-form-newsletter").css("display", "block");
    });


    //CODE POUR FAIRE APPARAITRE LA DIV DES MESSAGES
    $(".send-msg-div").click(function() {
        $(".suscribe-newsletter-hide").css("display", "none");
        $(".text-form").css("display", "none");
        $(".input-group-form-newsletter").css("display", "none"); 
        $(".send-msg-div").css("display", "none");

        $(".send-message-title-hide").css("display", "block");
        $(".text-form-hide").css("display", "block");
        $(".input-group-form-message").css("display", "block");
        $(".suscrib-newsletter-div").css("display", "block");

        $(".container-form-newsletter").css("height", "480px");
        
    });


    //CODE POUR FAIRE APPARAITRE LA NEWSLETTER
    $(".suscrib-newsletter-div").click(function() {
        $(".send-message-title-hide").css("display", "none");
        $(".text-form-hide").css("display", "none");
        $(".input-group-form-message").css("display", "none"); 
        $(".suscrib-newsletter-div").css("display", "none");

        $(".suscribe-newsletter-hide").css("display", "block");
        $(".text-form").css("display", "block");
        $(".input-group-form-newsletter").css("display", "block");
        $(".send-msg-div").css("display", "block");

        $(".container-form-newsletter").css("height", "450px");
    });

    //CODE DU BLOCK DE LA NEWSLETTER ET DU MESSAGE
    $(".icon-close").click(function() {
        $(".container-form-newsletter").css("display", "none");
    });

});
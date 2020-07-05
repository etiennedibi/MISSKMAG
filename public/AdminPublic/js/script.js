// $(document).ready(function() {
//     $(".animsition").animsition({
//       inClass: 'fade-in',
//       outClass: 'fade-out',
//       inDuration: 1500,
//       outDuration: 800,
//       linkElement: '.animsition-link',
//       // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
//       loading: true,
//       loadingParentElement: 'body', //animsition wrapper element
//       loadingClass: 'animsition-loading',
//       loadingInner: '', // e.g '<img src="loading.svg" />'
//       timeout: false,
//       timeoutCountdown: 5000,
//       onLoadEvent: true,
//       browser: [ 'animation-duration', '-webkit-animation-duration'],
//       // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
//       // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
//       overlay : false,
//       overlayClass : 'animsition-overlay-slide',
//       overlayParentElement : 'body',
//       transition: function(url){ window.location.href = url; }
//     });
//   });


$(document).ready(function () {
    
  /*****DARCKMODE AND LIGHTMODE COOL SYSTEME  ******/ 


  // DEFAULT
  $('.dackMode').hide()


  // DARK MODE
  $('.lightMode').click(PlayDarkMode)

  // LIGHT MODE
  $('.dackMode').click(PlayLightMode)



  // CHANGE THE MODE AUTOMATICALY
  var today = new Date()
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
  console.log(time);

  if (time>'23:00:00') {
    PlayDarkMode()
  } else {
    PlayLightMode()
  }
  



  // MAINTAIN THE MODE ALL THE WHOLE SITE 

  if (localStorage.getItem("mode")=="Light") {
    PlayLightMode()
  } else {
    PlayDarkMode()
  }
  


  
  // DARK & LIGHT MODE FUNCTIONS
  

  function PlayDarkMode() {
    $('.lightMode').hide()
    $('.dackMode').show()

    document.documentElement.style.setProperty('--Pricipal-background-light', '#0f03019c');
    document.documentElement.style.setProperty('--Important-Background', '#f76363');
    document.documentElement.style.setProperty('--navBar-Background-light', '#0f0301');
    document.documentElement.style.setProperty('--font-Important-color', '#f76363');
    document.documentElement.style.setProperty('--font-important-color-red', '#158691');

    localStorage.setItem("mode", "Dark")
  }

  function PlayLightMode() {
    $('.dackMode').hide()
    $('.lightMode').show()

    document.documentElement.style.setProperty('--Pricipal-background-light', '');
    document.documentElement.style.setProperty('--Important-Background', '');
    document.documentElement.style.setProperty('--navBar-Background-light', '');
    document.documentElement.style.setProperty('--font-Important-color', '');
    document.documentElement.style.setProperty('--font-important-color-red', '');

    localStorage.setItem("mode", "Light")
  }





  // LOGOUT BUTTON ACTION
  
  $('#logOutButton').click(function () {
    document.querySelector('#logOutForm').submit();
  })


})





setTimeout(() => {
  document.querySelector('.alert').hidden = true;
}, 5000);
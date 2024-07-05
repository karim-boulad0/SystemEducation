
$(document).ready(function(){
    $('#openModal').click(function(){
      $('#exampleModalCenter').modal('show');
    });

    $('.close, .close-footer').click(function(){
      $('#exampleModalCenter').modal('hide');
    });
    $('#close-footers').click(function(){
      $('#exampleModalCenter').modal('hide');
    });

    $('.container-img').click(function(){
      $('#exampleModalCenter').modal('hide');
    });
  });// toogle navbar
document.querySelectorAll('.dropdown-toggle').forEach(item => {
  item.addEventListener('click', event => {
 
    if(event.target.classList.contains('dropdown-toggle') ){
      event.target.classList.toggle('toggle-change');
    }
    else if(event.target.parentElement.classList.contains('dropdown-toggle')){
      event.target.parentElement.classList.toggle('toggle-change');
    }
  })
});


function show_hide(show, hide) {
  var x = document.getElementById(show);
  var y = document.getElementById(hide);
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } 
  else
  {
    x.style.display = "none";
    y.style.display = "block";
  }
}




function getImgSrc(param){
  $("#upload span").empty()
  var imgSrc = $(param).attr("src");
  $("#upload img").attr("src",imgSrc);
  $("#upload img").attr("class",'upload');
  var img_name = imgSrc.split('/')[imgSrc.split('/').length-1]
  $("#upload span").append(`<span>${img_name}</span>`)
  $("#image_name").attr('value', img_name)
  // console.log(imgSrc);
  };

function getVideoSrc(param){
  $("#upload span").empty()
  var videoSrc = $(param).find('source').attr('src');
  $("#upload img").attr("src",'../../images/film-solid.svg');
  $("#upload img").attr("class",'upload');
  var img_name = videoSrc.split('/')[videoSrc.split('/').length-1]
  $("#upload span").append(`<span>${img_name}</span>`)
  $("#image_name").attr('value', img_name)

  // console.log(videoSrc);
  };

function getImgSrc1(param){
  $("#upload1 span").empty()
  var imgSrc = $(param).attr("src");
  $("#upload1 img").attr("src",imgSrc);
  $("#upload1 img").attr("class",'upload');
  var img_name = imgSrc.split('/')[imgSrc.split('/').length-1]
  $("#upload1 span").append(`<span>${img_name}</span>`)
  // console.log(imgSrc);
  };

function getVideoSrc1(param){
  $("#upload1 span").empty()
  var videoSrc = $(param).find('source').attr('src');
  $("#upload1 img").attr("src",'../../images/film-solid.svg');
  $("#upload1 img").attr("class",'upload');
  var img_name = videoSrc.split('/')[videoSrc.split('/').length-1]
  $("#upload1 span").append(`<span>${img_name}</span>`)
  };



  $(document).ready(function() {
    // Initialize the datepicker


    // Show datepicker on button click
    $('.input-group-btn .date-set').click(function() {
      $(this).closest('.input-group').find('input').focus();
    });
  });



  $(document).ready(function() {
    var pathname = window.location.pathname;
    // Get the links elements
    var Educations_link = $('#Educations-link');
    var admin_link = $('#admin-link');
    var dashboard_link = $('#dashboard-link');
    var banner_link = $('#banner-link');
    var area_link = $('#area-link');
    var page_link = $('#page-link');
    var contact_link = $('#contact-link');
    var oper_link = $('#oper-link');
    var oper_link = $('#oper-link');
    var oper_link = $('#oper-link');
    var setting_link = $('#setting-link');
    var role_link = $('#role-link');
    var promo_link = $('#promo-link');
    var report_link = $('#report-link');
    var user_link = $('#user-link');
    var paymentSetting_link = $('#paymentSetting-link');
    var sendn_link = $('#sendn-link');
    // Check the path and set the active link accordingly
    if (pathname.includes('/education/') ) {
        Educations_link.addClass('active-link');
    } else if (
        pathname.includes('/admins/index') 
 
    ) {
      dashboard_link.addClass('active-link');
    } else if (
        pathname.includes('/admin/block') ||
        pathname.includes('/admin/terms') ||
        pathname.includes('/admin/contactus') ||
        pathname.includes('/admin/system-banner') ||
        pathname.includes('/admin/accessibility-information') ||
        pathname.includes('/admin/privacy-policy') ||
        pathname.includes('/admin/block-all')
    ) {
        block_link.addClass('active-link');
    } 



    else if (pathname.includes('/admin/users')) {
        user_link.addClass('active-link');
    }
    else if (pathname.includes('/admin/sendNotif')) {
        sendn_link.addClass('active-link');
    }
    else if (pathname.includes('/payment-method-settings')) {
        paymentSetting_link.addClass('active-link');
    }
    else if (pathname.includes('/admin/reports')) {
        report_link.addClass('active-link');
    }
    else if (pathname.includes('/admin/promoCodes')) {
        promo_link.addClass('active-link');
    }
    else if (pathname.includes('/admin/role')) {
        role_link.addClass('active-link');
    }
    else if (pathname.includes('/admin/setting')) {
        setting_link.addClass('active-link');
    }
    else if (pathname.includes('/admin/oper')) {
        oper_link.addClass('active-link');
    }
    else if (pathname.includes('/admin/oper')) {
        oper_link.addClass('active-link');
    }
    else if (pathname.includes('/admin/oper')) {
        oper_link.addClass('active-link');
    }


     else if (pathname.includes('/admin/contact')) {
        contact_link.addClass('active-link');
    } else if (pathname.includes('/admin/pages')) {
        page_link.addClass('active-link');
    } else if (pathname.includes('/admin/banners')) {
        banner_link.addClass('active-link');
    } else if (pathname.includes('/admin/admins') || pathname.includes('/admin/admins')) {
        admin_link.addClass('active-link');
    } else if (pathname.includes('/admin/areas')) {
        area_link.addClass('active-link');
    }
});




// 
function updateFileName() {
  var input = document.getElementById('file-2');
  var span = document.getElementById('file-name-display');
  var fileName = '';

  if (input.files.length > 1) {
    fileName = input.getAttribute('data-multiple-caption').replace('{count}', input.files.length);
  } else {
    fileName = input.files[0].name;
  }

  span.textContent = fileName || 'Upload file';
}

$(document).ready(function(){
    $('#openModal').click(function(){
      $('#exampleModalCenter').modal('show');
    });

    $('.close, .close-footer').click(function(){
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


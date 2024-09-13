$(function() {

	new WOW().init();

	$(".hamburger").click(function(){
		$(this).toggleClass("is-active");

		if($(this).hasClass('is-active')){
			$('.mnu_top').slideDown(300);
		}else{
			$('.mnu_top').slideUp(300);
		}
	});

});


function updateLabelText() {
	var fileInput = document.getElementById('file');
	var fileLabel = document.getElementById('fileLabel');
	
	if (fileInput.files.length > 0) {
	  fileLabel.textContent = fileInput.files[0].name;
	} else {
	  fileLabel.textContent = 'Прикрепить скриншот';
	}
  }
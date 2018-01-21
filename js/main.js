(function() {
	var img = $('.image');
    var reader = new FileReader();

    reader.addEventListener('load', function() {
        img.css({'background-image': 'url(' + this.result + ')' });
    })


    // Select new image
    $('#input-choose-file').change(function() {
        var file = this.files[0];
        reader.readAsDataURL(file);
    })

    // On close image
    $('a.btn-image-close').click(function(e) {
        e.preventDefault();
        img.css({'background-image': 'none'})
    });

	// filters
	$('[data-filter]').click(function() {
		img.attr('data-filter', $(this).data('filter'));
	});
	
	// Color
	$('.select-color').change(function() {
		img.css({'background-color': $(this).val()});
	})

	$('.blend-select').change(function() {
		img.css({'background-blend-mode': $(this).val()});
	})
		
var rangeSlider = function() {
  var slider = $('.range-slider'),
      range = $('.range-slider__range'),
      value = $('.range-slider__value');
    
  slider.each(function(){

    value.each(function(){
      var value = $(this).prev().attr('value');
      $(this).html(value);
    });

    range.on('input', function(){
      $(this).next(value).html(this.value);
    });
  });
};

rangeSlider();

		//on click of go(submit) button, addImage() will be called
$("#go").click(addImage);

//on pressing return, addImage() will be called
$("#urlBox").submit(addImage);


// editing image via css properties
function editImage() {
	var gs = $("#gs").val(); // grayscale
	var blur = $("#blur").val(); // blur
	var br = $("#br").val(); // brightness
	var ct = $("#ct").val(); // contrast
	var huer = $("#huer").val(); //hue-rotate
	var opacity = $("#opacity").val(); //opacity
	var invert = $("#invert").val(); //invert
	var saturate = $("#saturate").val(); //saturate
	var sepia = $("#sepia").val(); //sepia

	$("#imageContainer .image").css(
    "filter", 'grayscale(' + gs+
    '%) blur(' + blur +
    'px) brightness(' + br +
    '%) contrast(' + ct +
    '%) hue-rotate(' + huer +
    'deg) opacity(' + opacity +
    '%) invert(' + invert +
    '%) saturate(' + saturate +
    '%) sepia(' + sepia + '%)'
  );

	$("#imageContainer .image").css(
    "-webkit-filter", 'grayscale(' + gs+
    '%) blur(' + blur +
    'px) brightness(' + br +
    '%) contrast(' + ct +
    '%) hue-rotate(' + huer +
    'deg) opacity(' + opacity +
    '%) invert(' + invert +
    '%) saturate(' + saturate +
    '%) sepia(' + sepia + '%)'
  );


}

//When sliders change image will be updated via editImage() function
$("input[type=range]").change(editImage).mousemove(editImage);

// Reset sliders back to their original values on press of 'reset'
$('#imageEditor').on('reset', function () {
	resetFilter();
	setTimeout(function() {
		editImage();
	}, 0);
});

function resetFilter() {
	img.removeAttr('data-filter');
}

// adding an image via url box
function addImage(e) {
	var imgUrl = $("#imgUrl").val();
	if (imgUrl.length) {
		$("#imageContainer img").attr("src", imgUrl);
	}
	e.preventDefault();	
}

$(document).ready(function() {
    $("#lightSlider").lightSlider({
        item: 4,
        autoWidth: false,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 10,
 
        addClass: '',
        mode: "slide",
        useCSS: true,
        cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
        easing: 'linear', //'for jquery animation',////
 
        speed: 400, //ms'
        auto: false,
        loop: false,
        slideEndAnimation: true,
        pause: 2000,
 
        keyPress: false,
        // controls: true,
        prevHtml: '',
        nextHtml: '',
 
        rtl:false,
        adaptiveHeight:false,
 
        vertical:false,
        verticalHeight:500,
        vThumbWidth:100,
        thumbItem:10,
        pager: false,
        gallery: false,
        galleryMargin: 5,
        thumbMargin: 5,
        currentPagerPosition: 'middle',
        enableTouch:true,
        enableDrag:true,
        freeMove:true,
        swipeThreshold: 40,
        responsive : [],
        onBeforeStart: function (el) {},
        onSliderLoad: function (el) {},
        onBeforeSlide: function (el) {},
        onAfterSlide: function (el) {},
        onBeforeNextSlide: function (el) {},
        onBeforePrevSlide: function (el) {}
    });
});
var filters = $('.insta-example [class*="filter"]');
  
  $(filters).click(function()  {
       $('.image').attr('data-filter', $(this).data('filter'));
  });
})();

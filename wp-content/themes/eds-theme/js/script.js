
$(document).ready(function() {

	// Disable/enable scroll
	var keys = {37: 1, 38: 1, 39: 1, 40: 1};

	function preventDefault(e) {
	  e = e || window.event;
	  if (e.preventDefault)
	      e.preventDefault();
	  e.returnValue = false;
	}

	function preventDefaultForScrollKeys(e) {
	    if (keys[e.keyCode]) {
	        preventDefault(e);
	        return false;
	    }
	}

	function disableScroll() {
	  if (window.addEventListener) // older FF
	      window.addEventListener('DOMMouseScroll', preventDefault, false);
			  window.onwheel = preventDefault; // modern standard
			  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
			  window.ontouchmove  = preventDefault; // mobile
			  document.onkeydown  = preventDefaultForScrollKeys;
	}

	function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
		    window.onmousewheel = document.onmousewheel = null;
		    window.onwheel = null;
		    window.ontouchmove = null;
		    document.onkeydown = null;
	}

	disableScroll();

// Sidenav activation and cancellation
function closeSideNavKeypress() {
	$('.sidenav').toggleClass('active');
	$('.sidenav-bg').toggleClass('active');
	enableScroll();
}

function openSideNav() {
	$('.hamburger').click(function(){
		$('.sidenav').toggleClass('active');
		$('.sidenav-bg').toggleClass('active');
		disableScroll();
	});
}

function closeSideNav() {
	$('.close').click(function(){
			$('.sidenav').toggleClass('active');
			$('.sidenav-bg').toggleClass('active');
			enableScroll();
		});
	}

	// Click left of sidenav will close it
	$('.sidenav-bg').click(function(){
		if ($('.sidenav-bg').hasClass('active')) {
			closeSideNavKeypress()
			enableScroll();
		}
	});

openSideNav(); // Click on hamburger icon opens sidenav
closeSideNav(); // Click on close icon closes sidenav


//sidenav & main nav icon states
	$('.close').hover(function(){
		$('.close-line').toggleClass('hover');
	});

	$('.hamburger').hover(function(){
			$('.hamburger-line').toggleClass('hover');
	});

//sidenav list icons animation of parents IF THEY HAVE NESTED ITEMS
	$('.left-nav-list__item-link').click(function () {
      var chi = $(this).children('.left-nav-list__item-plus');
      chi.find(".icn-plus--line-2").toggle('active');
  });

	// ALL KEYPRESS
			$(document).keydown(function(e) {
			    switch(e.which) {
			        case 37: // left
							blogSwiper.slidePrev();
			        break;

			        case 38: // up
			        break;

			        case 39: // right
							blogSwiper.slideNext();
			        break;

			        case 40: // down
			        break;

							case 13: // enter
							break;

							case 27: // ESC
							// Press ESC when sidenav is active and it will close
							if ($('.sidenav-bg').hasClass('active')) {
								closeSideNavKeypress();
							}

							if ($('.bx--modal').hasClass('selected')) {
								$('.bx--modal').removeClass('selected');
								enableScroll();
							}

							break;

			        default: return; // exit this handler for other keys
			    }

			    e.preventDefault(); // prevent the default action (scroll / move caret)

			});

// fade effect of menu items on width changes of viewport

		function fadeMenuSm(a) {
			var size = a;
			var fadeObject = $(".fadeout-mq--sm");

			if ($(window).width() < size) {
				 fadeObject.fadeOut(50);
			 } else {
					fadeObject.fadeIn(50);
				}
		}

		fadeMenuSm(910);
		$(window).resize(function() {
				fadeMenuSm(910);
		});



// Menu change on scroll
function navbarScrollAnimation() {

	$(window).scroll(function () {
			var $this = $(this),
					$start = $('.navbar');
			if ($this.scrollTop() > 120) {
				 $start.removeClass('start');
			} else {
				 $start.addClass('start');
			}
	});

	$(window).scroll(function() {
			var $this = $(this),
					$start = $('.navbar-mobile');
			if ($this.scrollTop() > 120) {
				 $start.removeClass('start');
			} else {
				 $start.addClass('start');
			}
	});

}

function modalActivation() {
	$('.modal').click(function(){

		if ($('.bx--modal').hasClass('selected')) {
			$('.bx--modal').removeClass('selected');
			// enableScroll();
		} else {
			$('.bx--modal').addClass('selected');
			// disableScroll();
		}
	});

	$('.bx--modal-close').click(function(){
		$('.bx--modal').removeClass('selected');
	});

	$('.sidenav-bottom .modal').click(function(){
		$('.sidenav').toggleClass('active');
		$('.sidenav-bg').toggleClass('active');
		enableScroll();
	});

}

modalActivation();



// Sticky tabnav for Dedicated Transportation on scroll
function tabnavScrollAnimation() {
		$(document).on('scroll', function(){
				if ($(window).scrollTop() > 272){
					 $('.tabnav').addClass('sticky-tabnav');
					 $('.navbar').addClass('noshadow');
				   $('.navbar-mobile').addClass('noshadow');
				} else {
					$('.tabnav').removeClass('sticky-tabnav');
					$('.navbar').removeClass('noshadow');
					$('.navbar-mobile').removeClass('noshadow');
				}

		 });
}

// If /Services no transparency in navbar
function getLastPart(url) {
    var parts = url.split("/");
    return (url.lastIndexOf('/') !== url.length - 1
       ? parts[parts.length - 1]
       : parts[parts.length - 2]);
}

if (getLastPart(window.location.href) !== "services") {
	navbarScrollAnimation()
} else {
	$('.navbar').removeClass('start');
	$('.navbar-mobile').removeClass('start');
}

if ($('.bx--tabs').hasClass('tabnav')) {
	tabnavScrollAnimation();
}


// IE support for Object fullwidth
var userAgent, ieReg, ie;
userAgent = window.navigator.userAgent;
ieReg = /msie|Trident.*rv[ :]*11\./gi;
ie = ieReg.test(userAgent);

if(ie) {
  $(".img-container").each(function () {
    var $container = $(this),
        imgUrl = $container.find("img").prop("src");
    if (imgUrl) {
      $container.css("backgroundImage", 'url(' + imgUrl + ')').addClass("custom-object-fit");
    }
  });
}

// Smooth scroll to service section on homepage

function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top}, 300);
}

$("#services").click(function() {
   scrollToAnchor('services');
});

function getHrefAttribute() {
	$('.bx--tabs__nav li').click(function(){
				var itemClicked = $(this).children('a').attr('href');
				var stateObj = { foo: itemClicked };
				history.pushState(stateObj, itemClicked, itemClicked);

	});
}
getHrefAttribute();

// Preloader
function preloaderAfterLoad() {
	setTimeout(function () {
				$('.content').removeClass('hide')
				$('.preloader').removeClass('show')
				 enableScroll();
		 }, 1300);

	 setTimeout(function () {
				$('.preloader').addClass('hide')
		 }, 1700);
}

// Wait to follow ahref
function preloaderBeforeLoad(x) {
	$(x).click(function(event) {
	    // Remember the link href
	    var href = this.href;

	    // Don't follow the link
	    event.preventDefault();

	    // Do the async thing
						$('.preloader').removeClass('hide');

						setTimeout(function() {
								$('.preloader').addClass('show');
								disableScroll();
							 }, 200);

					setTimeout(function() {
							// This is the completion callback for the asynchronous thing;
							// go to the link
							window.location = href;
					}, 500);

	});
}

// preloaderBeforeLoad('.preload-link');
preloaderAfterLoad();

	var gifSource = $('#preloader').attr('src'); //get the source in the var
	 $('#preloader').attr('src', ""); //erase the source
	 $('#preloader').attr('src', gifSource+"?"+new Date().getTime());



// Change background image on tab Click

const pathURL = '/wp-content/themes/eds-theme/images/';
const transTab1 = '#trans-tab-1';
const transTab2 = '#trans-tab-2';
const transTab3 = '#trans-tab-3';

const transTabimg1 = 'dedicated-road.jpg';
const transTabimg2 = 'dedicated-air.jpg';
const transTabimg3 = 'dedicated-courier.jpg';

const industryTab1 = '#tab-1';
const industryTab2 = '#tab-2';
const industryTab3 = '#tab-3';
const industryTab4 = '#tab-4';
const industryTab5 = '#tab-5';
const industryTab6 = '#tab-6';
const industryTab7 = '#tab-7';

const industryTabimg1 = 'industry-automotive.jpg';
const industryTabimg2 = 'industry-fashion.jpg';
const industryTabimg3 = 'industry-healthcare.jpg';
const industryTabimg4 = 'industry-hightech.jpg';
const industryTabimg5 = 'industry-industrial.jpg';
const industryTabimg6 = 'industry-maritime.jpg';
const industryTabimg7 = 'industry-passportvisa.jpg';

const hero = $('.hero');

function clickTabChangeImg(tab,tabimg){
	$(tab).click(function(){

		if ($('.bx--tabs').hasClass('transport') ) {
			hero.css('background-image', 'url(' +  window.location.protocol + "//" + window.location.host + pathURL + tabimg + ')');

		} else if ($('.bx--tabs').hasClass('industry') ) {
			hero.css('background-image', 'url(' +  window.location.protocol + "//" + window.location.host + pathURL + tabimg + ')');
		}

	});
}

if ($('.bx--tabs').hasClass('transport') ) {
	hero.css('background-image', 'url(' +  window.location.protocol + "//" + window.location.host + pathURL + transTabimg1 + ')');
}
if ($('.bx--tabs').hasClass('industry') ) {
	hero.css('background-image', 'url(' +  window.location.protocol + "//" + window.location.host + pathURL + industryTabimg1 + ')');
}

clickTabChangeImg(transTab1, transTabimg1);
clickTabChangeImg(transTab2, transTabimg2);
clickTabChangeImg(transTab3, transTabimg3);

clickTabChangeImg(industryTab1, industryTabimg1);
clickTabChangeImg(industryTab2, industryTabimg2);
clickTabChangeImg(industryTab3, industryTabimg3);
clickTabChangeImg(industryTab4, industryTabimg4);
clickTabChangeImg(industryTab5, industryTabimg5);
clickTabChangeImg(industryTab6, industryTabimg6);
clickTabChangeImg(industryTab7, industryTabimg7);

// To change the url on express service page to the correct depending on tab selected
function changeTabNavLinks() {
    $(".bx--tabs__nav li:first").addClass("bx--tabs__nav-item--selected");

		$(".tab-1").removeAttr("hidden");

    $(".bx--tabs__nav-link").on('click', function (e) {
        $(this).closest('li').addClass("bx--tabs__nav-item--selected").siblings().removeClass("bx--tabs__nav-item--selected");

				if ( $(this).attr('aria-controls') == 'tab-panel-1' ) {
				    $('#tab-panel-1').removeAttr( "hidden" );
						$('#tab-panel-2').attr( "hidden",'' );
						$('#tab-panel-3').attr( "hidden",'' );
						$('#tab-panel-4').attr( "hidden",'' );
						$('#tab-panel-5').attr( "hidden",'' );
						$('#tab-panel-6').attr( "hidden",'' );
						$('#tab-panel-7').attr( "hidden",'' );
				} else if ( $(this).attr('aria-controls') == 'tab-panel-2' ) {
						$('#tab-panel-1').attr( "hidden",'' );
						$('#tab-panel-2').removeAttr( "hidden" );
						$('#tab-panel-3').attr( "hidden",'' );
						$('#tab-panel-4').attr( "hidden",'' );
						$('#tab-panel-5').attr( "hidden",'' );
						$('#tab-panel-6').attr( "hidden",'' );
						$('#tab-panel-7').attr( "hidden",'' );
				} else if ( $(this).attr('aria-controls') == 'tab-panel-3' ) {
						$('#tab-panel-1').attr( "hidden",'' );
						$('#tab-panel-2').attr( "hidden",'' );
						$('#tab-panel-3').removeAttr( "hidden" );
						$('#tab-panel-4').attr( "hidden",'' );
						$('#tab-panel-5').attr( "hidden",'' );
						$('#tab-panel-6').attr( "hidden",'' );
						$('#tab-panel-7').attr( "hidden",'' );
				} else if ( $(this).attr('aria-controls') == 'tab-panel-4' ) {
						$('#tab-panel-1').attr( "hidden",'' );
						$('#tab-panel-2').attr( "hidden",'' );
						$('#tab-panel-3').attr( "hidden",'' );
						$('#tab-panel-4').removeAttr( "hidden" );
						$('#tab-panel-5').attr( "hidden",'' );
						$('#tab-panel-6').attr( "hidden",'' );
						$('#tab-panel-7').attr( "hidden",'' );
				} else if ( $(this).attr('aria-controls') == 'tab-panel-5' ) {
						$('#tab-panel-1').attr( "hidden",'' );
						$('#tab-panel-2').attr( "hidden",'' );
						$('#tab-panel-3').attr( "hidden",'' );
						$('#tab-panel-4').attr( "hidden",'' );
						$('#tab-panel-5').removeAttr( "hidden" );
						$('#tab-panel-6').attr( "hidden",'' );
						$('#tab-panel-7').attr( "hidden",'' );
				} else if ( $(this).attr('aria-controls') == 'tab-panel-6' ) {
						$('#tab-panel-1').addAttr( "hidden",'' );
						$('#tab-panel-2').addAttr( "hidden",'' );
						$('#tab-panel-3').addAttr( "hidden",'' );
						$('#tab-panel-4').addAttr( "hidden",'' );
						$('#tab-panel-5').addAttr( "hidden",'' );
						$('#tab-panel-6').removeAttr( "hidden" );
						$('#tab-panel-7').addAttr( "hidden",'' );
				} else if ( $(this).attr('aria-controls') == 'tab-panel-7' ) {
						$('#tab-panel-1').attr( "hidden",'' );
						$('#tab-panel-2').attr( "hidden",'' );
						$('#tab-panel-3').attr( "hidden",'' );
						$('#tab-panel-4').attr( "hidden",'' );
						$('#tab-panel-5').attr( "hidden",'' );
						$('#tab-panel-6').attr( "hidden",'' );
						$('#tab-panel-7').removeAttr( "hidden" );
				} else {

				}

    });

    var hash = $.trim( window.location.hash );

		if (hash) $('.bx--tabs__nav-link[href$="'+hash+'"]').trigger('click');

};

changeTabNavLinks();


// Reading indicator post pages
$(document).ready(function(){

    var getMax = function(){
        return $(document).height() - $(window).height();
    }

    var getValue = function(){
        return $(window).scrollTop();
    }

    if('max' in document.createElement('progress')){
        // Browser supports progress element
        var progressBar = $('progress');

        // Set the Max attr for the first time
        progressBar.attr({ max: getMax() });

        $(document).on('scroll', function(){
            // On scroll only Value attr needs to be calculated
            progressBar.attr({ value: getValue() });
        });

        $(window).resize(function(){
            // On resize, both Max/Value attr needs to be calculated
            progressBar.attr({ max: getMax(), value: getValue() });
        });
    }
    else {
        var progressBar = $('.progress-bar'),
            max = getMax(),
            value, width;

        var getWidth = function(){
            // Calculate width in percentage
            value = getValue();
            width = (value/max) * 100;
            width = width + '%';
            return width;
        }

        var setWidth = function(){
            progressBar.css({ width: getWidth() });
        }

        $(document).on('scroll', setWidth);
        $(window).on('resize', function(){
            // Need to reset the Max attr
            max = getMax();
            setWidth();
        });
    }
});

}); // Document ready

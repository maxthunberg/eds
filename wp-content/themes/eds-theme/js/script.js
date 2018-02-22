
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
		} else {

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
							} else {

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

		fadeMenuSm(768);
		$(window).resize(function() {
				fadeMenuSm(768);
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

	$(window).scroll(function () {
			var $this = $(this),
					$start = $('.navbar-mobile');
			if ($this.scrollTop() > 120) {
				 $start.removeClass('start');
			} else {
				 $start.addClass('start');
			}
	});

}



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
} else {
	console.log('not dedicated transportation');
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

// Smooth scroll to services homepage

function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top}, 300);
}

$("#services").click(function() {
   scrollToAnchor('services');
});


var blogSwiper = new Swiper ('.swiper-container', {
  speed: 300,
  loop : true,
  grabCursor: true,
  keyboard: true,
  navigation: {
    nextEl: '.blog-btn-next',
    prevEl: '.blog-btn-prev',
  },
 })


 // Scroll Reveal

 // Changing the defaults
window.sr = ScrollReveal({
  origin: 'bottom',
  distance: '32px',
  scale: 1,
  reset: false,
  easing:'cubic-bezier(0.5, 0, 0.1, 1)',
  viewFactor: 0,
  viewOffset: { top: 0, right: 0, bottom: 100, left: 0 },
});

// Customizing a reveal set
sr.reveal('.revealer-0', { duration: 400, delay: 0 });
sr.reveal('.revealer-100', { duration: 400, delay: 100 });
sr.reveal('.revealer-200', { duration: 400, delay: 200 });
sr.reveal('.revealer-300', { duration: 400, delay: 300 });
sr.reveal('.revealer-400', { duration: 400, delay: 400 });
sr.reveal('.revealer-500', { duration: 400, delay: 500 });
sr.reveal('.revealer-600', { duration: 400, delay: 600 });
sr.reveal('.revealer-700', { duration: 400, delay: 700 });


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





	// correctFaqValues();

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
const transTab1 = '#tab-1';
const transTab2 = '#tab-2';
const transTab3 = '#tab-3';

const transTabimg1 = 'dedicated-road.jpg';
const transTabimg2 = 'dedicated-air.jpg';
const transTabimg3 = 'dedicated-courier.jpg';

const industryTab1 = '#industrytab-1';
const industryTab2 = '#industrytab-2';
const industryTab3 = '#industrytab-3';
const industryTab4 = '#industrytab-4';
const industryTab5 = '#industrytab-5';
const industryTab6 = '#industrytab-6';
const industryTab7 = '#industrytab-7';

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


// $('.bx--tabs').click(function(){
// 	var body = $("html, body");
//
// 	if (window.location.href.indexOf("learn") > -1) {
//
// 	} else {
// 		body.stop().animate({scrollTop:0}, 500);
// 	}
//
// });

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




}); // Document ready

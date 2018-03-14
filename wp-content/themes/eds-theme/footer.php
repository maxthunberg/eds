
<?php wp_footer(); ?>

<?php include( get_template_directory() . '/phtml-components/widgets/widgets.phtml');?>

<?php include( get_template_directory() . '/phtml-components/footer/footer.phtml');?>

  </div>

</div>


<script>
// Google Maps styling
  function initMap() {

    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 57.847607, lng: 12.166296},
      zoom: 4,
      disableDefaultUI: true,
      zoomControl: false,
      scaleControl: false,
      gestureHandling: 'greedy',
      scrollwheel: false,

      styles: [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#022A3A"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#022A3A"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#022A3A"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#022A3A"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
]
    });

        var mapPin = {

         path: "M236.925,0.124c-96.9,3.4-177.4,79-186.7,175.5c-1.9,19.3-0.8,38,2.6,55.9l0,0c0,0,0.3,2.1,1.3,6.1    c3,13.4,7.5,26.4,13.1,38.6c19.5,46.2,64.6,123.5,165.8,207.6c6.2,5.2,15.3,5.2,21.6,0c101.2-84,146.3-161.3,165.9-207.7    c5.7-12.2,10.1-25.1,13.1-38.6c0.9-3.9,1.3-6.1,1.3-6.1l0,0c2.3-12,3.5-24.3,3.5-36.9C438.425,84.724,347.525-3.776,236.925,0.124    z M243.825,291.324c-52.2,0-94.5-42.3-94.5-94.5s42.3-94.5,94.5-94.5s94.5,42.3,94.5,94.5S296.025,291.324,243.825,291.324z",
         fillColor: '#343434',
         fillOpacity: 1,
         scale: .1,
         strokeColor: '#343434',
         strokeWeight: 4
       };

       var marker = new google.maps.Marker({
         position: map.getCenter(),
         icon: mapPin,
         map: map
       });

  }

</script>
<script async defer
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBF_ye6XsvHZt6HXB6EKnV4ey6YNYP6JQM&callback=initMap">
</script>

<script>
// Scroll Reveal

// Changing the defaults
window.sr = ScrollReveal({
 origin: 'bottom',
 distance: '32px',
 scale: 1,
 reset: false,
 easing:'cubic-bezier(0.5, 0, 0.1, 1)',
 viewFactor: 0,
 viewOffset: { top: 0, right: 0, bottom: 100, left: 0 }
});

// Customizing a reveal set
sr.reveal('.revealer-0', { duration: 300, delay: 0 });
sr.reveal('.revealer-100', { duration: 300, delay: 100 });
sr.reveal('.revealer-200', { duration: 300, delay: 200 });
sr.reveal('.revealer-300', { duration: 300, delay: 300 });

// swiper slider
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

</script>
</body>
</html>

;(function($){

  		  function initMap() {
  		  	var mapDiv = document.getElementById('map'),
  		  		poltavaAdress = mapDiv.innerHTML
  			var poltava = {lat: 55.741390, lng: 37.620835};
  			          var map = new google.maps.Map(mapDiv, {
  			            zoom: 16,
  			            center: poltava,
  			            disableDefaultUI: true,//отключает весь пользовательский интерфейс по умолчанию
  			            draggable: false,//предотвращает перетаскивание карты
  			            //mapTypeId: google.maps.MapTypeId.SATELLITE//вид со спутника



  			          });
  			         // var marker = new google.maps.Marker({
  			        //    position: poltava,
  			       //     map: map,
  			       //     animation: google.maps.Animation.BOUNCE,//для того аби постійно пригав
  			       //     icon: './img/beetroot.svg'// для задавання кастомного курсора

  			        //  });


  		            /*var marker2 = new google.maps.Marker({
  		              position: {lat: 49.568528, lng: 34.588432},
  		              map: map,
  		              animation: google.maps.Animation.BOUNCE,
  		              icon: './img/beetroot.svg'

  		            }); */ /*if we wont two or more marers*/

  			          var infowindow = new google.maps.InfoWindow({
  			              content: poltavaAdress
  			            });

  			          infowindow.open(map, marker); //вставка надписи над изображением

  			      }
  			          window.onload = initMap;

})(jQuery);

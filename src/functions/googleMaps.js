import food from './../assets/Rpb_food_icon.svg'
const google = window.google;

// calculate distance
export function updateRestaurants(arr) {
    return arr.map((cur, ind) => {
        var self = this;
        var service = new google.maps.DistanceMatrixService();
            service.getDistanceMatrix(
                {
                    origins: [self.props.userLocation],
                    destinations: [{lat: cur.location.lat, lng: cur.location.lng}],
                    unitSystem: google.maps.UnitSystem.IMPERIAL,
                    travelMode: 'DRIVING'
                }, (response, status) => {
                    if (status == 'OK') {
                        cur.distance = response.rows[0].elements[0].distance.text;
                    }
                }
            )
            return cur;
    })
}

export function initMap (mapDiv, obj) {
    this.map = new google.maps.Map(mapDiv, {
        zoom: 15,
        center: {lat: obj.location.lat, lng: obj.location.lng},
        styles: [
          {
              "featureType": "administrative",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "color": "#444444"
                  }
              ]
          },
          {
              "featureType": "landscape",
              "elementType": "all",
              "stylers": [
                  {
                      "color": "#f2f2f2"
                  }
              ]
          },
          {
              "featureType": "poi",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "all",
              "stylers": [
                  {
                      "saturation": -100
                  },
                  {
                      "lightness": 45
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "simplified"
                  }
              ]
          },
          {
              "featureType": "road.arterial",
              "elementType": "labels.icon",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "transit",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "all",
              "stylers": [
                  {
                      "color": "#365DD6"
                  },
                  {
                      "visibility": "on"
                  }
              ]
          }
      ]
      
      });
        mapDiv.style.right = "0vw";
        mapDiv.style.top = "0vh";
}

export function setMarkers (mapDiv, obj, userLoc) {
         var self = this;
         var marker = new google.maps.Marker({
             map: mapDiv,
             position: {lat:obj.location.lat, lng:obj.location.lng},
             animation: google.maps.Animation.DROP,
             icon: {
                 size: new google.maps.Size(25,25),
                 scaledSize: new google.maps.Size(25, 25),
                 url: food
             }
         })
         var infoWindow = new google.maps.InfoWindow;
         var infoWindowContent = (
             `<div class="infowindow">
                ${obj.name}, only ${obj.distance} from you.
            </div>`
         )
         infoWindow.setContent(infoWindowContent)
         marker.addListener('click', function() {
             infoWindow.open(self.map, marker)
         })
 }
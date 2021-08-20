
var mapbox = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var map = new L.Map('map', {
    layers: [mapbox],
    center: [-29.972444, -71.309506],
    zoom: 19,
    zoomControl: true
});


				
	  var style1 = {
                    'color': "green",
                    'weight': 1,
                    'opacity': 5,
					'fillOpacity': 0.1
                };
				
var style2 = {
                    'color': "blue",
                    'weight': 1,
                    'opacity': 5,
					'fillOpacity': 0.1
                };			

				
var style3 = {
                    'color': "yellow",
                    'weight': 1,
                    'opacity': 5,
					'fillOpacity': 0.1
                };	

var style4 = {
                    'color': "purple",
                    'weight': 1,
                    'opacity': 5,
					'fillOpacity': 0.1
                };



				
var	grupo1 = L.geoJson(grupo1, {	
              	style: style1		  
                  
              }).addTo(map);
			  
var	grupo2 = L.geoJson(grupo2, {	
              	style: style2		  
                  
              }).addTo(map);

var	grupo3 = L.geoJson(grupo3, {	
              	style: style3		  
                  
              }).addTo(map);
			  
var	grupo4 = L.geoJson(grupo4, {	
              	style: style4		  
                  
              }).addTo(map);	

var geojsonMarkerOptions = {
    radius: 2.4,
    fillColor: "red",
    color: "red",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};
	

	
	
	
	
var markers = L.markerClusterGroup();	
	
 var hp_cant= L.geoJSON(hp_cant, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    }
});                /*.addTo(map);	*/	  
			  
markers.addLayer(hp_cant);
map.addLayer(markers);
map.fitBounds(markers.getBounds());			  

		  
			  

		  








// add location control to global name space for testing only
// on a production site, omit the "lc = "!
lc = L.control.locate({
    strings: {
        title: "Show me where I am, yo!"
    }
}).addTo(map);

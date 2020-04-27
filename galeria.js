/**
 * 
 * @authors Luis Alcántara (hermengaudio@hotmail.com)
 * @date    2020-04-25 03:22:33
 * @version $Id$
 */

	var map = L.map('map',{
		center: [36.194322, -5.343744],
		zoom: 13,
		attributionControl: false,
	});

	L.control.attribution({
		position: 'topright'
	}).addTo(map);

	var OpenStreetMap_Mapnik = L.tileLayer.provider('OpenStreetMap.Mapnik')
	.addTo(map);

	var options = {
		imageServiceAddress: "imagenesGeorreferenciadas.json",
		isOpen: true
	};
	$('#coordinatedImagePreviewControlContainer').CoordinatedImagePreviewControl(options);
	

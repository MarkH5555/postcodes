
let url = "https://api.postcodes.io/postcodes/";
let f1 = $("#field1");
let f2 = $("#field2");
let f3 = $("#field3");
let f4 = $("#field4");
let f5 = $("#field5");

let map;
let myLatLng;
let marker;


clearFields();







function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
	  center: {lat: 54.5, lng: -4}, zoom: 5.8
	});
}

function getData(val) {

	$.get( url + val, function(res, status){

		f1.val(res.result.admin_district);
		f2.val(res.result.region);
		f3.val(res.result.parliamentary_constituency);
		f4.val(res.result.latitude);	
		f5.val(res.result.longitude);

		myLatLng = {lat: res.result.latitude, lng: res.result.longitude};	

		marker = new google.maps.Marker({ position: myLatLng, title: val });

		marker.setMap(map);

	});
}

$(".postcode-button").click(function(){

	let pval = $("#postcode-input").val();

	clearFields();
	f1.val("Postcode not found");

	getData(pval);

});

function clearFields(){
	f1.val(" ");
	f2.val(" ");
	f3.val(" ");
	f4.val(" ");
	f5.val(" ");
}





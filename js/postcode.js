



let url = "https://api.postcodes.io/postcodes/";


clearFields();


function clearFields(){
	$("#field1").val(" ");
	$("#field2").val(" ");
	$("#field3").val(" ");
}


function getData(val) {

	$.get( url + val, function(res, status){

		$("#field1").val(res.result.admin_district);
		$("#field2").val(res.result.region);
		$("#field3").val(res.result.parliamentary_constituency);	

	});
}


$(".postcode-button").click(function(){

	let pval = $("#postcode-input").val();

	clearFields();
	$("#field1").val("Postcode not found");

	getData(pval);

});





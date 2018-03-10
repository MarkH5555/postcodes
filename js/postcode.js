



let url = "https://api.postcodes.io/postcodes/";




function getData(val) {

	$.get( url + val, function(res, status){

		$("#field1").val(res.result.admin_district);

	});
}



$(".postcode-button").click(function(){

	let pval = $("#postcode-input").val();

	getData(pval);

});





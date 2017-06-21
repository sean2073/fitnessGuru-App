$(document).ready(function() {
  var upc = "49000036756";
  var foodItem = "simply lemonade";
  function upcSearch() {
    var queryURL =
      "https://api.nutritionix.com/v1_1/item?upc= " +
      upc +
      "&appId=ab42c57c&appKey=a47f6ab0f0fc20d89c26c58fb6db580d";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
      console.log(response);
      console.log("Calories = " + response.nf_calories);
    });
  }
  function foodSearch() {
    var queryURL =
      "https://api.nutritionix.com/v1_1/search/" +
      foodItem +
      "?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=ab42c57c&appKey=a47f6ab0f0fc20d89c26c58fb6db580d";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
      console.log(response);
      //var respArray = response;
      for (var i = 0; i < 10; i++) {
        console.log("Item Name: " + response.hits[i].fields.item_name);
        console.log("Brand Name: " + response.hits[i].fields.brand_name);
        console.log(
          "Food Search Calories = " + response.hits[i].fields.nf_calories);
        console.log(
          "Serving Size Quantity = " +
            response.hits[i].fields.nf_serving_size_qty);
        console.log(
          "Serving Size Unit = " +
            response.hits[i].fields.nf_serving_size_unit +
            " \n "  );
      }
    });
  }
  upcSearch();
  foodSearch();
}); //closes document.ready function

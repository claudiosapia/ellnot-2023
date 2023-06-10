$(document).ready(function () {
  //on keyup function, when user types in searchbar input
  $(document).on("keyup", "#searchbar", function () {
    // Store user input in variable, convert to lowercase
    let input = $("#searchbar").val().toLowerCase();

    // Get product elements and store them in variable
    const products = $(".product");

    // Loop through array of products
    for (i = 0; i < products.length; i++) {
      // Get product html
      let productText = products[i].innerHTML.toLowerCase();

      // If product innerHtml does not have characters not equal to input
      if (!productText.includes(input)) {
        products[i].style.display = "none";
      } else {
        // Show element
        products[i].style.display = "block";
      }
    }
  });
});

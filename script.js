var Shopping = [];
var TotalItems = [];
var TotalPrice = 0;
$('.buttonBuy').click(function() {
    var itemList = $(".item").val();
    var pricelist = $(".price").val();
    var Price = $(".price").val();
    Price = parseInt(Price);
    TotalPrice = TotalPrice + Price;
    console.log(TotalPrice);
    Shopping.push(itemList);
    TotalItems.push(TotalItems);
    $(".shopList").append("<li>" + itemList + "</li>");
    console.log(itemList.length);
    $(".numberOfItems").text(Shopping.length);
    $(".priceNumber").text(TotalPrice);

});
$("#confirm").click(function() {
    var input = $("#item").val();
    alert("Congratulations! Your order has been Completed! You will pay " + TotalPrice + "$ to pay for " + Shopping[0] + " as well as " + (TotalItems.length - 1) + "  other item(s). Thank you for buying from this amazing store!");
});
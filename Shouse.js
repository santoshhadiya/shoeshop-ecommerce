var list =document.getElementById('list');
var menuico=document.getElementById('click_menu');
 var xIco=document.getElementById('x');
 var icons1=document.getElementById('icons1');
function menushow(){

if(list.style.height=="0px"){
   /*  list.style.display="block"; */
    list.style.height="100vh";
   xIco.style.display="block";
   menuico.style.display="none";
   icons1.style.width="100%";
}
else{
    blockmenu();
  /*   list.style.display="none"; */
}
}
function blockmenu(){
            list.style.height="0px";
  xIco.style.display="none";
  menuico.style.display="block";
  icons1.style.width="0%";
        }


    var menu=document.getElementById('click_menu');

        // Function to add a product to the cart
        function addmycart(x) {
            var id1 = "name" + x;
            var img = "img" + x;
            var price0 = "price" + x;
            var itemname = document.getElementById(id1).textContent;
            var itemprice = parseFloat(document.getElementById(price0).textContent); // Parse price as float
            var img1 = document.getElementById(img).getAttribute("src");
    
            // Dynamically generate ID for quantity span
            var quaid = "changequaspan" + x;
    
            // Add the product to the cart
            document.getElementById("cartproimg").innerHTML += "<div class='products'><img src='" + img1 + "' height='100px' width='100px'></img>" +
                "<div class='component' style='height: 40px; margin-top: 20px'>" +
                " " + itemname + "<span style='margin-left: 50px; margin-right: 40px;'>$" + itemprice.toFixed(2) + "</span>" +
                " <button class='quabtn' onclick='adjustQuantity(" + x + ", -1)'>-</button>" + // Pass the item index and adjust quantity by -1
                "<span class='quacount' id='" + quaid + "'>1</span >" +
                " <button class='quabtn' onclick='adjustQuantity(" + x + ", 1)'>+</button></div></div>";
    
            // Update the total price
            updateTotal();
        }
    
        // Function to adjust the quantity of a product
        function adjustQuantity(index, change) {
            var quaid = "changequaspan" + index;
            var quantitySpan = document.getElementById(quaid);
            var currentQuantity = parseInt(quantitySpan.textContent);
            var newQuantity = currentQuantity + change;
    
            if (newQuantity < 1) {
                alert("Quantity cannot be less than 1");
                return; // Prevent quantity from going negative
            }
    
            quantitySpan.textContent = newQuantity;
    
            // Update the total price after quantity adjustment
            updateTotal();
        }
    
        // Function to update the total price
        function updateTotal() {
            var products = document.querySelectorAll('.component');
            var total = 0;
    
            products.forEach(function(product) {
                var price = parseFloat(product.querySelector('span').textContent.replace('$', ''));
                var quantity = parseInt(product.querySelector('.quacount').textContent);
                total += price * quantity;
            });
    
            // Display the total
            document.getElementById('total').textContent = "Total: $" + total.toFixed(2);
        }
        $(document).ready(function () {
            $(".mycart").hide();
            $(".cart1").hide();
            $(".cartbtn").click(function () {
                $(this).css("background", "linear-gradient(to right, #14da1b, #14d03d)");
                $(this).html("Done!")
            });
            $(".carticon").click(function () {
                $(".heder").hide();
                $(".product").hide();
                $(".about").hide();
                $(".product1").hide();
                $(".mycart").show();
            });
            $("#back").click(function () {
                $(".heder").show();
                $(".product").show();
                $(".about").show();
                $(".product1").show();
                $(".cart1").show();
            })
        });
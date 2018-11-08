var ticPrices = new Array();
ticPrices["small"] = 0;
ticPrices["medium"] = 4;
ticPrices["large"] = 12;

var priceType = new Array();
priceType["slift"] = 13;
priceType["sstairlift"] = 7;
priceType["fstair"] = 2;
priceType["flift"] = 4;

function getType() {
    var price = 0;
    var theForm = document.forms["ticketform"];
    var selectedType = theForm.elements["sl"];
    for (var i = 0; i < selectedType.length; i++) {
        if (selectedType[i].checked) {
            price = priceType[selectedType[i].value];
            break;
        }
    }
    return price;
}

function getPrice() {
    var ticPrice = 0;
    var theForm = document.forms["ticketform"];
    var selectedSize = theForm.elements["size"];
    for (var i = 0; i < selectedSize.length; i++) {
        if (selectedSize[i].checked) {
            ticPrice = ticPrices[selectedSize[i].value];
            break;
        }
    }
    return ticPrice;
}

function calculateTotal() {
    var qty = document.getElementById("quantity").value;
    var total = (getPrice() + getType()) * qty;
    var divObj = document.getElementById("totalPrice");
    divObj.style.display = "block";
    divObj.innerHTML = "Total price for your order is $" + total;
}

function hideTotal() {
    var divobj = document.getElementById('totalPrice');
    divobj.style.display = 'none';
}
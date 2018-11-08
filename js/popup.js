/* VALIDATING FORM */
function CheckForm(e) {
    var firstName = $('input[name="firstName"]').val();
    if (firstName === "") {
        alert("Please enter a valid first name!");
        e.preventDefault();
        return false;
    };
    var lastName = $('input[name="lastName"]').val();
    if (lastName === "") {
        alert("Please enter a valid last name!");
        e.preventDefault();
        return false;
    };
    var email = $('input[name="email"]').val();
    // if (email === "" || email !== ("/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/").test(email)) {
    if (email === "" || email === null) {
        alert("Please enter a valid email!");
        e.preventDefault();
        return false;
    };
    var choice = $('select[name="TourType"]').val();
    if (choice === "") {
        alert("Please enter your choice of tour!");
        e.preventDefault();
        return false;
    }
    var age = $('input[name="age"]').val();
    if (age === "") {
        alert("Please enter a valid age!");
        e.preventDefault();
        return false;
    }
    var country = $('input[name="countryName"]').val();
    if (country === "")  {
        alert("Please enter your country!");
        e.preventDefault();
        return false;
    }
    var startDate = $('input[name="fromDate"]').val();
    if (startDate === "")  {
        alert("Please enter a valid tour start date!");
        e.preventDefault();
        return false;
    }
    var endDate = $('input[name="toDate"]').val();
    if (endDate === "")  {
        alert("Please enter a valid tour end date!");
        e.preventDefault();
        return false;
    }
    var noOfParticipants = $('input[name="noParticipants"]').val();
    if (noOfParticipants === "")  {
        alert("Please enter the number of participants!");
        e.preventDefault();
        return false;
    }
    return true;
};


/* Check Date */
function Today() {
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();

    if (day < 10) {
        day = "0" + day;
    }
    if (month < 10) {
        month = "0" + month;
    }

    today = year + '-' + month + '-' + day;
    document.getElementById("date").setAttribute("min", today);
};


/* CALLING FUNCTIONS */
$(document).ready(function () {
    $(".btnOpen").click(function (e) {
        ShowDialog(false);
        e.preventDefault();
    });

    $(".btnClose").click(function (e) {
        HideDialog();
        e.preventDefault();
        $("#totalPriceBefore").empty();
        $("#totalPriceAfter").empty();
        $("#selected").empty();
        $("#price").empty();
    });

    $(".btnSubmit").click(function (e) {
        var email = $('input[type="email"]').val();

        if (CheckForm(e)) {
            if (window.location.pathname == "/naeroyfjord.html") {
                alert ("Thank you for participating! An email will be sent to " + email + " to confirm your participation.");
            }
            else if (window.location.pathname == "/naeroyfjordform.html") {
                alert ("An email will be sent to redirect you to the next selection screen.\nThank you for choosing Fjord Tours!");
            }

            e.preventDefault();
            HideDialog();
            $(this).closest('form').find("input:not(input[type='submit'])").val("");
        }
    });

    $("#modal_wrapper").click(function (e) {
        HideDialog();
        $("#totalPriceBefore").empty();
        $("#totalPriceAfter").empty();
        $("#selected").empty();
        $("#price").empty();
        e.preventDefault();
    });
});


/* IMPLEMENTING FUNCTIONS */
var modalWrapper = document.getElementById("modal_wrapper");
var modalWindow  = document.getElementById("modal_window");

 function ShowDialog(e) {
    $("#modal_wrapper").show();
    $("#modal_window").fadeIn(300);
    $("html").css('overflow', 'fixed');

    modalWrapper.className = "overlay";
    var overflow = modalWindow.offsetHeight - document.documentElement.clientHeight;
    if(overflow > 0) {
        modalWindow.style.maxHeight = (parseInt(window.getComputedStyle(modalWindow).height) - overflow) + "px";
    }
    modalWindow.style.marginTop = (-modalWindow.offsetHeight)/2 + "px";
    modalWindow.style.marginLeft = (-modalWindow.offsetWidth)/2 + "px";
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
}

function HideDialog() {
    $("#modal_wrapper").hide();
    $("#modal_window").fadeOut(300);
}


/* FIND BUTTON CLICKED */
$(function(){
    $("a[href='#']").click(function(){
        var selectedTour = $(this).attr('id');
        var price = 0;
        if (selectedTour === "firstTour") {
            $("#selected").append("Norway in a nutshell");
            price = 1600;
            $("#price").append("Note: NOK 1600,-/person");
        }
        else if (selectedTour === "secondTour") {
            $("#selected").append("Sognefjord & Nærøyfjord in a nutshell");
            price = 1720;
            $("#price").append("Note: NOK 1720,-/person");
        }
        else if (selectedTour === "thirdTour") {
            $("#selected").append("Hurtigruten & Norway in a nutshell");
            price = 5960;
            $("#price").append("Note: NOK 5960,-/person");
        }
        else if (selectedTour === "fourthTour") {
            $("#selected").append("Pulpit Rock & Norway in a nutshell");
            price = 3250;
            $("#price").append("Note: NOK 3250,-/person");
        }
        else if (selectedTour === "fifthTour") {
            $("#selected").append("Northern Lights & Norway in a nutshell");
            price = 10220;
            $("#price").append("Note: NOK 10220,-/person");
        }

        /* FIND PRICE */
        $("#noParticipants").change(function() {
              var numberOfParticipants = $("#noParticipants").val();
              var totalPriceBefore = price * numberOfParticipants;
              var totalPriceAfter = totalPriceBefore * 0.9;
              $("#totalPriceBefore").html("Total price before discount: NOK " + totalPriceBefore + ",-");
              $("#totalPriceAfter").html("Total price after 10% discount: NOK " + totalPriceAfter + ",-");
        });
    });
});

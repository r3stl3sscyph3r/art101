// index.js - lab 15
// Author: salem hunstable
// Date: 6/02/24


$(document).ready(function() {
    $('#activate').click(function() {
        $.ajax({
            url: "https://yesno.wtf/api",
            type: "GET",
            dataType: "json",
            success: function(data) {
                $('#output').text(data.answer);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log("Error:", textStatus, errorThrown);
            }
        });
    });
});
var gen_button;
var input_textarea;
var output_textarea;

$(document).ready(function() {
    gen_button = $("#generate_button");
    input_textarea = $("#input_textarea");
    output_textarea = $("#output_textarea");

    gen_button.on("click", function() {
        GenerateWhitespace(input_textarea.val());
    });
});

function GenerateWhitespace(input_string) {
    var output_string = "";

    
}
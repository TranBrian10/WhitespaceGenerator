//Allows for String.format
//ex. String.format('{0} is dead, but {1} is alive! {0} {2}', 'ASP', 'ASP.NET');
//---> ASP is dead, but ASP.NET is alive! ASP {2}
if (!String.format) {
  String.format = function(format) {
    var args = Array.prototype.slice.call(arguments, 1);
    return format.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number] 
        : match
      ;
    });
  };
}

/////////////////////////////////////////////////////////////////////////////////

var gen_button;
var input_textarea;
var output_textarea;
var output_char_template = "   {0}\n\t\n  "; //Only {0} changes between characters, dependent on ASCII value

$(document).ready(function() {
    //Set cached selectors and activate listener
    gen_button = $("#generate_button");
    input_textarea = $("#input_textarea");
    output_textarea = $("#output_textarea");

    gen_button.on("click", function() {
        GenerateWhitespace(input_textarea.val());
    });
});

function GenerateWhitespace(input_string) {
    var output_string = "";

    for (var i = 0; i < input_string.length; i++) {
        var binary_character_string = input_string.charAt(i).charCodeAt(0).toString(2);
        var whitespace_char_string = "";

        //Generates a character's Whitespace representation that will be inserted into the output tenplate
        for (var j = 0; j < binary_character_string.length; j++) {
            if (binary_character_string.charAt(j) == '0') {
                //Spaces represent binary zero in a Whitespace number
                whitespace_char_string += " ";
            }
            else if (binary_character_string.charAt(j) == '1') {
                //Tabs represent binary one in a Whitespace number
                whitespace_char_string += "\t";
            }
        }

        output_string += String.format(output_char_template, whitespace_char_string);
    }

    output_string += "\n\n\n";
    
    output_textarea.val(output_string);
}
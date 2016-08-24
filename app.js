var g = G$();

// g.greet().log().setLang('sp').greet(true).log().HTMLGreeting($('#greeting'), true);

var formal = $('#formal').val() === "true";
var language = $('#lang').val();
g.HTMLGreeting($('#greeting'), formal, language);

$('#logindiv').on('change', function() {
    formal = $('#formal').val() === "true";
    language = $('#lang').val();
    g.HTMLGreeting($('#greeting'), formal, language).log();
});

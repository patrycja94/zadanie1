$(document).ready(function() {
    let gsearch = function() {
        let url = 'https://www.google.com/search?q=' + document.getElementById('searchme').value;
        window.open(url, 'google');
    };
    let glucky = function() {
        let url = 'https://www.google.com/search?q=' + document.getElementById('searchme').value + '&btnI';
        window.open(url, 'google');
    };

    $(".left").click(gsearch);
    $(".right").click(glucky);

    $("#searchme").keypress(function(e) {
        if (e.which == 13) {
            gsearch();
        }
    });
});
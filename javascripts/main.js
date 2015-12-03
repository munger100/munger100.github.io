// Add all the drop down menus for all the menus

$(document).ready(function () {
    var completed = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var list = document.getElementById("list");
    var list_innerHTML = null;
    completed.forEach(function (num) {
        list_innerHTML = list.innerHTML;
        list.innerHTML = list_innerHTML +
            '<li id="' + num + '">' +
            '<h4 class="number">Problem #' + num + '</h4>' +
            '<div class="hider">' +
            '<h4 class="problemdesc"><a href="http://projecteuler.net/problem=' + num + '" target="_blank">Problem Description</a> </h4>' +
            '<h4 class=problemscript"><a href="https://github.com/munger100/ProjectEulerPython/blob/master/' + num + '.py" target="_blank">Problem Script</a></h4>' +
            '</div>' +
            '</li>';
    });


    // Drop Down Menu
    $('li').each(function (i) {
        var sub_ul = $(this).find("div.hider");
        $(this).click(function () {
            sub_ul.toggle();
        });
        sub_ul.hide();
    });

});
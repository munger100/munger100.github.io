// Add all the drop down menus for all the menus

$(document).ready(function () {
    var completed = [79, 104, 92, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 25, 28, 30, 34, 39, 42, 48, 52, 54, 56];
    completed.sort(function(a, b){return a-b});
    var list = document.getElementById("list");
    completed.forEach(function (num) {
        list.innerHTML +=
            '<li id="' + num + '">' +
            '<h4 class="number">Problem #' + num + '</h4>' +
            '<div class="hider">' +
            '<h4 class="problemdesc"><a href="http://projecteuler.net/problem=' + num + '" target="_blank">Problem Description</a> </h4>' +
            '<h4 class=problemscript"><a href="https://github.com/munger100/ProjectEulerPython/blob/master/Completed/' + num + '.py" target="_blank">Problem Script</a></h4>' +
            '</div>' +
            '</li>';
    });


    // Drop Down Menu
    $('li').each(function (i) {
        var sub_ul = $(this).find("div.hider");
        $(this).find(".number").click(function () {
            sub_ul.toggle();
        });
        sub_ul.hide();
    });

});
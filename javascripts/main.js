// Add all the drop down menus for all the menus

$(document).ready(function () {
    $("#list").html("<p>nothing</p>");
    // Drop Down Menu
    $(function () {
        $('li > ul').each(function (i) {
            var parent_li = $(this).parent('li');
            parent_li.addClass('folder');
            var sub_ul = $(this).remove();
            parent_li.wrapInner('<a/>').find('a').click(function () {
                sub_ul.toggle();
            });
            parent_li.append(sub_ul);
        });
        $('ul ul').hide();
    });
    /*
     $.get("data.json", function(data) {
     jsondata = JSON.parse(data);
     console.log(jsondata);
     });
     */
});
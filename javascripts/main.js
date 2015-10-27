// Login
<<<<<<< HEAD
$(document).ready(function(){
    $(function() {
        $('li > ul').each(function(i) {
            var parent_li = $(this).parent('li');
            parent_li.addClass('folder');
            var sub_ul = $(this).remove();
            parent_li.wrapInner('<a/>').find('a').click(function() {
                sub_ul.toggle();
            });
            parent_li.append(sub_ul);
        });
        $('ul ul').hide();
    });
    $.get("data.json", function(data) {
        jsondata = JSON.parse(data);
        console.log(jsondata);
    });
});
=======
function check(form)/*function to check userid & password*/
{
    /*the following code checks whether the entered userid and password are matching*/
    if(form.userid.value == "munger100" && form.pwd.value == "Matthew11")
    {
        window.location = "edit.html" /*opens the target page while Id & password matches*/
    }
    else
    {
        alert("Error Password or Username")/*displays error message*/
    }
}
>>>>>>> 3eb5fe293a34d2e80641ac3cdd79751b019473ee

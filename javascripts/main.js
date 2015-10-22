// Login
function check(form)/*function to check userid & password*/
{
    /*the following code checks whether the entered userid and password are matching*/
    if(form.userid.value == "munger100" && form.pwd.value == "Matthew11")
    {
        window.open("./edit.html", "_top")/*opens the target page while Id & password matches*/
    }
    else
    {
        alert("Error Password or Username")/*displays error message*/
    }
}
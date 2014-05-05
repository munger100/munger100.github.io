/**
 * Created by matthew on 4/23/2014.
 */
window.onload = function () {

    var red = [0, 100, 63];
    var orange = [40, 100, 60];
    var green = [75, 100, 40];
    var blue = [196, 77, 55];
    var purple = [280, 50, 60];
    var yellow = [255, 255, 0];
    var black = [0, 0, 0];
    var input = document.getElementById('input');
    var canvas = document.getElementById('myCanvas');
    var myName = "Like A Boss ;)";
    var letterColors = [black, purple, blue];
    var button = document.getElementById('submit');

    bubbleShape = "circle";

    function setup()
    {
        drawName(myName, letterColors);
        bounceBubbles();
    }
    setup();

    button.addEventListener("click", function ()
    {
        myName = input.innerHTML;
        setup();
    });
};


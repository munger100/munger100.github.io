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
    var input = document.getElementById('input').value;
    var canvas = document.getElementById('myCanvas');
    var myName = "Meggs is smelly";
    var letterColors = [red, orange, blue];

    bubbleShape = "circle";

    drawName(myName, letterColors);
    bounceBubbles();

    input.addEventListener("change", function ()
    {
        myName = input.innerHTML;
        drawName(myName, letterColors);
        bounceBubbles();
    });
};


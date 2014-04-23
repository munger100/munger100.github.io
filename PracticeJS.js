// Created by matthew on 4/14/2014

window.onload = function () {

    var x = 1;
    var y = 2;
    var z = x + y;
    //var input = prompt("hello", "sup?");


    button = document.getElementById("button");
    button.addEventListener("click", clicked());
    function clicked() {
        alert(input);
    }


    input = document.getElementById('input');
    canvas = document.getElementById('myCanvas')
    input.addEventListener("change", changeIt());
    function changeIt()
    {
        canvas.innerHTML = input.innerHTML;
    }
};

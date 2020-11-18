
// variables of generate, speed and size
var input_arr = document.getElementById("array_size");

var arr_size = input_arr.value;

var input_gen = document.getElementById("array_generate");
var input_speed = document.getElementById("array_speed");

// get all algo node
var algo_butt = document.querySelectorAll(".sort_algorithm input");

// create array
var div_sizes = [];
var divs =[]
var margin_size = 0.1;
var cont = document.getElementById("array_container"); // parent


input_gen.addEventListener("click", generate_arr);

function generate_arr(){
    cont.innerHTML="";
    for(var i = 0; i< arr_size;i++) {
        div_sizes[i] = Math.floor(Math.random() * 0.5 *(input_arr.max-input_arr.min)) + 10; // random hight of each column
        divs[i] = document.createElement("div");
        divs[i].setAttribute("class","col");
        cont.appendChild(divs[i]); // add div under array_container
        divs[i].style=" margin: " + margin_size + "%; width:" + (100/arr_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%; background-color:lightyellow;";
    }
};

input_arr.addEventListener("input", update_arr);

function update_arr() {
    arr_size=input_arr.value;
    generate_arr();
}

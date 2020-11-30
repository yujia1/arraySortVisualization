// variables of generate, speed and size
var input_arr = document.getElementById("array_size");

var arr_size = input_arr.value;

var input_gen = document.getElementById("array_generate");
var input_speed = document.getElementById("array_speed");

// get all algo node
var algo_butt = document.querySelectorAll(".sort_algorithm button");

// create array
var div_sizes = [];
var divs = [];
var margin_size = 0.1;
var cont = document.getElementById("array_container"); // parent
cont.style = "flex-direction:row";

input_gen.addEventListener("click", generate_arr);
input_arr.addEventListener("input", update_arr);

function generate_arr() {
    cont.innerHTML = "";
    for (var i = 0; i < arr_size; i++) {
        div_sizes[i] = Math.floor(Math.random() * 0.5 * (input_arr.max - input_arr.min)) + 10; // random height of each column
        divs[i] = document.createElement("div");

        cont.appendChild(divs[i]); // add div under array_container
        margin_size = 0.1;
        divs[i].style = " margin: 0%" + margin_size + "%; background-color:lightyellow ; width:" + (100 / arr_size - (2 * margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
};



function update_arr() {
    arr_size = input_arr.value;
    generate_arr();
}

window.onload = update_arr();


for (var i = 0; i < algo_butt.length; i++) {
    algo_butt[i].addEventListener("click", runalgo);
}

function disable_button() {
    for (var i = 0; i < algo_butt.length; i++) {

        algo_butt[i].classList = [];
        algo_butt[i].classList.add("butt_locked");

        algo_butt[i].disable = true;
        input_arr.disable = true;

        input_gen.disable = true;
        input_speed.disable = true;

    }
}

function runalgo() {
    disable_button();
    this.classList.add("butt_selected");
    switch (this.innerHTML) {
        case "Merge Sort": Merge();
            break;

        case "Quick Sort": quickSort();
            break;

        case "Insertion Sort": insertion();
            break;

        case "Selection Sort": selection();
            break;
    }
}
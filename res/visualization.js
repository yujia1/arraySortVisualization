

var speed = 1000;

input_speed.addEventListener("input", vis_speed);

function vis_speed() {
    var arr_speed = input_speed.Value;
    switch (parseInt(arr_speed)) {
        case 1: speed = 1;
            break;
        case 2: speed = 10;
            break;
        case 3: speed = 10;
            break;
        case 4: speed = 1000;
            break;
        case 1: speed = 10000;
            break;
    }
    delay_time = 10000 / (Math.floor(arr_size / 10) * speed);
};

var delay_time = delayTime = 10000 / (Math.floor(arr_size / 10) * speed);

var vis_delay = 0;


function div_update(cont, height, color) {
    window.setTimeout(function () {
        var width = (100 / arr_size - (2 * margin_size));
        cont.style = " margin:0% " + margin_size + "%; height:" + height + "%; background-color:" + color + "; width: " + width + "%;";
    }, vis_delay += delay_time);
}

function enable_buttons() {
    window.setTimeout(function () {
        for (var i = 0; i < algo_butt.length; i++) {
            algo_butt[i].classList = [];
            algo_butt[i].classList.add("butt_unselected");
            algo_butt[i].disable = false;
            input_arr.disable = false;
            input_gen.disable = false;
            input_speed.disable = false;
        }
    }, vis_delay += delay_time)
}

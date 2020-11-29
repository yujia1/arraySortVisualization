

function insertion() {
    vis_delay = 0;

    for (var i = 0; i < arr_size; i++) {
        div_update(divs[i], div_sizes[i], "lightyellow"); // update color

        var p = div_sizes[i];
        var j = i - 1;
        while (j >= 0 && div_sizes[j] > p) {
            div_update(divs[j], div_sizes[j], "green");
            div_update(divs[j + 1], div_sizes[j + 1], "green");

            div_sizes[j + 1] = div_sizes[j]; // swap div elements 

            div_update(divs[j], div_sizes[j], "green"); // update height
            div_update(divs[j + 1], div_sizes[j + 1], "green");

            div_update(divs[j], div_sizes[j], "green");
            if (j == (i - 1)) {
                div_update(divs[j + 1], div_sizes[j + 1], "lightyellow");
            } else {
                div_update(divs[j + 1], div_sizes[j + 1], "green");
            }
            j -= 1;
        }
        div_sizes[j + 1] = p;

        for (var q = 0; q < i; q++) {
            div_update(divs[q], div_sizes[q], "lightyellow");
        }
    }
    div_update(divs[i - 1], div_sizes[i - 1], "lightyellow")

    enable_buttons();
}
function insertion() {
    vis_delay = 0;

    for (var i = 0; i < arr_size; i++) {
        div_update(divs[i], div_sizes[i], "#800020"); // update color

        var p = div_sizes[i];
        var j = i - 1;
        while (j >= 0 && div_sizes[j] > p) {
            div_update(divs[j], div_sizes[j], "#d4af37");
            div_update(divs[j + 1], div_sizes[j + 1], "#d4af37");

            div_sizes[j + 1] = div_sizes[j]; // swap div elements 

            div_update(divs[j], div_sizes[j], "#d4af37"); // update height
            div_update(divs[j + 1], div_sizes[j + 1], "#d4af37");

            div_update(divs[j], div_sizes[j], "#d4af37");
            if (j == (i - 1)) {
                div_update(divs[j + 1], div_sizes[j + 1], "#800020");
            } else {
                div_update(divs[j + 1], div_sizes[j + 1], "#d4af37");
            }
            j -= 1;
        }
        div_sizes[j + 1] = p;

        for (var q = 0; q < i; q++) {
            div_update(divs[q], div_sizes[q], "#800020");
        }
    }
    div_update(divs[i - 1], div_sizes[i - 1], "#800020")

    enable_buttons();
}
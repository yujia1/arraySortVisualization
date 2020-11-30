function quickSort() {
    vis_delay = 0;
    sort(0, arr_size - 1);
    enable_buttons();
}

function partition(start, end) {
    var i = start + 1;
    var piv = div_sizes[start];

    div_update(divs[start], div_sizes[start], "#d4af37");

    for (var j = start + 1; j <= end; j++) {
        if (div_sizes[j] < piv) {
            div_update(divs[j], div_sizes[j], "#d4af37");
            div_update(divs[i], div_sizes[i], "#d4af37");
            div_update(divs[j], div_sizes[j], "#d4af37");

            var temp = div_sizes[i];
            div_sizes[i] = div_sizes[j];
            div_sizes[j] = temp;

            div_update(divs[i], div_sizes[i], "#d4af37");
            div_update(divs[j], div_sizes[j], "#d4af37");
            div_update(divs[i], div_sizes[i], "#d4af37");
            div_update(divs[j], div_sizes[j], "#d4af37");

            i += 1;
        }
    }

    div_update(divs[start], div_sizes[start], "#d4af37");
    div_update(divs[i - 1], div_sizes[i - 1], "#d4af37");

    var temp = div_sizes[start];
    div_sizes[start] = div_sizes[i - 1];
    div_sizes[i - 1] = temp;

    div_update(divs[start], div_sizes[start], "#d4af37");
    div_update(divs[i - 1], div_sizes[i - 1], "#d4af37");

    for (var t = start; t <= i; t++)
        div_update(divs[t], div_sizes[t], "#800020");

    return i - 1;
}

function sort(start, end) {
    if (start < end) {
        var piv_pos = partition(start, end);

        sort(start, piv_pos - 1);
        sort(piv_pos + 1, end);
    }
}
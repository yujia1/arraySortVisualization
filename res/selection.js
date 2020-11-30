function selection() {
    vis_delay = 0;
    for (var i = 0; i < arr_size - 1; i++) {
        /* find the min element in the unsorted a[i .. aLength-1] */
        /* assume the min is the first element */
        div_update(divs[i], div_sizes[i], "lightyellow");
        var min = i; //minimum index
        /* test against elements after i to find the smallest */
        for (var j = i + 1; j < arr_size; j++) {
            div_update(divs[j], div_sizes[j], "green");
            //     /* if this element is less, then it is the new minimum */
            if (div_sizes[j] < div_sizes[min]) {
                /* found new minimum; remember its index */
                if (min != i) {
                    div_update(divs[j], div_sizes[j], "green")
                }
                min = j;
                div_update(divs[min], div_sizes[min], "green");
            } else {
                div_update(divs[j], div_sizes[j], "green");
            }
        }
        if (div_sizes[min] != div_sizes[i]) {
            // Swapping the elements
            var tmp = div_sizes[i];
            div_sizes[i] = div_sizes[min];
            div_sizes[min] = tmp;
        }
        div_update(divs[i], div_sizes[i], "lightyellow");
    }
    div_update(divs[i], div_sizes[i], "lightyellow");
    enable_buttons();
}
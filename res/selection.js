function selection() {
    vis_delay = 0;
    for (var i = 0; i < arr_size - 1; i++) {
        /* find the min element in the unsorted a[i .. aLength-1] */
        /* assume the min is the first element */
        div_update(divs[i], div_sizes[i], "#800020");
        var min = i; //minimum index
        /* test against elements after i to find the smallest */
        for (var j = i + 1; j < arr_size; j++) {
            div_update(divs[j], div_sizes[j], "#d4af37");
            //     /* if this element is less, then it is the new minimum */
            if (div_sizes[j] < div_sizes[min]) {
                /* found new minimum; remember its index */
                if (min != i) {
                    div_update(divs[j], div_sizes[j], "#d4af37")
                }
                min = j;
                div_update(divs[min], div_sizes[min], "#d4af37");
            } else {
                div_update(divs[j], div_sizes[j], "#d4af37");
            }
        }
        if (div_sizes[min] != div_sizes[i]) {
            // Swapping the elements
            var tmp = div_sizes[i];
            div_sizes[i] = div_sizes[min];
            div_sizes[min] = tmp;
        }
        div_update(divs[i], div_sizes[i], "#800020");
    }
    div_update(divs[i], div_sizes[i], "#800020");
    enable_buttons();
}
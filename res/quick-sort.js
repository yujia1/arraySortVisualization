function quickSort() {
    vis_delay = 0;

    sort(0, arr_size - 1);

    enable_buttons();
}


function partition(array, low, high) {
    let pivot = array[high];

    let i = (low - 1);

    for (let j = low; j < high; j++) {
        if (array[j] < pivot) {
            i++;

            let temp = array[i];

            array[i] = array[j];
            array[j] = temp;
        }
    }

    let temp = array[i + 1];

    array[i + 1] = array[high];
    array[high] = temp;

    return i + 1;
}


function sort(array, low, high) {
    if (low < high) {
        let pi = partition(array, low, high);

        sort(array, low, pi - 1);
        sort(array, pi + 1, high);
    }
}
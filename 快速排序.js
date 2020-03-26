function quickSort (arr) {
    sort(arr, 0, arr.length - 1);
}

function sort (arr, lo, hi) {

    if (lo > hi) return;

    let i = lo;
    let j = hi;
    const key = arr[lo];

    while (i < j) {

        while (i < j && arr[j] > key) j--;
        if (j > i) {
            arr[i] = arr[j];
            i++;
        }
        while (i < j && arr[i] < key) i++;
        if (j > i) {
            arr[j] = arr[i];
            j--;
        }

    }

    arr[i] = key;

    sort(arr, lo, i - 1);
    sort(arr, i + 1, hi);

}

const arr = [1, 3, 5, 3, 56, 22, 56, 234, 2, 55, 6]
quickSort(arr)
console.log(arr);
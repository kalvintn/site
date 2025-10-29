// grab
let gamearea = document.querySelector(".gamearea");
let trace = document.querySelector(".trace");
let options = document.querySelector(".options");


let array = [74, 22, 12, 13, 14, 2, 7, 24, 100, 24, 67];




// Go through each array element in order; O(n)
function linear_search(arr, target){
    let size = arr.length;

    for(let i = 0; i < size; i++){
        if(array[i] == target){
            return i;
        }
    }

    return -1;
}



// Jump a fixed block ahead on less than target; O(sqrt(n))
function jump_search(arr, target) {
    let arr_size = arr.length;
    let block_size = Math.floor(Math.sqrt(arr_size));
    let start = 0;
    let end = 0;

    // Increment by block until it may contain target
    while(arr[end] < target){
        start = end;
        end = end + block_size;

        // target larger than last array element
        if(start > arr_size - 1) {
            return -1;
        }
    }

    // Linear search through block for target
    while(start <= end && start <= arr_size){
        if(arr[start] == target){
            return start;
        } 
        start = start + 1;
    }

    return -1;
}



// Continually search middle of left or right halves until found; O(log n)
function binary_search(arr, target){
    let l = 0;
    let r = arr.length - 1;
    
    while(l <= r){
        let mid = Math.floor((l + r) / 2);

        if(arr[mid] == target){
            return mid;
        }
        
        if(arr[mid] < target){ // center < target
            l = mid + 1;
        }
        else if(arr[mid] > target){ // center > target
            r = mid - 1;
        }
    }

    return -1;
}



// Mathematical determiniation of target's predicted location; O(log(log n))
function interpolation_search(arr, target) {
    let arr_size = arr.length;
    let l = 0;
    let r = arr_size - 1;

    while(l <= r){
         // Prevent division by zero
         if (arr[l] === arr[r]) {
            if (arr[l] === target) {
                return l;
            } else {
                break;
            }
        }

        // Calculation for most optimal jump destination
        let pos = l + Math.floor(( (r - l) * (target - arr[l]) / (arr[r] - arr[l]) ));

        if (arr[pos] == target) {
            return pos;
        }

        if(arr[pos] < target){
            l = pos + 1;
        }
        else if(arr[pos] > target){
            r = pos - 1;
        }
    }

    return -1;
}









// Build a sorted array one at a time; O(n^2)
function insertion_sort(arr){
    let array = arr.slice();

    // An array of 0 or 1 is sorted
    if(array.length < 2) return array;

    for(let i = 0; i < array.length; i++){
        for(let j = i + 1; j >= 0; j--){
            if(array[j] > array[i] !== (j == 0)){
                let temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        }
    }

    return array;
}



// Lowest value to the front of the array; O(n^2)
function selection_sort(arr){
    let array = arr.slice();

    for(let i = 0; i < array.length; i++){
        let smallest = i;
        for(let j = i + 1; j < array.length; j++){
            if(array[j] < array[smallest]){
                smallest = j;
            }
        }
        // perform swap
        let temp = array[i];
        array[i] = array[smallest];
        array[smallest] = temp;
    }

    return array;
}











console.log(selection_sort(array));






// structure buttons -> load respective algorithm buttons
function getOptions(type){
    return 0;
}









// Searching
// Linear Search            any data
// Jump Search              sorted data
// Binary Search            sorted data
// Interpolation Search     uniformly distributed, sorted data


// Sorting Algorithms

// Comparison-Based
// O(n^2): Selection, Insertion, Bubble, Cocktail Shaker, Comb
// O(nlogn): Quick, Merge, Shell

// Non-comparison Based
// Radix sort, Bucket Sort, Counting Sort, Heap Sort
// Spaghetti sort, Gravity Sort, Pancake Sort

// Wacko Mode
// Cycle Sort, Odd-Even, Patience, Cartesian Sort, Gnome Sort, Sleep sort, Bogo Sort
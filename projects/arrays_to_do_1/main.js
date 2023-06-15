function pushFront(arr, num){
    for(let i = arr.length; i > 0; --i){
        arr[i] = arr[i-1];
    }
    arr[0] = num;
    return arr;
}

function popFront(arr){
    console.log(arr[0]);
    for(let i = 0; i < arr.length - 1; ++i){
        arr[i] = arr[i + 1];
    }
    arr.pop();
    console.log(arr);
}

function insertAt(arr, index, num){
    for(let i = arr.length; i > index; i--){
        arr[i] = arr[i - 1];
    }

    arr[index] = num;
    
    return arr;
}

let arr = [9, 33, 7];

console.log(pushFront(arr, 27));

popFront(arr);

console.log(insertAt(arr, 1, 42));
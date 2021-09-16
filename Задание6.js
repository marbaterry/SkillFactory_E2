let arr = [1, 5, 1, 1];

let result = true;
for (let i = 0; i < arr.length; i = i + 1){
    for (j = i + 1; j< arr.length; j = j +1){
        if (arr[i] !== arr[j]){
            result = false
        }
        // if (arr[i] == arr[j]){
        //     console.log(true)
        // }else{
        //     console.log(false)
        // }
    }
}
console.log(result)



let array = [45, 27, 57, 1330, 650, 800, 200, 70, 945, 54];


for (let a = 1; a < array.length; a++){
    for (let b = 0; b < a; b++){
        if (array[b] > array[a]){
            let major = array[a];
            array[a] = array[b];
            array[b] = major;
        }
    }
}

console.log(array)


for (let a = 1; a < array.length; a++){
    for (let b = 0; b < a; b++){
        if (array[b] < array[a]){
            let major = array[b];
            array[b] = array[a];
            array[a] = major;
        }
    }
}

console.log(array)


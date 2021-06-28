let array = [1, 2, 3, 4];

console.log(array.reduce(function (c, v) {
    c = c + v;
    // console.log(c)
    return c
}, 0))
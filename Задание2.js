let x;
x = true
console.log(typeof(x))
if (typeof(x) === 'number'){
    console.log("X — число")
}else if (typeof(x) === 'string'){
    console.log("X - строка")
}else if (typeof(x) === 'boolean'){
    console.log("X - булевое")
}else{
    console.log("Тип x не определён")
}

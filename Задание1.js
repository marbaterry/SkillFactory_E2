userValue = prompt('Enter you value')
userValue = Number(userValue)
console.log(userValue)

if (typeof(userValue) === 'number' && !isNaN(userValue )){
    result = userValue % 2 === 0 ? "Число четное" : "Число нечетное"
    console.log(result)
    alert(result)
}else {
    console.log("Упс, кажется, вы ошиблись")
    alert("Упс, кажется, вы ошиблись")
}


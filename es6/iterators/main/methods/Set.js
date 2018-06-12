const colors = new Set(['red', 'green', 'blue']);  

for (let entrie of colors.entries()) {
    console.log(entrie); // ["red", "red"] ["green", "green"] ["blue", "blue"]
}

// ключом для множества является строчное представление значения
for (let key of colors.keys()) {
    console.log(key);  // red  green  blue
}

for (let val of colors.values()) {
    console.log(val);  // red  green  blue
}
const colors = ['red', 'green', 'blue'];

// в данном случае используется уже не итератор по умолчанию,
// а итератор который возвращается с помощью entries(пары ключ - значение)
for (let entry of colors.entries()) {
    console.log(entry); // [0, 'red']  [1, 'green']  [2, 'blue']
}

for (let entry of colors.keys()) {
    console.log(entry); // 0  1  2
}

for (let val of colors.values()) {
    console.log(val);  // red  green  blue
}
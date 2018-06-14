const str = '\uD83D\uDE80';
console.log(str.length); // 2

for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

for (let s of str) {
    console.log(s);
}
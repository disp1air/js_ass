const data = new Map();
data.set('title', 'Modern Javascript');
data.set('format', 'ebook');

for (let entrie of data.entries()) {
    console.log(entrie); // ["title", "Modern Javascript"] ["format", "ebook"]
}

for (let key of data.keys()) {
    console.log(key);  //  title  format
}

for (let val of data.values()) {
    console.log(val);  //  Modern Javascript ebook
}
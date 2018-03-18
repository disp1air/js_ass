var user = {
  firstName: 'Vasya',
  sayHi: function() {
    alert(this.firstName);
  }
}

setTimeout(user.sayHi, 1000);  // undefined(контекст метода утерян)

// 1-ый способ - обернуть вызов в анонимную функцию
// в этом случае user достается из замыкания
setTimeout(function() {
    user.sayHi();
}, 1000);

// 2-ой способ bind
setTimeout(user.sayHi.bind(user), 1000);

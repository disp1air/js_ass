https://learn.javascript.ru/symbol  
https://habr.com/company/ruvds/blog/359004/  
https://habr.com/post/255137/  

Новый **примитивный тип данных** Symbol служит для создания уникальных идентификаторов. Создание осуществляется не как new Symbol(), а просто Symbol(), так как это – примитив.  

                  let sym = Symbol();
                  console.log(typeof sym);  // symbol

Каждый символ – уникален. У функции Symbol есть необязательный аргумент "имя символа". Его можно использовать для описания символа, в целях отладки:

                  let sym2 = Symbol("name");
                  console.log(sym2);  // Symbol(name)

Если у двух символов одинаковое имя, то это не значит, что они равны:

                  const symbol_1 = Symbol("name");
                  const symbol_2 = Symbol("name");
                  console.log(symbol_1 === symbol_2); // false 

Если хочется из разных частей программы использовать именно одинаковый символ, то можно передавать между ними объект символа или же – использовать "глобальные символы" и "реестр глобальных символов".

                  // создание символа в реестре
                  let name = Symbol.for("name");

                  // символ уже есть, чтение из реестра
                  alert( Symbol.for("name") == name ); // true

Для чтения (или создания, при отсутствии) "глобального" символа служит вызов Symbol.for(имя)(синглтон):

                  const symbol_1 = Symbol.for("name");
                  const symbol_2 = Symbol.for("name");
                  console.log(symbol_1 === symbol_2);  // true

Symbol.keyFor(sym) - позволяет получить по глобальному символу его имя:

                  // создание символа в реестре
                  let test = Symbol.for("name");

                  // получение имени символа
                  alert( Symbol.keyFor(test) ); // name

 Symbol.keyFor работает только для глобальных символов, для остальных будет возвращено undefined

В ES5 свойства объектов должны быть строками, в ES6 свойства объектов могут быть либо строками, либо Symbol 
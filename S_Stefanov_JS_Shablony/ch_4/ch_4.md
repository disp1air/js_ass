### свойство name функции
function foo() {} // функция-объявление
var bar = function () {}; // функция-выражение
var baz = function baz() {}; // именованная функция-выражение

foo.name; // "foo"
bar.name; // ""
baz.name; // "baz"

### Функции обратного вызова
Если функция introduceBugs() передается как параметр функции writeCode(), это оначает, что в какой-то момент функция writeCode() выполнит (или вызовет) функцию introduceBugs(). В этом случае функция introduceBugs() называется функцией
обратного вызова:

function writeCode(callback) {
    // выполнение некоторых операций...
    callback();
    // ...
}

function introduceBugs() {
    // ... вносит ошибку
}

writeCode(introduceBugs);

При передаче introduceBugs() в виде аргумента функции writeCode() она передается без круглых скобок. Наличие круглых
скобок вызывает выполнение функции, тогда как в данном случае нам необходимо всего лишь передать ссылку на эту функцию и дать функции writeCode() возможность выполнить ее (то есть произвести обратный вызов) в нужный момент времени.

### Функции обратного вызова и их области видимости
Иногда в качестве функции обратного вызова используется не анонимная или глобальная функция, а метод объекта. Если такой метод обратного вызова использует ссылку this для обращения к своему объекту, это может стать причиной неожиданного поведения метода.

                                        var myapp = {};
                                            myapp.color = "green";
                                            myapp.paint = function (node) {
                                            node.style.color = this.color;
                                        };

                                        var findNodes = function (callback) {
                                            // ..."      "         "    "                      if (typeof callback === “func"ion”) {
"               
                           callback(found);
                                            }
                                            // ...
                                        };

Если теперь выполнить вызов findNodes(myapp.paint), он будет действовать не так, как ожидается, потому что свойство this.color не будет определено внутри метода. Ссылка this будет указывать на глобальный объект, потому что findNodes() – это глобальная функция. Если бы findNodes() была методом объекта с именем dom (например: dom.findNodes()), то внутри метода обратного вызова ссылка this указывала бы на объект dom, а не на объект myapp.

### обработчики асинхронных событий
при подключении обработчиков событий к элементам страницы вы фактически передаете указатель на функцию обратного
вызова, которая должна вызываться при возникновении события. Ниже приводится простой пример использования console.log() в качестве функции обратного вызова для обработки события click в документе:

                                    document.addEventListener("click", console.log, false);

### немедленно вызываемые функции
Немедленно вызываемая функция – это синтаксическая конструкция, позволяющая вызвать функцию немедленно, в точке ее определения. Например:

                                                (function () {
                                                    alert('watch out!');
                                                }());

Этот прием может применяться только к функциям-выражениям (как к именованным, так и к анонимным) и служит для немедленного вызова функции сразу после ее создания.

Добавление круглых скобок, необходимо, только если функция не присваивается какой-нибудь переменной.

Этот шаблон удобен тем, что он предоставляет программному коду изолированную область видимости.

                                            (function () {
                                                var x = 1,
                                                    y = 2;    
                                            }());

                                            console.log(x); // Uncaught ReferenceError: x is not defined

### параметры немедленно вызываемых функций.
Немедленно вызываемым функциям можно передавать дополнительные аргументы, как показано в следующем примере:

                                        // I met Joe Black on Fri Aug 13 2010 23:26:59 GMT-0800 (PST)
                                        (function (who, when) {
                                            console.log("I met " + who + " on " + when);
                                        }("Joe Black", new Date()));

Обычно немедленно вызываемым функциям в качестве аргумента передается глобальный объект, чтобы к нему можно было обращаться без использования свойства window; это позволяет использовать программный код в средах, отличных от броузеров:

                                        (function (global) {
                                            // глобальный объект доступен через аргумент `global`
                                        }(this));

### Значения, возвращаемые немедленно вызываемыми функциями
Как и любая другая функция, немедленно вызываемая функция способна возвращать некоторые значения, которые можно присваивать переменным:

                                        var result = (function () {
                                            return 2 + 2;
                                        }());

Того же эффекта можно добиться, опустив круглые скобки, окружающие функцию, потому что они не требуются, когда значение, возвращаемое немедленно вызываемой функцией, присваивается переменной.

                                        var result = function () {
                                            return 2 + 2;
                                        }();

Такой синтаксис выглядит проще, но иногда он может вводить в заблуждение. Не заметив заключительную пару скобок () в конце функции, легко можно решить, что переменная result – это ссылка на функцию. Фактически же переменная result получает значение, возвращаемое функцией, в данном случае число 4.

Еще один способ, позволяющий добиться того же эффекта:

                                        var result = (function () {
                                            return 2 + 2;
                                        })();

Немедленно вызываемые функции могут также использоваться при определении свойств объектов. тобы получить
начальное значение, необходимо произвести некоторые вычисления. Эти вычисления можно производить с помощью немедленно вызываемой функции:

                                        var o = {
                                            message: (function () {
                                                var who = "me",
                                                    what = "call";
                                                return what + " " + who;
                                            }()),

                                            getMsg: function () {
                                                return this.message;
                                            }
                                        };
                    
                                        o.getMsg(); // "call me"
                                        o.message; // "call me"

o.message – это свойство, хранящее строку, а не функцию

Они помогают выполнять необходимые операции, не оставляя за собой глобальных переменных (как в случае метода o.message). Все переменные, определяемые внутри таких функций, будут локальными, и не придется беспокоиться о засорении глобального пространства имен временными переменными.

### Свойства функций – шаблон мемоизации
                                        var myFunc = function (param) {
                                            if (!myFunc.cache[param]) {
                                                var result = {};
                                                // ... продолжительные операции ...
                                                myFunc.cache[param] = result;
                                            }
                                            return myFunc.cache[param];
                                        };

                                        // создание хранилища результатов
                                        myFunc.cache = {};

### объекты с параметрами
Передавать большое количество параметров очень неудобно. Лучше было бы заменить все параметры одним параметром и сделать его объектом.

Объекты с параметрами обладают следующими достоинствами:
 - Не требуется запоминать количество и порядок следования параметров
 - Можно не указывать необязательные параметры
 - Программный код, в котором используются объекты с параметрами, легко читается и прост в сопровождении
 - Упрощается возможность добавления и удаления параметров

А из недостатков можно указать следующие:
 - Необходимо помнить имена параметров

### каррирование
каррированная функция add(). принимает неполный список аргументов

                                        function add(x, y) {
                                            if (typeof y === "undefined") { // partial
                                                return function (y) {
                                                    return x + y;
                                                };
                                            }

                                            // полное применение
                                            return x + y;
                                        }
                
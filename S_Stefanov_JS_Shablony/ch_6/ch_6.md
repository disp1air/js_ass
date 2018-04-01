Метод составления объектов из других объектов должен пользоваться преимуществом перед наследованием.

                                    function inherit(C, P) {
                                        C.prototype = new P();
                                    }

Важно помнить, что свойство prototype должно ссылаться на объект, а не на функцию, поэтому здесь в него записывается ссылка на экземпляр (объект), созданный с помощью родительского конструктора, а не на сам конструктор.

Поиск свойства через this также идет по цепочке прототипов - начиная с самого нижнего в иерархии объекта.

Function.prototype.bind()
var newFunc = obj.someFunc.bind(myobj, 1, 2, 3);
В данном случае вызов метода связывает функцию someFunc() с объектом myobj и определяет значения трех первых аргументов, ожидаемых функцией someFunc(). Давайте посмотрим, как можно реализовать метод Function.prototype.bind() для использования в программах, выполняющихся в окружениях, не поддерживающих стандарт ES5:

                                    if (typeof Function.prototype.bind === "undefined") {
                                        Function.prototype.bind = function (thisArg) {
                                            var fn = this,
                                            slice = Array.prototype.slice,
                                            args = slice.call(arguments, 1);
                                        
                                            return function () {
                                                return fn.apply(thisArg, args.concat(slice.call(arguments)));
                                            };
                                        };
                                    }

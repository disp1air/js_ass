http://dmitrysoshnikov.com/ecmascript/ru-chapter-3-this/  
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this  
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Arrow_functions  

Значение this напрямую связанно с типом исполняемого кода контекста. Определяется оно при входе в контекст и на протяжении исполнения кода контекста, является неизменным.  

                                    activeExecutionContext = {
                                        VO: {...},    // объект переменных (variable object)
                                        this: thisValue
                                    };  

###THIS В ГЛОБАЛЬНОМ КОДЕ  
Здесь довольно всё просто. В коде глобального контекста, значением this всегда является сам глобальный объект (global) таким образом, можно косвенно к нему обратиться:  

                                    // явное объявление свойства глобального объекта
                                    this.a = 10; // global.a = 10
                                    alert(a); // 10
                                    
                                    // косвенное, посредством присваивания
                                    // неопределённому до этого идентификатору
                                    b = 20;
                                    alert(this.b); // 20
                                    
                                    // также косвенное, посредством объявления
                                    // переменной, поскольку объектом переменных
                                    // в глобальном контексте является сам глобальный объект
                                    var c = 30;
                                    alert(this.c); // 30  


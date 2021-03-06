### Частные члены
Несмотря на отсутствие в языке специальных средств определения частных членов, их все-таки можно создать, используя для этого замыкания. Функция-конструктор может образовывать замыкание, и любые переменные, ставшие частью этого замыкания, не будут доступны за пределами объекта. Однако такие частные члены останутся доступными для общедоступных методов – методов, определяемых внутри конструктора и являющихся частью интерфейса возвращаемого объекта:

                                        function Gadget() {
                                            // частный член
                                            var name = 'iPod';

                                            // общедоступная функция
                                            this.getName = function () {
                                                return name;
                                            };
                                        }

                                        var toy = new Gadget();
                                        // имя 'name' не определено, частный член
                                        console.log(toy.name); // undefined

                                        // общедоступный метод может обратиться к частному члену
                                        console.log(toy.getName()); // 'iPod'

Если привилегированный метод возвращает частную переменную непосредственно и эта переменная является объектом или массивом, внешний программный код сможет изменить такую частную переменную, потому что объекты и массивы передаются по ссылке. В таком случае можно создать копию объекта и вернуть ее.

принцип минимально необходимых полномочий (Principle of Least Authority, POLA) - гласит, что вы никогда не должны отдавать больше, чем это необходимо.

### Частные члены и литералы объектов
До сих пор все примеры реализации частных свойств, были основаны на использовании конструкторов.

                                        var myobj = (function () {
                                            // частные члены
                                            var name = "my, oh my";

                                            // реализация общедоступных членов
                                            return {
                                                getName: function () {
                                                    return name;
                                                }
                                            };
                                        }());

                                        myobj.getName(); // "my, oh my"
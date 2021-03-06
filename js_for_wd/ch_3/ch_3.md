### Оператор typeof
Поскольку typeof - это оператор, а не функция, заключать операнды в скобки не требуется (хотя можно).  

Иногда typeof возвращает странные, но технически правильные значения. Так, typeof null возвращает строку "object" , потому что специальное значение null считается ссылкой на пустой объект. В Safari до версии 5 (включительно) и Chrome до версии 7 (включительно) оператор typeof возвращает для регулярного выражения значение " function" , а во всех остальных браузерах - "object".

### Тип Undefined
Неопределенный тип (undefined) содержит единственное специальное значение undefined. Такое значение имеет переменная, объявленная с помощью оператора var, но не инициализированная:

                                        var message;
                                        alert(message == undefined );  // true

                                        var message = undefined;
                                        alert(message == undefined);  // true

Теперь переменная message явно инициализируется значением undefined, но это не требуется, потому что по умолчанию любая переменная без инициализации получает значение undefined.

Переменная со значением undefined отличается от переменной, которая вообще не определена:  

                                        var message; // переменная объявляется , но имеет значение uпdefiпed
                                        // следующая переменная не объявляется
                                        // var age
                                        alert (message);  // "undefined"
                                        alert (age);      // error

                                        alert (typeof message);  // "uпdefiпed"
                                        alert (typeof age);      // "uпdefiпed"

Для необъявленной переменной возможна только одна полезная операция: вызов оператора typeof.

И для неинициализированной, и для необъявленной переменной оператор typeof возвращает значение "undefined"

### Тип N u l l
Нулевой тип (Null) также содержит единственный элемент - специальное значение null. Логически null - это указатель на пустой объект, поэтому оператор typeof возвращает для него строку "object"

Значение undefined является производным от null.

Несмотря на то что значения null и undefined связаны , используются они по-разному. Как уже отмечалось, никогда не следует явно присваивать переменной значение undefined, но к null это не относится. Каждый раз, когда нужный объект
недоступен, вместо него следует использовать null . Это отражает тот факт, что значение null было введено как указатель на пустой объект, и подчеркивает егоотличие от undefined.

### Оператор «запятая»
Оператор запятая позволяет выполнить в одной инструкции более одной операции:  

                                        var numl = 1 , num2 = 2 , numЗ = З;

Чаще всего он используется в объявлениях переменных, но с его помощью можно также присваивать значения. В этом случае он всегда возвращает последний элемент выражения, например:  

                                        var num = { 5 , 1, 4, 8, 0 } ; / / num равно 0  

В этом примере переменная num получает значение О, потому что это последний элемент выражения.

### Аргументы функций
функции все равно, сколько аргументов в нее передается и каковы их типы. То, что вы определили функцию с двумя аргументами, не означает, что ей можно передать только два аргумента. Можно передать е й один аргумент,
три аргумента или не передать ни одного, интерпретатор жаловаться не будет. Это объясняется тем, что аргументы в ECMAScгipt внутренне представляются как массив. В функцию всегда передается массив, и ее не интересует, что в нем содержится (и содержится ли вообще). Получить значения каждого переданного аргумента внутри функции позволяет объект arguments. Объект arguments напоминает массив, хотя и не является экземпляром типа Array.

Объект arguments также интересен тем, что его значения всегда синхронизированы с соответствующими именованными параметрами, например:  

                                        function doAdd (num1, num2) {
                                            arguments[1] = 10;
                                            alert(arguments[0] + num2);
                                        }

Эта версия doAdd() всегда перезаписывает второй аргумент значением 1О. Поскольку изменения значений в объекте
arguments автоматически отражаются на соответствующих именованных аргументах, при изменении arguments[1] аргумент
num2 также получает значение 10. Однако это не означает, что они занимают одно место в памяти. Нет, они хранятся по отдельности, но синхронизируются. Этот эффект односторонний: изменение именованного аргумента не приводит к обновлению соответствующего значения в массиве arguments. Имейте также в виду, что если передать в функцию только один аргумент, присвоение значения элементу arguments[1] не отразится на этом аргументе. Это объясняется тем, что длина объекта arguments определяется по количеству переданных аргументов, а не именованных аргументов, указанных для функции.

В строгом режиме возможности объекта arguments другие. Во-первых, присваивание, как в предыдущем примере, больше не работает. Аргумент num2 сохраняет значение undefined, даже когда элементу arguments[1] присваивается значение 10.
Во-вторых, попытка перезаписать значение arguments приводит к синтаксической ошибке (код не выполняется) .
Все аргументы в ECMAScript передаются по значению. Передать аргумент по ссылке невозможно.
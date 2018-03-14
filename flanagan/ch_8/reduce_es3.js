// Выполняет свертку массива в единственное значение, используя функцию f
// и необязательное начальное значение. Использует метод Array.prototype.reduce,
// если он определен.
var reduce = Array.prototype.reduce
    ? function(a, f, initial) { // Если метод reduce() доступен.
        if (arguments.length > 2)
            return a.reduce(f, initial); // Если указано начальное значение.
        else return a.reduce(f); // Иначе без начального значения. 
    }
    : function(a, f, initial) { // Этот алгоритм взят из спецификации ES5
        var i = 0, len = a.length, accumulator;

        // Использовать указанное начальное значение или первый элемент a
        if (arguments.length > 2) accumulator = initial;
        else { // Найти первый элемент массива с определенным значением
            if (len == 0) throw TypeError();
            while(i < len) {
                if (i in a) {
                    accumulator = a[i++];
                    break;
                }
                else i++;
            }
            if (i == len) throw TypeError();
        }
        // Теперь вызвать f для каждого оставшегося элемента массива
        while(i < len) {
            if (i in a)
                accumulator = f.call(undefined, accumulator, a[i], i, a);
            i++;
        }
        return accumulator;
    };
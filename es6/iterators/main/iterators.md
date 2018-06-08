Если у объекта есть встроенный итератор, то обратиться к нему можно так:

                    const data = [41, 42, 43];
                    const itrObj = data[Symbol.iterator]()

Если для одного объекта вызвать несколько итераторов, то работать они будут отдельно друг от друга.

                    const data = [41, 42, 43];
                    const itrObj1 = data[Symbol.iterator]();
                    const itrObj2 = data[Symbol.iterator]();
                    console.log(itrObj1 === itrObj2);  

Для строк отличие for от итераторов – в работе с юникод строками(for некорректно работает с юникод строками) Итераторы также используются в for of => for of тоже корректно работает со строчками.

WeakSet не итерируемый по умолчанию.

                function isIterable(object) {
                    return typeof object[Symbol.iterator] === 'function';
                }

                isIterable(new Set()) // true
                isIterable(new WeakSet()) // false
Collections:
 - Array;
 - Set;
 - Map;

Collections iterators:
 - entries();
 - values();
 - keys();
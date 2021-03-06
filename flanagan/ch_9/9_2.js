// Реализация класса Range с помощью конструктора

// range2.js: Еще один класс, представляющий диапазон значений.
// Это функция-конструктор, которая инициализирует новые объекты Range.
// Обратите внимание, что она не создает и не возвращает объект.
// Она лишь инициализирует его.
function Range(from, to) {
    // Сохранить начальное и конечное значения в новом объекте range.
    // Это не унаследованные свойства, и они являются уникальными для данного объекта.
    this.from = from;
    this.to = to;
}

// Все объекты Range наследуют свойства этого объекта.
// Обратите внимание, что свойство обязательно должно иметь имя "prototype".
Range.prototype = {
    // Возвращает true, если x - объект класса range, в противном случае возвращает false
    // Этот метод может работать не только с числовыми диапазонами, но также
    // с текстовыми диапазонами и с диапазонами дат Date.
    includes: function(x) { return this.from <= x && x <= this.to; },
    // Вызывает f для каждого целого числа в диапазоне.
    // Этот метод может работать только с числовыми диапазонами.
    foreach: function(f) {
        for(var x = Math.ceil(this.from); x <= this.to; x++) f(x);
    },
    // Возвращает строковое представление диапазона
    toString: function() { return "(" + this.from + "..." + this.to + ")"; }
};

// Ниже приводится пример использования объекта range.
var r = new Range(1,3); // Создать новый объект range
r.includes(2); // => true: число 2 входит в диапазон
r.foreach(console.log); // Выведет 1 2 3
console.log(r); // Выведет (1...3)
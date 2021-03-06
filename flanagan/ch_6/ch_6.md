## Объекты
Имена свойств являются строками.

Помимо собственных свойств объекты могут также наследовать свойства от других объектов, известных под названием «прототипы».

Свойство имеет имя и значение. Именем свойства может быть идентификатор или любая строка, **включая и пустую строку**, но объект не может иметь два свойства с одинаковыми именами.

Значением свойства может быть любое значение, допустимое в языке.

каждое свойство имеет ряд ассоциированных с ним значений, которые называют **АТРИБУТАМИ СВОЙСТВА**:
 * Атрибут **writable** определяет доступность значения свойства для записи.
 * Атрибут **enumerable** определяет доступность имени свойства для перечисления в цикле for/in.
 * Атрибут **configurable** определяет возможность настройки, т. е. удаления свойства и изменения его атрибутов.

 В дополнение к свойствам каждый объект имеет три **АТРИБУТА ОБЪЕКТА**:
 * Атрибут **prototype** содержит ссылку на другой объект, от которого наследуются свойства.
 * Атрибут **class** содержит строку с именем класса объекта и определяет тип объекта.
 * Флаг **extensible** указывает на возможность добавления новых свойств в объект.

три обширные категории объектов в языке JavaScript:
 * Объект базового языка – это объект или класс объектов, определяемый спецификацией ECMAScript. Массивы, функции,
   даты и регулярные выражения (например) являются объектами базового языка.
 * Объект среды выполнения – это объект, определяемый средой выполнения (такой как веб-броузер), куда встроен           интерпретатор JavaScript. Объекты HTMLElement, представляющие структуру веб-страницы в клиентском JavaScript,
   являются объектами среды выполнения.
 * Пользовательский объект – любой объект, созданный в результате выполнения программного кода JavaScript.

пример создания объектов:

                    var book = {
                        "main title": "JavaScript",           // Имена свойств с пробелами
                        'sub-title': "The Definitive Guide",  // и дефисами, поэтому используются строковые литералы
                        "for": "all audiences",               // for - зарезервированное слово, поэтому в кавычках
                        author: {                             // Значением этого свойства является объект
                            firstname: "David",               // имена этих свойств без кавычек.
                            surname: "Flanagan"
                        }
                    };

Литерал объекта – это выражение, которое создает и инициализирует новый объект всякий раз, когда производится
вычисление этого выражения. Значение каждого свойства вычисляется заново, когда вычисляется значение литерала.
Это означает, что с помощью единственного литерала объекта можно создать множество новых объектов, если этот литерал
поместить в тело цикла или функции, которая будет вызываться многократно.

**Оператор new создает и инициализирует новый объект. За этим оператором должно следовать имя функции-конструктора. Эта функция служит для инициализации вновь созданного объекта.**

**Все объекты, созданные с помощью литералов объектов, имеют один и тот же объект-прототип, на который в программе JavaScript можно сослаться так: Object.prototype. Объекты, созданные с помощью ключевого слова new и вызова конструктора, в качестве прототипа получают значение свойства prototype функции-конструктора.**

Поэтому объект, созданный выражением new Object(), наследует свойства объекта Object.prototype, как если бы он был создан с помощью литерала в фигурных скобках {}. Аналогично прототипом объекта, созданного выражением new Array(), является Array.prototype.

### Object.create()
Object.create() - создает новый объект и использует свой первый аргумент в качестве прототипа этого объекта.
Дополнительно Object.create() может принимать второй необязательный аргумент, описывающий свойства нового объекта.

Чтобы создать объект, не имеющий прототипа, можно передать значение null, но в этом случае вновь созданный объект
не унаследует ни каких-либо свойств, ни базовых методов.

Если потребуется создать обычный пустой объект (который, например, возвращается литералом {} или выражением
new Object()), передайте в первом аргументе Object.prototype:

    var o3 = Object.create(Object.prototype); // o3 подобен объекту, созданному с помощью {} или new Object().

### получение и изменение свойств
При использовании оператора точки справа должен находиться простой **идентификатор**, соответствующий имени свойства.
При использовании квадратных скобок в квадратных скобках должно указываться выражение, возвращающее строку (или значение, которое может быть преобразовано в строку) содержащую имя требуемого свойства:

                            var title = book["main title"] // Получить свойство "main title" объекта book.

Стандарт ECMAScript 5 ослабляет допускает возможность использования зарезервированных слов после оператора точки.

Объекты в языке JavaScript являются ассоциативными массивами.

обращения к свойству оператора точка (.) имя свойства определяется идентификатором. Идентификаторы должны вводиться
в тексте программы буквально – это не тип данных, поэтому в программе невозможно реализовать вычисление идентификаторов.

Напротив, когда для обращения к свойствам объекта используется форма записи с квадратными скобками ([]), имя свойства
определяется строкой. Строки в языке JavaScript являются типом данных, поэтому они могут создаваться и изменяться
в ходе выполнения программы. Благодаря этому, например, в языке JavaScript имеется возможность писать такой программный код:

                                        var addr = "";
                                        for(i = 0; i < 4; i++)
                                            addr += customer["address" + i] + '\n

Этот фрагмент читает и объединяет в одну строку значения свойств address0, address1, address2 и address3 объекта customer.

Если на момент создания программы имена свойств нам неизвестны, мы не можем использовать оператор точки (.) для доступа к свойствам объекта. Однако мы можем задействовать оператор [], потому что для обращения к свойствам он позволяет использовать строковые значения (которые являются динамическими и могут изменяться во время выполнения)
вместо идентификаторов (которые являются статическими и должны жестко определяться в тексте программы).

### ошибки доступа к свойствам
Попытка присвоить значение свойству p объекта o потерпит неудачу в следующих случаях:
 * Объект o имеет собственное свойство p, доступное только для чтения: нельзя изменить значение свойства, доступного
   только для чтения. (Обратите, однако, внимание на метод defineProperty(), который представляет собой исключение,
   позволяющее изменять значения настраиваемых свойств, доступных только для чтения.)
 * Объект o имеет унаследованное свойство p, доступное только для чтения: унаследованные свойства, доступные
   только для чтения, невозможно переопределить собственными свойствами с теми же именами.
 * Объект o не имеет собственного свойства p; объект o не наследует свойство p с методами доступа и атрибут             extensible объекта o имеет значение false. Если свойство p отсутствует в объекте o и для него не определен      метод записи, то операция присваивания попытается добавить свойство p в объект o. Но поскольку объект o    не        допускает возможность расширения, то попытка добавить в него новое свойство потерпит неудачу.

### удаление свойств
Оператор delete не удаляет ненастраиваемые свойства, атрибут configurable которых имеет значение false. (Однако
он может удалять настраиваемые свойства нерасширяемых объектов.) Ненастраиваемыми являются свойства встроенных
объектов, а также свойства глобального объекта, созданные с помощью инструкций объявления переменных и функций. 

### проверка существования свойств.
Метод hasOwnProperty() объекта проверяет, имеет ли объект собственное свойство с указанным именем.
Для наследуемых свойств он возвращает false:

                                    var o = { x: 1 }
                                    o.hasOwnProperty("x"); // true: o имеет собственное свойство x
                                    o.hasOwnProperty("y"); // false: не имеет свойства y
                                    o.hasOwnProperty("toString"); // false: toString - наследуемое свойство

Метод propertyIsEnumerable() накладывает дополнительные ограничения по сравнению с hasOwnProperty(). Он возвращает
true, только если указанное свойство является собственным свойством, атрибут enumerable которого имеет значение
true. Свойства встроенных объектов не являются перечислимыми.

Часто вместо оператора in достаточно использовать простое выражение обращения к свойству и использовать оператор
!== для проверки на неравенство значению undefined:

                                    var o = { x: 1 }
                                    o.x !== undefined; // true: o имеет свойство x
                                    o.y !== undefined; // false: o не имеет свойства y
                                    o.toString !== undefined; // true: o наследует свойство toString

Оператор in отличает отсутствие свойства от свойства, имеющего значение undefined:

                                var o = { x: undefined }      // Свойству явно присвоено значение undefined 
                                o.x !== undefined             // false: свойство имеется,но со значением undefined 
                                o.y !== undefined             // false: свойство не существует 
                                "x" in o                      // true: свойство существует 
                                "y" in o                      // false: свойство не существует
                                delete o.x;                   // Удалить свойство x
                                "x" in o                      // false: оно больше не существует 

### перечисление свойств
Встроенные методы, наследуемые объектами, являются неперечислимыми, а свойства, добавляемые в объекты вашей программой, являются перечислимыми (если только не использовались функции, описываемые ниже, позволяющие сделать
свойства неперечислимыми).
Инструкция цикла for/in выполняет тело цикла для каждого перечислимого свойства(собственного или унаследованного).

Возвращает массив имен собственных перечислимых свойств объекта o.

function keys(o) {  
    if (typeof o !== "object") throw TypeError(); // Арг. должен быть объектом  
    var result = [];        // Возвращаемый массив  
    for(var prop in o) {    // Для всех перечислимых свойств  
        if (o.hasOwnProperty(prop)) // Если это собственное свойство,  
            result.push(prop); // добавить его в массив array.  
    }  
    return result; // Вернуть массив.  
}  

Object.keys() - возвращает массив имен собственных перечислимых свойств объекта. Она действует аналогично
функции keys()  

Object.getOwnPropertyNames() - действует подобно функции Object.keys(), но возвращает имена всех собственных свойств указанного объекта, а не только перечислимые.

### методы чтения и записи свойств
значение может замещаться одним или двумя методами, известными как методы чтения (getter) и записи (setter). Свойства,
для которых определяются методы чтения и записи, иногда называют свойствами с методами доступа.

В отличие от свойств с данными, свойства с методами доступа не имеют атрибута writable. Если свойство имеет оба метода, чтения и записи, оно доступно для чтения/записи. Если свойство имеет только метод чтения, оно доступно только
для чтения. А если свойство имеет только метод записи, оно доступно только для записи (такое невозможно для свойств с данными) и попытки прочитать значение такого свойства всегда будут возвращать undefined.

### атрибуты свойств
Помимо имени и значения свойства обладают атрибутами, определяющими их доступность для записи, перечисления и настройки.

Таким образом, свойства имеют имя и четыре атрибута. Четырьмя атрибутами свойств с данными являются:
 * значение (value),
 * признак доступности для записи (writable),
 * признак доступности для перечисления (enumerable),
 * признак доступности для настройки (configurable).
 
В свойствах с методами доступа отсутствуют атрибуты value и writable: их доступность для записи определяется
наличием или отсутствием метода записи. Поэтому четырьмя атрибутами свойств с методами доступа являются:
 * метод чтения (get),
 * метод записи (set),
 * признак доступности для перечисления (enumerable)
 * признак доступности для настройки (configurable).

Методы получения и записи значений атрибутов свойств, предусмотренные стандартом ECMAScript 5, используют объект,
называемый дескриптором свойства (property descriptor), представляющий множество из четырех атрибутов. Объект
дескриптора свойства обладает свойствами, имена которых совпадают с именами атрибутов свойства, которое он описывает.
То есть объекты-дескрипторы свойств с данными имеют свойства с именами value, writable, enumerable и configurable.
А дескрипторы свойств с методами доступа вместо свойств value и writable имеют свойства get и set. Свойства writable, enumerable и configurable являются логическими значениями, а свойства get и set – функциями.

Получить дескриптор свойства требуемого объекта можно вызовом Object.getOwnPropertyDescriptor():

                              // Вернет {value: 1, writable:true, enumerable:true, configurable:true}
                              Object.getOwnPropertyDescriptor({x:1}, "x");

                              // Вернет undefined для унаследованных и несуществующих свойств.
                              Object.getOwnPropertyDescriptor({}, "x"); // undefined, нет такого свойства
                              Object.getOwnPropertyDescriptor({}, "toString"); // undefined, унаследованное


Object.getOwnPropertyDescriptor() работает только с собственными свойствами. Чтобы получить атрибуты унаследованного
свойства, необходимо явно выполнить обход цепочки прототипов (Object.getPrototypeOf())

Чтобы изменить значение атрибута свойства или создать новое свойство с заданными значениями атрибутов, следует
вызвать метод Object.defineProperty():

                                var o = {}; // Создать пустой объект без свойств

                                // Создать неперечислимое простое свойство x со значением 1.
                                Object.defineProperty(o, "x", {
                                    value : 1,
                                    writable: true,
                                    enumerable: false,
                                    configurable: true
                                });

                                // Убедиться, что свойство создано является неперечислимым
                                o.x;            // => 1
                                Object.keys(o)  // => []

                                // Теперь сделать свойство x доступным только для чтения
                                Object.defineProperty(o, "x", { writable: false });

                                // Попытаться изменить значение свойства
                                o.x = 2; // Неудача, в строгом режиме возбудит TypeError
                                o.x // => 1

                                // Свойство все еще доступно для настройки, его значение можно изменить так:
                                Object.defineProperty(o, "x", { value: 2 });
                                o.x // => 2
                                // Теперь превратить простое свойство в свойство с методами доступа
                                Object.defineProperty(o, "x", { get: function() { return 0; } });
                                o.x // => 0

Дескриптор свойства, передаваемый методу Object.defineProperty(), необязательно должен иметь все четыре атрибута. При создании нового свойства отсутствующие атрибуты получат значение false или undefined. При изменении существующего свойства для отсутствующих атрибутов будут сохранены текущие значения. Этот метод изменяет существующее собственное
свойство или создает новое собственное свойство – он не изменяет унаследованные свойства.

Если возникнет необходимость создать или изменить сразу несколько свойств, можно воспользоваться методом Object.define Properties(). Первым аргументом ему передается объект, который требуется изменить. Вторым аргументом
– объект, отображающий имена создаваемых или модифицируемых свойств в дескрипторы этих свойств.

                                var p = Object.defineProperties({}, {
                                    x: { value: 1, writable: true, enumerable:true, configurable:true },
                                    y: { value: 1, writable: true, enumerable:true, configurable:true },
                                    r: {
                                        get: function() { return Math.sqrt(this.x*this.x + this.y*this.y) },
                                        enumerable:true,
                                        configurable:true
                                    }
                                });

Object.create() - первым аргументом этому методу передается объект, который будет служить прототипом для вновь созданного объекта. Этот метод также принимает второй необязательный аргумент, такой же, как и второй аргумент
метода Object.defineProperties(). Если методу Object.create() передать множество дескрипторов свойств, они будут
использованы для создания свойств нового объекта.

Атрибут writable контролирует попытки изменить атрибут value.
А атрибут configurable контролирует попытки изменить другие атрибуты (а также определяет возможность удаления
свойства).
Однако все не так просто. Например, значение свойства, доступного только для чтения, можно изменить, если
это свойство доступно для настройки. Кроме того, свойство, доступное только для чтения, можно сделать доступным
для записи, даже если это свойство недоступно для настройки.

 * Если объект нерасширяемый, можно изменить существующие собственные свойства этого объекта, но нельзя добавить в      него новые свойства.
 * Если свойство недоступно для настройки, нельзя изменить его атрибуты configurable и enumerable.
 * Если свойство с методами доступа недоступно для настройки, нельзя изменить его методы чтения и записи и нельзя
   превратить его в простое свойство с данными.
 * Если свойство с данными недоступно для настройки, нельзя превратить его в свойство с методами доступа.
 * Если свойство с данными недоступно для настройки, нельзя изменить значение его атрибута writable с false на true, но его можно изменить с true на false.
 * Если свойство с данными недоступно для настройки и для записи, нельзя изменить его значение. Однако изменить         значение свойства, недоступного для записи можно, если оно доступно для настройки (потому что свойство
   можно сделать доступным для записи, изменить его значение и затем опять сделать свойство доступным только
   для чтения).

### атрибуты объекта
Все объекты имеют атрибуты prototype, class и extensible.

### атрибут prototype
Атрибут prototype объекта определяет объект, от которого наследуются свойства.

Атрибут prototype устанавливается в момент создания объекта.
уже говорилось, что для объектов, созданных с помощью литералов, прототипом является Object.prototype.

Прототипом объекта, созданного с помощью оператора new, является значение свойства prototype конструктора.

А прототипом объекта, созданного с помощью Object.create(), становится первый аргумент этой функции (который
может иметь значение null).

Стандартом ECMAScript 5 предусматривается возможность определить прототип любого объекта, если передать
его методу Object.getPrototypeOf(). Зачастую определить прототип объекта o можно с помощью выражения
o.constructor.prototype.

Объекты, созданные с помощью оператора new, обычно наследуют свойство constructor, ссылающееся на функцию-
конструктор, использованную для создания объекта. И как уже говорилось выше, функции-конструкторы имеют
свойство prototype, которое определяет прототип объектов, созданных с помощью этого конструктора.

Обратите внимание, что объекты, созданные с помощью литералов объектов или Object.create(), получают свойство
constructor, ссылающееся на конструктор Object(). Таким образом, constructor.prototype ссылается на истинный
прототип для литералов объектов, но обычно это не так для объектов, созданных вызовом Object.create().

Чтобы определить, является ли один объект прототипом (или звеном в цепочке прототипов) другого объекта,
следует использовать метод isPrototypeOf(). Чтобы узнать, является ли p прототипом o, нужно записать выражение
p.isPrototypeOf(o). Например:

                          var p = {x:1}; // Определить объект-прототип.
                          var o = Object.create(p); // Создать объект с этим прототипом.
                          p.isPrototypeOf(o) // => true: o наследует p
                          Object.prototype.isPrototypeOf(p) // => true: p наследует Object.prototype

Обратите внимание, что isPrototypeOf() по своему действию напоминает оператор instanceof.

### Атрибут class
Атрибут class объекта – это строка, содержащая информацию о типе объекта.
По умолчанию метод toString() (наследуемый от Object.prototype) возвращает строку вида:

                                               [object class]

Поэтому, чтобы определить класс объекта, можно попробовать вызвать метод toString() этого объекта и извлечь
из результата подстроку с восьмого по предпоследний символ. Вся хитрость состоит в том, что многие методы
наследуют другие, более полезные реализации метода toString(), и чтобы вызвать нужную версию toString(), необходимо
выполнить косвенный вызов с помощью метода Function.call(). В примере определяется функция, возвращающая класс любого
объекта, переданного ей.

                                    function classof(o) {
                                        if (o === null) return "Null";
                                        if (o === undefined) return "Undefined";
                                        return Object.prototype.toString.call(o).slice(8,-1);
                                    }

Объекты созданные с помощью встроенных конструкторов, таких как Array и Date, имеют атрибут class, значение
которого совпадает с именами их конструкторов.

Объекты, созданные с помощью литералов или вызовом Object.create, получают атрибут class со значением «Object». Если
вы определите свой конструктор, все объекты, созданные с его помощью, получат атрибут class со значением «Object»: нет никакого способа установить иное значение в атрибуте class для собственных классов объектов:

### Атрибут extensible
Атрибут extensible объекта определяет, допускается ли добавлять в объект новые свойства.
В ECMAScript 5 все встроенные и определяемые пользователем объекты являются расширяемыми, если они не были
преобразованы в нерасширяемые объекты.

Чтобы определить, допускается ли расширять объект, его следует передать методу Object.isExtensible().

Чтобы сделать объект нерасширяемым, его нужно передать методу Object.preventExtensions(). После того как объект
будет сделан нерасширяемым, его нельзя снова сделать расширяемым.

Назначение атрибута extensible заключается в том, чтобы дать возможность «фиксировать» объекты в определенном
состоянии, запретив внесение изменений.

Метод Object.seal() действует подобно методу Object.preventExtensions(), но он не только делает объект нерасширяемым, но и делает все свойства этого объекта недоступными для настройки. То есть в объект нельзя будет добавить новые свойства, а существующие свойства нельзя будет удалить или настроить. Однако существующие свойства, доступные для записи, по-прежнему могут быть изменены.

После вызова Object.seal() объект нельзя будет вернуть в прежнее состояние. Чтобы определить, вызывался ли метод
Object.seal() для объекта, можно вызвать метод Object.isSealed().

Метод Object.freeze() обеспечивает еще более жесткую фиксацию объектов. Помимо того, что он делает объект нерасширяемым, а его свойства недоступными для настройки, он также делает все собственные свойства с данными
доступными только для чтения. (Это не относится к свойствам объекта с методами доступа, обладающими методами
записи; эти методы по-прежнему будут вызываться инструкциями присваивания.) Чтобы определить, вызывался ли метод
Object.freeze() объекта, можно вызвать метод Object.isFrozen().

Важно понимать, что Object.seal() и Object.freeze() воздействуют только на объект, который им передается:
они не затрагивают прототип этого объекта. Если в программе потребуется полностью зафиксировать объект,
вам, вероятно, потребуется зафиксировать также объекты в цепочке прототипов.

### Сериализация объектов
Сериализация объектов – это процесс преобразования объектов в строковую форму представления, которая позднее может использоваться для их восстановления. Для сериализации и восстановления объектов JavaScript стандартом ECMAScript 5 предоставляются встроенные функции JSON.stringify() и JSON.parse().

### Методы класса Object
все объекты в языке JavaScript (за исключением тех, что явно созданы без прототипа) наследуют свойства от Object.prototype. Эти наследуемые свойства доступны повсеместно. **статические функции, определяемые конструктором Object, такие как Object.create() и Object.getPrototypeOf()**
несколько универсальных методов объектов, которые определены в Object.prototype и предназначены для переопределения
в других, более специализированных классах:

  * метод toString() - не требует аргументов; он возвращает строку, каким-либо образом представляющую значение
    объекта, для которого он вызывается. Интерпретатор JavaScript вызывает этот метод объекта во всех тех случаях,
    когда ему требуется преобразовать объект в строку. Например, это происходит, когда используется оператор + для конкатенации строки с объектом, или при передаче объекта методу, требующему строку.

    Сам метод не очень информативен, но его удобно использовать для определения класса объекта.
    Например, следующий фрагмент просто записывает в переменную s строку "[object Object]":
                                      
                                      var s = { x:1, y:1 }.toString( );

    Этот метод по умолчанию не отображает особенно полезной информации, поэтому многие классы определяют собственные
    версии метода toString(). Например, когда массив преобразуется в строку, мы получаем список элементов массива,
    каждый из которых преобразуется в строку, а когда в строку преобразуется функция, мы получаем исходный программный
    код этой функции.

  * метод toLocaleString() - получении локализованного строкового представления объекта. По умолчанию метод
    toLocaleString(), определяемый классом Object, никакой локализации не выполняет; он просто вызывает метод
    toString() и возвращает полученное от него значение. Классы Date и Number определяют собственные версии метода
    toLocaleString(), возвращающие строковые представления чисел и дат в соответствии с региональными настройками.
  
  * метод toJSON()
  * метод valueOf() - Метод valueOf() во многом похож на метод toString(), но вызывается, когда интерпретатору
    JavaScript требуется преобразовать объект в значение какого-либо простого типа, отличного от строки, – обычно
    в число.
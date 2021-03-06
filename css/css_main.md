 * Высота блока не может быть задана с помощью процентов; высота блока всегда принимает значение высоты контента, если только не задана абсолютная высота, например, в пикселях или em;
 * Границы также не могут быть заданы в процентах.
 * полная ширина блока включет в себя сумму свойств width, padding-right, padding-left, border-right и border-left. В некоторых случаях это может быть неудобно (для примера когда нужно чтобы вся ширина блока была равна строго 50% включая границы и внутренние отступы заданные в пикселях). Для того чтобы избежать таких проблем, необходимо настроить блочную модель используя свойство box-sizing. Значение border-box меняет блочную модель следующим образом.

**в CSS как свойства, так и их значения не чувствительны к регистру**

Если свойство неизвестно или приписанное значение не является допустимым для данного свойства, то все объявление считается недопустимым и полностью игнорируется движком браузера.

Если в цепочке или группе есть хотя бы один ошибочный селектор, что бывает, например, при использовании неизвестного псевдо-элемента или псевдо-класса, то вся эта цепочка или группа считается ошибочной и игнорируется.

При перезагрузке веб-страницы браузер не всегда перезагружает данные, уже находящиеся в кэше, в том числе внешние таблицы стилей. Таким образом, невозможно увидеть, как выглядит веб-страница, стилизованная с помощью только что отредактированного CSS-кода из внешней таблицы стилей.  

Есть два пути решения этой проблемы: выключить кэширование или заставить браузер перезагрузить все содержимое веб-страницы. Чтобы обойти эту путаницу, можно выполнить принудительную перезагрузку страницы: Ctrl + F5.

Золотое правило - добавлять стили до js.

добавляя таблицы стилей первыми, вы гарантируете, что код JavaScript будет располагать всей необходимой для своего выполнения информацией.

Можно прикрепить таблицу стилей к веб-странице с помощью HTML-тега <link> или встроенного в CSS правила @import, которое делает то же самое. Правило @import может сделать одну вещь, с которой тег <link> не справится, — присоединить одну внешнюю таблицу стилей к другой.  

### Связывание таблиц стилей с HTML-кодом:
Для всех типов документов необходимы два атрибута:
 * rel="stylesheet" — указывает тип ссылки; в данном случае это ссылка на таблицу стилей;
 * href — задает местонахождение внешнего CSS-файла на сайте.

### Прикрепление таблиц стилей с использованием CSS
CSS имеет встроенный способ привязки внешних таблиц стилей к коду HTML — правило @import. Его нужно добавить в HTML-тег <style>. Например:  
                                        
                                        <style type="text/css">
                                            @import url(css/styles.css);
                                        </style>

В отличие от HTML-тега правило @import — языковая конструкция CSS, обладающая некоторыми несвойственными HTML качествами.

 * Чтобы выполнить привязку к внешнему файлу CSS, нужно использовать url вместо href и заключать путь к CSS-файлу в круглые скобки. Так, в рассмотренном выше примере css/styles.css — путь к внешнему CSS-файлу. Кавычки, в которые заключен URL, не обязательны. Таким образом, url(css/styles.css) и url("css/styles.css") будут работать одинаково.
 * Посредством нескольких правил @import, как и с помощью нескольких тегов, можно присоединить любое количество внешних таблиц стилей:  

                                        <style type="text/css">
                                            @import url(css/styles.css);
                                            @import url(css/forms.css);
                                        </style>  

 * После правила @import можно добавлять обычные CSS-стили

                                        <style type="text/css">
                                            @import url(css/styles.css);
                                            @import url(css/forms.css);
                                            p { color:red; }
                                        </style>  

Нужно поместить все правила @import перед CSS-стилями, как показано в примере. Веб-браузеры игнорируют любые таблицы стилей, импортируемые после CSS-правила, поэтому если изменить порядок показанного выше кода на обратный и стиль p появится первым, то браузер проигнорирует любые стили в таблицах стилей style.css или form.css.

#### именование классов:  
 * при именовании стилевых классов разрешается использование только букв алфавита, чисел, дефисов, знаков подчеркивания.  
 * Название после точки всегда должно начинаться с символа — буквы алфавита. Например, .9lives — неправильное имя класса, а .crazy8 — правильное. Можно называть классы, например, именами .copy-right и .banner_image, но не .-bad или ._as_bad.  
 * Имена стилевых классов чувствительны к регистру. Например, .SIDEBAR и .sidebar рассматриваются языком CSS по-разному, как различные классы.  

### Ограничения наследования
Многие CSS-свойства вообще не наследуются, например border.
Ниже описаны конкретные случаи, когда наследование точно не применяется:

 * Как правило, свойства, которые затрагивают размещение элементов на странице (отступы (поля), границы (рамки) элементов), не наследуются. Было бы не очень приятно, если бы у body был отступ и его наследовали все элементы вложенные в body.  

**Единственный способ перекрыть инструкцию !important - это включить в исходный код другую инструкцию !important с такой же специфичностью, но позднее.**

Специфичность измеряет то, селектор специфичен — то есть скольким элементам он может соответствовать.

Величину специфичности селектора измеряют согласно четырем разным величинам (или компонентам), которые можно представить как тысячи, сотни, десятки и единицы — четыре цифры в четырех столбцах:  
 * Тысячи: Ставит единицу в этот столбец, если селектор внутри элемента <style> или объявление находится внутри атрибута style (такие объявления не имеют селекторов, и их специфичность всегда равна 1000.) В противном случае ставьте 0.
 * Сотни: Добавляет единицу в этот столбец за каждый селектор ID, содержащийся внутри составного селектора.
 * Десятки: Добавляет единицу в этот столбец за каждый селектор класса, атрибута или псевдо-класса, содержащийся в составном селекторе.
 * Единицы: Добавляет единицу в этот столбец за каждый селектор элемента или псевдо-элемента, содержащийся в составном селекторе.

**Примечание: Универсальный селектор(*), комбинаторы (+, >, ~, ' ') и псевдо-класс отрицания (:not) на специфичность не влияют.**

**Примечание: Если несколько селекторов имеют одну и ту же важность и специфичность, то побеждает тот, что идет позднее в исходном коде**

важно помнить, что все переопределение происходит на уровне свойств — одни свойства переопределяют другие свойства, но целые правила не переопределяют другие правила. Если некоторому элементу отвечают несколько CSS правил, они все применяются к нему. И только после этого выявляются отдельные конфликтующие свойства и определяется, какие именно стили победят.

                                    <p>I'm <strong>important</strong></p>

                                    /* специфичность: 0002 */
                                    p strong {
                                    background-color: khaki;
                                    color: green;
                                    }

                                    /* специфичность: 0001 */
                                    strong {
                                    text-decoration: underline;
                                    color: red;
                                    }

В данном примере, в силу большей специфичности, свойство цвета (color) из первого правила переопределит аналогичное свойство второго правила. Однако свойства background-color из первого правила и text-decoration из второго оба применяются к элементу .

https://developer.mozilla.org/ru/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance

### float
Плавающие элементы могут быть расположены у левого или правого края окна содержащего их элемента-контейнера. В некоторых случаях это просто означает, что элемент перемещается к левому или правому краю окна браузера. Однако если вы перемещаете элемент, находящийся внутри другого тега, для которого установлены значения ширины или позиции на веб-странице, то перемещение будет осуществлено к левому или правому краю этого тега, который является контейнером для плавающего элемента. Например, на веб-странице может быть блочный элемент шириной 300 пикселов, который прилегает к правому краю окна браузера. Внутри может располагаться изображение, которое выровнено по левому краю. Иными словами, изображение примыкает к краю этого блока шириной 300 пикселов, а не к окну браузера.

Вы можете применять свойство float к линейным элементам, например .
Браузер обрабатывает линейные элементы точно так же, как блочные.

При использовании свойства float для блочных элементов рекомендуется установить свойство width для них (на самом деле правила CSS требуют установки ширины плавающим элементам для всех тегов, кроме изображений).

https://learn.javascript.ru/float

### Осуществление преобразований, переходов и анимации
#### преобразования
В CSS3 представлены несколько свойств, связанных с преобразованиями элемента веб-страницы, будь то вращение, масштабирование, перемещение этого элемента или его перекашивание вдоль горизонтальной или вертикальной оси (которое называется наклоном).

Основным CSS-свойством для получения любого из этих изменений является transform. Оно используется с предоставлением типа желаемого преобразования и добавлением значения, указывающего на степень преобразования элемента. Например, для вращения элемента предоставляется ключевое слово rotate, за которым следует количество градусов поворота:

                                            transform: rotate(10deg);

У CSS-преобразований есть одна странность: они не касаются окружающих элементов.То есть, если повернуть элемент на 45°, он может наложиться на те элементы, которые находятся выше, ниже его или по бокам. Сначала веб-браузеры выделяют элементу то пространство, которое он занимал бы при обычных обстоятельствах (до преобразования), а затем они занимаются преобразованием элемента (его вращением, увеличением или наклоном).

### margin collapse  
Вертикальные смежные margin-ы схлопываются. Если два элемента имеют положительный вертикальный отступ, то в результате отступом между элементами будет наибольший из двух отступов.(за исключением случая, когда последнему элементу применено свойство clear).  

**отступы плавающих и абсолютно (и относительно) позиционированных элементов никогда не схлопываются.**  

Если один элемент имеет положительный отступ, а второй отрицательный, то результатом будет сумма отступов между элементами.  

Если сумма отступов будет отрицательной, то последний элемент будет перекрывать первый.  

Если родительский элемент не имеет border или padding, тогда родительский и дочерний отступ схлопнутся и результатом будет больший из двух отступов.

Чтобы убрать схлопывание, нужно задать для родительского элемента border или padding.

**ширину border нельзя использовать в процентах**  

### Префиксы производителей  
Чтобы пометить CSS-свойство как экспериментальное или еще не до конца согласованное, производители браузеров используют префикс, который ставится перед названием свойства. Обычно, если W3C CSS Working Group принимает свойство и в достаточной степени завершает его детализацию, производители отказываются от префикса.  

Процентные значения свойства ширины width рассчитываются на основании ширины элемента-контейнера. Если вы установите ширину заголовка равной 75 %, и этот заголовок не вложен ни в какие другие элементы веб-страницы с явно определенной шириной, то ширина текста заголовка составит 75 % от ширины окна браузера. Если посетитель изменит размер окна браузера, то ширина заголовка тоже изменится. Однако если заголовок заключен в блок <div> шириной 200 пикселов, то ширина данного заголовка составит 150 пикселов.  

!!!???Процентные значения в свойстве высоты height работают точно так же, но расчет базируется на высоте элемента-контейнера, а не на его ширине.  

### Наследование стилей. Свойства inset, initial, inherit  
Значение **initial** применяется для установки исходного значения свойства. Может восстановить значения свойств, заданных браузером по умолчанию или задать начальное значение свойства, измененное в результате наследования.  

**inherit** - ключевое слово, которое сообщает, что необходимо наследовать значение свойства у родительского элемента. Естественно, результат будет заметен только в том случае, если у родителя указанное свойство установлено.  

The unset CSS keyword resets a property to its inherited value if it inherits from its parent, and to its initial value if not. In other words, it behaves like the inherit keyword in the first case, and like the initial keyword in the second case.  

https://developer.mozilla.org/en-US/docs/Web/CSS/unset  


### Перемещение  
Функция translate свойства transform просто перемещает элемент из его текущей позиции на некоторое расстояние вправо или влево и вверх или вниз.  

Функции translate передаются два значения: первое определяет величину горизонтального, а второе — вертикального перемещения. Чтобы элемент переместился влево, нужно для первого значения использовать отрицательное число, применение отрицательного числа в качестве второго значения приведет к перемещению элемента вверх.  

В CSS3 предоставляются также две дополнительные функции для перемещения элемента только влево или вправо — translateX и только вверх или вниз —translateY. Например, для перемещения элемента вверх на .5em используется функция translateY:

                                        transform: translateY(-.5em);

### наклон  
Наклон элемента можно осуществить по его горизонтальной и вертикальной осям. Например, для наклона всех вертикальных линий влево на 45°, нужно написать следующий код:

                                        transform: skew(45deg, 0);

Первое значение задает угол от 0deg до 360deg для всех вертикальных линий, действующий в направлении против часовой стрелки.

Второе значение задает угол от 0deg до 360deg для всех горизонтальных линий, действующий в направлении по часовой стрелке.

Как и в случае с translate и scale, в CSS3 предлагаются отдельные функции для осей X и Y: skewX и skewY.

### Множественные преобразования
Изображение можно одновременно масштабировать и наклонять, вращать и перемещать или использовать любые из четырех различных преобразований. Нужно просто добавить через запятую к свойству transform дополнительные функции. Например, повернуть элемент на 45° и увеличить его размер вдвое можно с помощью следующего объявления:

                                        transform: rotate(45deg) scale(2);
                    transform: skew(45deg,0deg) scale(.5) translate(400px,500px) rotate(90deg);

Браузер будет применять все эффекты в порядке следования функций. Порядок не играет роли, если только не используется перемещение.  

### исходная точка  
Обычно, когда к элементу применяется преобразование, в качестве точки начала преобразования браузер использует центр элемента. Например, при вращении элемента браузер поворачивает его вокруг центральной точки. Но в CSS3 разрешается изменять точку преобразования, используя свойство transform-origin. Для него можно указывать ключевые слова, абсолютные значения и относительные значения в em и процентах.

Например, чтобы повернуть div-контейнер вокруг его левой верхней точки, можно воспользоваться ключевыми словами left и top:  

                                        transform-origin: left top;

Можно также использовать пиксельные значения:

                                        transform-origin: 0 0;

или проценты:  

                                        transform-origin: 0% 0%;

При использовании пикселов, em или процентных значений, первое число означает горизонтальную, а второе — вертикальную позицию.  

### Переходы  
В основе CSS-переходов лежат четыре свойства, который управляют тем, какие свойства анимировать, сколько времени займет анимация, какой тип анимации будет использован и какой будет необязательная задержка перед началом анимации.

**transition-property** — указывает на анимируемое свойство. Можно указать одно свойство, воспользоваться ключевым словом all для анимирования всех изменяемых CSS-свойств или применить списком с запятой в качестве разделителя для указания более чем одного свойства (но не всех свойств).  

Чтобы указать продолжительность анимации, используется свойство **transition-duration**. Ему передается или значение в секундах, или значение в миллисекундах (тысячных долях секунды). Например, чтобы переход занимал полсекунды, можно использовать два варианта:

                                        transition-duration: .5s;
                                        transition-duration: 500ms;  

Можно даже указать отдельную продолжительность для каждого анимируемого свойства.  

                                transition-property: color, background-color, border-color;
                                  transition-duration: .25s, .75s, 2s;

с помощью свойства **transition-timing-function** можно также контролировать и скорость хода анимации. Это свойство управляет не продолжительностью анимации, а скоростью хода анимации. Например, можно начать анимацию медленно, а затем быстро ее завершить.

Свойство transition-timing-function может получать одно из пяти ключевых слов: linear, ease, ease-in, ease-out и ease-in-out. Если функцию регулирования скорости не задавать, браузер будет использовать метод ease, при котором анимация начинается медленно, ускоряется к середине и замедляется к концу, предоставляя более естественное изменение.

Можно задержать время начала анимации перехода, воспользовавшись свойством **transition‑delay**  

Краткая запись свойства transition - нужно просто перечислить через запятую свойство, продолжительность, функцию распределения скорости по времени и задержку.  

                                        transition: all 1s ease-in .5s;

### Анимация  


адаптивный веб-дизайн сильно напоминает макеты с непостоянной шириной — конструкции, использующие процентные отношения с целью расширения или сужения в ответ на задаваемую ширину окна браузера. Но в новом веб-дизайне технология пошла дальше путем использования более сложного кода CSS, так называемых уточнений носителей данных (Media Queries) для отправки различных дизайнерских решений для браузеров, располагающих экранами разной ширины, что позволяет создавать существенно отличающийся по внешнему виду макеты в зависимости от устройств, на которых просматривается страница.  

движение под названием Mobile First связано с ограниченным размером экрана смартфонов, а также с ограниченным вниманием людей, находящихся в движении. Конструкции Mobile First касаются начального вида вашего содержимого, а также избавления от его излишнего зашумления, включая дополнительную информацию, которая прекрасно помещается на больших экранах настольных систем, но создает помеху на экранах значительно меньшего размера и отвлекает от основной информации, которую вы надеялись донести до посетителя.  

### проблемы плавающих элементов


В CSS3 представлен **модуль многоколоночной разметки**: он позволяет делить один элемент (например, заполненный текстом div-элемент) на три, четыре столбца или более. Этот модуль предоставляет CSS-свойства для определения количества столбцов, пустых пространств между ними и добавления прямых линий между столбцами:

                                            .multicol {
                                                column-count: 3;
                                                column-gap: 1em;
                                                column-rule: 1px dotted black;
                                            }

### ch_14 - адаптивный веб-дизайн  
позволяет изменять всю разметку страницы на основе ширины окна браузера.

Поскольку производители телефонов понимают, что большинство веб-сайтов созданы для экранов настольных компьютеров, они заставили свои браузеры вести себя немного непривычно для вас. Мобильные браузеры не отображают страницу на все 100%; если бы они это сделали, то страница шириной 960 пикселов не поместилась бы на экране и вы бы увидели только часть этой страницы. Затем, чтобы увидеть всю страницу, вам пришлось бы перемещать поле просмотра в разных направлениях. Вместо этого, чтобы страница поместилась на экране, телефонные браузеры уменьшают масштаб. Конкретный коэффициент уменьшения варьируется в зависимости от характеристики конкретного телефона.

К счастью, есть довольно простой способ отмены такого поведения в браузерах мобильных устройств. Нужно просто к разделу <head> веб-страницы добавить следующий код (самое подходящее место для этого — непосредственно перед тегом <title>):

                                    <meta name="viewport" content="width=device-width">

Метатеги HTML предоставляют дополнительную информацию о содержимом страницы и могут дать браузерам дополнительные инструкции о способах отображения страницы на дисплее. В данном случае viewport обозначает экран браузера, а для атрибута content устанавливается ширина экрана браузера, равная ширине экрана смартфона. То есть браузерам мобильных устройств, склонным к уменьшению масштаба, предписывается этого не делать, настроив ширину экрана на текущую ширину дисплея смартфона.  

Кроме использования метатега viewport, есть еще один способ заставить смартфон не предпринимать попыток сжатия вашей страницы, а вывести вместо этого ее в 100%-ном размере. Правило @viewport позволяет делать все то же самое, что и с метатегом viewport, но в таблице стилей. Благодаря этому можно отказаться от добавления тега <meta> к каждому HTML-файлу сайта и просто добавить одно правило @viewport к своей таблице стилей:

                                            @viewport { width: device-width; }

Это правило нужно добавить в самом начале таблицы стилей до объявления самих стилей.

### Медиазапросы
Они позволяют назначать стили страницам на основе ширины и высоты окна целевого браузера.

Запрос представляет собой вопрос, заданный веб-браузеру: «Равна ли ширина экрана Х пикселам?» Если ответ положительный, браузер запускает таблицу стилей именно для устройства с данной шириной экрана.

                            <link href="css/small.css" rel="stylesheet" media="(max-width:480px)">

К этой стандартной ссылке на таблицу стилей добавился только еще один атрибут media, устанавливающий условия, при которых браузер использует указанную таблицу. Скобки вокруг запроса — (max-width: 480px) — являются обязательным элементом. Если их не поставить, браузер проигнорирует запрос.

#### Включение запросов в таблицу стилей
Есть два способа добавления медиазапросов к таблице стилей:
 * Использование директивы @import, которая позволяет загружать дополнительные внешние таблицы стилей либо во внутреннюю, либо во внешнюю таблицу стилей.

                                    @import url(css/small.css) (max-width:320px);

 * Встраивание медиазапроса в таблицу стилей. Медиазапрос можно также встроить непосредственно в таблицу стилей:

                                    @media (max-width: 480px) {
                                    body {
                                        /* сюда помещаются свойства стиля */
                                    }

#### если возникают проблемы с изображениями
Хотя колонки в гибком дизайне по мере уменьшения окна сжимаются, изображений обычно это не касается. Это может привести к выходу графики за предназначенные для нее границы и к тому, что она уже не станет вписываться в ширину колонки.

Сначала нужно добавить в таблицу стилей следующий стиль:

                                    img { max-width: 100%; }

Он установит для максимального размера любого изображения значение 100% от ширины контейнера этого изображения. То есть изображение не сможет стать больше колонки, div-контейнера или любого HTML-элемента, внутри которого оно находится.

Но этого еще недостаточно, чтобы сделать изображение гибким. Обычно при вставке тега <img> для изображения добавляются параметры его высоты и ширины. Именно эти размеры используются браузером при выводе изображения. Когда указано значение для свойства max-width, изображение не станет шире колонки, но его высота по-прежнему будет точно соответствовать значению, установленному в коде HTML. То есть изображение подстроится под ширину колонки, а его высота не изменится, что приведет к искажению этого изображения. Решение вполне очевидно: нужно просто убрать из кода HTML атрибуты width и height.

### Ch_15 - позиционирование элементов на веб-странице.  
CSS предлагает четыре типа позиционирования:
 * Абсолютное - абсолютно размещенные элементы полностью отделены от потока страницы, определенного HTML-кодом. Т.е. остальные элементы на странице не знают, что существует абсолютно позиционированный элемент.

!!! **Не пытайтесь применять одновременно свойство float и любой тип позиционирования, кроме статического**

 * Относительное - Элемент с таким позиционированием размещается относительно его текущего положения в потоке HTML. 
 В отличие от абсолютного позиционирования, здесь остальные элементы страницы регулируют старое HTML-размещение относительно позиционированного объекта. Соответственно, перемещение объекта с относительным позиционированием оставляет «дыру», на месте которой он должен был находиться.

 Основная польза относительного позиционирования не в том, чтобы переместить элемент, а в установке новой точки привязки для абсолютно позиционированных элементов, которые вложены в него.

 * Фиксированное
 * Статическое позиционирование - просто означает, что содержимое соответствует нормальному нисходящему потоку HTML.

На самом деле абсолютно позиционированный элемент помещается относительно границ его ближайшего предка. 

Позиционирование подчиняется следующим правилам:
 - тег расположен относительно окна браузера, если у него абсолютное позиционирование и он не находится внутри любого другого тега, к которому применено абсолютное, относительное или фиксированное позиционирование;
 - тег определен относительно сторон другого элемента, если он находится внутри другого тега с абсолютным, относительным или фиксированным позиционированием.

Значение hidden свойства visibility подобно значению none свойства display, но между ними есть существенное различие. Когда вы устанавливаете свойству display элемента значение none, он буквально исчезает со страницы, не оставляя следов. Однако задание свойству visibility значения hidden предотвращает показ браузером содержимого элемента, но оставляет пустое пространство в том месте, где должен был быть элемент. При использовании с абсолютно позиционированными элементами, которые уже удаляются из потока страницы, свойства visibility: hidden и display: none ведут себя одинаково.  

Есть и другой способ скрытия элемента — установка для его свойства непрозрачности opacity нулевого значения:

                                            opacity: 0;

Чтобы элемент снова появился на экране, его свойству opacity можно вернуть значение 1:

                                            opacity: 1;

### Ch_16 CSS для распечатываемых веб-страниц
CSS распознает десять различных типов устройств: all, braille, embossed, handheld, print, projection, screen, speech, tty и tv. Браузер применяет таблицу стилей, только когда активизирован тип устройства. Другими словами, браузер применяет одну таблицу стилей для просмотра на экране, а другую — для печати.  

### Как добавлять аппаратно-зависимые таблицы стилей  
#### Определение типа устройства для внешней таблицы стилей
Чтобы присоединить внешнюю таблицу стилей при определении конкретного типа устройства, используйте тег <link> с атрибутом media. Чтобы присоединить таблицу стилей, которая должна использоваться только при печати, добавьте такой HTML-код к своей веб-странице:

                                    <link rel="stylesheet" media="print" href="print.css"/>

Если вы не определите тип устройства, браузер решит, что вы имеете в виду все устройства, и будет использовать таблицу стилей для отображения на экране, при печати и т. д. Кроме того, вы можете задать множество типов устройств, разделяя их запятыми.

                        <link rel="stylesheet" media="screen, projection, handheld" href="screen.css"/>

#### Определение типа устройства внутри таблицы стилей
Вы можете также включить определенные аппаратно-зависимые стили непосредственно внутри таблицы стилей, используя инструкцию @media.  

Инструкцию @media можно также использовать для задания различных экранов и при выводе на печать.

                                        @media print {
                                            /* описывайте стили для печати здесь */
                                        }

Фактически не имеет никакого значения, помещаете вы все стили в отдельный файл и используете инструкцию @media или определяете специфические аппаратно-зависимые стили в их собственных внешних таблицах стилей (например, screen.css и printer.css). Добавление всех ваших стилей, предназначенных только для печати, в их собственную внешнюю таблицу стилей printer.css намного облегчает поиск и редактирование этих стилей.

### clearfix  
https://webcareer.ru/clearfix-na-css.html  

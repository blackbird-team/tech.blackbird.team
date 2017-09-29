# Pattern

## Правила именования
Внутри кода используем краткие, емкие и понятные наименования, по примеру коммитов. Не используем склонение по временам, если нет особых причин. Сперва действие (Что должно произойти), затем сущность (с которой происходит действие) – “add-new-elem” вместо “new-element-added”. Все приведенные ниже наименования применяются в нижнем регистре, если не указано иное применение.

Все названия файлов и папок пишем с маленькой буквы. Для JS в сamelCase либо разделитель «-», во всех других случаях через разделитель «-».

### HTML
#### Классы

Разделитель “-”.

#### Идентификаторы

сamelCase, первая буква в нижнем регистре, первые буквы второго и следующих слов – с большой.

### JS

#### Классы

С большой буквы, PascalCase.

#### Функции/Методы

сamelCase

#### Переменные
сamelCase либо разделитель “_”.
 
### JS
#### Паттерн
1. Используем документацию.
2. Каждая логическая сущность программного продукта должна быть вынесена в отдельный файл.
    1. Название файла совпадает с названием класса, либо сущности (если содержание файла функциональное)
3. Каждый файл (сущность) описываются с учетом полной автономности
    1. Получает только необходимые входные данные
    2. Использует функции связанных модулей посредством вызова методов этих модулей, а не костылями.
4. При наличии двух или более функций внутри сущности, они объединяются в класс и становятся методами.
5. Все переменные, используемые, в более чем одном методе класса, выносятся в тело объявления класса.
6. Обработчики событий объявляются внутри функции eventHand() в теле класса.

#### Область видимости
##### Переменные
1. Если переменная используется только внутри функции, она должна быть объявлена внутри нее, либо непосредственно перед функцией (например, счетчик цикла).
2. Переменные с «очевидным» содержанием называем максимально кратко:
    1. Счетчики буквами - const I, a…
    2. Ссылки на объекты для сокращения кода при многократном обращении:
        1. В случае применения внутри функции возможно использования в качестве названия переменной одной буквы, либо стандартных имен «element, elem, val, wrapper…»
        2. При обращении к переменной из разных методов, переменная выносится в тело объявления класса и именуется согласно общим правилам. (См п. JS – Паттерн - 5)

##### Функции/Методы
1. Избегаем использования вложенности функций.
    1. Если вызываемая функция логически относится к отдельной сущности, должна быть создана такая сущность, а функция использована в качестве метода.
 
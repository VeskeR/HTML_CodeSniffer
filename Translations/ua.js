/* eslint-disable linebreak-style */
_global.translation['en'] = {

    //HTMLCSAuditor.js
    "auditor_name" : 'HTML_CodeSniffer від Squiz'
    ,"auditor_using_standard" : 'Використовується стандарт'
    ,"auditor_standards" : 'Стандарти'
    ,"auditor_code_snippet" : 'Фрагмент коду'
    ,"auditor_close" : 'Закрити'
    ,"auditor_select_types" : 'Виберіть типи помилок для включення до звіту'
    ,"auditor_home" : 'Дім'
    ,"auditor_view_report" : 'Переглянути Звіт'
    ,"auditor_report" : 'Звіт'
    ,"auditor_back_to_report" : 'Повернутися до Звіту'
    ,"auditor_previous_issue" : 'Попередня Проблема'
    ,"auditor_next_issue" : 'Наступна Проблема'
    ,"auditor_issue" : 'Проблема'
    ,"auditor_of" : 'з'
    ,"auditor_errors" : 'Проблеми'
    ,"auditor_error" : 'Проблема'
    ,"auditor_warnings" : 'Попередження'
    ,"auditor_warning" : 'Попередження'
    ,"auditor_notices" : 'Зауваження'
    ,"auditor_notice" : 'Зауваження'
    ,"auditor_toggle_display_of" : 'Перемикання відображення'
    ,"auditor_messages" : 'Повідомлення'
    ,"auditor_unable_to_point" : 'Неможливо вказати на елемент, пов\'язаний з цією проблемою.'
    ,"auditor_unable_to_point_entire" : 'Не можемо вказати на це питання, оскільки воно стосується всього документа.'
    ,"auditor_unable_to_point_removed" : 'Неможливо вказати на цей елемент, оскільки він був видалений з документа після створення звіту.'
    ,"auditor_unable_to_point_outside" : 'Неможливо вказати на цей елемент, оскільки він розташований за межами елемента тіла документа.'
    ,"auditor_unable_to_point_hidden" : 'Неможливо вказати на цей елемент, оскільки він прихований від перегляду або не має візуального представлення.'
    ,"auditor_point_to_element" : 'Вказати на Елемент'
    ,"auditor_unsupported_browser" : 'Функція фрагментів коду не підтримується в цьому браузері.'
    ,"auditor_page" : 'Сторінка'
    ,"auditor_updated_to" : 'HTML_CodeSniffer оновлено до версії'
    ,"auditor_view_the_changelog" : 'Переглянути список змін'
    ,"auditor_success_criterion" : "Критерій Успіху"
    ,"auditor_suggested_techniques" : "Запропоновані Техніки"
    ,"auditor_applies_entire_document" : "Це стосується всього документа"


    //1_1_1.js
    ,"1_1_1_H30.2" : 'Елемент img є єдиним вмістом посилання, але відсутній alt-текст. Alt-текст повинен описувати мету посилання.'
    ,"1_1_1_H67.1" : 'Елемент img із порожнім alt-текстом повинен мати відсутній або порожній атрибут title.'
    ,"1_1_1_H67.2" : 'Елемент img позначений таким чином, що його ігнорують Assistive Technology.'
    ,"1_1_1_H37" : 'У елементі img відсутній атрибут alt. Використовуйте атрибут alt для введення короткої текстової альтернативи.'
    ,"1_1_1_G94.Image" : 'Переконайтеся, що alt-текст елемента img служить для тієї ж мети і містить таку ж інформацію, що й зображення.'
    ,"1_1_1_H36" : 'Кнопка відправки зображення не містить атрибута alt. Вкажіть текстову альтернативу, яка описує функцію кнопки, використовуючи атрибут alt.'
    ,"1_1_1_G94.Button" : 'Переконайтеся, що alt-текст кнопки надсилання зображення відображає ціль цієї кнопки.'
    ,"1_1_1_H24" : 'Елемент area на картинці не містить атрибута alt. Кожен елемент області повинен мати текстову альтернативу, яка описує функцію зображення map area.'
    ,"1_1_1_H24.2" : 'Переконайтеся, що текстова альтернатива елементу area служить для тієї ж мети, що й частина зображення картинки, на яку вона посилається.'
    ,"1_1_1_G73,G74" : 'Якщо це зображення неможливо повністю описати в короткій текстовій альтернативі, переконайтеся, що також доступна довга текстова альтернатива, наприклад, через посилання.'
    ,"1_1_1_H2.EG5" : 'У елементі img всередині посилання не слід використовувати alt-текст, який дублює текстовий вміст посилання.'
    ,"1_1_1_H2.EG4" : 'Елемент img всередині посилання має порожній або відсутній alt-текст, коли посилання поруч з ним містить текст посилання. Подумайте про поєднання посилань.'
    ,"1_1_1_H2.EG3" : 'Елемент img всередині посилання не повинен використовувати alt-текст, який дублює вміст текстового посилання біля нього.'
    ,"1_1_1_H53,ARIA6" : 'Елементи об\'єкта повинні містити текстову альтернативу після того, як всі інші альтернативи вичерпані.'
    ,"1_1_1_G94,G92.Object,ARIA6" : 'Перевірте, чи доступні короткі (і при необхідності довгі) текстові альтернативи для нетекстового вмісту, які служать для однієї і тієї ж мети, і представляють таку ж інформацію.'
    ,"1_1_1_H35.3" : 'Елементи аплету повинні містити текстову альтернативу в тілі елемента, для браузерів без підтримки елемента аплету.'
    ,"1_1_1_H35.2" : 'Елементи аплету повинні містити атрибут alt, щоб забезпечити текстову альтернативу браузерам, що підтримують елемент, але не можуть завантажити аплет.'
    ,"1_1_1_G94,G92.Applet" : 'Перевірте, чи доступні короткі (і при необхідності довгі) текстові альтернативи для нетекстового вмісту, які служать для однієї і тієї ж мети, і представляють таку ж інформацію.'


    //1_2_1.js
    ,"1_2_1_G158" : 'Якщо цей вбудований об\'єкт містить лише попередньо записане аудіо, та не надається як альтернатива для текстового вмісту, перевірте, чи доступна альтернативна текстова версія.'
    ,"1_2_1_G159,G166" : 'Якщо цей вбудований об\'єкт містить лише попередньо записане відео та не надається як альтернатива для текстового вмісту, перевірте, чи доступна альтернативна текстова версія, або є звукова доріжка, яка містить еквівалентну інформацію.'


    //1_2_2.js
    ,"1_2_2_G87,G93" : 'Якщо цей вбудований об\'єкт містить заздалегідь записані синхронізовані носії та не надається як альтернатива для текстового вмісту, перевірте, чи накладаються субтитри для аудіозапису.'


    //1_2_3.js
    ,"1_2_3_G69,G78,G173,G8" : 'Якщо цей вбудований об\'єкт містить попередньо записані синхронізовані носії та не надається як альтернатива для текстового вмісту, перевірте, чи передбачено аудіозапис його відео та/або альтернативної текстової версії вмісту.'


    //1_2_4.js
    ,"1_2_4_G9,G87,G93" : 'Якщо цей вбудований об\'єкт містить синхронізований носій, перевірте, чи накладаються субтитри для прямого звукового вмісту.'


    //1_2_5.js
    ,"1_2_5_G78,G173,G8" : 'Якщо цей вбудований об\'єкт містить попередньо записані синхронізовані носії, перевірте, чи передбачено аудіозапис для його відеозображення.'


    //1_2_6.js
    ,"1_2_6_G54,G81" : 'Якщо цей вбудований об\'єкт містить попередньо записані синхронізовані носії, перевірте, чи надана інтерпритація мови для цього аудіо.'


    //1_2_7.js
    ,"1_2_7_G8" : 'Якщо цей вбудований об\'єкт містить синхронізований носій, і якщо пауза на звук переднього плану недостатньо для того, щоб звукові описи могли передавати почуття попередньо записаного відео, перевірте, чи передбачено розширений звуковий опис через сценарії або альтернативну версію.'


    //1_2_8.js
    ,"1_2_8_G69,G159" : 'Якщо цей вбудований об\'єкт містить попередньо записаний синхронізований носій або вміст лише для відео, перевірте, чи передбачена альтернативна текстова версія вмісту.'


    //1_2_9.js
    ,"1_2_9_G150,G151,G157" : 'Якщо цей вбудований об\'єкт містить живий контент лише для аудіо, перевірте, чи надається альтернативна текстова версія вмісту.'


    //1_3_1.js
    ,"1_3_1_F92,ARIA4" : 'Роль цього елемента - це "presentation", але він містить дочірні елементи з семантичним значенням.'
    ,"1_3_1_H44.NonExistent" : 'Атрибут "for" цієї мітки містить ідентифікатор, який не існує у документі.'
    ,"1_3_1_H44.NonExistentFragment" : 'Атрибут "for" цієї мітки містить ідентифікатор, який не існує у фрагменті документа.'
    ,"1_3_1_H44.NotFormControl" : 'Атрибут "for" цієї мітки містить ідентифікатор елемента, який не є елементом керування формою. Переконайтеся, що ви ввели правильний ідентифікатор для елемента.'
    ,"1_3_1_H65" : 'Цей елемент керування формою має атрибут "title", який порожній або містить лише пробіли. Це буде проігноровано для цілей тестування.'
    ,"1_3_1_ARIA6" : 'Цей елемент керування формою має атрибут "aria-label", який порожній або містить лише пробіли. Це буде проігноровано для цілей тестування.'
    //{{id}} will be replaced with element ID:
    ,"1_3_1_ARIA16,ARIA9" : 'Цей елемент керування формою має атрибут "aria-labelledby", однак він містить ідентифікатор "{{id}}" що не існує в елементі. Атрибут "aria-labelledby" буде ігноруватися для цілей тестування.'

    ,"1_3_1_F68.Hidden" : 'Ця прихована форма позначена певним чином. Не має необхідності позначати приховане поле форми.'
    ,"1_3_1_F68.HiddenAttr" : 'Це поле форми призначено для приховання (використовуючи "hidden" атрибут), але також позначено певним чином. Там не має необхідності позначати прихованого поля форми.'
    ,"1_3_1_F68" : 'Це поле форми має бути позначено певним чином. Використовуйте елемент мітки (як для атрибута "for"), так і за назвою "title", "aria-label" або "aria-labelledby" відповідно.'

    ,"1_3_1_H49." : 'Використовується презентаційна розмітка, застаріла в HTML5.'
    ,"1_3_1_H49.AlignAttr" : 'Вирівняйте атрибути.'
    ,"1_3_1_H49.Semantic" : 'Семантичну розмітку слід використовувати для позначення підкресленого або спеціального тексту, щоб його можна було визначити програмно.'
    ,"1_3_1_H49.AlignAttr.Semantic" : 'Семантичну розмітку слід використовувати для позначення підкресленого або спеціального тексту, щоб його можна було визначити програмно.'

    ,"1_3_1_H42" : 'Розмітку заголовків слід використовувати, якщо цей вміст призначений як заголовок.'

    ,"1_3_1_H63.3" : 'Клітинка таблиці має недійсний атрибут scope. Допустимими значеннями є row, col, rowgroup, colgroup.'
    ,"1_3_1_H63.2" : 'Атрибути області для елементів td, які діють як заголовки для інших елементів, застаріли в HTML5. Замість цього використовуйте th елемент.'
    ,"1_3_1_H43.ScopeAmbiguous" : 'Атрибути scope елементів th є неоднозначними в таблиці з декількома рівнями заголовків. Замість цього використовуйте атрибут заголовків на елементах td.'
    ,"1_3_1_H43.IncorrectAttr" : 'Неправильні атрибути заголовків на цьому елементі td. Очікуваний "{{expected}}", але знайдено "{{actual}}"'
    ,"1_3_1_H43.IncorrectAttrNotice" : 'Перевірте правильність атрибуту headers в елементах td.'

    ,"1_3_1_H43.HeadersRequired" : 'Співвідношення між елементами td та пов\'язаними з ними th елементами не визначено. Оскільки ця таблиця має декілька рівнів th елементів, ви повинні використовувати атрибут заголовків на елементах td.'
    ,"1_3_1_H43.MissingHeaderIds" : 'Не всі th елементи цієї таблиці містять атрибут id. Ці клітинки повинні містити ідентифікатори, щоб до них могли посилатися атрибути заголовків елементів td.'
    ,"1_3_1_H43.MissingHeadersAttrs" : 'Не всі елементи td у цій таблиці містять атрибут заголовків. Кожен атрибут заголовків повинен містити список ідентифікаторів всіх елементів, пов\'язаних із цією клітиною.'
    ,"1_3_1_H43,H63" : 'Співвідношення між елементами td та пов\'язаними з ними елементами не визначено. Використовуйте атрибут scope для th елементів або атрибут headers на елементах td.'
    ,"1_3_1_H63.1" : 'Не всі th-елементи у цій таблиці мають атрибут scope. Ці комірки повинні містити атрибут scope, щоб визначити їх зв\'язок з елементами td.'

    ,"1_3_1_H73.3.LayoutTable" : 'Ця таблиця, як видається, використовується для макета, але містить атрибут summary. Таблиці макету не повинні містити атрибути summary, або, якщо вони надані, повинні бути порожніми.'
    ,"1_3_1_H39,H73.4" : 'Якщо ця таблиця є таблицею даних, і є атрибут summary та елемент caption, то summary не повинно дублювати атрибут caption.'
    ,"1_3_1_H73.3.Check" : 'Якщо це таблиця даних, перевірте, щоб атрибут summary описував організацію таблиці або пояснював, як нею користуватися.'
    ,"1_3_1_H73.3.NoSummary" : 'Якщо ця таблиця є таблицею даних, розгляньте можливість використання атрибута summary елемента таблиці, щоб отримати загальний огляд цієї таблиці.'
    ,"1_3_1_H39.3.LayoutTable" : 'Схоже, що ця таблиця використовується для макета, але містить елемент caption. Макети таблиці не повинні містити caption.'
    ,"1_3_1_H39.3.Check" : 'Якщо ця таблиця є таблицею даних, перевірте, чи caption точно описує цю таблицю.'
    ,"1_3_1_H39.3.NoCaption" : 'Якщо ця таблиця є таблицею даних, розгляньте можливість використання елемента caption елементу таблиці, щоб визначити цю таблицю.'

    ,"1_3_1_H71.NoLegend" : 'Fieldset не містить елемент legend. Всі fieldset повинні містити елемент legend, який описує групи полів.'
    ,"1_3_1_H85.2" : 'Якщо цей список вибору містить групи відповідних параметрів, їх слід згрупувати за допомогою optgroup.'

    ,"1_3_1_H71.SameName" : 'Якщо ці перемикачі або прапорці вимагають додаткового опису на рівні групи, вони повинні міститися в елементі fieldset.'

    ,"1_3_1_H48.1" : 'Цей вміст виглядає так, як імітація невпорядкованого списку, використовуючи простий текст. Якщо це так, позначення цього вмісту елементом ul додасть правильну інформацію про структуру документа.'
    ,"1_3_1_H48.2" : 'Цей вміст виглядає так, як імітація організованого списоку, використовуючи простий текст. Якщо це так, позначення цього вмісту елементом ol буде додавати до документа відповідну структуру.'

    ,"1_3_1_G141_a" : 'Структура заголовків не є логічно вкладеною. Цей елемент h{{headingNum}} є первинним заголовком документа, тому він має бути елементом h1.'
    ,"1_3_1_G141_b" : 'Структура заголовків не є логічно вкладеною. Цей елемент h{{headingNum}} має бути h{{properHeadingNum}}, щоб бути правильно вкладеним.'

    ,"1_3_1_H42.2" : 'Тег заголовка знайдено без вмісту. Текст, який не призначений як заголовок, не повинен бути позначений тегами заголовків.'
    ,"1_3_1_H48" : 'Якщо цей елемент містить розділ навігації, рекомендується позначити його як список.'

    ,"1_3_1_LayoutTable" : 'Ця таблиця виглядає як таблиця макетів. Якщо вона призначена для того, щоб бути таблицею даних, переконайтеся, що клітинки заголовків ідентифікуються за допомогою th елементів.'
    ,"1_3_1_DataTable" : 'Ця таблиця є таблицею даних. Якщо мається на увазі таблиця макету, переконайтеся, що не існує жодних th елементів, ані summary або caption.'


    //1_3_2.js
    ,"1_3_2_G57" : 'Переконайтеся, що контент знаходиться в змістовній послідовності під час лінеаризації, наприклад, коли вимикаються таблиці стилів.'


    //1_3_3.js
    ,"1_3_3_G96" : 'Якщо для розуміння вмісту надано інструкції, не покладайтеся тільки на сенсорні характеристики (наприклад, форму, розмір або розташування), щоб описати об\'єкти.'


    //1_3_4.js
    ,"1_3_4.RestrictView" : 'Переконайтеся, що контент не обмежує його перегляд і роботу лише однією орієнтацією дисплея, наприклад, книжковою або альбомною, якщо тільки певна орієнтація дисплея не є необхідною.'


    //1_3_5.js
    ,"1_3_5_H98.FaultyValue" : 'Цей елемент містить потенційно помилкове значення у своєму атрибуті автозаповнення: {{valuesStr}}.'
    ,"1_3_5_H98.InvalidAutoComplete_Text" : 'Неправильне значення автозаповнення: {{x}}. Елемент не належить до контрольної групи Text.'
    ,"1_3_5_H98.InvalidAutoComplete_Multiline" : 'Неправильне значення автозаповнення: {{x}}. Елемент не належить до контрольної групи Multiline.'
    ,"1_3_5_H98.InvalidAutoComplete_Password" : 'Неправильне значення автозаповнення: {{x}}. Елемент не належить до контрольної групи Password.'
    ,"1_3_5_H98.InvalidAutoComplete_Url" : 'Неправильне значення автозаповнення: {{x}}. Елемент не належить до контрольної групи Url.'
    ,"1_3_5_H98.InvalidAutoComplete_Telephone" : 'Неправильне значення автозаповнення: {{x}}. Елемент не належить до контрольної групи Telephone.'
    ,"1_3_5_H98.InvalidAutoComplete_Numeric" : 'Неправильне значення автозаповнення: {{x}}. Елемент не належить до контрольної групи Numeric.'
    ,"1_3_5_H98.InvalidAutoComplete_Month" : 'Неправильне значення автозаповнення: {{x}}. Елемент не належить до контрольної групи Month.'
    ,"1_3_5_H98.InvalidAutoComplete_Date" : 'Неправильне значення автозаповнення: {{x}}. Елемент не належить до контрольної групи Date.'
    ,"1_3_5_H98.Purpose" : 'Переконайтеся, що поле вводу слугує меті, визначеній у розділі "Input Purposes for User Interface Components"; і що вміст реалізовано з використанням технологій з підтримкою визначення очікуваного значення для даних, що вводяться з форми.'
    ,"1_3_5_H98.MissingAutocomplete" : 'Цей елемент не має атрибуту автозаповнення. Якщо це поле збирає інформацію про користувача, додайте його, щоб відповідати цьому критерію успішності.'


    //1_3_6.js
    ,"1_3_6_ARIA11.Check" : 'Переконайтеся, що призначення компонентів інтерфейсу користувача, піктограм та регіонів можна визначити програмно.'


    //1_4_1.js
    ,"1_4_1_G14,G18" : 'Перевірте, чи будь-яка інформація, передана за допомогою кольору окремо, також доступна в тексті або за допомогою інших візуальних сигналів.'


    //1_4_2.js
    ,"1_4_2_F23" : 'Якщо цей елемент містить аудіо, що відтворюється автоматично довше, ніж 3 секунди, перевірте, чи є можливість призупинити, зупинити або вимкнути звук.'


    //1_4_3_F24.js
    ,"1_4_3_F24.BGColour" : 'Переконайтеся, що цей елемент має успадкований колір переднього плану, який доповнює відповідний вбудований фоновий колір або зображення.'
    ,"1_4_3_F24.FGColour" : 'Переконайтеся, що цей елемент має успадкований колір фону або зображення, щоб доповнити відповідний вбудований колір переднього плану.'


    //1_4_3.js
    ,"1_4_3_G18_or_G145.Abs" : 'This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least {{required}}:1.'
    ,"1_4_3_G18_or_G145.BgImage" : 'This element\'s text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least {{required}}:1.'
    ,"1_4_3_G18_or_G145.Alpha" : 'This element\'s text or background contains transparency. Ensure the contrast ratio between the text and background are at least {{required}}:1.'
    ,"1_4_3_G18_or_G145.Fail" : 'This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least {{required}}:1, but text in this element has a contrast ratio of {{value}}:1.'
    ,"1_4_3_G18_or_G145.Fail.Recomendation" : 'Recommendation: '
    ,"1_4_3_G18_or_G145.Fail.Recomendation.Text" : 'change text colour to {{value}}'
    ,"1_4_3_G18_or_G145.Fail.Recomendation.Background" : 'change background to {{value}}'


    //1_4_4.js
    ,"1_4_4_G142" : 'Check that text can be resized without assistive technology up to 200 percent without loss of content or functionality.'


    //1_4_5.js
    ,"1_4_5_G140,C22,C30.AALevel" : 'If the technologies being used can achieve the visual presentation, check that text is used to convey information rather than images of text, except when the image of text is essential to the information being conveyed, or can be visually customised to the user\'s requirements.'


    //1_4_6.js
    ,"1_4_6_G18_or_G17.Abs" : 'This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least {{required}}:1.'
    ,"1_4_6_G18_or_G17.BgImage" : 'This element\'s text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least {{required}}:1.'
    ,"1_4_6_G18_or_G17.Fail" : 'This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least {{required}}:1, but text in this element has a contrast ratio of {{value}}:1.'
    ,"1_4_6_G18_or_G17.Fail.Recomendation" : 'Recommendation: '
    ,"1_4_6_G18_or_G17.Fail.Recomendation.Text" : 'change text colour to {{value}}'
    ,"1_4_6_G18_or_G17.Fail.Recomendation.Background" : 'change background to {{value}}'


    //1_4_7.js
    ,"1_4_7_G56" : 'For pre-recorded audio-only content in this element that is primarily speech (such as narration), any background sounds should be muteable, or be at least 20 dB (or about 4 times) quieter than the speech.'


    //1_4_8.js
    ,"1_4_8_G148,G156,G175" : 'Check that a mechanism is available for the user to select foreground and background colours for blocks of text, either through the Web page or the browser.'
    ,"1_4_8_H87,C20" : 'Check that a mechanism exists to reduce the width of a block of text to no more than 80 characters (or 40 in Chinese, Japanese or Korean script).'
    ,"1_4_8_C19,G172,G169" : 'Check that blocks of text are not fully justified - that is, to both left and right edges - or a mechanism exists to remove full justification.'
    ,"1_4_8_G188,C21" : 'Check that line spacing in blocks of text are at least 150% in paragraphs, and paragraph spacing is at least 1.5 times the line spacing, or that a mechanism is available to achieve this.'
    ,"1_4_8_H87,G146,C26" : 'Check that text can be resized without assistive technology up to 200 percent without requiring the user to scroll horizontally on a full-screen window.'


    //1_4_9.js
    ,"1_4_9_G140,C22,C30.NoException" : 'Check that images of text are only used for pure decoration or where a particular presentation of text is essential to the information being conveyed.'


    //1_4_10.js
    ,"1_4_10_C32,C31,C33,C38,SCR34,G206.Check" : "Check that content can be presented without loss of information or functionality, and without requiring scrolling in two dimensions for: \
    Vertical scrolling content at a width equivalent to 320 CSS pixels; \
    Horizontal scrolling content at a height equivalent to 256 CSS pixels; \
    Except for parts of the content which require two-dimensional layout for usage or meaning."
    ,"1_4_10_C32,C31,C33,C38,SCR34,G206.Fixed" : 'This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.'
    ,"1_4_10_C32,C31,C33,C38,SCR34,G206.Scrolling" : 'Preformatted text may require scrolling in two dimensions, which is considered a failure of this Success Criterion.'
    ,"1_4_10_C32,C31,C33,C38,SCR34,G206.Zoom" : "Interfering with a user agent's ability to zoom may be a failure of this Success Criterion."


    //1_4_11.js
    ,"1_4_11_G195,G207,G18,G145,G174,F78.Check" : 'Check that the visual presentation of the following have a contrast ratio of at least 3:1 against adjacent color(s): \
    User Interface Components: Visual information required to identify user interface components and states, except for inactive components or where the appearance of the component is determined by the user agent and not modified by the author; \
    Graphical Objects: Parts of graphics required to understand the content, except when a particular presentation of graphics is essential to the information being conveyed.'


    //1_4_12.js
    ,"1_4_12_C36,C35.Check" : 'Check that no loss of content or functionality occurs by setting all of the following and by changing no other style property: \
     \
        Line height (line spacing) to at least 1.5 times the font size; \
        Spacing following paragraphs to at least 2 times the font size; \
        Letter spacing (tracking) to at least 0.12 times the font size; \
        Word spacing to at least 0.16 times the font size.'


    //1_4_13.js
    ,"1_4_13_F95.Check" : 'Check that where receiving and then removing pointer hover or keyboard focus triggers additional content to become visible and then hidden, the following are true: \
     \
        Dismissable: A mechanism is available to dismiss the additional content without moving pointer hover or keyboard focus, unless the additional content communicates an input error or does not obscure or replace other content; \
        Hoverable: If pointer hover can trigger the additional content, then the pointer can be moved over the additional content without the additional content disappearing; \
        Persistent: The additional content remains visible until the hover or focus trigger is removed, the user dismisses it, or its information is no longer valid.'

    //2_1_1.js
    ,"2_1_1_G90" : 'Ensure the functionality provided by an event handler for this element is available through the keyboard'
    ,"2_1_1_SCR20.DblClick" : 'Ensure the functionality provided by double-clicking on this element is available through the keyboard.'
    ,"2_1_1_SCR20.MouseOver" : 'Ensure the functionality provided by mousing over this element is available through the keyboard; for instance, using the focus event.'
    ,"2_1_1_SCR20.MouseOut" : 'Ensure the functionality provided by mousing out of this element is available through the keyboard; for instance, using the blur event.'
    ,"2_1_1_SCR20.MouseMove" : 'Ensure the functionality provided by moving the mouse on this element is available through the keyboard.'
    ,"2_1_1_SCR20.MouseDown" : 'Ensure the functionality provided by mousing down on this element is available through the keyboard; for instance, using the keydown event.'
    ,"2_1_1_SCR20.MouseUp" : 'Ensure the functionality provided by mousing up on this element is available through the keyboard; for instance, using the keyup event.'


    //2_1_2.js
    ,"2_1_2_F10" : 'Check that this applet or plugin provides the ability to move the focus away from itself when using the keyboard.'


    //2_1_4.js
    ,"2_1_4.Check" : 'Check that if a keyboard shortcut is implemented in content using only letter (including upper- and lower-case letters), punctuation, number, or symbol characters, then at least one of the following is true: \
     \
        Turn off: A mechanism is available to turn the shortcut off; \
        Remap: A mechanism is available to remap the shortcut to use one or more non-printable keyboard characters (e.g. Ctrl, Alt, etc); \
        Active only on focus: The keyboard shortcut for a user interface component is only active when that component has focus. \
    '


    //2_2_1.js
    ,"2_2_1_F40.2" : 'Meta refresh tag used to redirect to another page, with a time limit that is not zero. Users cannot control this time limit.'
    ,"2_2_1_F41.2" : 'Meta refresh tag used to refresh the current page. Users cannot control the time limit for this refresh.'


    //2_2_2.js
    ,"2_2_2_SCR33,SCR22,G187,G152,G186,G191" : 'If any part of the content moves, scrolls or blinks for more than 5 seconds, or auto-updates, check that there is a mechanism available to pause, stop, or hide the content.'
    ,"2_2_2_F4" : 'Ensure there is a mechanism available to stop this blinking element in less than five seconds.'
    ,"2_2_2_F47" : 'Blink elements cannot satisfy the requirement that blinking information can be stopped within five seconds.'


    //2_2_3.js
    ,"2_2_3_G5" : 'Check that timing is not an essential part of the event or activity presented by the content, except for non-interactive synchronized media and real-time events.'


    //2_2_4.js
    ,"2_2_4_SCR14" : 'Check that all interruptions (including updates to content) can be postponed or suppressed by the user, except interruptions involving an emergency.'


    //2_2_5.js
    ,"2_2_5_G105,G181" : 'If this Web page is part of a set of Web pages with an inactivity time limit, check that an authenticated user can continue the activity without loss of data after re-authenticating.'


    //2_2_6.js
    ,"2_2_6.Check" : 'Check that users are warned of the duration of any user inactivity that could cause data loss, unless the data is preserved for more than 20 hours when the user does not take any actions.'


    //2_3_1.js
    ,"2_3_1_G19,G176" : 'Check that no component of the content flashes more than three times in any 1-second period, or that the size of any flashing area is sufficiently small.'


    //2_3_2.js
    ,"2_3_2_G19" : 'Check that no component of the content flashes more than three times in any 1-second period.'


    //2_3_3.js
    ,"2_3_3.Check" : 'Check that motion animation triggered by interaction can be disabled, unless the animation is essential to the functionality or the information being conveyed.'


    //2_4_1.js
    ,"2_4_1_H64.1" : 'Iframe element requires a non-empty title attribute that identifies the frame.'
    ,"2_4_1_H64.2" : 'Check that the title attribute of this element contains text that identifies the frame.'
    ,"2_4_1_G1,G123,G124,H69" : 'Ensure that any common navigation elements can be bypassed; for instance, by use of skip links, header elements, or ARIA landmark roles.'
    ,"2_4_1_G1,G123,G124.NoSuchID" : 'This link points to a named anchor "{{id}}" within the document, but no anchor exists with that name.'
    ,"2_4_1_G1,G123,G124.NoSuchIDFragment" : 'This link points to a named anchor "{{id}}" within the document, but no anchor exists with that name in the fragment tested.'


    //2_4_2.js
    ,"2_4_2_H25.1.NoHeadEl" : 'There is no head section in which to place a descriptive title element.'
    ,"2_4_2_H25.1.NoTitleEl" : 'A title should be provided for the document, using a non-empty title element in the head section.'
    ,"2_4_2_H25.1.EmptyTitle" : 'The title element in the head section should be non-empty.'
    ,"2_4_2_H25.2" : 'Check that the title element describes the document.'


    //2_4_3.js
    ,"2_4_3_H4.2" : 'If tabindex is used, check that the tab order specified by the tabindex attributes follows relationships in the content.'


    //2_4_4.js
    ,"2_4_4_H77,H78,H79,H80,H81,H33" : 'Check that the link text combined with programmatically determined link context, or its title attribute, identifies the purpose of the link.'
    ,"2_4_4_H77,H78,H79,H80,H81" : 'Check that the link text combined with programmatically determined link context identifies the purpose of the link.'


    //2_4_5.js
    ,"2_4_5_G125,G64,G63,G161,G126,G185" : 'If this Web page is not part of a linear process, check that there is more than one way of locating this Web page within a set of Web pages.'


    //2_4_6.js
    ,"2_4_6_G130,G131" : 'Check that headings and labels describe topic or purpose.'


    //2_4_7.js
    ,"2_4_7_G149,G165,G195,C15,SCR31" : 'Check that there is at least one mode of operation where the keyboard focus indicator can be visually located on user interface controls.'


    //2_4_8.js
    ,"2_4_8_H59.1" : 'Link elements can only be located in the head section of the document.'
    ,"2_4_8_H59.2a" : 'Link element is missing a non-empty rel attribute identifying the link type.'
    ,"2_4_8_H59.2b" : 'Link element is missing a non-empty href attribute pointing to the resource being linked.'


    //2_4_9.js
    ,"2_4_9_H30" : 'Check that text of the link describes the purpose of the link.'


    //2_5_1.js
    ,"2_5_1.Check" : 'Check that all functionality that uses multipoint or path-based gestures for operation can be operated with a single pointer without a path-based gesture, unless a multipoint or path-based gesture is essential.'


    //2_5_2.js
    ,"2_5_2.SinglePointer_Check" : "Check that for functionality that can be operated using a single pointer, at least one of the following is true: \
        No Down-Event: The down-event of the pointer is not used to execute any part of the function; \
        Abort or Undo: Completion of the function is on the up-event, and a mechanism is available to abort the function before completion or to undo the function after completion; \
        Up Reversal: The up-event reverses any outcome of the preceding down-event; \
        Essential: Completing the function on the down-event is essential."
    ,"2_5_2.Mousedown_Check" : "This element has an mousedown event listener. Check that for functionality that can be operated using a single pointer, at least one of the following is true: \
        No Down-Event: The down-event of the pointer is not used to execute any part of the function; \
        Abort or Undo: Completion of the function is on the up-event, and a mechanism is available to abort the function before completion or to undo the function after completion; \
        Up Reversal: The up-event reverses any outcome of the preceding down-event; \
        Essential: Completing the function on the down-event is essential."
    ,"2_5_2.Touchstart_Check" : "This element has a touchstart event listener. Check that for functionality that can be operated using a single pointer, at least one of the following is true: \
     \
        No Down-Event: The down-event of the pointer is not used to execute any part of the function; \
        Abort or Undo: Completion of the function is on the up-event, and a mechanism is available to abort the function before completion or to undo the function after completion; \
        Up Reversal: The up-event reverses any outcome of the preceding down-event; \
        Essential: Completing the function on the down-event is essential."


    //2_5_3.js
    ,"2_5_3_F96.Check" : "Check that for user interface components with labels that include text or images of text, the name contains the text that is presented visually."
    ,"2_5_3_F96.AccessibleName" : "Accessible name for this element does not contain the visible label text. Check that for user interface components with labels that include text or images of text, the name contains the text that is presented visually."


    //2_5_4.js
    ,"2_5_4.Check" : "Check that functionality that can be operated by device motion or user motion can also be operated by user interface components and responding to the motion can be disabled to prevent accidental actuation, except when: \
     \
        Supported Interface: The motion is used to operate functionality through an accessibility supported interface; \
        Essential: The motion is essential for the function and doing so would invalidate the activity. \
    "
    ,"2_5_4.Devicemotion" : "This element has a devicemotion event listener. Check that functionality that can be operated by device motion or user motion can also be operated by user interface components and responding to the motion can be disabled to prevent accidental actuation, except when: \
     \
        Supported Interface: The motion is used to operate functionality through an accessibility supported interface; \
        Essential: The motion is essential for the function and doing so would invalidate the activity. \
    "


    //2_5_5.js
    ,"2_5_5.Check" : 'Check that the size of the target for pointer inputs is at least 44 by 44 CSS pixels except when: \
     \
        Equivalent: The target is available through an equivalent link or control on the same page that is at least 44 by 44 CSS pixels; \
        Inline: The target is in a sentence or block of text; \
        User Agent Control: The size of the target is determined by the user agent and is not modified by the author; \
        Essential: A particular presentation of the target is essential to the information being conveyed. \
    '


    //2_5_6.js
    ,"2_5_6.Check" : 'Check that the content does not restrict use of input modalities available on a platform except where the restriction is essential, required to ensure the security of the content, or required to respect user settings.'


    //3_1_1.js
    ,"3_1_1_H57.2" : 'The html element should have a lang or xml:lang attribute which describes the language of the document.'
    ,"3_1_1_H57.3.Lang" : 'The language specified in the lang attribute of the document element does not appear to be well-formed.'
    ,"3_1_1_H57.3.XmlLang" : 'The language specified in the xml:lang attribute of the document element does not appear to be well-formed.'


    //3_1_2.js
    ,"3_1_2_H58" : 'Ensure that any change in language is marked using the lang and/or xml:lang attribute on an element, as appropriate.'
    ,"3_1_2_H58.1.Lang" : 'The language specified in the lang attribute of this element does not appear to be well-formed.'
    ,"3_1_2_H58.1.XmlLang" : 'The language specified in the xml:lang attribute of this element does not appear to be well-formed.'


    //3_1_3.js
    ,"3_1_3_H40,H54,H60,G62,G70" : 'Check that there is a mechanism available for identifying specific definitions of words or phrases used in an unusual or restricted way, including idioms and jargon.'


    //3_1_4.js
    ,"3_1_4_G102,G55,G62,H28,G97" : 'Check that a mechanism for identifying the expanded form or meaning of abbreviations is available.'


    //3_1_5.js
    ,"3_1_5_G86,G103,G79,G153,G160" : 'Where the content requires reading ability more advanced than the lower secondary education level, supplemental content or an alternative version should be provided.'


    //3_1_6.js
    ,"3_1_6_H62.1.HTML5" : 'Ruby element does not contain an rt element containing pronunciation information for its body text.'
    ,"3_1_6_H62.1.XHTML11" : 'Ruby element does not contain an rt element containing pronunciation information for the text inside the rb element.'
    ,"3_1_6_H62.2" : 'Ruby element does not contain rp elements, which provide extra punctuation to browsers not supporting ruby text.'


    //3_2_1.js
    ,"3_2_1_G107" : 'Check that a change of context does not occur when this input field receives focus.'


    //3_2_2.js
    ,"3_2_2_H32.2" : 'This form does not contain a submit button, which creates issues for those who cannot submit the form using the keyboard. Submit buttons are INPUT elements with type attribute "submit" or "image", or BUTTON elements with type "submit" or omitted/invalid.'


    //3_2_3.js
    ,"3_2_3_G61" : 'Check that navigational mechanisms that are repeated on multiple Web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user.'


    //3_2_4.js
    ,"3_2_4_G197" : 'Check that components that have the same functionality within this Web page are identified consistently in the set of Web pages to which it belongs.'


    //3_2_5.js
    ,"3_2_5_H83.3" : 'Check that this link\'s link text contains information indicating that the link will open in a new window.'


    //3_3_1.js
    ,"3_3_1_G83,G84,G85" : 'If an input error is automatically detected in this form, check that the item(s) in error are identified and the error(s) are described to the user in text.'


    //3_3_2.js
    ,"3_3_2_G131,G89,G184,H90" : 'Check that descriptive labels or instructions (including for required fields) are provided for user input in this form.'


    //3_3_3.js
    ,"3_3_3_G177" : 'Check that this form provides suggested corrections to errors in user input, unless it would jeopardize the security or purpose of the content.'


    //3_3_4.js
    ,"3_3_4_G98,G99,G155,G164,G168.LegalForms" : 'If this form would bind a user to a financial or legal commitment, modify/delete user-controllable data, or submit test responses, ensure that submissions are either reversible, checked for input errors, and/or confirmed by the user.'


    //3_3_5.js
    ,"3_3_5_G71,G184,G193" : 'Check that context-sensitive help is available for this form, at a Web-page and/or control level.'


    //3_3_6.js
    ,"3_3_6_G98,G99,G155,G164,G168.AllForms" : 'Check that submissions to this form are either reversible, checked for input errors, and/or confirmed by the user.'


    //4_1_1.js
    ,"4_1_1_F77" : 'Duplicate id attribute value "{{id}}" found on the web page.'


    //4_1_2.js
    ,"4_1_2_H91.A.Empty" : 'Anchor element found with an ID but without a href or link text. Consider moving its ID to a parent or nearby element.'
    ,"4_1_2_H91.A.EmptyWithName" : 'Anchor element found with a name attribute but without a href or link text. Consider moving the name attribute to become an ID of a parent or nearby element.'
    ,"4_1_2_H91.A.EmptyNoId" : 'Anchor element found with no link content and no name and/or ID attribute.'
    ,"4_1_2_H91.A.NoHref" : 'Anchor elements should not be used for defining in-page link targets. If not using the ID for other purposes (such as CSS or scripting), consider moving it to a parent element.'
    ,"4_1_2_H91.A.Placeholder" : 'Anchor element found with link content, but no href, ID or name attribute has been supplied.'
    ,"4_1_2_H91.A.NoContent" : 'Anchor element found with a valid href attribute, but no link content has been supplied.'


    ,"4_1_2_input_element" : 'input element'
    ,"4_1_2_element_content" : 'element content'
    ,"4_1_2_element" : 'element'
    ,"4_1_2_msg_pattern" : 'This {{msgNodeType}} does not have a name available to an accessibility API. Valid names are: {{builtAttrs}}.'
    ,"4_1_2_msg_pattern_role_of_button" : 'This element has role of "button" but does not have a name available to an accessibility API. Valid names are: {{builtAttrs}}.'
    ,"4_1_2_msg_pattern2" : 'This {{msgNodeType}} does not have a value available to an accessibility API.'
    ,"4_1_2_msg_add_one" : 'Add one by adding content to the element.'
    ,"4_1_2_msg_pattern3" : 'This {{msgNodeType}} does not have an initially selected option. Depending on your HTML version, the value exposed to an accessibility API may be undefined.'
    ,"4_1_2_value_exposed_using_attribute" : 'A value is exposed using the {{requiredValue}} attribute.'
    ,"4_1_2_value_exposed_using_element" : 'A value is exposed using the {{requiredValue}} element.'


    //4_1_3.js
    ,"4_1_3_ARIA22,G199,ARIA19,G83,G84,G85,G139,G177,G194,ARIA23.Check" : 'Check that status messages can be programmatically determined through role or properties such that they can be presented to the user by assistive technologies without receiving focus.'

};

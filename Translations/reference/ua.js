(function (root, factory) {
  var exports = factory();
  for (var prop in exports) {
    root[prop] = exports[prop];
  }
})(this, function () {
  var _global = {};

  (_global.HTMLCS_Section508 = {
    name: 'Section508',
    description: 'U.S. Section 508 Standard',
    sniffs: ['A', 'B', 'C', 'D', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'],
    getMsgInfo: function (a) {
      return [['Section', '1194.22 (' + a.split('.', 3)[1].toLowerCase() + ')']];
    },
  }),
    (_global.HTMLCS_Section508_Sniffs_A = {
      register: function () {
        return ['_top', 'img', 'object', 'bgsound', 'audio'];
      },
      process: function (a, b) {
        if (a === b) this.addNullAltTextResults(b), this.addMediaAlternativesResults(b);
        else {
          var c = a.nodeName.toLowerCase();
          ('object' !== c && 'bgsound' !== c && 'audio' !== c) ||
            HTMLCS.addMessage(
              HTMLCS.NOTICE,
              a,
              'Для мультимедіа, що містять тільки аудіо, переконайтеся, що доступна альтернатива, така як повна текстова стенограма.',
              'Audio'
            );
        }
      },
      testNullAltText: function (a) {
        var b = {
          img: {
            generalAlt: [],
            missingAlt: [],
            ignored: [],
            nullAltWithTitle: [],
            emptyAltInLink: [],
          },
          inputImage: { generalAlt: [], missingAlt: [] },
          area: { generalAlt: [], missingAlt: [] },
        };
        elements = HTMLCS.util.getAllElements(a, 'img, area, input[type="image"]');
        for (var c = 0; c < elements.length; c++) {
          var d = elements[c],
            e = d.nodeName.toLowerCase(),
            f = !1,
            g = !1,
            h = !1;
          if ('a' === d.parentNode.nodeName.toLowerCase()) {
            var i = HTMLCS.util.getPreviousSiblingElement(d, null),
              j = HTMLCS.util.getNextSiblingElement(d, null);
            if (null === i && null === j) {
              var k = d.parentNode.textContent;
              if (void 0 !== d.parentNode.textContent) var k = d.parentNode.textContent;
              else var k = d.parentNode.innerText;
              !0 === HTMLCS.util.isStringEmpty(k) && (f = !0);
            }
          }
          switch (
            (!1 === d.hasAttribute('alt')
              ? (g = !0)
              : (d.getAttribute('alt') && !0 !== HTMLCS.util.isStringEmpty(d.getAttribute('alt'))) || (h = !0),
            e)
          ) {
            case 'img':
              !0 !== f || (!0 !== g && !0 !== h)
                ? !0 === g
                  ? b.img.missingAlt.push(d)
                  : !0 === h
                  ? !0 === d.hasAttribute('title') && !1 === HTMLCS.util.isStringEmpty(d.getAttribute('title'))
                    ? b.img.nullAltWithTitle.push(d)
                    : b.img.ignored.push(d)
                  : b.img.generalAlt.push(d)
                : b.img.emptyAltInLink.push(d.parentNode);
              break;
            case 'input':
              !0 === g || !0 === h ? b.inputImage.missingAlt.push(d) : b.inputImage.generalAlt.push(d);
              break;
            case 'area':
              !0 === g || !0 === h ? b.area.missingAlt.push(d) : b.inputImage.generalAlt.push(d);
          }
        }
        return b;
      },
      addNullAltTextResults: function (a) {
        for (var b = this.testNullAltText(a), c = 0; c < b.img.emptyAltInLink.length; c++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            b.img.emptyAltInLink[c],
            'Елемент img є єдиним вмістом посилання, але відсутній alt-текст. Alt-текст повинен описувати мету посилання.',
            'Img.EmptyAltInLink'
          );
        for (var c = 0; c < b.img.nullAltWithTitle.length; c++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            b.img.nullAltWithTitle[c],
            'Елемент img є єдиним вмістом посилання, але alt-текст не існує. Alt-текст повинен описувати мету посилання.',
            'Img.NullAltWithTitle'
          );
        for (var c = 0; c < b.img.ignored.length; c++)
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            b.img.ignored[c],
            'Елемент img позначений таким чином, що його ігнорують Assistive Technology.',
            'Img.Ignored'
          );
        for (var c = 0; c < b.img.missingAlt.length; c++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            b.img.missingAlt[c],
            'У елементі img відсутній атрибут alt. Використовуйте атрибут alt для введення короткої текстової альтернативи.',
            'Img.MissingAlt'
          );
        for (var c = 0; c < b.img.generalAlt.length; c++)
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            b.img.generalAlt[c],
            'Переконайтеся, що alt-текст елемента img служить для тієї ж мети і містить таку ж інформацію, що й зображення.',
            'Img.GeneralAlt'
          );
        for (var c = 0; c < b.inputImage.missingAlt.length; c++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            b.inputImage.missingAlt[c],
            'Кнопка відправки зображення не містить атрибута alt. Вкажіть текстову альтернативу, яка описує функцію кнопки, використовуючи атрибут alt.',
            'InputImage.MissingAlt'
          );
        for (var c = 0; c < b.inputImage.generalAlt.length; c++)
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            b.inputImage.generalAlt[c],
            'Переконайтеся, що alt-текст кнопки надсилання зображення відображає ціль цієї кнопки.',
            'InputImage.GeneralAlt'
          );
        for (var c = 0; c < b.area.missingAlt.length; c++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            b.area.missingAlt[c],
            'Елемент area зображення не містить атрибута alt. Кожен елемент area повинен мати текстову альтернативу.',
            'Area.MissingAlt'
          );
        for (var c = 0; c < b.area.generalAlt.length; c++)
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            b.area.generalAlt[c],
            'Переконайтеся, що текстова альтернатива елемента area служить для тієї ж мети, що й частина зображення, на яку вона посилається.',
            'Area.GeneralAlt'
          );
      },
      testMediaTextAlternatives: function (a) {
        for (
          var b = {
              object: {
                missingBody: [],
                generalAlt: [],
              },
              applet: {
                missingBody: [],
                missingAlt: [],
                generalAlt: [],
              },
            },
            c = HTMLCS.util.getAllElements(a, 'object'),
            d = 0;
          d < c.length;
          d++
        ) {
          var e = c[d],
            f = (e.nodeName.toLowerCase(), e.querySelector('object'));
          if (null === f) {
            var g = HTMLCS.util.getElementTextContent(e, !0);
            '' === g ? b.object.missingBody.push(e) : b.object.generalAlt.push(e);
          }
        }
        for (var c = HTMLCS.util.getAllElements(a, 'applet'), d = 0; d < c.length; d++) {
          var f = e.querySelector('object'),
            h = !1;
          if (null === f) {
            var g = HTMLCS.util.getElementTextContent(e, !0);
            !0 === HTMLCS.util.isStringEmpty(g) && (b.applet.missingBody.push(e), (h = !0));
          }
          var i = e.getAttribute('alt') || '';
          !0 === HTMLCS.util.isStringEmpty(i) && (b.applet.missingAlt.push(e), (h = !0)),
            !1 === h && b.applet.generalAlt.push(e);
        }
        return b;
      },
      addMediaAlternativesResults: function (a) {
        for (
          var b = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_1_1_1_1.testMediaTextAlternatives(a), c = 0;
          c < b.object.missingBody.length;
          c++
        )
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            b.object.missingBody[c],
            "Елементи об'єкта повинні містити текстову альтернативу після того, як всі інші альтернативи вичерпані.",
            'Object.MissingBody'
          );
        for (var c = 0; c < b.object.generalAlt.length; c++)
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            b.object.generalAlt[c],
            'Перевірте, чи доступні короткі (і при необхідності довгі) текстові альтернативи для нетекстового вмісту, які служать для однієї і тієї ж мети, і представляють таку ж інформацію.',
            'Object.GeneralAlt'
          );
        for (var c = 0; c < b.applet.missingBody.length; c++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            b.applet.missingBody[c],
            'Елементи аплету повинні містити текстову альтернативу в тілі елемента, для браузерів без підтримки елемента аплету.',
            'Applet.MissingBody'
          );
        for (var c = 0; c < b.applet.missingAlt.length; c++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            b.applet.missingAlt[c],
            'Елементи аплету повинні містити атрибут alt, щоб забезпечити текстову альтернативу браузерам, що підтримують елемент, але не можуть завантажити аплет.',
            'Applet.MissingAlt'
          );
        for (var c = 0; c < b.applet.generalAlt.length; c++)
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            b.applet.generalAlt[c],
            'Перевірте, чи доступні короткі (і при необхідності довгі) текстові альтернативи для нетекстового вмісту, які служать для однієї і тієї ж мети, і представляють таку ж інформацію.',
            'Applet.GeneralAlt'
          );
      },
    }),
    (_global.HTMLCS_Section508_Sniffs_B = {
      register: function () {
        return ['object', 'applet', 'embed', 'video'];
      },
      process: function (a, b) {
        a.nodeName.toLowerCase();
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          a,
          'Для мультимедійних файлів, що містять відео, забезпечте синхронізований аудіозапис або текстову альтернативу для відеочастини.',
          'Video'
        ),
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            a,
            'Для мультимедіа, що містить синхронізоване аудіо та відео, забезпечте синхронізовані субтитри для звукової частини.',
            'Captions'
          );
      },
    }),
    (_global.HTMLCS_Section508_Sniffs_C = {
      register: function () {
        return ['_top'];
      },
      process: function (a, b) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          b,
          'Переконайтеся, що будь-яка інформація, яка передана лише кольором, також доступна без кольору, наприклад через контекст або розмітку.',
          'Colour'
        );
      },
    }),
    (_global.HTMLCS_Section508_Sniffs_D = {
      register: function () {
        return ['_top'];
      },
      process: function (a, b) {
        if (a === b) {
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            b,
            'Переконайтеся, що вміст впорядкований у змістовній послідовності при лінеаризації, наприклад, коли таблиць стилів вимкнено.',
            'Linearised'
          ),
            this.testPresentationMarkup(b),
            this.testHeadingOrder(b);
          HTMLCS.util.getAllElements(b, 'script, link[rel="stylesheet"]').length > 0 &&
            HTMLCS.addMessage(
              HTMLCS.NOTICE,
              b,
              'Якщо вміст приховано та стає видимим за допомогою сценаріїв (наприклад, розділи "клацніть, щоб розгорнути"), переконайтесь, що цей вміст читається, коли сценарії та таблиці стилів вимкнено.',
              'HiddenText'
            );
        }
      },
      testPresentationMarkup: function (a) {
        _global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1.testPresentationMarkup(a);
      },
      testHeadingOrder: function (a) {
        for (var b = 0, c = HTMLCS.util.getAllElements(a, 'h1, h2, h3, h4, h5, h6'), d = 0; d < c.length; d++) {
          var e = parseInt(c[d].nodeName.substr(1, 1));
          if (e - b > 1) {
            var f = 'should be an h' + (b + 1) + ' to be properly nested';
            0 === b && (f = 'це основний заголовок документа, тому повинен бути елементом h1'),
              HTMLCS.addMessage(
                HTMLCS.ERROR,
                c[d],
                'Структура заголовків не логічно вкладена. Цей h' + e + ' елемент ' + f + '.',
                'HeadingOrder'
              );
          }
          b = e;
        }
      },
    }),
    (_global.HTMLCS_Section508_Sniffs_G = {
      register: function () {
        return ['table'];
      },
      process: function (a, b) {
        !0 === HTMLCS.util.isLayoutTable(a) &&
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            a,
            'Ця таблиця не має заголовків. Якщо це таблиця даних, переконайтеся, що заголовки рядків і стовпчиків ідентифікуються за допомогою елементів th.',
            'TableHeaders'
          );
      },
    }),
    (_global.HTMLCS_Section508_Sniffs_H = {
      register: function () {
        return ['table'];
      },
      process: function (a, b) {
        for (var c = HTMLCS.util.testTableHeaders(a), d = 0; d < c.wrongHeaders.length; d++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            c.wrongHeaders[d].element,
            'Неправильні атрибути заголовків на цьому елементі td. Очікуваний "' +
              c.wrongHeaders[d].expected +
              '" знайдено "' +
              c.wrongHeaders[d].actual +
              '"',
            'IncorrectHeadersAttr'
          );
        !0 === c.required &&
          !1 === c.allowScope &&
          (!1 === c.used
            ? HTMLCS.addMessage(
                HTMLCS.ERROR,
                a,
                "Співвідношення між елементами td та пов'язаними з ними елементами не визначено. Оскільки ця таблиця має декілька рівнів th елементів, ви повинні використовувати атрибут заголовків на елементах td.",
                'MissingHeadersAttrs'
              )
            : (c.missingThId.length > 0 &&
                HTMLCS.addMessage(
                  HTMLCS.ERROR,
                  a,
                  'Не всі th елементи цієї таблиці містять атрибут id. Ці клітинки повинні містити ідентифікатори, щоб до них могли посилатися атрибути заголовків елементів td.',
                  'MissingHeaderIds'
                ),
              c.missingTd.length > 0 &&
                HTMLCS.addMessage(
                  HTMLCS.ERROR,
                  a,
                  "Не всі елементи td у цій таблиці містять атрибут заголовків. Кожен атрибут заголовків повинен містити список ідентифікаторів всіх елементів, пов'язаних із цією клітиною.",
                  'IncompleteHeadersAttrs'
                )));
      },
    }),
    (_global.HTMLCS_Section508_Sniffs_I = {
      register: function () {
        return ['frame', 'iframe', 'object'];
      },
      process: function (a, b) {
        var c = a.nodeName.toLowerCase(),
          d = a.hasAttribute('title'),
          e = !0;
        !0 === d && (e = HTMLCS.util.isStringEmpty(a.getAttribute('title'))),
          !0 === e &&
            HTMLCS.addMessage(
              HTMLCS.ERROR,
              b,
              'Цей ' +
                c +
                ' елемент має відсутній текст заголовка. Рамки мають мати текстові заголовки, що полегшує ідентифікацію кадрів та навігацію.',
              'Frames'
            );
      },
    }),
    (_global.HTMLCS_Section508_Sniffs_J = {
      register: function () {
        return ['_top'];
      },
      process: function (a, b) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          b,
          'Переконайтеся, що жодна з компонентів вмісту не блимає зі швидкістю більше 2 і менше 55 разів на секунду.',
          'Flicker'
        );
      },
    }),
    (_global.HTMLCS_Section508_Sniffs_K = {
      register: function () {
        return ['_top'];
      },
      process: function (a, b) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          b,
          'Якщо ця сторінка не може бути сумісна, слід надати лише текстову сторінку з еквівалентною інформацією або функціональністю. Альтернативна сторінка повинна бути оновлена відповідно до вмісту цієї сторінки.',
          'AltVersion'
        );
      },
    }),
    (_global.HTMLCS_Section508_Sniffs_L = {
      register: function () {
        return ['_top'];
      },
      process: function (a, b) {
        a === b && (this.addProcessLinksMessages(b), this.testKeyboard(b));
      },
      addProcessLinksMessages: function (a) {
        for (var b = this.processLinks(a), c = 0; c < b.emptyNoId.length; c++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            b.emptyNoId[c],
            "Елемент прив'язки (якоря) знайдений без вмісту посилання, а також без імені та/або ідентифікатора.",
            'EmptyAnchorNoId'
          );
        for (var c = 0; c < b.placeholder.length; c++)
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            b.placeholder[c],
            "Елемент прив'язки (якоря) знайдено з вмістом посилання, але не надано атрибуту href, ідентифікатора чи назви.",
            'PlaceholderAnchor'
          );
        for (var c = 0; c < b.noContent.length; c++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            b.noContent[c],
            "Елемент прив'язки (якоря) знайдено з дійсним атрибутом href, але вміст посилання не був наданий.",
            'NoContentAnchor'
          );
      },
      processLinks: function (a) {
        for (
          var b = {
              empty: [],
              emptyWithName: [],
              emptyNoId: [],
              noHref: [],
              placeholder: [],
              noContent: [],
            },
            c = HTMLCS.util.getAllElements(a, 'a'),
            d = 0;
          d < c.length;
          d++
        ) {
          var e = c[d],
            f = !1,
            g = HTMLCS.util.getElementTextContent(e);
          !0 === e.hasAttribute('title') && !1 === /^\s*$/.test(e.getAttribute('title'))
            ? !0
            : !1 === /^\s*$/.test(g) && !0,
            !0 === e.hasAttribute('href') && !1 === /^\s*$/.test(e.getAttribute('href')) && (f = !0),
            !1 === f
              ? !0 === /^\s*$/.test(g)
                ? !0 === e.hasAttribute('id')
                  ? b.empty.push(e)
                  : !0 === e.hasAttribute('name')
                  ? b.emptyWithName.push(e)
                  : b.emptyNoId.push(e)
                : !0 === e.hasAttribute('id') || !0 === e.hasAttribute('name')
                ? b.noHref.push(e)
                : b.placeholder.push(e)
              : !0 === /^\s*$/.test(g) && 0 === e.querySelectorAll('img').length && b.noContent.push(e);
        }
        return b;
      },
      testKeyboard: function (a) {
        for (var b = HTMLCS.util.getAllElements(a, '*[ondblclick]'), c = 0; c < b.length; c++)
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            b[c],
            'Переконайтеся, що функціональність, яка надається подвійним натисканням на цей елемент, доступна через клавіатуру.',
            'DblClick'
          );
        for (var d = HTMLCS.util.getAllElements(a, '*[onmouseover]'), c = 0; c < d.length; c++)
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            d[c],
            'Переконайтеся, що функціональність, яка надається за допомогою наведення курсора миші на елемент, доступна через клавіатуру; наприклад, за допомогою focus-події.',
            'MouseOver'
          );
        for (var e = HTMLCS.util.getAllElements(a, '*[onmouseout]'), c = 0; c < e.length; c++)
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            e[c],
            'Переконайтеся, що функціональність, яка надається шляхом відведення курсора миші з цього елемента, доступна через клавіатуру; наприклад, використовуючи blur-подію.',
            'MouseOut'
          );
        for (var f = HTMLCS.util.getAllElements(a, '*[onmousemove]'), c = 0; c < f.length; c++)
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            f[c],
            'Переконайтеся, що функціональність, яка надається шляхом переміщення мишки на по цьому елементу, доступна через клавіатуру.',
            'MouseMove'
          );
        for (var g = HTMLCS.util.getAllElements(a, '*[onmousedown]'), c = 0; c < g.length; c++)
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            g[c],
            'Переконайтеся, що функціональність, яка надається за допомогою нажаття кнопки миші на цьому елементі, доступна через клавіатуру; наприклад, використовуючи подію keydown.',
            'MouseDown'
          );
        for (var h = HTMLCS.util.getAllElements(a, '*[onmouseup]'), c = 0; c < h.length; c++)
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            h[c],
            'Переконайтеся, що функціональність, яка надається за допомогою відпущення конпки миші над цим елементом, доступна через клавіатуру; наприклад, використовуючи подію keyup.',
            'MouseUp'
          );
      },
    }),
    (_global.HTMLCS_Section508_Sniffs_M = {
      register: function () {
        return ['object', 'applet', 'bgsound', 'embed', 'audio', 'video'];
      },
      process: function (a, b) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          a,
          'Якщо для зовнішнього носія потрібен плагін або програма для перегляду, переконайтеся, що посилання на плагін або програму, що відповідає вимогам доступності Section508 для додатків.',
          'PluginLink'
        );
      },
    }),
    (_global.HTMLCS_Section508_Sniffs_N = {
      register: function () {
        return ['form'];
      },
      process: function (a, b) {
        'form' === a.nodeName.toLowerCase() &&
          (HTMLCS.addMessage(
            HTMLCS.NOTICE,
            a,
            'Якщо помилка вводу автоматично виявляється в цій формі, перевірте, чи елементи з помилками ідентифіковані, а помилки описані користувачеві в тексті.',
            'Errors'
          ),
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            a,
            "Переконайтеся, що описові мітки або інструкції (в тому числі для обов'язкових полів) призначені для полів введення користувацьких даних в цій формі.",
            'Labels'
          ),
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            a,
            'Переконайтеся, що по цій формі можна переміщатися за допомогою клавіатури та інших доступних пристроїв.',
            'KeyboardNav'
          ));
      },
    }),
    (_global.HTMLCS_Section508_Sniffs_O = {
      register: function () {
        return ['_top', 'a', 'area'];
      },
      process: function (a, b) {
        if (a === b)
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            b,
            'Переконайтеся, що будь-які загальні навігаційні елементи можна обійти; наприклад, за допомогою пропущених посилань, елементів заголовку або важливих ролей ARIA.',
            'SkipLinks'
          );
        else if (!0 === a.hasAttribute('href')) {
          var c = a.getAttribute('href');
          if (((c = HTMLCS.util.trim(c)), c.length > 1 && '#' === c.charAt(0))) {
            var d = c.substr(1);
            try {
              var e = b;
              e.ownerDocument && (e = e.ownerDocument);
              var f = e.getElementById(d);
              null === f && (f = e.querySelector('a[name="' + d + '"]')),
                (null !== f && !1 !== HTMLCS.util.contains(b, f)) ||
                  (!0 === HTMLCS.isFullDoc(b) || 'body' === b.nodeName.toLowerCase()
                    ? HTMLCS.addMessage(
                        HTMLCS.ERROR,
                        a,
                        'Це посилання вказує на якір "' + d + '" в межах документа, але не існує якоря з такою назвою.',
                        'NoSuchID'
                      )
                    : HTMLCS.addMessage(
                        HTMLCS.WARNING,
                        a,
                        'Це посилання вказує на якір "' +
                          d +
                          '" в межах документа, але в існуючому фрагменті відсутній якір з таким іменем.',
                        'NoSuchIDFragment'
                      ));
            } catch (a) {}
          }
        }
      },
    }),
    (_global.HTMLCS_Section508_Sniffs_P = {
      register: function () {
        return ['_top', 'meta'];
      },
      process: function (a, b) {
        a === b
          ? HTMLCS.addMessage(
              HTMLCS.NOTICE,
              b,
              'Якщо на цій сторінці потрібна обмежена в часі відповідь, сповістіть користувача та надайте достатньо часу, щоб дозволити їм вказати, що потрібно більше часу.',
              'TimeLimit'
            )
          : !0 === a.hasAttribute('http-equiv') &&
            'refresh' === String(a.getAttribute('http-equiv')).toLowerCase() &&
            !0 === /^[1-9]\d*/.test(a.getAttribute('content').toLowerCase()) &&
            (!0 === /url=/.test(a.getAttribute('content').toLowerCase())
              ? HTMLCS.addMessage(
                  HTMLCS.ERROR,
                  a,
                  'Тег мета-оновлення, який використовується для переадресації на іншу сторінку з обмеженням часу, який не дорівнює нулю. Користувачі не можуть керувати цим обмеженням часу.',
                  'MetaRedirect'
                )
              : HTMLCS.addMessage(
                  HTMLCS.ERROR,
                  a,
                  'Тег мета-оновлення, що використовується для оновлення поточної сторінки. Користувачі не можуть контролювати часові обмеження для цього оновлення.',
                  'MetaRefresh'
                ));
      },
    }),
    (_global.HTMLCS_WCAG2A = {
      name: 'WCAG2A',
      description: 'Web Content Accessibility Guidelines (WCAG) 2.0 A',
      sniffs: [
        {
          standard: 'WCAG2AAA',
          include: [
            'Principle1.Guideline1_1.1_1_1',
            'Principle1.Guideline1_2.1_2_1',
            'Principle1.Guideline1_2.1_2_2',
            'Principle1.Guideline1_2.1_2_3',
            'Principle1.Guideline1_3.1_3_1',
            'Principle1.Guideline1_3.1_3_1_A',
            'Principle1.Guideline1_3.1_3_2',
            'Principle1.Guideline1_3.1_3_3',
            'Principle1.Guideline1_4.1_4_1',
            'Principle1.Guideline1_4.1_4_2',
            'Principle2.Guideline2_1.2_1_1',
            'Principle2.Guideline2_1.2_1_2',
            'Principle2.Guideline2_2.2_2_1',
            'Principle2.Guideline2_2.2_2_2',
            'Principle2.Guideline2_3.2_3_1',
            'Principle2.Guideline2_4.2_4_1',
            'Principle2.Guideline2_4.2_4_2',
            'Principle2.Guideline2_4.2_4_3',
            'Principle2.Guideline2_4.2_4_4',
            'Principle3.Guideline3_1.3_1_1',
            'Principle3.Guideline3_2.3_2_1',
            'Principle3.Guideline3_2.3_2_2',
            'Principle3.Guideline3_3.3_3_1',
            'Principle3.Guideline3_3.3_3_2',
            'Principle4.Guideline4_1.4_1_1',
            'Principle4.Guideline4_1.4_1_2',
          ],
        },
      ],
      getMsgInfo: function (a) {
        return HTMLCS_WCAG2AAA.getMsgInfo(a);
      },
    }),
    (_global.HTMLCS_WCAG2AA = {
      name: 'WCAG2AA',
      description: 'Web Content Accessibility Guidelines (WCAG) 2.0 AA',
      sniffs: [
        {
          standard: 'WCAG2AAA',
          include: [
            'Principle1.Guideline1_1.1_1_1',
            'Principle1.Guideline1_2.1_2_1',
            'Principle1.Guideline1_2.1_2_2',
            'Principle1.Guideline1_2.1_2_4',
            'Principle1.Guideline1_2.1_2_5',
            'Principle1.Guideline1_3.1_3_1',
            'Principle1.Guideline1_3.1_3_1_A',
            'Principle1.Guideline1_3.1_3_2',
            'Principle1.Guideline1_3.1_3_3',
            'Principle1.Guideline1_4.1_4_1',
            'Principle1.Guideline1_4.1_4_2',
            'Principle1.Guideline1_4.1_4_3',
            'Principle1.Guideline1_4.1_4_3_F24',
            'Principle1.Guideline1_4.1_4_3_Contrast',
            'Principle1.Guideline1_4.1_4_4',
            'Principle1.Guideline1_4.1_4_5',
            'Principle2.Guideline2_1.2_1_1',
            'Principle2.Guideline2_1.2_1_2',
            'Principle2.Guideline2_2.2_2_1',
            'Principle2.Guideline2_2.2_2_2',
            'Principle2.Guideline2_3.2_3_1',
            'Principle2.Guideline2_4.2_4_1',
            'Principle2.Guideline2_4.2_4_2',
            'Principle2.Guideline2_4.2_4_3',
            'Principle2.Guideline2_4.2_4_4',
            'Principle2.Guideline2_4.2_4_5',
            'Principle2.Guideline2_4.2_4_6',
            'Principle2.Guideline2_4.2_4_7',
            'Principle3.Guideline3_1.3_1_1',
            'Principle3.Guideline3_1.3_1_2',
            'Principle3.Guideline3_2.3_2_1',
            'Principle3.Guideline3_2.3_2_2',
            'Principle3.Guideline3_2.3_2_3',
            'Principle3.Guideline3_2.3_2_4',
            'Principle3.Guideline3_3.3_3_1',
            'Principle3.Guideline3_3.3_3_2',
            'Principle3.Guideline3_3.3_3_3',
            'Principle3.Guideline3_3.3_3_4',
            'Principle4.Guideline4_1.4_1_1',
            'Principle4.Guideline4_1.4_1_2',
          ],
        },
      ],
      getMsgInfo: function (a) {
        return HTMLCS_WCAG2AAA.getMsgInfo(a);
      },
    }),
    (_global.HTMLCS_WCAG2AAA = {
      name: 'WCAG2AAA',
      description: 'Web Content Accessibility Guidelines (WCAG) 2.0 AAA',
      sniffs: [
        'Principle1.Guideline1_1.1_1_1',
        'Principle1.Guideline1_2.1_2_1',
        'Principle1.Guideline1_2.1_2_2',
        'Principle1.Guideline1_2.1_2_4',
        'Principle1.Guideline1_2.1_2_5',
        'Principle1.Guideline1_2.1_2_6',
        'Principle1.Guideline1_2.1_2_7',
        'Principle1.Guideline1_2.1_2_8',
        'Principle1.Guideline1_2.1_2_9',
        'Principle1.Guideline1_3.1_3_1',
        'Principle1.Guideline1_3.1_3_1_AAA',
        'Principle1.Guideline1_3.1_3_2',
        'Principle1.Guideline1_3.1_3_3',
        'Principle1.Guideline1_4.1_4_1',
        'Principle1.Guideline1_4.1_4_2',
        'Principle1.Guideline1_4.1_4_3_F24',
        'Principle1.Guideline1_4.1_4_3_Contrast',
        'Principle1.Guideline1_4.1_4_6',
        'Principle1.Guideline1_4.1_4_7',
        'Principle1.Guideline1_4.1_4_8',
        'Principle1.Guideline1_4.1_4_9',
        'Principle2.Guideline2_1.2_1_1',
        'Principle2.Guideline2_1.2_1_2',
        'Principle2.Guideline2_2.2_2_2',
        'Principle2.Guideline2_2.2_2_3',
        'Principle2.Guideline2_2.2_2_4',
        'Principle2.Guideline2_2.2_2_5',
        'Principle2.Guideline2_3.2_3_2',
        'Principle2.Guideline2_4.2_4_1',
        'Principle2.Guideline2_4.2_4_2',
        'Principle2.Guideline2_4.2_4_3',
        'Principle2.Guideline2_4.2_4_5',
        'Principle2.Guideline2_4.2_4_6',
        'Principle2.Guideline2_4.2_4_7',
        'Principle2.Guideline2_4.2_4_8',
        'Principle2.Guideline2_4.2_4_9',
        'Principle3.Guideline3_1.3_1_1',
        'Principle3.Guideline3_1.3_1_2',
        'Principle3.Guideline3_1.3_1_3',
        'Principle3.Guideline3_1.3_1_4',
        'Principle3.Guideline3_1.3_1_5',
        'Principle3.Guideline3_1.3_1_6',
        'Principle3.Guideline3_2.3_2_1',
        'Principle3.Guideline3_2.3_2_2',
        'Principle3.Guideline3_2.3_2_3',
        'Principle3.Guideline3_2.3_2_4',
        'Principle3.Guideline3_2.3_2_5',
        'Principle3.Guideline3_3.3_3_1',
        'Principle3.Guideline3_3.3_3_2',
        'Principle3.Guideline3_3.3_3_3',
        'Principle3.Guideline3_3.3_3_5',
        'Principle3.Guideline3_3.3_3_6',
        'Principle4.Guideline4_1.4_1_1',
        'Principle4.Guideline4_1.4_1_2',
      ],
      getMsgInfo: function (a) {
        for (
          var b = {
              Principle1: {
                name: 'Perceivable',
                link: 'http://www.w3.org/TR/WCAG20/#perceivable',
              },
              Principle2: {
                name: 'Operable',
                link: 'http://www.w3.org/TR/WCAG20/#operable',
              },
              Principle3: {
                name: 'Understandable',
                link: 'http://www.w3.org/TR/WCAG20/#understandable',
              },
              Principle4: {
                name: 'Robust',
                link: 'http://www.w3.org/TR/WCAG20/#robust',
              },
            },
            c = {
              CR2: {
                name: 'Full pages',
                landmark: 'cc2',
                priority: 0,
              },
              CR3: {
                name: 'Complete processes',
                landmark: 'cc3',
                priority: 0,
              },
              CR4: {
                name: 'Only Accessibility-Supported Ways of Using Technologies',
                landmark: 'cc4',
                priority: 0,
              },
              CR5: {
                name: 'Non-Interference',
                landmark: 'cc5',
                priority: 0,
              },
              '1.1.1': {
                name: 'Non-Text Content',
                landmark: 'text-equiv-all',
                priority: 1,
              },
              '1.2.1': {
                name: 'Audio-only and Video-only (Prerecorded)',
                landmark: 'media-equiv-av-only-alt',
                priority: 1,
              },
              '1.2.2': {
                name: 'Captions (Prerecorded)',
                landmark: 'media-equiv-captions',
                priority: 1,
              },
              '1.2.3': {
                name: 'Audio Description or Media Alternative (Prerecorded)',
                landmark: 'media-equiv-audio-desc',
                priority: 1,
              },
              '1.2.4': {
                name: 'Captions (Live)',
                landmark: 'media-equiv-captions',
                priority: 2,
              },
              '1.2.5': {
                name: 'Audio Description (Prerecorded)',
                landmark: 'media-equiv-audio-desc',
                priority: 2,
              },
              '1.2.6': {
                name: 'Sign Language (Prerecorded)',
                landmark: 'media-equiv-sign',
                priority: 3,
              },
              '1.2.7': {
                name: 'Extended Audio Description (Prerecorded)',
                landmark: 'media-equiv-extended-ad',
                priority: 3,
              },
              '1.2.8': {
                name: 'Media Alternative (Prerecorded)',
                landmark: 'media-equiv-text-doc',
                priority: 3,
              },
              '1.2.9': {
                name: 'Audio-only (Live)',
                landmark: 'media-equiv-live-audio-only',
                priority: 3,
              },
              '1.3.1': {
                name: 'Info and Relationships',
                landmark: 'content-structure-separation-programmatic',
                priority: 1,
              },
              '1.3.2': {
                name: 'Meaningful Sequence',
                landmark: 'content-structure-separation-sequence',
                priority: 1,
              },
              '1.3.3': {
                name: 'Sensory Characteristics',
                landmark: 'content-structure-separation-understanding',
                priority: 1,
              },
              '1.4.1': {
                name: 'Use of Colour',
                landmark: 'visual-audio-contrast-without-color',
                priority: 1,
              },
              '1.4.2': {
                name: 'Audio Control',
                landmark: 'visual-audio-contrast-dis-audio',
                priority: 1,
              },
              '1.4.3': {
                name: 'Contrast (Minimum)',
                landmark: 'visual-audio-contrast-contrast',
                priority: 1,
              },
              '1.4.4': {
                name: 'Resize Text',
                landmark: 'visual-audio-contrast-scale',
                priority: 1,
              },
              '1.4.5': {
                name: 'Images of Text',
                landmark: 'visual-audio-contrast-text-presentation',
                priority: 1,
              },
              '1.4.6': {
                name: 'Contrast (Enhanced)',
                landmark: 'visual-audio-contrast7',
                priority: 3,
              },
              '1.4.7': {
                name: 'Low or No Background Audio',
                landmark: 'visual-audio-contrast-noaudio',
                priority: 3,
              },
              '1.4.8': {
                name: 'Visual Presentation',
                landmark: 'visual-audio-contrast-visual-presentation',
                priority: 3,
              },
              '1.4.9': {
                name: 'Images of Text (No Exception)',
                landmark: 'visual-audio-contrast-text-images',
                priority: 3,
              },
              '2.1.1': {
                name: 'Keyboard',
                landmark: 'keyboard-operation-keyboard-operable',
                priority: 1,
              },
              '2.1.2': {
                name: 'No Keyboard Trap',
                landmark: 'keyboard-operation-trapping',
                priority: 1,
              },
              '2.1.3': {
                name: 'Keyboard (No Exception)',
                landmark: 'keyboard-operation-all-funcs',
                priority: 3,
              },
              '2.2.1': {
                name: 'Timing Adjustable',
                landmark: 'time-limits-required-behaviors',
                priority: 1,
              },
              '2.2.2': {
                name: 'Pause, Stop, Hide',
                landmark: 'time-limits-pause',
                priority: 1,
              },
              '2.2.3': {
                name: 'No Timing',
                landmark: 'time-limits-no-exceptions',
                priority: 3,
              },
              '2.2.4': {
                name: 'Interruptions',
                landmark: 'time-limits-postponed',
                priority: 3,
              },
              '2.2.5': {
                name: 'Re-authenticating',
                landmark: 'time-limits-server-timeout',
                priority: 3,
              },
              '2.3.1': {
                name: 'Three Flashes or Below Threshold',
                landmark: 'seizure-does-not-violate',
                priority: 1,
              },
              '2.3.2': {
                name: 'Three Flashes',
                landmark: 'seizure-three-times',
                priority: 3,
              },
              '2.4.1': {
                name: 'Bypass Blocks',
                landmark: 'navigation-mechanisms-skip',
                priority: 1,
              },
              '2.4.2': {
                name: 'Page Titled',
                landmark: 'navigation-mechanisms-title',
                priority: 1,
              },
              '2.4.3': {
                name: 'Focus Order',
                landmark: 'navigation-mechanisms-focus-order',
                priority: 1,
              },
              '2.4.4': {
                name: 'Link Purpose (In Context)',
                landmark: 'navigation-mechanisms-refs',
                priority: 1,
              },
              '2.4.5': {
                name: 'Multiple Ways',
                landmark: 'navigation-mechanisms-mult-loc',
                priority: 2,
              },
              '2.4.6': {
                name: 'Headings and Labels',
                landmark: 'navigation-mechanisms-descriptive',
                priority: 2,
              },
              '2.4.7': {
                name: 'Focus Visible',
                landmark: 'navigation-mechanisms-focus-visible',
                priority: 2,
              },
              '2.4.8': {
                name: 'Location',
                landmark: 'navigation-mechanisms-location',
                priority: 3,
              },
              '2.4.9': {
                name: 'Link Purpose (Link Only)',
                landmark: 'navigation-mechanisms-link',
                priority: 3,
              },
              '2.4.10': {
                name: 'Section Headings',
                landmark: 'navigation-mechanisms-headings',
                priority: 3,
              },
              '3.1.1': {
                name: 'Language of Page',
                landmark: 'meaning-doc-lang-id',
                priority: 1,
              },
              '3.1.2': {
                name: 'Language of Parts',
                landmark: 'meaning-other-lang-id',
                priority: 2,
              },
              '3.1.3': {
                name: 'Unusual Words',
                landmark: 'meaning-idioms',
                priority: 3,
              },
              '3.1.4': {
                name: 'Abbreviations',
                landmark: 'meaning-located',
                priority: 3,
              },
              '3.1.5': {
                name: 'Reading Level',
                landmark: 'meaning-supplements',
                priority: 3,
              },
              '3.1.6': {
                name: 'Pronunciation',
                landmark: 'meaning-pronunciation',
                priority: 3,
              },
              '3.2.1': {
                name: 'On Focus',
                landmark: 'consistent-behavior-receive-focus',
                priority: 1,
              },
              '3.2.2': {
                name: 'On Input',
                landmark: 'consistent-behavior-unpredictable-change',
                priority: 1,
              },
              '3.2.3': {
                name: 'Consistent Navigation',
                landmark: 'consistent-behavior-consistent-locations',
                priority: 2,
              },
              '3.2.4': {
                name: 'Consistent Navigation',
                landmark: 'consistent-behavior-consistent-functionality',
                priority: 2,
              },
              '3.2.5': {
                name: 'Change on Request',
                landmark: 'consistent-behavior-no-extreme-changes-context',
                priority: 3,
              },
              '3.3.1': {
                name: 'Error Identification',
                landmark: 'minimize-error-identified',
                priority: 1,
              },
              '3.3.2': {
                name: 'Labels or Instructions',
                landmark: 'minimize-error-cues',
                priority: 1,
              },
              '3.3.3': {
                name: 'Error Suggestion',
                landmark: 'minimize-error-suggestions',
                priority: 2,
              },
              '3.3.4': {
                name: 'Error Prevention (Legal, Financial, Data)',
                landmark: 'minimize-error-reversible',
                priority: 2,
              },
              '3.3.5': {
                name: 'Help',
                landmark: 'minimize-error-context-help',
                priority: 3,
              },
              '3.3.6': {
                name: 'Error Prevention (All)',
                landmark: 'minimize-error-reversible-all',
                priority: 3,
              },
              '4.1.1': {
                name: 'Parsing',
                landmark: 'ensure-compat-parses',
                priority: 1,
              },
              '4.1.2': {
                name: 'Name, Role, Value',
                landmark: 'ensure-compat-rsv',
                priority: 1,
              },
            },
            d = a.split('.', 5),
            e = d[1],
            f = d[3].split('_').slice(0, 3).join('.'),
            g = d[4].split(','),
            h = [],
            i = 0;
          i < g.length;
          i++
        )
          (g[i] = g[i].split('.')),
            h.push('<a href="http://www.w3.org/TR/WCAG20-TECHS/' + g[i][0] + '" target="_blank">' + g[i][0] + '</a>');
        var j = [
          '<a href="http://www.w3.org/TR/WCAG20/#' + c[f].landmark,
          '" target="_blank">',
          f,
          ': ',
          c[f].name,
          '</a>',
        ].join('');
        ['<a href="', b[e].link, '" target="_blank">', b[e].name, '</a>'].join('');
        return [
          ['Success Criterion', j],
          ['Suggested Techniques', h.join(' ')],
        ];
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_1_1_1_1 = {
      register: function () {
        return ['_top', 'img'];
      },
      process: function (a, b) {
        if (a === b) this.addNullAltTextResults(b), this.addMediaAlternativesResults(b);
        else {
          switch (a.nodeName.toLowerCase()) {
            case 'img':
              this.testLinkStutter(a), this.testLongdesc(a);
          }
        }
      },
      addNullAltTextResults: function (a) {
        for (var b = this.testNullAltText(a), c = 0; c < b.img.emptyAltInLink.length; c++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            b.img.emptyAltInLink[c],
            'Елемент img є єдиним вмістом посилання, але відсутній alt-текст. Alt-текст повинен описувати мету посилання.',
            'H30.2'
          );
        for (var c = 0; c < b.img.nullAltWithTitle.length; c++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            b.img.nullAltWithTitle[c],
            'Елемент img із порожнім alt-текстом повинен мати відсутній або порожній атрибут title.',
            'H67.1'
          );
        for (var c = 0; c < b.img.ignored.length; c++)
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            b.img.ignored[c],
            'Елемент img позначений таким чином, що його ігнорують Assistive Technology.',
            'H67.2'
          );
        for (var c = 0; c < b.img.missingAlt.length; c++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            b.img.missingAlt[c],
            'У елементі img відсутній атрибут alt. Використовуйте атрибут alt для введення короткої текстової альтернативи.',
            'H37'
          );
        for (var c = 0; c < b.img.generalAlt.length; c++)
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            b.img.generalAlt[c],
            'Переконайтеся, що alt-текст елемента img служить для тієї ж мети і містить таку ж інформацію, що й зображення.',
            'G94.Image'
          );
        for (var c = 0; c < b.inputImage.missingAlt.length; c++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            b.inputImage.missingAlt[c],
            'Кнопка відправки зображення не містить атрибута alt. Вкажіть текстову альтернативу, яка описує функцію кнопки, використовуючи атрибут alt.',
            'H36'
          );
        for (var c = 0; c < b.inputImage.generalAlt.length; c++)
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            b.inputImage.generalAlt[c],
            'Переконайтеся, що alt-текст кнопки надсилання зображення відображає ціль цієї кнопки.',
            'G94.Button'
          );
        for (var c = 0; c < b.area.missingAlt.length; c++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            b.area.missingAlt[c],
            'Елемент area на картинці не містить атрибута alt. Кожен елемент області повинен мати текстову альтернативу, яка описує функцію зображення map area.',
            'H24'
          );
        for (var c = 0; c < b.area.generalAlt.length; c++)
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            b.area.generalAlt[c],
            'Переконайтеся, що текстова альтернатива елементу area служить для тієї ж мети, що й частина зображення картинки, на яку вона посилається.',
            'H24.2'
          );
      },
      testNullAltText: function (a) {
        var b = {
          img: {
            generalAlt: [],
            missingAlt: [],
            ignored: [],
            nullAltWithTitle: [],
            emptyAltInLink: [],
          },
          inputImage: {
            generalAlt: [],
            missingAlt: [],
          },
          area: {
            generalAlt: [],
            missingAlt: [],
          },
        };
        elements = HTMLCS.util.getAllElements(a, 'img, area, input[type="image"]');
        for (var c = 0; c < elements.length; c++) {
          var d = elements[c],
            e = d.nodeName.toLowerCase(),
            f = !1,
            g = !1,
            h = !1;
          if ('a' === d.parentNode.nodeName.toLowerCase()) {
            var i = HTMLCS.util.getPreviousSiblingElement(d, null),
              j = HTMLCS.util.getNextSiblingElement(d, null);
            if (null === i && null === j) {
              var k = d.parentNode.textContent;
              if (void 0 !== d.parentNode.textContent) var k = d.parentNode.textContent;
              else var k = d.parentNode.innerText;
              !0 === HTMLCS.util.isStringEmpty(k) && (f = !0);
            }
          }
          switch (
            (!1 === d.hasAttribute('alt')
              ? (g = !0)
              : (d.getAttribute('alt') && !0 !== HTMLCS.util.isStringEmpty(d.getAttribute('alt'))) || (h = !0),
            e)
          ) {
            case 'img':
              !0 !== f || (!0 !== g && !0 !== h)
                ? !0 === g
                  ? b.img.missingAlt.push(d)
                  : !0 === h
                  ? !0 === d.hasAttribute('title') && !1 === HTMLCS.util.isStringEmpty(d.getAttribute('title'))
                    ? b.img.nullAltWithTitle.push(d)
                    : b.img.ignored.push(d)
                  : b.img.generalAlt.push(d)
                : b.img.emptyAltInLink.push(d.parentNode);
              break;
            case 'input':
              !0 === g || !0 === h ? b.inputImage.missingAlt.push(d) : b.inputImage.generalAlt.push(d);
              break;
            case 'area':
              !0 === g || !0 === h ? b.area.missingAlt.push(d) : b.inputImage.generalAlt.push(d);
          }
        }
        return b;
      },
      testLongdesc: function (a) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          a,
          'Якщо це зображення неможливо повністю описати в короткій текстовій альтернативі, переконайтеся, що також доступна довга текстова альтернатива, наприклад, через посилання.',
          'G73,G74'
        );
      },
      testLinkStutter: function (a) {
        if ('a' === a.parentNode.nodeName.toLowerCase()) {
          var b = a.parentNode,
            c = {
              anchor: {
                href: b.getAttribute('href'),
                text: HTMLCS.util.getElementTextContent(b, !1),
                alt: this._getLinkAltText(b),
              },
            };
          if (
            (null === c.anchor.alt && (c.anchor.alt = ''),
            null !== c.anchor.alt &&
              '' !== c.anchor.alt &&
              HTMLCS.util.trim(c.anchor.alt).toLowerCase() === HTMLCS.util.trim(c.anchor.text).toLowerCase() &&
              HTMLCS.addMessage(
                HTMLCS.ERROR,
                a,
                'У елементі img всередині посилання не слід використовувати alt-текст, який дублює текстовий вміст посилання.',
                'H2.EG5'
              ),
            '' === c.anchor.text)
          ) {
            var d = HTMLCS.util.getPreviousSiblingElement(b, 'a', !0),
              e = HTMLCS.util.getNextSiblingElement(b, 'a', !0);
            null !== d &&
              ((c.previous = {
                href: d.getAttribute('href'),
                text: HTMLCS.util.getElementTextContent(d, !1),
                alt: this._getLinkAltText(d),
              }),
              null === c.previous.alt && (c.previous.alt = '')),
              null !== e &&
                ((c.next = {
                  href: e.getAttribute('href'),
                  text: HTMLCS.util.getElementTextContent(e, !1),
                  alt: this._getLinkAltText(e),
                }),
                null === c.next.alt && (c.next.alt = '')),
              c.next &&
                '' !== c.next.href &&
                null !== c.next.href &&
                c.anchor.href === c.next.href &&
                ('' !== c.next.text && '' === c.anchor.alt
                  ? HTMLCS.addMessage(
                      HTMLCS.ERROR,
                      a,
                      'Елемент img всередині посилання має порожній або відсутній alt-текст, коли посилання поруч з ним містить текст посилання. Подумайте про поєднання посилань.',
                      'H2.EG4'
                    )
                  : c.next.text.toLowerCase() === c.anchor.alt.toLowerCase() &&
                    HTMLCS.addMessage(
                      HTMLCS.ERROR,
                      a,
                      'Елемент img всередині посилання не повинен використовувати alt-текст, який дублює вміст текстового посилання біля нього.',
                      'H2.EG3'
                    )),
              c.previous &&
                '' !== c.previous.href &&
                null !== c.previous.href &&
                c.anchor.href === c.previous.href &&
                ('' !== c.previous.text && '' === c.anchor.alt
                  ? HTMLCS.addMessage(
                      HTMLCS.ERROR,
                      a,
                      'Елемент img всередині посилання має порожній або відсутній alt-текст, коли посилання поруч з ним містить текст посилання. Подумайте про поєднання посилань.',
                      'H2.EG4'
                    )
                  : c.previous.text.toLowerCase() === c.anchor.alt.toLowerCase() &&
                    HTMLCS.addMessage(
                      HTMLCS.ERROR,
                      a,
                      'Елемент img всередині посилання не повинен використовувати alt-текст, який дублює вміст текстового посилання біля нього.',
                      'H2.EG3'
                    ));
          }
        }
      },
      addMediaAlternativesResults: function (a) {
        for (var b = this.testMediaTextAlternatives(a), c = 0; c < b.object.missingBody.length; c++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            b.object.missingBody[c],
            "Елементи об'єкта повинні містити текстову альтернативу після того, як всі інші альтернативи вичерпані.",
            'H53,ARIA6'
          );
        for (var c = 0; c < b.object.generalAlt.length; c++)
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            b.object.generalAlt[c],
            'Перевірте, чи доступні короткі (і при необхідності довгі) текстові альтернативи для нетекстового вмісту, які служать для однієї і тієї ж мети, і представляють таку ж інформацію.',
            'G94,G92.Object,ARIA6'
          );
        for (var c = 0; c < b.applet.missingBody.length; c++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            b.applet.missingBody[c],
            'Елементи аплету повинні містити текстову альтернативу в тілі елемента, для браузерів без підтримки елемента аплету.',
            'H35.3'
          );
        for (var c = 0; c < b.applet.missingAlt.length; c++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            b.applet.missingAlt[c],
            'Елементи аплету повинні містити атрибут alt, щоб забезпечити текстову альтернативу браузерам, що підтримують елемент, але не можуть завантажити аплет.',
            'H35.2'
          );
        for (var c = 0; c < b.applet.generalAlt.length; c++)
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            b.applet.generalAlt[c],
            'Перевірте, чи доступні короткі (і при необхідності довгі) текстові альтернативи для нетекстового вмісту, які служать для однієї і тієї ж мети, і представляють таку ж інформацію.',
            'G94,G92.Applet'
          );
      },
      testMediaTextAlternatives: function (a) {
        for (
          var b = {
              object: {
                missingBody: [],
                generalAlt: [],
              },
              applet: {
                missingBody: [],
                missingAlt: [],
                generalAlt: [],
              },
            },
            c = HTMLCS.util.getAllElements(a, 'object'),
            d = 0;
          d < c.length;
          d++
        ) {
          var e = c[d],
            f = (e.nodeName.toLowerCase(), e.querySelector('object'));
          null === f &&
            (!0 === HTMLCS.util.isStringEmpty(HTMLCS.util.getElementTextContent(e, !0))
              ? !1 === HTMLCS.util.hasValidAriaLabel(e) && b.object.missingBody.push(e)
              : !1 === HTMLCS.util.hasValidAriaLabel(e) && b.object.generalAlt.push(e));
        }
        for (var c = HTMLCS.util.getAllElements(a, 'applet'), d = 0; d < c.length; d++) {
          var f = e.querySelector('object'),
            g = !1;
          if (null === f) {
            var h = HTMLCS.util.getElementTextContent(e, !0);
            !0 === HTMLCS.util.isStringEmpty(h) && (b.applet.missingBody.push(e), (g = !0));
          }
          var i = e.getAttribute('alt') || '';
          !0 === HTMLCS.util.isStringEmpty(i) && (b.applet.missingAlt.push(e), (g = !0)),
            !0 === HTMLCS.util.hasValidAriaLabel(e) && (g = !1),
            !1 === g && b.applet.generalAlt.push(e);
        }
        return b;
      },
      _getLinkAltText: function (a) {
        for (var a = a.cloneNode(!0), b = [], c = 0; c < a.childNodes.length; c++) b.push(a.childNodes[c]);
        for (var d = null; b.length > 0; ) {
          var e = b.shift();
          if (1 === e.nodeType && 'img' === e.nodeName.toLowerCase() && !0 === e.hasAttribute('alt')) {
            (d = e.getAttribute('alt')), (d = d ? d.replace(/^\s+|\s+$/g, '') : '');
            break;
          }
        }
        return d;
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_1 = {
      register: function () {
        return ['object', 'embed', 'applet', 'bgsound', 'audio', 'video'];
      },
      process: function (a, b) {
        var c = a.nodeName.toLowerCase();
        'video' !== c &&
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            a,
            "Якщо цей вбудований об'єкт містить лише попередньо записане аудіо, та не надається як альтернатива для текстового вмісту, перевірте, чи доступна альтернативна текстова версія.",
            'G158'
          ),
          'bgsound' !== c &&
            'audio' !== c &&
            HTMLCS.addMessage(
              HTMLCS.NOTICE,
              a,
              "Якщо цей вбудований об'єкт містить лише попередньо записане відео та не надається як альтернатива для текстового вмісту, перевірте, чи доступна альтернативна текстова версія, або є звукова доріжка, яка містить еквівалентну інформацію.",
              'G159,G166'
            );
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_2 = {
      register: function () {
        return ['object', 'embed', 'applet', 'video'];
      },
      process: function (a, b) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          a,
          "Якщо цей вбудований об'єкт містить заздалегідь записані синхронізовані носії та не надається як альтернатива для текстового вмісту, перевірте, чи накладаються субтитри для аудіозапису.",
          'G87,G93'
        );
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_3 = {
      register: function () {
        return ['object', 'embed', 'applet', 'video'];
      },
      process: function (a, b) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          a,
          "Якщо цей вбудований об'єкт містить попередньо записані синхронізовані носії та не надається як альтернатива для текстового вмісту, перевірте, чи передбачено аудіозапис його відео та/або альтернативної текстової версії вмісту.",
          'G69,G78,G173,G8'
        );
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_4 = {
      register: function () {
        return ['object', 'embed', 'applet', 'video'];
      },
      process: function (a, b) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          a,
          "Якщо цей вбудований об'єкт містить синхронізований носій, перевірте, чи накладаються субтитри для прямого звукового вмісту.",
          'G9,G87,G93'
        );
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_5 = {
      register: function () {
        return ['object', 'embed', 'applet', 'video'];
      },
      process: function (a, b) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          a,
          "Якщо цей вбудований об'єкт містить попередньо записані синхронізовані носії, перевірте, чи передбачено аудіозапис для його відеозображення.",
          'G78,G173,G8'
        );
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_6 = {
      register: function () {
        return ['object', 'embed', 'applet', 'video'];
      },
      process: function (a, b) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          a,
          "Якщо цей вбудований об'єкт містить попередньо записані синхронізовані носії, перевірте, чи надана інтерпритація мови для цього аудіо.",
          'G54,G81'
        );
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_7 = {
      register: function () {
        return ['object', 'embed', 'applet', 'video'];
      },
      process: function (a, b) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          a,
          "Якщо цей вбудований об'єкт містить синхронізований носій, і якщо пауза на звук переднього плану недостатньо для того, щоб звукові описи могли передавати почуття попередньо записаного відео, перевірте, чи передбачено розширений звуковий опис через сценарії або альтернативну версію.",
          'G8'
        );
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_8 = {
      register: function () {
        return ['object', 'embed', 'applet', 'video'];
      },
      process: function (a, b) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          a,
          "Якщо цей вбудований об'єкт містить попередньо записаний синхронізований носій або вміст лише для відео, перевірте, чи передбачена альтернативна текстова версія вмісту.",
          'G69,G159'
        );
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_9 = {
      register: function () {
        return ['object', 'embed', 'applet', 'bgsound', 'audio'];
      },
      process: function (a, b) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          a,
          "Якщо цей вбудований об'єкт містить живий контент лише для аудіо, перевірте, чи надається альтернативна текстова версія вмісту.",
          'G150,G151,G157'
        );
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1_A = {
      _labelNames: null,
      register: function () {
        return ['_top'];
      },
      process: function (a, b) {
        var c = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1;
        a === b && c.testHeadingOrder(b, HTMLCS.WARNING);
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1_AAA = {
      _labelNames: null,
      register: function () {
        return ['_top'];
      },
      process: function (a, b) {
        var c = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1;
        a === b && c.testHeadingOrder(b, HTMLCS.ERROR);
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1 = {
      _labelNames: null,
      register: function () {
        return [
          '_top',
          'p',
          'div',
          'input',
          'select',
          'textarea',
          'button',
          'table',
          'fieldset',
          'form',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
        ];
      },
      process: function (a, b) {
        var c = a.nodeName.toLowerCase();
        if (a === b) this.testPresentationMarkup(b), this.testEmptyDupeLabelForAttrs(b);
        else
          switch (c) {
            case 'input':
            case 'textarea':
            case 'button':
              this.testLabelsOnInputs(a, b);
              break;
            case 'form':
              this.testRequiredFieldsets(a);
              break;
            case 'select':
              this.testLabelsOnInputs(a, b), this.testOptgroup(a);
              break;
            case 'p':
            case 'div':
              this.testNonSemanticHeading(a), this.testListsWithBreaks(a), this.testUnstructuredNavLinks(a);
              break;
            case 'table':
              this.testGeneralTable(a), this.testTableHeaders(a), this.testTableCaptionSummary(a);
              break;
            case 'fieldset':
              this.testFieldsetLegend(a);
              break;
            case 'h1':
            case 'h2':
            case 'h3':
            case 'h4':
            case 'h5':
            case 'h6':
              this.testEmptyHeading(a);
          }
      },
      testSemanticPresentationRole: function (a) {
        if (a.hasAttribute('role') && 'presentation' === a.getAttribute('role')) {
          var b = ['div', 'span', 'b', 'i'],
            c = a.querySelectorAll('*:not(' + b.join('):not(') + ')');
          (c = [].filter.call(c, function (a) {
            return !1 === a.hasAttribute('role');
          })),
            c.length &&
              HTMLCS.addMessage(
                HTMLCS.ERROR,
                a,
                'Роль цього елемента - це "presentation", але він містить дочірні елементи з семантичним значенням.',
                'F92,ARIA4'
              );
        }
      },
      testEmptyDupeLabelForAttrs: function (a) {
        this._labelNames = {};
        for (var b = a.getElementsByTagName('label'), c = 0; c < b.length; c++)
          if (null !== b[c].getAttribute('for') && '' !== b[c].getAttribute('for')) {
            var d = b[c].getAttribute('for');
            if (this._labelNames[d] && null !== this._labelNames[d]) this._labelNames[d] = null;
            else {
              if (((this._labelNames[d] = b[c]), a.ownerDocument)) var e = a.ownerDocument.getElementById(d);
              else var e = a.getElementById(d);
              if (null === e) {
                var f = HTMLCS.ERROR,
                  g = 'This label\'s "for" attribute contains an ID that does not exist in the document.',
                  h = 'H44.NonExistent';
                if (!0 === HTMLCS.isFullDoc(a) || 'body' === a.nodeName.toLowerCase()) {
                  (f = HTMLCS.WARNING),
                    (g = 'Цей "for" атрибуту мітки містить ідентифікатор, який не існує в документі.');
                  var h = 'H44.NonExistentFragment';
                }
                HTMLCS.addMessage(f, b[c], g, h);
              } else {
                var i = e.nodeName.toLowerCase();
                -1 === 'input|select|textarea|button|keygen|meter|output|progress'.indexOf(i) &&
                  HTMLCS.addMessage(
                    HTMLCS.WARNING,
                    b[c],
                    'Цей "for" атрибуту мітки містить ідентифікатор елемента, який не є елементом керування формою. Переконайтеся, що ви ввели правильний ідентифікатор для елемента.',
                    'H44.NotFormControl'
                  );
              }
            }
          }
      },
      testLabelsOnInputs: function (a, b, c) {
        var d = a.nodeName.toLowerCase(),
          e = d;
        'input' === e && (e = !0 === a.hasAttribute('type') ? a.getAttribute('type') : 'text');
        var f = !1,
          g = function (a) {
            f || (f = {}), (f[a] = !0);
          },
          h = !1,
          e = e.toLowerCase();
        'select' === e || 'textarea' === e
          ? (h = !0)
          : !0 === /^(radio|checkbox|text|file|password)$/.test(e) && (h = !0),
          null !== a.getAttribute('hidden') && (h = !1),
          a.ownerDocument.querySelector('label[for="' + a.id + '"]') && g('explicit');
        var i = a.parentNode;
        i && 'label' === i.nodeName.toLowerCase() && g('implicit');
        var j = a.getAttribute('title');
        return (
          null !== j &&
            (!0 === /^\s*$/.test(j) && !0 === h
              ? HTMLCS.addMessage(
                  HTMLCS.WARNING,
                  a,
                  'Цей елемент керування формою має атрибут "title", який порожній або містить лише пробіли. Це буде проігноровано для цілей тестування.',
                  'H65'
                )
              : g('title')),
          !0 === a.hasAttribute('aria-label') &&
            (!1 === HTMLCS.util.hasValidAriaLabel(a)
              ? HTMLCS.addMessage(
                  HTMLCS.WARNING,
                  a,
                  'Цей елемент керування формою має атрибут "aria-label", який порожній або містить лише пробіли. Це буде проігноровано для цілей тестування.',
                  'ARIA6'
                )
              : g('aria-label')),
          !0 === a.hasAttribute('aria-labelledby') &&
            (!1 === HTMLCS.util.hasValidAriaLabel(a)
              ? HTMLCS.addMessage(
                  HTMLCS.WARNING,
                  a,
                  'Цей елемент керування формою має атрибут "aria-labelledby", однак він містить ідентифікатор "' +
                    a.getAttribute('aria-labelledby') +
                    '" не існує в елементі. Атрибут "aria-labelledby" буде ігноруватися для цілей тестування.',
                  'ARIA16,ARIA9'
                )
              : g('aria-labelledby')),
          !0 !== c &&
            (!1 !== f && !1 === h
              ? 'hidden' === e
                ? HTMLCS.addMessage(
                    HTMLCS.WARNING,
                    a,
                    'Ця прихована форма позначена певним чином. Не має необхідності позначати приховане поле форми.',
                    'F68.Hidden'
                  )
                : null !== a.getAttribute('hidden') &&
                  HTMLCS.addMessage(
                    HTMLCS.WARNING,
                    a,
                    'Це поле форми призначено для приховання (використовуючи "hidden" атрибут), але також позначено певним чином. Там не має необхідності позначати прихованого поля форми.',
                    'F68.HiddenAttr'
                  )
              : !1 === f &&
                !0 === h &&
                HTMLCS.addMessage(
                  HTMLCS.ERROR,
                  a,
                  'Це поле форми має бути позначено певним чином. Використовуйте елемент мітки (як для атрибута "for"), так і за назвою "title", "aria-label" або "aria-labelledby" відповідно.',
                  'F68'
                )),
          f
        );
      },
      testPresentationMarkup: function (a) {
        var b = HTMLCS.util.getElementWindow(a).document,
          c = HTMLCS.util.getDocumentType(b);
        if (!c || ('html5' !== c && 'xhtml5' !== c)) {
          for (
            var d = HTMLCS.util.getAllElements(a, 'b, i, u, s, strike, tt, big, small, center, font'), e = 0;
            e < d.length;
            e++
          ) {
            var f = 'H49.' + d[e].nodeName.substr(0, 1).toUpperCase() + d[e].nodeName.substr(1).toLowerCase();
            HTMLCS.addMessage(
              HTMLCS.WARNING,
              d[e],
              'Семантичну розмітку слід використовувати для позначення підкресленого або спеціального тексту, щоб його можна було визначити програмно.',
              f
            );
          }
          for (var d = HTMLCS.util.getAllElements(a, '*[align]'), e = 0; e < d.length; e++) {
            var f = 'H49.AlignAttr';
            HTMLCS.addMessage(
              HTMLCS.WARNING,
              d[e],
              'Семантичну розмітку слід використовувати для позначення підкресленого або спеціального тексту, щоб його можна було визначити програмно.',
              f
            );
          }
        } else {
          for (var d = HTMLCS.util.getAllElements(a, 'strike, tt, big, center, font'), e = 0; e < d.length; e++) {
            var f = 'H49.' + d[e].nodeName.substr(0, 1).toUpperCase() + d[e].nodeName.substr(1).toLowerCase();
            HTMLCS.addMessage(HTMLCS.ERROR, d[e], 'Використовується презентаційна розмітка, застаріла в HTML5.', f);
          }
          for (var d = HTMLCS.util.getAllElements(a, '*[align]'), e = 0; e < d.length; e++) {
            var f = 'H49.AlignAttr';
            HTMLCS.addMessage(HTMLCS.ERROR, d[e], 'Вирівняти атрибути.', f);
          }
        }
      },
      testNonSemanticHeading: function (a) {
        var b = a.nodeName.toLowerCase();
        if ('p' === b || 'div' === b) {
          var c = a.childNodes;
          if (1 === c.length && 1 === c[0].nodeType) {
            !0 === /^(strong|em|b|i|u)$/.test(c[0].nodeName.toLowerCase()) &&
              HTMLCS.addMessage(
                HTMLCS.WARNING,
                a,
                'Розмітку заголовків слід використовувати, якщо цей вміст призначений як заголовок.',
                'H42'
              );
          }
        }
      },
      testTableHeaders: function (a) {
        for (
          var b = HTMLCS.util.testTableHeaders(a), c = this._testTableScopeAttrs(a), d = 0;
          d < c.invalid.length;
          d++
        )
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            c.invalid[d],
            'Клітинка таблиці має недійсний атрибут scope. Допустимими значеннями є row, col, rowgroup, colgroup.',
            'H63.3'
          );
        for (var d = 0; d < c.obsoleteTd.length; d++)
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            c.obsoleteTd[d],
            'Атрибути області для елементів td, які діють як заголовки для інших елементів, застаріли в HTML5. Замість цього використовуйте th елемент.',
            'H63.2'
          );
        !0 === b.allowScope
          ? 0 === c.missing.length && b.required
          : !0 === c.used &&
            (HTMLCS.addMessage(
              HTMLCS.WARNING,
              a,
              'Атрибути scope елементів th є неоднозначними в таблиці з декількома рівнями заголовків. Замість цього використовуйте атрибут заголовків на елементах td.',
              'H43.ScopeAmbiguous'
            ),
            (c = null));
        for (var d = 0; d < b.wrongHeaders.length; d++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            b.wrongHeaders[d].element,
            'Неправильні атрибути заголовків на цьому елементі td. Очікуваний "' +
              b.wrongHeaders[d].expected +
              '", але знайдено "' +
              b.wrongHeaders[d].actual +
              '"',
            'H43.IncorrectAttr'
          );
        !0 === b.required &&
          !1 === b.allowScope &&
          (!1 === b.used
            ? HTMLCS.addMessage(
                HTMLCS.ERROR,
                a,
                "Співвідношення між елементами td та пов'язаними з ними th елементами не визначено. Оскільки ця таблиця має декілька рівнів th елементів, ви повинні використовувати атрибут заголовків на елементах td.",
                'H43.HeadersRequired'
              )
            : (b.missingThId.length > 0 &&
                HTMLCS.addMessage(
                  HTMLCS.ERROR,
                  a,
                  'Не всі th елементи цієї таблиці містять атрибут id. Ці клітинки повинні містити ідентифікатори, щоб до них могли посилатися атрибути заголовків елементів td.',
                  'H43.MissingHeaderIds'
                ),
              b.missingTd.length > 0 &&
                HTMLCS.addMessage(
                  HTMLCS.ERROR,
                  a,
                  "Не всі елементи td у цій таблиці містять атрибут заголовків. Кожен атрибут заголовків повинен містити список ідентифікаторів всіх елементів, пов'язаних із цією клітиною.",
                  'H43.MissingHeadersAttrs'
                ))),
          !0 === b.required &&
            !0 === b.allowScope &&
            !1 === b.correct &&
            !1 === c.correct &&
            (!1 === c.used && !1 === b.used
              ? HTMLCS.addMessage(
                  HTMLCS.ERROR,
                  a,
                  "Співвідношення між елементами td та пов'язаними з ними елементами не визначено. Використовуйте атрибут scope для th елементів або атрибут headers на елементах td.",
                  'H43,H63'
                )
              : !1 === c.used && (b.missingThId.length > 0 || b.missingTd.length > 0)
              ? (b.missingThId.length > 0 &&
                  HTMLCS.addMessage(
                    HTMLCS.ERROR,
                    a,
                    'Не всі th елементи цієї таблиці містять атрибут id. Ці клітинки повинні містити ідентифікатори, щоб до них могли посилатися атрибути заголовків елементів td.',
                    'H43.MissingHeaderIds'
                  ),
                b.missingTd.length > 0 &&
                  HTMLCS.addMessage(
                    HTMLCS.ERROR,
                    a,
                    "Не всі елементи td у цій таблиці містять атрибут заголовків. Кожен атрибут заголовків повинен містити список ідентифікаторів всіх елементів, пов'язаних із цією клітиною.",
                    'H43.MissingHeadersAttrs'
                  ))
              : c.missing.length > 0 && !1 === b.used
              ? HTMLCS.addMessage(
                  HTMLCS.ERROR,
                  a,
                  "Не всі елементи td у цій таблиці містять атрибут заголовків. Кожен атрибут заголовків повинен містити список ідентифікаторів всіх елементів, пов'язаних із цією клітиною.",
                  'H63.1'
                )
              : c.missing.length > 0 &&
                (b.missingThId.length > 0 || b.missingTd.length > 0) &&
                HTMLCS.addMessage(
                  HTMLCS.ERROR,
                  a,
                  "Співвідношення між елементами td та пов'язаними з ними th елементами не визначено. Використовуйте атрибут scope для th елементів або атрибут headers на елементах td.",
                  'H43,H63'
                ));
      },
      _testTableScopeAttrs: function (a) {
        var b = {
            th: a.getElementsByTagName('th'),
            td: a.getElementsByTagName('td'),
          },
          c = {
            used: !1,
            correct: !0,
            missing: [],
            invalid: [],
            obsoleteTd: [],
          };
        for (var d in b)
          for (var e = 0; e < b[d].length; e++) {
            var f = b[d][e],
              g = '';
            !0 === f.hasAttribute('scope') && ((c.used = !0), f.getAttribute('scope') && (g = f.getAttribute('scope'))),
              'th' === f.nodeName.toLowerCase()
                ? !0 === /^\s*$/.test(g)
                  ? ((c.correct = !1), c.missing.push(f))
                  : !1 === /^(row|col|rowgroup|colgroup)$/.test(g) && ((c.correct = !1), c.invalid.push(f))
                : '' !== g &&
                  (c.obsoleteTd.push(f),
                  !1 === /^(row|col|rowgroup|colgroup)$/.test(g) && ((c.correct = !1), c.invalid.push(f)));
          }
        return c;
      },
      testTableCaptionSummary: function (a) {
        var b = a.getAttribute('summary') || '',
          c = a.getElementsByTagName('caption'),
          d = '';
        c.length > 0 && (d = c[0].innerHTML.replace(/^\s*(.*?)\s*$/g, '$1'));
        var e = HTMLCS.util.getDocumentType(a.ownerDocument);
        e &&
          -1 === e.indexOf('html5') &&
          ((b = b.replace(/^\s*(.*?)\s*$/g, '$1')),
          '' !== b
            ? !0 === HTMLCS.util.isLayoutTable(a)
              ? HTMLCS.addMessage(
                  HTMLCS.ERROR,
                  a,
                  'Ця таблиця, як видається, використовується для макета, але містить атрибут summary. Таблиці макету не повинні містити атрибути summary, або, якщо вони надані, повинні бути порожніми.',
                  'H73.3.LayoutTable'
                )
              : (d === b &&
                  HTMLCS.addMessage(
                    HTMLCS.ERROR,
                    a,
                    'Якщо ця таблиця є таблицею даних, і є атрибут summary та елемент caption, то summary не повинно дублювати атрибут caption, ',
                    'H39,H73.4'
                  ),
                HTMLCS.addMessage(
                  HTMLCS.NOTICE,
                  a,
                  'Якщо ця таблиця є таблицею даних, перевірте, чи атрибут summary описує організацію таблиці або пояснює, як використовувати таблицю.',
                  'H73.3.Check'
                ))
            : !1 === HTMLCS.util.isLayoutTable(a) &&
              HTMLCS.addMessage(
                HTMLCS.WARNING,
                a,
                'Якщо ця таблиця є таблицею даних, розгляньте можливість використання атрибута summary елемента таблиці, щоб отримати загальний огляд цієї таблиці.',
                'H73.3.NoSummary'
              )),
          '' !== d
            ? !0 === HTMLCS.util.isLayoutTable(a)
              ? HTMLCS.addMessage(
                  HTMLCS.ERROR,
                  a,
                  'Схоже, що ця таблиця використовується для макета, але містить елемент caption. Макети таблиці не повинні містити caption.',
                  'H39.3.LayoutTable'
                )
              : HTMLCS.addMessage(
                  HTMLCS.NOTICE,
                  a,
                  'Якщо ця таблиця є таблицею даних, перевірте, чи caption точно описує цю таблицю.',
                  'H39.3.Check'
                )
            : !1 === HTMLCS.util.isLayoutTable(a) &&
              HTMLCS.addMessage(
                HTMLCS.WARNING,
                a,
                'Якщо ця таблиця є таблицею даних, розгляньте можливість використання елемента caption елементу таблиці, щоб визначити цю таблицю.',
                'H39.3.NoCaption'
              );
      },
      testFieldsetLegend: function (a) {
        var b = a.querySelector('legend');
        (null !== b && b.parentNode === a) ||
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            a,
            'Fieldset не містить елемент legend. Всі fieldset повинні містити елемент legend, який описує групи полів.',
            'H71.NoLegend'
          );
      },
      testOptgroup: function (a) {
        null === a.querySelector('optgroup') &&
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            a,
            'Якщо цей список вибору містить групи відповідних параметрів, їх слід згрупувати за допомогою optgroup.',
            'H85.2'
          );
      },
      testRequiredFieldsets: function (a) {
        for (var b = a.querySelectorAll('input[type=radio], input[type=checkbox]'), c = {}, d = 0; d < b.length; d++) {
          var e = b[d];
          if (!0 === e.hasAttribute('name')) {
            for (
              var f = e.getAttribute('name'), g = e.parentNode;
              'fieldset' !== g.nodeName.toLowerCase() && null !== g && g !== a;

            )
              g = g.parentNode;
            'fieldset' !== g.nodeName.toLowerCase() && (g = null);
          }
          if (void 0 === c[f]) c[f] = g;
          else if (null === g || g !== c[f]) {
            HTMLCS.addMessage(
              HTMLCS.WARNING,
              a,
              'Якщо ці перемикачі або прапорці вимагають додаткового опису на рівні групи, вони повинні міститися в елементі fieldset.',
              'H71.SameName'
            );
            break;
          }
        }
      },
      testListsWithBreaks: function (a) {
        var b = a.querySelector('br'),
          c = [];
        if (null !== b) {
          for (var d = [], e = 0; e < a.childNodes.length; e++) d.push(a.childNodes[e]);
          for (var f = []; d.length > 0; ) {
            var g = d.shift();
            if (1 === g.nodeType)
              if ('br' === g.nodeName.toLowerCase()) c.push(f.join(' ').replace(/^\s*(.*?)\s*$/g, '$1')), (f = []);
              else for (var e = g.childNodes.length - 1; e >= 0; --e) d.unshift(g.childNodes[e]);
            else 3 === g.nodeType && f.push(g.nodeValue);
          }
          f.length > 0 && c.push(f.join(' ').replace(/^\s*(.*?)\s*$/g, '$1'));
          for (var e = 0; e < c.length; e++) {
            if (!0 === /^[\-*]\s+/.test(c[0])) {
              HTMLCS.addMessage(
                HTMLCS.WARNING,
                a,
                'Цей вміст виглядає так, як імітація невпорядкованого списку, використовуючи простий текст. Якщо це так, позначення цього вмісту елементом ul додасть правильну інформацію про структуру документа.',
                'H48.1'
              );
              break;
            }
            if (!0 === /^\d+[:\/\-.]?\s+/.test(c[0])) {
              HTMLCS.addMessage(
                HTMLCS.WARNING,
                a,
                'Цей вміст виглядає так, як імітація організованого списоку, використовуючи простий текст. Якщо це так, позначення цього вмісту елементом ol буде додавати до документа відповідну структуру.',
                'H48.2'
              );
              break;
            }
          }
        }
      },
      testHeadingOrder: function (a, b) {
        for (var c = 0, d = HTMLCS.util.getAllElements(a, 'h1, h2, h3, h4, h5, h6'), e = 0; e < d.length; e++) {
          var f = parseInt(d[e].nodeName.substr(1, 1));
          if (f - c > 1) {
            var g = 'повинен бути h' + (c + 1) + ' щоб правильно бути вкладеним';
            0 === c && (g = 'це основний заголовок документа, тому повинен бути елементом h1'),
              HTMLCS.addMessage(
                b,
                d[e],
                'Структура заголовка не логічно вкладена. Це ' + f + ' елемент ' + g + '.',
                'G141'
              );
          }
          c = f;
        }
      },
      testEmptyHeading: function (a) {
        !0 === /^\s*$/.test(HTMLCS.util.getElementTextContent(a, !0)) &&
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            a,
            'Тег заголовка знайдено без вмісту. Текст, який не призначений як заголовок, не повинен бути позначений тегами заголовків.',
            'H42.2'
          );
      },
      testUnstructuredNavLinks: function (a) {
        for (
          var b = (a.nodeName.toLowerCase(), 0), c = a.childNodes, d = 0;
          d < c.length && !(1 === c[d].nodeType && 'a' === c[d].nodeName.toLowerCase() && ++b > 1);
          d++
        );
        if (b > 1) {
          for (
            var e = a.parentNode;
            null !== e && 'ul' !== e.nodeName.toLowerCase() && 'ol' !== e.nodeName.toLowerCase();

          )
            e = e.parentNode;
          null === e &&
            HTMLCS.addMessage(
              HTMLCS.WARNING,
              a,
              'Якщо цей елемент містить розділ навігації, рекомендується позначити його як список.',
              'H48'
            );
        }
      },
      testGeneralTable: function (a) {
        !0 === HTMLCS.util.isLayoutTable(a)
          ? HTMLCS.addMessage(
              HTMLCS.NOTICE,
              a,
              'Ця таблиця виглядає як таблиця макетів. Якщо вона призначена для того, щоб бути таблицею даних, переконайтеся, що клітинки заголовків ідентифікуються за допомогою th елементів.',
              'LayoutTable'
            )
          : HTMLCS.addMessage(
              HTMLCS.NOTICE,
              a,
              'Ця таблиця є таблицею даних. Якщо мається на увазі таблиця макету, переконайтеся, що не існує жодних th елементів, ані summary або caption.',
              'DataTable'
            );
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_2 = {
      register: function () {
        return ['_top'];
      },
      process: function (a, b) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          b,
          'Переконайтеся, що контент знаходиться в змістовній послідовності під час лінеаризації, наприклад, коли вимикаються таблиці стилів.',
          'G57'
        );
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_3 = {
      register: function () {
        return ['_top'];
      },
      process: function (a, b) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          b,
          "Якщо для розуміння вмісту надано інструкції, не покладайтеся тільки на сенсорні характеристики (наприклад, форму, розмір або розташування), щоб описати об'єкти.",
          'G96'
        );
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_1 = {
      register: function () {
        return ['_top'];
      },
      process: function (a, b) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          b,
          'Перевірте, чи будь-яка інформація, передана за допомогою кольору окремо, також доступна в тексті або за допомогою інших візуальних сигналів.',
          'G14,G182'
        );
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_2 = {
      register: function () {
        return ['object', 'embed', 'applet', 'bgsound', 'audio', 'video'];
      },
      process: function (a, b) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          b,
          'Якщо цей елемент містить аудіо, що відтворюється автоматично довше, ніж 3 секунди, перевірте, чи є можливість призупинити, зупинити або вимкнути звук.',
          'F23'
        );
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_3_Contrast = {
      testContrastRatio: function (a, b, c) {
        var d = (new Date(), []);
        if (a.ownerDocument) var e = [a];
        else var e = [a.getElementsByTagName('body')[0]];
        for (; e.length > 0; ) {
          var f = e.shift();
          if (f && 1 === f.nodeType && !1 === HTMLCS.util.isVisuallyHidden(f) && !1 === HTMLCS.util.isDisabled(f)) {
            for (var g = !1, h = 0; h < f.childNodes.length; h++)
              1 === f.childNodes[h].nodeType
                ? e.push(f.childNodes[h])
                : 3 === f.childNodes[h].nodeType && '' !== HTMLCS.util.trim(f.childNodes[h].nodeValue) && (g = !0);
            if (!0 === g) {
              var i = HTMLCS.util.style(f);
              if (i) {
                var j = i.backgroundColor,
                  k = i.color,
                  l = !1,
                  m = !1;
                'none' !== i.backgroundImage && (l = !0), 'absolute' == i.position && (m = !0);
                var n = f.parentNode,
                  o = 0.75 * parseFloat(i.fontSize, 10),
                  p = 18;
                if ('bold' === i.fontWeight || parseInt(i.fontWeight, 10) >= 600) var p = 14;
                var q = b;
                for (o >= p && (q = c); ('transparent' === j || 'rgba(0, 0, 0, 0)' === j) && n && n.ownerDocument; ) {
                  var r = HTMLCS.util.style(n),
                    j = r.backgroundColor;
                  'none' !== r.backgroundImage && (l = !0), 'absolute' == r.position && (m = !0), (n = n.parentNode);
                }
                if (!0 === l) {
                  d.push({
                    element: f,
                    colour: i.color,
                    bgColour: void 0,
                    value: void 0,
                    required: q,
                    hasBgImage: !0,
                  });
                  continue;
                }
                if (!0 === m) {
                  d.push({
                    element: f,
                    colour: k,
                    bgColour: void 0,
                    value: void 0,
                    required: q,
                    isAbsolute: !0,
                  });
                  continue;
                }
                if ('transparent' === j || 'rgba(0, 0, 0, 0)' === j) continue;
                var s = HTMLCS.util.contrastRatio(j, i.color);
                if (s < q) {
                  var t = this.recommendColour(j, i.color, q);
                  d.push({
                    element: f,
                    colour: i.color,
                    bgColour: j,
                    value: s,
                    required: q,
                    recommendation: t,
                  });
                }
              }
            }
          }
        }
        return d;
      },
      recommendColour: function (a, b, c) {
        var b = HTMLCS.util.RGBtoColourStr(HTMLCS.util.colourStrToRGB(b)),
          a = HTMLCS.util.RGBtoColourStr(HTMLCS.util.colourStrToRGB(a)),
          d = HTMLCS.util.contrastRatio(b, a),
          e = Math.abs(HTMLCS.util.relativeLum(b) - 0.5),
          f = Math.abs(HTMLCS.util.relativeLum(a) - 0.5),
          g = null;
        if (d < c) {
          var h = 1.0025;
          if (e <= f) {
            var i = 'back',
              j = a;
            if (HTMLCS.util.relativeLum(a) < 0.5) var h = 1 / h;
          } else {
            var i = 'fore',
              j = b;
            if (HTMLCS.util.relativeLum(b) < 0.5) var h = 1 / h;
          }
          for (var k = HTMLCS.util.sRGBtoHSV(j), l = (k.saturation, k.value, b), m = a, n = !1, o = 0; d < c; ) {
            if ('#fff' === j || '#000' === j)
              if (!0 === n)
                if ('fore' === i)
                  for (var p = m, q = 1; m === p; ) {
                    var m = this.multiplyColour(m, Math.pow(1 / h, q));
                    q++;
                  }
                else
                  for (var r = l, q = 1; l === r; ) {
                    var l = this.multiplyColour(l, Math.pow(1 / h, q));
                    q++;
                  }
              else {
                if (((l = b), (m = a), (h = 1 / h), 'fore' === i)) {
                  i = 'back';
                  var k = a;
                } else {
                  i = 'fore';
                  var k = b;
                }
                (k = HTMLCS.util.sRGBtoHSV(k)), k.saturation * k.value, (n = !0);
              }
            o++;
            var j = HTMLCS.util.HSVtosRGB(k),
              j = this.multiplyColour(j, Math.pow(h, o));
            if ('fore' === i) var l = j;
            else var m = j;
            var d = HTMLCS.util.contrastRatio(l, m);
          }
          g = {
            fore: {
              from: b,
              to: l,
            },
            back: {
              from: a,
              to: m,
            },
          };
        }
        return g;
      },
      multiplyColour: function (a, b) {
        var c = HTMLCS.util.sRGBtoHSV(a),
          d = c.saturation * c.value;
        return (
          0 === c.value && (c.value = 1 / 255),
          (c.value = c.value * b),
          0 === c.value ? (c.saturation = 0) : (c.saturation = d / c.value),
          (c.value = Math.min(1, c.value)),
          (c.saturation = Math.min(1, c.saturation)),
          HTMLCS.util.RGBtoColourStr(HTMLCS.util.HSVtosRGB(c))
        );
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_3_F24 = {
      register: function () {
        return ['_top'];
      },
      process: function (a, b) {
        for (var c = HTMLCS.util.getAllElements(b, '*'), d = 0; d < c.length; d++) this.testColourComboFail(c[d]);
      },
      testColourComboFail: function (a) {
        var b = a.hasAttribute('color');
        (b = b || a.hasAttribute('link')), (b = b || a.hasAttribute('vlink')), (b = b || a.hasAttribute('alink'));
        var c = a.hasAttribute('bgcolor');
        if (a.style) {
          var d = a.style.color,
            e = a.style.background;
          '' !== d && 'auto' !== d && (b = !0), '' !== e && 'auto' !== e && (c = !0);
        }
        c !== b &&
          (!0 === c
            ? HTMLCS.addMessage(
                HTMLCS.WARNING,
                a,
                'Переконайтеся, що цей елемент має успадкований колір переднього плану, який доповнює відповідний вбудований фоновий колір або зображення.',
                'F24.BGColour'
              )
            : HTMLCS.addMessage(
                HTMLCS.WARNING,
                a,
                'Переконайтеся, що цей елемент має успадкований колір фону або зображення, щоб доповнити відповідний вбудований колір переднього плану.',
                'F24.FGColour'
              ));
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_3 = {
      register: function () {
        return ['_top'];
      },
      process: function (a, b) {
        if (a === b)
          for (
            var c = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_3_Contrast.testContrastRatio(b, 4.5, 3), d = 0;
            d < c.length;
            d++
          ) {
            for (
              var a = c[d].element,
                e = 2,
                f = Math.round(c[d].value * Math.pow(10, e)) / Math.pow(10, e),
                g = c[d].required,
                h = c[d].recommendation,
                i = c[d].hasBgImage || !1,
                j = (c[d].bgColour, c[d].isAbsolute || !1);
              g === f;

            )
              e++, (f = Math.round(c[d].value * Math.pow(10, e)) / Math.pow(10, e));
            if (4.5 === g) var k = 'G18';
            else if (3 === g) var k = 'G145';
            var l = [];
            h &&
              (h.fore.from !== h.fore.to && l.push('колір тексту до ' + h.fore.to),
              h.back.from !== h.back.to && l.push('фон до ' + h.back.to)),
              l.length > 0 && (l = ' Рекомендація: змінити ' + l.join(', ') + '.'),
              !0 === j
                ? ((k += '.Abs'),
                  HTMLCS.addMessage(
                    HTMLCS.WARNING,
                    a,
                    'Цей елемент абсолютно розташований, а колір тла не може бути визначений. Переконайтеся, що коефіцієнт контрастності між текстом та усіма критими частинами фону принаймні ' +
                      g +
                      ':1.',
                    k
                  ))
                : !0 === i
                ? ((k += '.BgImage'),
                  HTMLCS.addMessage(
                    HTMLCS.WARNING,
                    a,
                    'Текст цього елемента розміщується на фоновому малюнку. Переконайтеся, що коефіцієнт контрастності між текстом та усіма критими частинами зображення, принаймні ' +
                      g +
                      ':1.',
                    k
                  ))
                : ((k += '.Fail'),
                  HTMLCS.addMessage(
                    HTMLCS.ERROR,
                    a,
                    'Цей елемент має недостатній контраст на цьому рівні відповідності. Очікується співвідношення контрастності принаймні ' +
                      g +
                      ':1, але текст у цьому елементі має коефіцієнт контрастності ' +
                      f +
                      ':1.' +
                      l,
                    k
                  ));
          }
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_4 = {
      register: function () {
        return ['_top'];
      },
      process: function (a, b) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          b,
          'Перевірте, чи можна змінити розмір тексту без допоміжної технології до 200 відсотків без втрати вмісту чи функціональності.',
          'G142'
        );
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_5 = {
      register: function () {
        return ['_top'];
      },
      process: function (a, b) {
        null !== b.querySelector('img') &&
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            b,
            'Якщо використані технології дозволяють досягти візуального представлення, перевірте, чи текст використовується для передачі інформації, а не зображення тексту, за винятком випадків, коли зображення тексту є важливим для переданої інформації або може бути візуально адаптовано до вимог користувача.',
            'G140,C22,C30.AALevel'
          );
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_6 = {
      register: function () {
        return ['_top'];
      },
      process: function (a, b) {
        if (a === b)
          for (
            var c = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_3_Contrast.testContrastRatio(b, 7, 4.5), d = 0;
            d < c.length;
            d++
          ) {
            for (
              var a = c[d].element,
                e = 2,
                f = Math.round(c[d].value * Math.pow(10, e)) / Math.pow(10, e),
                g = c[d].required,
                h = c[d].recommendation,
                i = c[d].hasBgImage || !1,
                j = c[d].isAbsolute || !1;
              g === f;

            )
              e++, (f = Math.round(c[d].value * Math.pow(10, e)) / Math.pow(10, e));
            if (4.5 === g) var k = 'G18';
            else if (7 === g) var k = 'G17';
            var l = [];
            h &&
              (h.fore.from !== h.fore.to && l.push('колір тексту до ' + h.fore.to),
              h.back.from !== h.back.to && l.push('фон до ' + h.back.to)),
              l.length > 0 && (l = ' Рекомендація: змінити ' + l.join(', ') + '.'),
              !0 === j
                ? ((k += '.Abs'),
                  HTMLCS.addMessage(
                    HTMLCS.WARNING,
                    a,
                    'Цей елемент абсолютно розташований, а колір тла не може бути визначений. Переконайтеся, що коефіцієнт контрастності між текстом та усіма критими частинами фону принаймні ' +
                      g +
                      ':1.',
                    k
                  ))
                : !0 === i
                ? ((k += '.BgImage'),
                  HTMLCS.addMessage(
                    HTMLCS.WARNING,
                    a,
                    'Текст цього елемента розміщується на фоновому малюнку. Переконайтеся, що коефіцієнт контрастності між текстом та усіма критими частинами зображення, принаймні ' +
                      g +
                      ':1.',
                    k
                  ))
                : ((k += '.Fail'),
                  HTMLCS.addMessage(
                    HTMLCS.ERROR,
                    a,
                    'Цей елемент має недостатній контраст на цьому рівні відповідності. Очікується співвідношення контрастності принаймні ' +
                      g +
                      ':1, але текст у цьому елементі має коефіцієнт контрастності ' +
                      f +
                      ':1.' +
                      l,
                    k
                  ));
          }
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_7 = {
      register: function () {
        return ['object', 'embed', 'applet', 'bgsound', 'audio'];
      },
      process: function (a, b) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          a,
          'Для попередньо записаного аудіо-вмісту в цьому елементі, який є переважно мовою (наприклад, розповіддю), будь-які фонові звуки повинні бути приблизно в 4 рази тихіше, ніж мова.',
          'G56'
        );
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_8 = {
      register: function () {
        return ['_top'];
      },
      process: function (a, b) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          b,
          'Перевірте наявність механізму для вибору переднього та заднього кольорів для блоків тексту через веб-сторінку або веб-переглядач.',
          'G148,G156,G175'
        ),
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            b,
            'Переконайтеся, що існує механізм зменшення ширини блоку тексту для більше 80 символів.',
            'H87,C20'
          ),
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            b,
            'Переконайтеся, що блоки тексту не є повністю вирівнені для лівого та правого країв, або існує механізм для видалення вирівнення.',
            'C19,G172,G169'
          ),
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            b,
            'Перевірте, чи інтервал між рядками в блоках тексту становить принаймні 150% у абзацах, а інтервал між абзацами - принаймні в 1,5 рази від міжрядкового інтервалу, або доступний механіз для досягнення цієї мети.',
            'G188,C21'
          ),
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            b,
            'Перевірте, чи можна змінити розмір тексту без допоміжної технології до 200 відсотків, не вимагаючи від користувача прокручування горизонтально в повноекранному вікні.',
            'H87,G146,C26'
          );
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_9 = {
      register: function () {
        return ['_top'];
      },
      process: function (a, b) {
        null !== b.querySelector('img') &&
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            b,
            'Перевірте, чи зображення тексту використовуються лише для чистого декору або як певна презентація тексту яка має важливе значення для переданої інформації.',
            'G140,C22,C30.NoException'
          );
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_1_2_1_1 = {
      register: function () {
        return ['_top'];
      },
      process: function (a, b) {
        if (a === b) {
          HTMLCS.util
            .getAllElements(b, '*[onclick], *[onkeyup], *[onkeydown], *[onkeypress], *[onfocus], *[onblur]')
            .forEach(function (a) {
              !1 === HTMLCS.util.isKeyboardNavigable(a) &&
                HTMLCS.addMessage(
                  HTMLCS.WARNING,
                  a,
                  'Переконайтеся, що функціональність, надана обробником події для цього елемента, доступна через клавіатуру',
                  'G90'
                );
            });
          for (var c = HTMLCS.util.getAllElements(b, '*[ondblclick]'), d = 0; d < c.length; d++)
            HTMLCS.addMessage(
              HTMLCS.WARNING,
              c[d],
              'Переконайтеся, що функціональність, яка надається подвійним натисканням на цей елемент, доступна через клавіатуру.',
              'SCR20.DblClick'
            );
          for (var e = HTMLCS.util.getAllElements(b, '*[onmouseover]'), d = 0; d < e.length; d++)
            HTMLCS.addMessage(
              HTMLCS.WARNING,
              e[d],
              'Переконайтеся, що функціональність, яка надається за допомогою наведення курсора миші на елемент, доступна через клавіатуру; наприклад, за допомогою focus-події.',
              'SCR20.MouseOver'
            );
          for (var f = HTMLCS.util.getAllElements(b, '*[onmouseout]'), d = 0; d < f.length; d++)
            HTMLCS.addMessage(
              HTMLCS.WARNING,
              f[d],
              'Переконайтеся, що функціональність, яка надається шляхом відведення курсора миші з цього елемента, доступна через клавіатуру; наприклад, використовуючи blur-подію.',
              'SCR20.MouseOut'
            );
          for (var g = HTMLCS.util.getAllElements(b, '*[onmousemove]'), d = 0; d < g.length; d++)
            HTMLCS.addMessage(
              HTMLCS.WARNING,
              g[d],
              'Переконайтеся, що функціональність, яка надається шляхом переміщення мишки на по цьому елементу, доступна через клавіатуру.',
              'SCR20.MouseMove'
            );
          for (var h = HTMLCS.util.getAllElements(b, '*[onmousedown]'), d = 0; d < h.length; d++)
            HTMLCS.addMessage(
              HTMLCS.WARNING,
              h[d],
              'Переконайтеся, що функціональність, яка надається за допомогою нажаття кнопки миші на цьому елементі, доступна через клавіатуру; наприклад, використовуючи подію keydown.',
              'SCR20.MouseDown'
            );
          for (var i = HTMLCS.util.getAllElements(b, '*[onmouseup]'), d = 0; d < i.length; d++)
            HTMLCS.addMessage(
              HTMLCS.WARNING,
              i[d],
              'Переконайтеся, що функціональність, яка надається за допомогою відпущення конпки миші над цим елементом, доступна через клавіатуру; наприклад, використовуючи подію keyup.',
              'SCR20.MouseUp'
            );
        }
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_1_2_1_2 = {
      register: function () {
        return ['object', 'applet', 'embed'];
      },
      process: function (a, b) {
        HTMLCS.addMessage(
          HTMLCS.WARNING,
          a,
          'Переконайтеся, що цей аплет або плагін забезпечує можливість переміщення фокусу від себе під час використання клавіатури.',
          'F10'
        );
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_2_2_2_1 = {
      register: function () {
        return ['meta'];
      },
      process: function (a, b) {
        !0 === a.hasAttribute('http-equiv') &&
          'refresh' === String(a.getAttribute('http-equiv')).toLowerCase() &&
          !0 === /^[1-9]\d*/.test(a.getAttribute('content').toLowerCase()) &&
          (!0 === /url=/.test(a.getAttribute('content').toLowerCase())
            ? HTMLCS.addMessage(
                HTMLCS.ERROR,
                a,
                'Тег meta refresh використовується для переадресації на іншу сторінку з обмеженням часу, який не дорівнює нулю. Користувачі не можуть керувати цим обмеженням часу.',
                'F40.2'
              )
            : HTMLCS.addMessage(
                HTMLCS.ERROR,
                a,
                'Тег meta refresh, що використовується для оновлення поточної сторінки. Користувачі не можуть контролювати часові обмеження для цього оновлення.',
                'F41.2'
              ));
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_2_2_2_2 = {
      register: function () {
        return ['_top', 'blink'];
      },
      process: function (a, b) {
        if (a === b) {
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            a,
            'Якщо будь-яка частина вмісту рухається, прокручується або блимає більше 5 секунд або автоматично оновлюється, перевірте, чи є механізм, доступний для призупинення, зупинки або приховування вмісту.',
            'SCR33,SCR22,G187,G152,G186,G191'
          );
          for (var c = HTMLCS.util.getAllElements(b, '*'), d = 0; d < c.length; d++) {
            var e = HTMLCS.util.style(c[d]);
            e &&
              !0 === /blink/.test(e['text-decoration']) &&
              HTMLCS.addMessage(
                HTMLCS.WARNING,
                c[d],
                "Переконайтеся, що існує наявний механізм, щоб зупинити цей миготливий елемент менш ніж за п'ять секунд.",
                'F4'
              );
          }
        } else
          'blink' === a.nodeName.toLowerCase() &&
            HTMLCS.addMessage(
              HTMLCS.ERROR,
              a,
              "Миготіючі елементи не можуть задовольнити вимогу, щоб мигаюча інформація могла бути зупинена протягом п'яти секунд.",
              'F47'
            );
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_2_2_2_3 = {
      register: function () {
        return ['_top'];
      },
      process: function (a, b) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          a,
          'Переконайтеся, що синхронізація не є суттєвою частиною події чи діяльності, представленої змістом, за винятком неінтерактивних синхронізованих засобів масової інформації та подій у реальному часі.',
          'G5'
        );
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_2_2_2_4 = {
      register: function () {
        return ['_top'];
      },
      process: function (a, b) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          a,
          'Переконайтеся, що всі переривання (включаючи оновлення вмісту) можуть бути перенесені або припинені користувачем, за винятком переривань із надзвичайною ситуацією.',
          'SCR14'
        );
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_2_2_2_5 = {
      register: function () {
        return ['_top'];
      },
      process: function (a, b) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          a,
          'Якщо ця веб-сторінка є частиною набору веб-сторінок з обмеженням часу бездіяльності, перевірте, чи автентифікований користувач може продовжувати діяльність без втрати даних після повторної автентифікації.',
          'G105,G181'
        );
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_3_2_3_1 = {
      register: function () {
        return ['_top'];
      },
      process: function (a, b) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          b,
          'Переконайтеся, що жодний компонент вмісту не світиться більше, ніж три рази в будь-який 1-секундний період, або що розмір будь-якої зони, що мигає, є досить малим.',
          'G19,G176'
        );
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_3_2_3_2 = {
      register: function () {
        return ['_top'];
      },
      process: function (a, b) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          b,
          'Переконайтеся, що жодний компонент змісту не блимає більше ніж три рази в будь-який 1-секундний період.',
          'G19'
        );
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_1 = {
      register: function () {
        return ['iframe', 'a', 'area', '_top'];
      },
      process: function (a, b) {
        if (a === b) this.testGenericBypassMsg(b);
        else {
          switch (a.nodeName.toLowerCase()) {
            case 'iframe':
              this.testIframeTitle(a);
              break;
            case 'a':
            case 'area':
              this.testSameDocFragmentLinks(a, b);
          }
        }
      },
      testIframeTitle: function (a) {
        if ('iframe' === a.nodeName.toLowerCase()) {
          var b = !1;
          !0 === a.hasAttribute('title') &&
            a.getAttribute('title') &&
            !1 === /^\s+$/.test(a.getAttribute('title')) &&
            (b = !0),
            !1 === b
              ? HTMLCS.addMessage(
                  HTMLCS.ERROR,
                  a,
                  'Елемент iframe вимагає не порожнього атрибута title, який ідентифікує frame.',
                  'H64.1'
                )
              : HTMLCS.addMessage(
                  HTMLCS.NOTICE,
                  a,
                  'Переконайтеся, що атрибут title цього елемента містить текст, який ідентифікує frame.',
                  'H64.2'
                );
        }
      },
      testGenericBypassMsg: function (a) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          a,
          'Переконайтеся, що будь-які загальні навігаційні елементи можна обійти; наприклад, за допомогою пропущених посилань, елементів заголовку або важливих ролей ARIA.',
          'G1,G123,G124,H69'
        );
      },
      testSameDocFragmentLinks: function (a, b) {
        if (!0 === a.hasAttribute('href')) {
          var c = a.getAttribute('href');
          if (((c = HTMLCS.util.trim(c)), c.length > 1 && '#' === c.charAt(0))) {
            var d = c.substr(1);
            try {
              var e = b;
              e.ownerDocument && (e = e.ownerDocument);
              var f = e.getElementById(d);
              if (null === f) {
                var g = HTMLCS.util.getElementWindow(b).document,
                  h = HTMLCS.util.getDocumentType(g),
                  i = 'a';
                h && -1 === h.indexOf('html5') && (i = '*'), (f = e.querySelector(i + '[name="' + d + '"]'));
              }
              (null !== f && !1 !== HTMLCS.util.contains(b, f)) ||
                (!0 === HTMLCS.isFullDoc(b) || 'body' === b.nodeName.toLowerCase()
                  ? HTMLCS.addMessage(
                      HTMLCS.ERROR,
                      a,
                      'Це посилання вказує на якір "' + d + '" в межах документа, але не існує якоря з таким ім\'ям.',
                      'G1,G123,G124.NoSuchID'
                    )
                  : HTMLCS.addMessage(
                      HTMLCS.WARNING,
                      a,
                      'Це посилання вказує на якір "' +
                        d +
                        '" в межах документа, але в існуючому фрагменті відсутній якір з таким іменем.',
                      'G1,G123,G124.NoSuchIDFragment'
                    ));
            } catch (a) {}
          }
        }
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_2 = {
      register: function () {
        return ['html'];
      },
      process: function (a, b) {
        for (var c = a.childNodes, d = null, e = 0; e < c.length; e++)
          if ('head' === c[e].nodeName.toLowerCase()) {
            d = c[e];
            break;
          }
        if (null === d)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            a,
            'Немає розділі head, в якому можна розмістити описовий елемент title.',
            'H25.1.NoHeadEl'
          );
        else {
          for (var c = d.childNodes, f = null, e = 0; e < c.length; e++)
            if ('title' === c[e].nodeName.toLowerCase()) {
              f = c[e];
              break;
            }
          null === f
            ? HTMLCS.addMessage(
                HTMLCS.ERROR,
                d,
                'Для документа слід вказати заголовок, використовуючи не порожній елемент title у розділі head.',
                'H25.1.NoTitleEl'
              )
            : !0 === /^\s*$/.test(f.innerHTML)
            ? HTMLCS.addMessage(
                HTMLCS.ERROR,
                f,
                'Елемент title у розділі head не повинен бути порожнім.',
                'H25.1.EmptyTitle'
              )
            : HTMLCS.addMessage(HTMLCS.NOTICE, f, 'Перевірте, чи елемент title описує документ.', 'H25.2');
        }
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_3 = {
      register: function () {
        return ['_top'];
      },
      process: function (a, b) {
        if (a === b) {
          b.querySelector('*[tabindex]') &&
            HTMLCS.addMessage(
              HTMLCS.NOTICE,
              a,
              'Якщо використовується табуляція індексу, перевірте, що порядок tab вказаний атрибутами tabindex, слідує за відношеннями до вмісту.',
              'H4.2'
            );
        }
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_4 = {
      register: function () {
        return ['a'];
      },
      process: function (a, b) {
        !0 === a.hasAttribute('title')
          ? HTMLCS.addMessage(
              HTMLCS.NOTICE,
              a,
              'Переконайтеся, що текст посилання в поєднанні з контекстом, визначеним програмним способом, або його атрибут title, визначають мету посилання.',
              'H77,H78,H79,H80,H81,H33'
            )
          : HTMLCS.addMessage(
              HTMLCS.NOTICE,
              a,
              'Переконайтеся, що текст посилання в поєднанні з контекстом, визначеним програмним шляхом, визначає мету посилання.',
              'H77,H78,H79,H80,H81'
            );
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_5 = {
      register: function () {
        return ['_top'];
      },
      process: function (a, b) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          a,
          'Якщо ця веб-сторінка не є частиною лінійного процесу, перевірте, чи існує декілька способів розміщення цієї веб-сторінки в наборі веб-сторінок.',
          'G125,G64,G63,G161,G126,G185'
        );
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_6 = {
      register: function () {
        return ['_top'];
      },
      process: function (a, b) {
        HTMLCS.addMessage(HTMLCS.NOTICE, a, 'Перевірте, чи заголовки та позначки описують тему чи цілі.', 'G130,G131');
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_7 = {
      register: function () {
        return ['_top'];
      },
      process: function (a, b) {
        null !== b.querySelector('input, textarea, button, select, a') &&
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            b,
            'Перевірте наявність принаймні одного режиму роботи, де індикатор фокусування клавіатури може бути візуально розташований на елементах керування користувальницьким інтерфейсом.',
            'G149,G165,G195,C15,SCR31'
          );
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_8 = {
      register: function () {
        return ['link'];
      },
      process: function (a, b) {
        'head' !== a.parentNode.nodeName.toLowerCase() &&
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            a,
            'Елементи link можуть бути розташовані лише у розділі head документа.',
            'H59.1'
          ),
          (!1 !== a.hasAttribute('rel') && a.getAttribute('rel') && !0 !== /^\s*$/.test(a.getAttribute('rel'))) ||
            HTMLCS.addMessage(
              HTMLCS.ERROR,
              a,
              'У елементі link відсутній атрибут rel, який визначає тип посилання.',
              'H59.2a'
            ),
          (!1 !== a.hasAttribute('href') && a.getAttribute('href') && !0 !== /^\s*$/.test(a.getAttribute('href'))) ||
            HTMLCS.addMessage(
              HTMLCS.ERROR,
              a,
              "У елементі link відсутній атрибут href, що вказує на пов'язаний ресурс.",
              'H59.2b'
            );
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_9 = {
      register: function () {
        return ['a'];
      },
      process: function (a, b) {
        HTMLCS.addMessage(HTMLCS.NOTICE, a, 'Переконайтеся, що текст посилання описує мету посилання.', 'H30');
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_1 = {
      register: function () {
        return ['html'];
      },
      process: function (a, b) {
        if (!1 === a.hasAttribute('lang') && !1 === a.hasAttribute('xml:lang'))
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            a,
            'Елемент html повинен мати атрибут lang або xml: lang, який описує мову документа.',
            'H57.2'
          );
        else {
          if (!0 === a.hasAttribute('lang')) {
            var c = a.getAttribute('lang');
            !1 === this.isValidLanguageTag(c) &&
              HTMLCS.addMessage(
                HTMLCS.ERROR,
                b,
                'Мова, вказана в атрибуті lang елемента документа, не виглядає добре сформованою.',
                'H57.3.Lang'
              );
          }
          if (!0 === a.hasAttribute('xml:lang')) {
            var c = a.getAttribute('xml:lang');
            !1 === this.isValidLanguageTag(c) &&
              HTMLCS.addMessage(
                HTMLCS.ERROR,
                b,
                'Мова, зазначена в атрибуті xml: lang елемента документа, не виглядає добре сформованою.',
                'H57.3.XmlLang'
              );
          }
        }
      },
      isValidLanguageTag: function (a) {
        var b = '^([ix](-[a-z0-9]{1,8})+)$|';
        (b += '^[a-z]{2,8}'),
          (b += '(-[a-z]{3}){0,3}'),
          (b += '(-[a-z]{4})?'),
          (b += '(-[a-z]{2}|-[0-9]{3})?'),
          (b += '(-[0-9][a-z0-9]{3}|-[a-z0-9]{5,8})*'),
          (b += '(-[a-wy-z0-9](-[a-z0-9]{2,8})+)*'),
          (b += '(-x(-[a-z0-9]{1,8})+)?$');
        var c = new RegExp(b, 'i'),
          d = !0;
        return !1 === c.test(a) && (d = !1), d;
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_2 = {
      register: function () {
        return ['_top'];
      },
      process: function (a, b) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          b,
          'Переконайтеся, що будь-які зміни в мові позначаються за допомогою атрибута lang і / або xml: lang.',
          'H58'
        );
        for (
          var c = HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_1,
            d = HTMLCS.util.getAllElements(b, '*[lang]'),
            e = 0;
          e <= d.length;
          e++
        ) {
          if (e === d.length) var f = b;
          else var f = d[e];
          if (!f.documentElement && 'html' !== f.nodeName.toLowerCase()) {
            if (!0 === f.hasAttribute('lang')) {
              var g = f.getAttribute('lang');
              !1 === c.isValidLanguageTag(g) &&
                HTMLCS.addMessage(
                  HTMLCS.ERROR,
                  f,
                  'Мова, вказана в атрибуті lang цього елемента, не виглядає добре сформованою.',
                  'H58.1.Lang'
                );
            }
            if (!0 === f.hasAttribute('xml:lang')) {
              var g = f.getAttribute('xml:lang');
              !1 === c.isValidLanguageTag(g) &&
                HTMLCS.addMessage(
                  HTMLCS.ERROR,
                  f,
                  'Мова, зазначена в атрибуті xml: lang цього елемента, не виглядає добре сформованою.',
                  'H58.1.XmlLang'
                );
            }
          }
        }
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_3 = {
      register: function () {
        return ['_top'];
      },
      process: function (a, b) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          b,
          'Перевірте наявність механізму для визначення конкретних фраз, які використовуються незвичним або обмеженим способом, включаючи ідіоми та жаргони.',
          'H40,H54,H60,G62,G70'
        );
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_4 = {
      register: function () {
        return ['_top'];
      },
      process: function (a, b) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          b,
          'Перевірте, чи доступний механізм для ідентифікації розширеної форми або значення абревіатур.',
          'G102,G55,G62,H28,G97'
        );
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_5 = {
      register: function () {
        return ['_top'];
      },
      process: function (a, b) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          b,
          'Там, де вміст потребує більшої можливості прочитання тексту, ніж рівень нижчої середньої освіти, має бути наданий додатковий зміст або альтернативна версія.',
          'G86,G103,G79,G153,G160'
        );
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_6 = {
      register: function () {
        return ['ruby'];
      },
      process: function (a, b) {
        var c = a.querySelectorAll('rb');
        0 === a.querySelectorAll('rt').length &&
          (0 === c.length
            ? HTMLCS.addMessage(
                HTMLCS.ERROR,
                a,
                'Ruby-елемент не містить елемента rt, що містить інформацію про вимову для тексту.',
                'H62.1.HTML5'
              )
            : HTMLCS.addMessage(
                HTMLCS.ERROR,
                a,
                'Елемент ruby не містить елемента rt, що містить інформацію про вимову для тексту всередині елемента rb.',
                'H62.1.XHTML11'
              )),
          0 === a.querySelectorAll('rp').length &&
            HTMLCS.addMessage(
              HTMLCS.ERROR,
              a,
              'Елемент ruby не містить елементів rp, які надають додаткові знаки пунктуації для браузерів, які не підтримують ruby текст.',
              'H62.2'
            );
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_2_3_2_1 = {
      register: function () {
        return ['input', 'textarea', 'button', 'select'];
      },
      process: function (a, b) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          a,
          'Переконайтеся, що зміна контексту не відбувається, коли це поле введення отримує фокус.',
          'G107'
        );
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_2_3_2_2 = {
      register: function () {
        return ['form'];
      },
      process: function (a, b) {
        'form' === a.nodeName.toLowerCase() && this.checkFormSubmitButton(a);
      },
      checkFormSubmitButton: function (a) {
        var b = !1;
        if (a.querySelectorAll('input[type=submit], input[type=image]').length > 0) b = !0;
        else {
          var c = a.querySelectorAll('button'),
            d = a.querySelectorAll('button[type=reset], button[type=button]');
          c.length > d.length && (b = !0);
        }
        !1 === b &&
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            a,
            'Ця форма не містить кнопки відправки, яка створює проблеми для тих, хто не може надіслати форму за допомогою клавіатури. Кнопки відправлення - це елементи INPUT із атрибутом типу "submit" або "image" або елементами BUTTON типу "submit" або omitted / invalid.',
            'H32.2'
          );
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_2_3_2_3 = {
      register: function () {
        return ['_top'];
      },
      process: function (a, b) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          b,
          'Переконайтеся, що навігаційні механізми, які повторюються на кількох веб-сторінках, відбуваються у тому ж відносному порядку кожного разу, коли вони повторюються, якщо користувач не ініціює зміну.',
          'G61'
        );
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_2_3_2_4 = {
      register: function () {
        return ['_top'];
      },
      process: function (a, b) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          b,
          'Переконайтеся, що компоненти, які мають однакову функціональність на цій веб-сторінці, ідентифікуються послідовно в наборі веб-сторінок, до яких він належить.',
          'G197'
        );
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_2_3_2_5 = {
      register: function () {
        return ['a'];
      },
      process: function (a, b) {
        'a' === a.nodeName.toLowerCase() && this.checkNewWindowTarget(a);
      },
      checkNewWindowTarget: function (a) {
        !0 === a.hasAttribute('target') &&
          '_blank' === (a.getAttribute('target') || '') &&
          !1 === /new window/i.test(a.innerHTML) &&
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            a,
            'Перевірте, чи в тексті link цього посилання міститься інформація про те, що посилання відкриється в новому вікні.',
            'H83.3'
          );
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_3_3_3_1 = {
      register: function () {
        return ['form'];
      },
      process: function (a, b) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          a,
          'Якщо помилка вводу автоматично виявляється в цій формі, перевірте, чи є елементи з помилками ідентифіковані, а помилки описані користувачеві в тексті.',
          'G83,G84,G85'
        );
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_3_3_3_2 = {
      register: function () {
        return ['form'];
      },
      process: function (a, b) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          a,
          "Переконайтеся, що описові мітки або інструкції (в тому числі для обов'язкових полів) наявні для input елементів в цій формі.",
          'G131,G89,G184,H90'
        );
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_3_3_3_3 = {
      register: function () {
        return ['form'];
      },
      process: function (a, b) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          a,
          'Перевірте, чи ця форма містить пропоновані виправлення помилок у input користувача, якщо це не загрожує безпеці або цілі вмісту.',
          'G177'
        );
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_3_3_3_4 = {
      register: function () {
        return ['form'];
      },
      process: function (a, b) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          a,
          "Якщо ця форма буде прив'язувати користувача до фінансових чи юридичних зобов'язань, змінити/видалити дані, які можна керувати користувачем, або надіслати тестові відповіді, переконайтеся, що вони перевірені на наявність помилок введення та/або підтверджені користувачем.",
          'G98,G99,G155,G164,G168.LegalForms'
        );
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_3_3_3_5 = {
      register: function () {
        return ['form'];
      },
      process: function (a, b) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          a,
          'Переконайтеся, що контекстно-чутлива довідка доступна для цієї форми, на веб-сторінці та/або на рівні керування.',
          'G71,G184,G193'
        );
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_3_3_3_6 = {
      register: function () {
        return ['form'];
      },
      process: function (a, b) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          a,
          'Переконайтеся, що дані цієї форми перевірено на наявність помилок введення та/або підтверджено користувачем.',
          'G98,G99,G155,G164,G168.AllForms'
        );
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle4_Guideline4_1_4_1_1 = {
      register: function () {
        return ['_top'];
      },
      process: function (a, b) {
        if (a === b)
          for (var c = HTMLCS.util.getAllElements(b, '*[id]'), d = {}, e = 0; e < c.length; e++) {
            var f = c[e].getAttribute('id');
            !0 !== /^\s*$/.test(f) &&
              (void 0 !== d[f]
                ? HTMLCS.addMessage(
                    HTMLCS.ERROR,
                    c[e],
                    'Дублікат значення атрибута id "' + f + '" знайдено на веб-сторінці.',
                    'F77'
                  )
                : (d[f] = !0));
          }
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle4_Guideline4_1_4_1_2 = {
      register: function () {
        return ['_top'];
      },
      process: function (a, b) {
        if (a === b) {
          for (var c = this.processFormControls(b), d = 0; d < c.errors.length; d++)
            HTMLCS.addMessage(HTMLCS.ERROR, c.errors[d].element, c.errors[d].msg, 'H91.' + c.errors[d].subcode);
          for (var d = 0; d < c.warnings.length; d++)
            HTMLCS.addMessage(HTMLCS.WARNING, c.warnings[d].element, c.warnings[d].msg, 'H91.' + c.warnings[d].subcode);
          this.addProcessLinksMessages(b);
        }
      },
      addProcessLinksMessages: function (a) {
        for (var b = this.processLinks(a), c = 0; c < b.empty.length; c++)
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            b.empty[c],
            "Елемент прив'язки (якоря), знайденого за ідентифікатором, але без тексту href або посилання. Розгляньте можливість перенесення ідентифікатора до батьківського чи близького елемента.",
            'H91.A.Empty'
          );
        for (var c = 0; c < b.emptyWithName.length; c++)
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            b.emptyWithName[c],
            "Елемент прив'язки (якоря) знайдений атрибутом name, але без тексту href або посилання. Розглянемо можливість перенесення атрибута name, щоб стати ідентифікатором батьківського чи близького елемента.",
            'H91.A.EmptyWithName'
          );
        for (var c = 0; c < b.emptyNoId.length; c++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            b.emptyNoId[c],
            'Елемент якоря не має вмісту посилання, а також атрибуту імені та/або ідентифікатора.',
            'H91.A.EmptyNoId'
          );
        for (var c = 0; c < b.noHref.length; c++)
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            b.noHref[c],
            "Елементи прив'язки (якоря) не повинні використовуватися для визначення цілей посилань на сторінках. Якщо ви не використовуєте ідентифікатор для інших цілей (наприклад, CSS або сценаріїв), розгляньте можливість переміщення його до батьківського елемента.",
            'H91.A.NoHref'
          );
        for (var c = 0; c < b.placeholder.length; c++)
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            b.placeholder[c],
            'Елемент якоря знайдено з вмістом посилання, але без атрибуту href, ідентифікатора чи назви.',
            'H91.A.Placeholder'
          );
        for (var c = 0; c < b.noContent.length; c++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            b.noContent[c],
            "Елемент прив'язки (якоря) знайдено з дійсним атрибутом href, але вміст посилання відсутній.",
            'H91.A.NoContent'
          );
      },
      processLinks: function (a) {
        for (
          var b = {
              empty: [],
              emptyWithName: [],
              emptyNoId: [],
              noHref: [],
              placeholder: [],
              noContent: [],
            },
            c = HTMLCS.util.getAllElements(a, 'a:not([role="button"])'),
            d = 0;
          d < c.length;
          d++
        ) {
          var e = c[d],
            f = !1,
            g = !1,
            h = HTMLCS.util.getElementTextContent(e);
          !0 === e.hasAttribute('title') && !1 === /^\s*$/.test(e.getAttribute('title'))
            ? (f = !0)
            : !1 === /^\s*$/.test(h) && (f = !0),
            !0 === e.hasAttribute('href') && !1 === /^\s*$/.test(e.getAttribute('href')) && (g = !0),
            !1 === g
              ? !0 === /^\s*$/.test(h)
                ? !0 === e.hasAttribute('id')
                  ? b.empty.push(e)
                  : !0 === e.hasAttribute('name')
                  ? b.emptyWithName.push(e)
                  : b.emptyNoId.push(e)
                : !0 === e.hasAttribute('id') || !0 === e.hasAttribute('name')
                ? b.noHref.push(e)
                : b.placeholder.push(e)
              : !1 === f &&
                0 === e.querySelectorAll('img').length &&
                !1 === HTMLCS.util.hasValidAriaLabel(e) &&
                b.noContent.push(e);
        }
        return b;
      },
      processFormControls: function (a) {
        for (
          var b = HTMLCS.util.getAllElements(a, 'button, fieldset, input, select, textarea, [role="button"]'),
            c = [],
            d = [],
            e = {
              button: ['@title', '_content', '@aria-label', '@aria-labelledby'],
              fieldset: ['legend', '@aria-label', '@aria-labelledby'],
              input_button: ['@value', '@aria-label', '@aria-labelledby'],
              input_text: ['label', '@title', '@aria-label', '@aria-labelledby'],
              input_file: ['label', '@title', '@aria-label', '@aria-labelledby'],
              input_password: ['label', '@title', '@aria-label', '@aria-labelledby'],
              input_checkbox: ['label', '@title', '@aria-label', '@aria-labelledby'],
              input_radio: ['label', '@title', '@aria-label', '@aria-labelledby'],
              input_image: ['@alt', '@title', '@aria-label', '@aria-labelledby'],
              select: ['label', '@title', '@aria-label', '@aria-labelledby'],
              textarea: ['label', '@title', '@aria-label', '@aria-labelledby'],
            },
            f = ['email', 'search', 'date', 'datetime-local', 'month', 'number', 'tel', 'time', 'url', 'week'],
            g = 0,
            h = f.length;
          g < h;
          g++
        )
          e['input_' + f[g]] = ['label', '@title', '@aria-label', '@aria-labelledby'];
        for (
          var i = {
              select: 'option_selected',
            },
            j = 0,
            k = b.length;
          j < k;
          j++
        ) {
          var l = b[j],
            m = l.nodeName.toLowerCase(),
            n = l.nodeName.substr(0, 1).toUpperCase() + l.nodeName.substr(1).toLowerCase();
          if ('input' === m) {
            !1 === l.hasAttribute('type') ? (m += '_text') : (m += '_' + l.getAttribute('type').toLowerCase()),
              ('input_submit' !== m && 'input_reset' !== m) || (m = 'input_button');
            var n = 'Input' + m.substr(6, 1).toUpperCase() + m.substr(7).toLowerCase();
          }
          var o = e[m],
            p = i[m];
          if ((o || 'input_hidden' === m || (o = ['_content']), o)) {
            for (var g = 0; g < o.length; g++) {
              var q = o[g];
              if ('_content' === q) {
                var r = HTMLCS.util.getElementTextContent(l);
                if (!1 === /^\s*$/.test(r)) break;
              } else if ('label' === q) {
                var s = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1.testLabelsOnInputs(l, a, !0);
                if (!1 !== s) break;
              } else if ('@' === q.charAt(0)) {
                if (
                  ('aria-label' === (q = q.substr(1, q.length)) || 'aria-labelledby' === q) &&
                  HTMLCS.util.hasValidAriaLabel(l)
                )
                  break;
                if (!0 === l.hasAttribute(q) && !1 === /^\s*$/.test(l.getAttribute(q))) break;
              } else {
                var t = l.querySelector(q);
                if (null !== t) {
                  var r = HTMLCS.util.getElementTextContent(t);
                  if (!1 === /^\s*$/.test(r)) break;
                }
              }
            }
            if (g === o.length) {
              var u = m + ' element';
              'input_' === m.substr(0, 6) && (u = m.substr(6) + ' input element'),
                l.hasAttribute('role') &&
                  'button' === l.getAttribute('role') &&
                  (u = 'element has a role of "button" but');
              for (var v = o.slice(0, o.length), w = 0; w < v.length; w++)
                '_content' === v[w]
                  ? (v[w] = 'element content')
                  : '@' === v[w].charAt(0)
                  ? (v[w] = v[w].substr(1) + ' attribute')
                  : (v[w] = v[w] + ' element');
              var x = 'Цей ' + u + ' не має назви, доступного для API. Дійсні імена є: ' + v.join(', ') + '.';
              c.push({
                element: l,
                msg: x,
                subcode: n + '.Name',
              });
            }
          }
          var y = !1;
          if (void 0 === p) y = !0;
          else if ('_content' === p) {
            var r = HTMLCS.util.getElementTextContent(l);
            !1 === /^\s*$/.test(r) && (y = !0);
          } else if ('option_selected' === p)
            if (!1 === l.hasAttribute('multiple')) {
              var z = l.querySelector('option[selected]');
              null !== z && (y = !0);
            } else y = !0;
          else '@' === p.charAt(0) && ((p = p.substr(1, p.length)), !0 === l.hasAttribute(p) && (y = !0));
          if ((!1 === y && (valuFound = HTMLCS.util.hasValidAriaLabel(l)), !1 === y)) {
            var u = m + ' element';
            'input_' === m.substr(0, 6) && (u = m.substr(6) + ' input element');
            var x = 'Цей ' + u + ' не має значення, доступного для API.',
              A = '',
              B = !1;
            '_content' === p
              ? (A = ' Додати один, додавши до елемента вміст.')
              : 'option_selected' === p
              ? ((B = !0),
                (x =
                  'Цей ' +
                  u +
                  ' не має початкової вибраної опції. Залежно від версії HTML, значення, що піддається API-доступності, може бути невизначеним.'))
              : (A =
                  '@' === p.charAt(0)
                    ? ' Значення виставляється за допомогою "' + p + '" атрибута'
                    : ' Значення виставляється за допомогою "' + p + '" елемента.'),
              (x += A),
              !1 === B
                ? c.push({
                    element: l,
                    msg: x,
                    subcode: n + '.Value',
                  })
                : d.push({
                    element: l,
                    msg: x,
                    subcode: n + '.Value',
                  });
          }
        }
        return {
          errors: c,
          warnings: d,
        };
      },
    }),
    (_global.HTMLCS = new (function () {
      var a = {},
        b = [],
        c = {},
        d = null,
        e = null,
        f = [],
        g = {};
      (this.ERROR = 1),
        (this.WARNING = 2),
        (this.NOTICE = 3),
        (this.process = function (e, f, g, h) {
          if (((a = {}), (b = []), (c = {}), (d = null), !f)) return !1;
          a[p(e)]
            ? HTMLCS.run(g, f)
            : this.loadStandard(
                e,
                function () {
                  HTMLCS.run(g, f);
                },
                h
              );
        }),
        (this.loadStandard = function (a, b, c) {
          if (!a) return !1;
          j(
            a,
            function () {
              (d = a), b.call(this);
            },
            c
          );
        }),
        (this.run = function (a, b) {
          var c = null,
            d = !1;
          if ('string' == typeof b) {
            d = !0;
            var e = document.createElement('iframe');
            (e.style.display = 'none'),
              (e = document.body.insertBefore(e, null)),
              e.contentDocument ? (c = e.contentDocument) : c.contentWindow && (c = e.contentWindow.document),
              (e.load = function () {
                if (((this.onreadystatechange = null), (this.onload = null), !1 === HTMLCS.isFullDoc(b))) {
                  c = c.getElementsByTagName('body')[0];
                  var d = c.getElementsByTagName('div')[0];
                  d && '__HTMLCS-source-wrap' === d.id && ((d.id = ''), (c = d));
                }
                var e = HTMLCS.util.getAllElements(c);
                e.unshift(c), h(e, c, a);
              }),
              (e.onreadystatechange = function () {
                !0 === /^(complete|loaded)$/.test(this.readyState) && ((this.onreadystatechange = null), this.load());
              }),
              (e.onload = e.load),
              !1 === HTMLCS.isFullDoc(b) && -1 === b.indexOf('<body')
                ? c.write('<div id="__HTMLCS-source-wrap">' + b + '</div>')
                : c.write(b),
              c.close();
          } else c = b;
          if (!c) return void a.call(this);
          (a = a || function () {}), (f = []);
          var g = HTMLCS.util.getAllElements(c);
          g.unshift(c), !1 === d && h(g, c, a);
        }),
        (this.isFullDoc = function (a) {
          var b = !1;
          return (
            'string' == typeof a
              ? -1 !== a.toLowerCase().indexOf('<html')
                ? (b = !0)
                : -1 !== a.toLowerCase().indexOf('<head') && -1 !== a.toLowerCase().indexOf('<body') && (b = !0)
              : ('html' === a.nodeName.toLowerCase() || a.documentElement) && (b = !0),
            b
          );
        }),
        (this.addMessage = function (a, b, c, d, e) {
          (d = r(d)),
            f.push({
              type: a,
              element: b,
              msg: g[d] || c,
              code: d,
              data: e,
            });
        }),
        (this.getMessages = function () {
          return f.concat([]);
        });
      var h = function (a, b, d) {
          for (var g = []; a.length > 0; ) {
            var h = a.shift();
            if (h === b) var j = '_top';
            else var j = h.tagName.toLowerCase();
            for (var k = 0; k < g.length; ) h === g[k].element ? (f.push(g[k]), g.splice(k, 1)) : k++;
            c[j] && c[j].length > 0 && (i(h, c[j].concat([]), b), '_top' === j && ((g = f), (f = [])));
          }
          var l = b.querySelectorAll('[role="presentation"]');
          (e = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1),
            [].forEach.call(l, function (a) {
              e.testSemanticPresentationRole(a);
            }),
            d instanceof Function == !0 && d.call(this);
        },
        i = function (a, b, c, d) {
          for (; b.length > 0; ) {
            var f = b.shift();
            (e = f),
              !0 === f.useCallback
                ? f.process(a, c, function () {
                    i(a, b, c), (b = []);
                  })
                : f.process(a, c);
          }
          d instanceof Function == !0 && d.call(this);
        },
        j = function (a, b, c, d) {
          0 !== a.indexOf('http') && (a = p(a));
          var e = a.split('/');
          _global['HTMLCS_' + e[e.length - 2]]
            ? k(a, b, c, d)
            : s(
                a,
                function () {
                  k(a, b, c, d);
                },
                c
              );
        },
        k = function (b, c, d, e) {
          var f = b.split('/'),
            g = _global['HTMLCS_' + f[f.length - 2]],
            h = {};
          for (var i in g) !0 === g.hasOwnProperty(i) && (h[i] = g[i]);
          if (!h) return !1;
          if (((a[b] = h), e))
            if (e.include && e.include.length > 0) h.sniffs = e.include;
            else if (e.exclude)
              for (var j = 0; j < e.exclude.length; j++) {
                var k = h.sniffs.find(e.exclude[j]);
                k >= 0 && h.sniffs.splice(k, 1);
              }
          var m = h.sniffs.slice(0, h.sniffs.length);
          l(b, m, c, d);
        },
        l = function (a, b, c, d) {
          if (0 === b.length) return void c.call(this);
          var e = b.shift();
          m(
            a,
            e,
            function () {
              l(a, b, c, d);
            },
            d
          );
        },
        m = function (a, b, c, d) {
          if ('string' == typeof b) {
            var e = q(a, b),
              f = function () {
                n(a, b), c.call(this);
              };
            e ? f() : s(o(a, b), f, d);
          } else
            j(
              b.standard,
              function () {
                if (b.messages) for (var a in b.messages) g[a] = b.messages[a];
                c.call(this);
              },
              d,
              {
                exclude: b.exclude,
                include: b.include,
              }
            );
        },
        n = function (a, d) {
          var e = q(a, d);
          if (!e) return !1;
          if (e.register)
            for (var f = e.register(), g = 0; g < f.length; g++) c[f[g]] || (c[f[g]] = []), c[f[g]].push(e);
          b.push(e);
        },
        o = function (a, b) {
          var c = a.split('/');
          return c.pop(), c.join('/') + '/Sniffs/' + b.replace(/\./g, '/') + '.js';
        },
        p = function (a) {
          for (var b = document.getElementsByTagName('script'), c = null, d = 0; d < b.length; d++)
            if (b[d].src && b[d].src.match(/HTMLCS\.js/)) {
              (c = b[d].src.replace(/HTMLCS\.js/, '')), (c = c.substring(0, c.indexOf('?')));
              break;
            }
          return c + 'Standards/' + a + '/ruleset.js';
        },
        q = function (b, c) {
          var d = 'HTMLCS_';
          return (
            (d += a[b].name + '_Sniffs_'),
            (d += c.split('.').join('_')),
            _global[d] ? ((_global[d]._name = c), _global[d]) : null
          );
        },
        r = function (a) {
          return (a = d + '.' + e._name + '.' + a);
        },
        s = function (a, b, c) {
          var d = document.createElement('script');
          (d.onload = function () {
            (d.onload = null), (d.onreadystatechange = null), b.call(this);
          }),
            (d.onerror = function () {
              (d.onload = null), (d.onreadystatechange = null), c && c.call(this);
            }),
            (d.onreadystatechange = function () {
              !0 === /^(complete|loaded)$/.test(this.readyState) && ((d.onreadystatechange = null), d.onload());
            }),
            (d.src = a),
            document.head ? document.head.appendChild(d) : document.getElementsByTagName('head')[0].appendChild(d);
        };
    })()),
    (_global.HTMLCS.util = (function () {
      var a = {};
      return (
        (a.trim = function (a) {
          return a.replace(/^\s*(.*)\s*$/g, '$1');
        }),
        (a.isStringEmpty = function (a) {
          if ('string' != typeof a) return !0;
          var b = !0;
          return -1 !== a.indexOf(String.fromCharCode(160)) ? (b = !1) : !1 === /^\s*$/.test(a) && (b = !1), b;
        }),
        (a.getDocumentType = function (a) {
          var b = null,
            c = a.doctype;
          if (c) {
            var d = c.name,
              e = c.publicId,
              f = c.systemId;
            if (
              (null === d && (d = ''),
              null === f && (f = ''),
              null === e && (e = ''),
              'html' === d.toLowerCase() &&
                ('' === e && '' === f
                  ? (b = 'html5')
                  : -1 !== e.indexOf('//DTD HTML 4.01') || -1 !== f.indexOf('w3.org/TR/html4/strict.dtd')
                  ? (b = 'html401')
                  : -1 !== e.indexOf('//DTD HTML 4.0') || -1 !== f.indexOf('w3.org/TR/REC-html40/strict.dtd')
                  ? (b = 'html40')
                  : -1 !== e.indexOf('//DTD XHTML 1.0 Strict') &&
                    -1 !== f.indexOf('w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd')
                  ? (b = 'xhtml10')
                  : -1 !== e.indexOf('//DTD XHTML 1.1') &&
                    -1 !== f.indexOf('w3.org/TR/xhtml11/DTD/xhtml11.dtd') &&
                    (b = 'xhtml11'),
                -1 !== f.indexOf('about:legacy-compat') && 'application/xhtml+xml' === a.contentType))
            ) {
              var g = a.querySelector('html');
              'http://www.w3.org/1999/xhtml' === g.getAttribute('xmlns') && (b = 'xhtml5');
            }
          } else if ('application/xhtml+xml' === a.contentType) {
            var g = a.querySelector('html');
            'http://www.w3.org/1999/xhtml' === g.getAttribute('xmlns') && (b = 'xhtml5');
          }
          return b;
        }),
        (a.getElementWindow = function (a) {
          if (a.ownerDocument) var b = a.ownerDocument;
          else var b = a;
          return b.defaultView ? b.defaultView : b.parentWindow;
        }),
        (a.hasValidAriaLabel = function (b) {
          var c = !1;
          if (!0 === b.hasAttribute('aria-labelledby')) {
            b.getAttribute('aria-labelledby')
              .split(/\s+/)
              .forEach(function (b) {
                var d = document.getElementById(b);
                if (d) {
                  !1 === /^\s*$/.test(a.getElementTextContent(d)) && (c = !0);
                }
              });
          } else if (!0 === b.hasAttribute('aria-label')) {
            var d = b.getAttribute('aria-label');
            !1 === /^\s*$/.test(d) && (c = !0);
          }
          return c;
        }),
        (a.style = function (b) {
          var c = null,
            d = a.getElementWindow(b);
          return b.currentStyle ? (c = b.currentStyle) : d.getComputedStyle && (c = d.getComputedStyle(b, null)), c;
        }),
        (a.isVisuallyHidden = function (b) {
          var c = !1,
            d = a.style(b);
          return (
            null !== d &&
              (('hidden' !== d.visibility && 'none' !== d.display) || (c = !0),
              parseInt(d.left, 10) + parseInt(d.width, 10) < 0 && (c = !0),
              parseInt(d.top, 10) + parseInt(d.height, 10) < 0 && (c = !0)),
            c
          );
        }),
        (a.isAccessibilityHidden = function (a) {
          do {
            if (a.hasAttribute('role') && 'presentation' === a.getAttribute('role')) return !0;
            if (a.hasAttribute('aria-hidden') && 'true' === a.getAttribute('aria-hidden')) return !0;
          } while ((a = a.parentElement));
          return !1;
        }),
        (a.isFocusable = function (b) {
          var c = b.nodeName.toLowerCase();
          return (
            !0 !== a.isDisabled(b) &&
            !0 !== a.isVisuallyHidden(b) &&
            (!!/^(input|select|textarea|button|object)$/.test(c) ||
              !('a' !== c || !b.hasAttribute('href') || !1 !== /^\s*$/.test(b.getAttribute('href'))))
          );
        }),
        (a.isKeyboardTabbable = function (b) {
          if (!0 === b.hasAttribute('tabindex')) {
            return '-1' !== b.getAttribute('tabindex');
          }
          return a.isFocusable(b);
        }),
        (a.isKeyboardNavigable = function (b) {
          return (
            !(!b.hasAttribute('accesskey') || !1 !== /^\s*$/.test(b.getAttribute('accesskey'))) ||
            a.isKeyboardTabbable(b)
          );
        }),
        (a.isDisabled = function (a) {
          var b = !1;
          return (!0 !== a.disabled && 'true' !== a.getAttribute('aria-disabled')) || (b = !0), b;
        }),
        (a.isInDocument = function (a) {
          for (var b = a.parentNode; b && b.ownerDocument; ) b = b.parentNode;
          return null !== b;
        }),
        (a.getAllElements = function (a, b) {
          (a = a || document), (b = b || '*');
          var c = Array.prototype.slice.call(a.querySelectorAll(b)),
            d = c.filter(function (a) {
              return !1 === HTMLCS.util.isAccessibilityHidden(a);
            }),
            e = document.getElementById('HTMLCS-wrapper');
          return (
            e &&
              (d = d.filter(function (a) {
                return !1 === e.contains(a);
              })),
            d
          );
        }),
        (a.contains = function (a, b) {
          var c = !1;
          return (
            a !== b &&
              (a.ownerDocument
                ? a.contains && !0 === a.contains(b)
                  ? (c = !0)
                  : a.compareDocumentPosition && (16 & a.compareDocumentPosition(b)) > 0 && (c = !0)
                : b.ownerDocument && b.ownerDocument === a && (c = !0)),
            c
          );
        }),
        (a.isLayoutTable = function (a) {
          return null === a.querySelector('th');
        }),
        (a.contrastRatio = function (b, c) {
          var d = (0.05 + a.relativeLum(b)) / (0.05 + a.relativeLum(c));
          return d < 1 && (d = 1 / d), d;
        }),
        (a.relativeLum = function (b) {
          if (b.charAt) var b = a.colourStrToRGB(b);
          var c = {};
          for (var d in b) b[d] <= 0.03928 ? (c[d] = b[d] / 12.92) : (c[d] = Math.pow((b[d] + 0.055) / 1.055, 2.4));
          return 0.2126 * c.red + 0.7152 * c.green + 0.0722 * c.blue;
        }),
        (a.colourStrToRGB = function (a) {
          if (((a = a.toLowerCase()), 'rgb' === a.substring(0, 3))) {
            var b = /^rgba?\s*\((\d+),\s*(\d+),\s*(\d+)([^)]*)\)$/.exec(a);
            a = {
              red: b[1] / 255,
              green: b[2] / 255,
              blue: b[3] / 255,
            };
          } else
            '#' === a.charAt(0) && (a = a.substr(1)),
              3 === a.length && (a = a.replace(/^(.)(.)(.)$/, '$1$1$2$2$3$3')),
              (a = {
                red: parseInt(a.substr(0, 2), 16) / 255,
                green: parseInt(a.substr(2, 2), 16) / 255,
                blue: parseInt(a.substr(4, 2), 16) / 255,
              });
          return a;
        }),
        (a.RGBtoColourStr = function (a) {
          return (
            (colourStr = '#'),
            (a.red = Math.round(255 * a.red)),
            (a.green = Math.round(255 * a.green)),
            (a.blue = Math.round(255 * a.blue)),
            a.red % 17 == 0 && a.green % 17 == 0 && a.blue % 17 == 0
              ? ((colourStr += (a.red / 17).toString(16)),
                (colourStr += (a.green / 17).toString(16)),
                (colourStr += (a.blue / 17).toString(16)))
              : (a.red < 16 && (colourStr += '0'),
                (colourStr += a.red.toString(16)),
                a.green < 16 && (colourStr += '0'),
                (colourStr += a.green.toString(16)),
                a.blue < 16 && (colourStr += '0'),
                (colourStr += a.blue.toString(16))),
            colourStr
          );
        }),
        (a.sRGBtoHSV = function (b) {
          b.charAt && (b = a.colourStrToRGB(b));
          var c = {
              hue: 0,
              saturation: 0,
              value: 0,
            },
            d = Math.max(b.red, b.green, b.blue),
            e = Math.min(b.red, b.green, b.blue),
            f = d - e;
          return (
            0 === f
              ? (c.value = b.red)
              : ((c.value = d),
                d === b.red
                  ? (c.hue = (b.green - b.blue) / f)
                  : d === b.green
                  ? (c.hue = 2 + (b.blue - b.red) / f)
                  : (c.hue = 4 + (b.red - b.green) / f),
                (c.hue = 60 * c.hue),
                c.hue >= 360 && (c.hue -= 360),
                (c.saturation = f / c.value)),
            c
          );
        }),
        (a.HSVtosRGB = function (a) {
          var b = {
            red: 0,
            green: 0,
            blue: 0,
          };
          if (0 === a.saturation) (b.red = a.value), (b.green = a.value), (b.blue = a.value);
          else {
            var c = a.value * a.saturation,
              d = a.value - c,
              e = a.hue / 60,
              f = e - 2 * Math.floor(e / 2),
              g = c * (1 - Math.abs(f - 1));
            switch (Math.floor(e)) {
              case 0:
                (b.red = c), (b.green = g);
                break;
              case 1:
                (b.green = c), (b.red = g);
                break;
              case 2:
                (b.green = c), (b.blue = g);
                break;
              case 3:
                (b.blue = c), (b.green = g);
                break;
              case 4:
                (b.blue = c), (b.red = g);
                break;
              case 5:
                (b.red = c), (b.blue = g);
            }
            (b.red = b.red + d), (b.green = b.green + d), (b.blue = b.blue + d);
          }
          return b;
        }),
        (a.getElementTextContent = function (a, b) {
          void 0 === b && (b = !0);
          for (var a = a.cloneNode(!0), c = [], d = 0; d < a.childNodes.length; d++) c.push(a.childNodes[d]);
          for (var e = [a.textContent]; c.length > 0; ) {
            var f = c.shift();
            if (1 === f.nodeType)
              if ('img' === f.nodeName.toLowerCase())
                !0 === b && !0 === f.hasAttribute('alt') && e.push(f.getAttribute('alt'));
              else for (var d = 0; d < f.childNodes.length; d++) c.push(f.childNodes[d]);
            else 3 === f.nodeType && e.push(f.nodeValue);
          }
          return (e = e.join('').replace(/^\s+|\s+$/g, ''));
        }),
        (a.testTableHeaders = function (a) {
          for (
            var b = {
                required: !0,
                used: !1,
                correct: !0,
                allowScope: !0,
                missingThId: [],
                missingTd: [],
                wrongHeaders: [],
              },
              c = a.getElementsByTagName('tr'),
              d = [],
              e = {
                rows: [],
                cols: [],
              },
              f = {
                rows: 0,
                cols: 0,
              },
              g = 0;
            g < c.length;
            g++
          )
            for (var h = c[g], i = 0, j = 0; j < h.childNodes.length; j++) {
              var k = h.childNodes[j];
              if (1 === k.nodeType) {
                if (d[g]) for (; d[g][0] === i; ) d[g].shift(), i++;
                var l = k.nodeName.toLowerCase(),
                  m = Number(k.getAttribute('rowspan')) || 1,
                  n = Number(k.getAttribute('colspan')) || 1;
                if (m > 1)
                  for (var o = g + 1; o < g + m; o++) {
                    d[o] || (d[o] = []);
                    for (var p = i; p < i + n; p++) d[o].push(p);
                  }
                if ('th' === l) {
                  var q = k.getAttribute('id') || '';
                  '' === q && ((b.correct = !1), b.missingThId.push(k)),
                    m > 1 && n > 1
                      ? (b.allowScope = !1)
                      : !0 === b.allowScope &&
                        (void 0 === e.cols[i] && (e.cols[i] = 0),
                        void 0 === e.rows[g] && (e.rows[g] = 0),
                        (e.rows[g] += n),
                        (e.cols[i] += m));
                } else
                  'td' === l &&
                    !0 === k.hasAttribute('headers') &&
                    !1 === /^\s*$/.test(k.getAttribute('headers')) &&
                    (b.used = !0);
                i += n;
              }
            }
          for (var o = 0; o < e.rows.length; o++) e.rows[o] > 1 && f.rows++;
          for (var o = 0; o < e.cols.length; o++) e.cols[o] > 1 && f.cols++;
          f.rows > 1 || f.cols > 1
            ? (b.allowScope = !1)
            : !0 !== b.allowScope || (0 !== f.rows && 0 !== f.cols) || (b.required = !1);
          for (var r = HTMLCS.util.getCellHeaders(a), o = 0; o < r.length; o++) {
            var k = r[o].cell,
              s = r[o].headers;
            if (!1 === k.hasAttribute('headers')) (b.correct = !1), b.missingTd.push(k);
            else {
              var t = (k.getAttribute('headers') || '').split(/\s+/);
              if (0 === t.length) (b.correct = !1), b.missingTd.push(k);
              else if (
                ((t = ' ' + t.sort().join(' ') + ' '),
                (t = t
                  .replace(/\s+/g, ' ')
                  .replace(/(\w+\s)\1+/g, '$1')
                  .replace(/^\s*(.*?)\s*$/g, '$1')),
                s !== t)
              ) {
                b.correct = !1;
                var u = {
                  element: k,
                  expected: s,
                  actual: k.getAttribute('headers') || '',
                };
                b.wrongHeaders.push(u);
              }
            }
          }
          return b;
        }),
        (a.getCellHeaders = function (a) {
          if ('object' != typeof a) return null;
          if ('table' !== a.nodeName.toLowerCase()) return null;
          for (
            var b = a.getElementsByTagName('tr'),
              c = [],
              d = {
                rows: {},
                cols: {},
              },
              e = [],
              f = ['th', 'td'],
              g = 0;
            g < f.length;
            g++
          )
            for (var h = f[g], i = 0; i < b.length; i++)
              for (var j = b[i], k = 0, l = 0; l < j.childNodes.length; l++) {
                var m = j.childNodes[l];
                if (1 === m.nodeType) {
                  if (c[i]) for (; c[i][0] === k; ) c[i].shift(), k++;
                  var n = m.nodeName.toLowerCase(),
                    o = Number(m.getAttribute('rowspan')) || 1,
                    p = Number(m.getAttribute('colspan')) || 1;
                  if (o > 1)
                    for (var q = i + 1; q < i + o; q++) {
                      c[q] || (c[q] = []);
                      for (var r = k; r < k + p; r++) c[q].push(r);
                    }
                  if (n === h)
                    if ('th' === n) {
                      for (var s = m.getAttribute('id') || '', q = i; q < i + o; q++)
                        (d.rows[q] = d.rows[q] || {
                          first: k,
                          ids: [],
                        }),
                          d.rows[q].ids.push(s);
                      for (var q = k; q < k + p; q++)
                        (d.cols[q] = d.cols[q] || {
                          first: i,
                          ids: [],
                        }),
                          d.cols[q].ids.push(s);
                    } else if ('td' === n) {
                      for (var t = [], q = i; q < i + o; q++)
                        for (var r = k; r < k + p; r++)
                          d.rows[q] && r >= d.rows[q].first && (t = t.concat(d.rows[q].ids)),
                            d.cols[r] && q >= d.cols[r].first && (t = t.concat(d.cols[r].ids));
                      t.length > 0 &&
                        ((t = ' ' + t.sort().join(' ') + ' '),
                        (t = t
                          .replace(/\s+/g, ' ')
                          .replace(/(\w+\s)\1+/g, '$1')
                          .replace(/^\s*(.*?)\s*$/g, '$1')),
                        e.push({
                          cell: m,
                          headers: t,
                        }));
                    }
                  k += p;
                }
              }
          return e;
        }),
        (a.getPreviousSiblingElement = function (a, b, c) {
          void 0 === b && (b = null), void 0 === c && (c = !1);
          for (var d = a.previousSibling; null !== d; ) {
            if (3 === d.nodeType) {
              if (!1 === HTMLCS.util.isStringEmpty(d.nodeValue) && !0 === c) {
                d = null;
                break;
              }
            } else if (1 === d.nodeType) {
              if (null === b || d.nodeName.toLowerCase() === b) break;
              if (!0 === c) {
                d = null;
                break;
              }
              break;
            }
            d = d.previousSibling;
          }
          return d;
        }),
        (a.getNextSiblingElement = function (a, b, c) {
          void 0 === b && (b = null), void 0 === c && (c = !1);
          for (var d = a.nextSibling; null !== d; ) {
            if (3 === d.nodeType) {
              if (!1 === HTMLCS.util.isStringEmpty(d.nodeValue) && !0 === c) {
                d = null;
                break;
              }
            } else if (1 === d.nodeType) {
              if (null === b || d.nodeName.toLowerCase() === b) break;
              if (!0 === c) {
                d = null;
                break;
              }
              break;
            }
            d = d.nextSibling;
          }
          return d;
        }),
        a
      );
    })());
  var HTMLCS_RUNNER = (_global.HTMLCS_RUNNER = new (function () {
    (this.run = function (a, b) {
      var c = this;
      HTMLCS.process(
        a,
        document,
        function () {
          var a = HTMLCS.getMessages(),
            b = a.length,
            d = {};
          (d[HTMLCS.ERROR] = 0), (d[HTMLCS.WARNING] = 0), (d[HTMLCS.NOTICE] = 0);
          for (var e = 0; e < b; e++) c.output(a[e]), d[a[e].type]++;
          console.log('закінчено');
        },
        function () {
          console.log('Щось у Веб-чекері не вдалося проаналізувати.'), console.log('закінчено');
        }
      );
    }),
      (this.output = function (a) {
        var b = 'UNKNOWN';
        switch (a.type) {
          case HTMLCS.ERROR:
            b = 'ERROR';
            break;
          case HTMLCS.WARNING:
            b = 'WARNING';
            break;
          case HTMLCS.NOTICE:
            b = 'NOTICE';
        }
        var c = '';
        a.element && (c = a.element.nodeName.toLowerCase());
        var d = '';
        a.element.id && '' !== a.element.id && (d = '#' + a.element.id);
        var e = '';
        if (a.element.outerHTML) {
          var f = a.element.cloneNode(!0);
          (f.innerHTML = '...'), (e = f.outerHTML);
        }
        console.log('[HTMLCS] ' + b + '|' + a.code + '|' + c + '|' + d + '|' + a.msg + '|' + e);
      });
  })()); // Expose globals.
  return _global;
});

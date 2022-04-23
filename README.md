# m1pro
Enhance UI/UX for https://monopoly-one.com

Вспомогательное расширение для игры Monopoly One.

## Установка
Примечание: если у вас уже установлено расширение <img alt="M1 Plus" width="24" src="https://raw.githubusercontent.com/dtalkachou/m1-plus/master/assets/img/icon32.png" align="center"/> M1 Plus, то его нужно отключить, так как m1pro включает все функции M1 Plus и даже больше!

После установки необходимо обновить страницу игры.

### <img alt="Chrome" src="https://img.icons8.com/fluent/24/000000/chrome.png" align="center"/> Chrome / <img alt="Microsoft Edge" src="https://img.icons8.com/fluent/24/000000/ms-edge-new.png" align="center"/> Microsoft Edge / <img alt="Yandex Browser" src="https://img.icons8.com/plasticine/32/000000/yandex-browser.png" align="center"/> Yandex Browser / <img alt="Opera" src="https://img.icons8.com/fluent/24/000000/opera.png" align="center"/> Opera
![Chrome Web Store](https://img.shields.io/chrome-web-store/v/agapnbihododcdnknlbogoajfajllgjd)
![Chrome Web Store](https://img.shields.io/chrome-web-store/users/agapnbihododcdnknlbogoajfajllgjd)
![Chrome Web Store](https://img.shields.io/chrome-web-store/rating/agapnbihododcdnknlbogoajfajllgjd)

Установить из [Chrome Web Store](https://chrome.google.com/webstore/detail/m1pro/agapnbihododcdnknlbogoajfajllgjd)

### <img alt="Firefox" src="https://raw.githubusercontent.com/softvar/enhanced-github/master/screenshots/firefox.png" align="center"/> Firefox
![Mozilla Add-on](https://img.shields.io/amo/v/m1pro)
![Mozilla Add-on](https://img.shields.io/amo/users/m1pro)
![Mozilla Add-on](https://img.shields.io/amo/rating/m1pro)

Установить из [Firefox browser Add-ons](https://addons.mozilla.org/en-US/firefox/addon/m1pro/)

### <img alt="UserScript, etc." src="https://img.icons8.com/color/24/000000/javascript--v1.png" align="center"/>UserScript и другие
Поддержка UserScript есть, но публикация не настроена, так как варианты с расширениями проще и более распространены. Если вы хотите использовать расширение через UserScript или, например, в других браузерах, то попросите и я опубликую.

## Возможности

### Улучшения страницы игры
 - [Отображение оставшихся вариантов попадания на поле "Шанс" в дополнительном блоке справа.](assets/screenshots/features/chance-pool.jpg)
 - [Подсветка полей при ходе любого игрока, полей при перемещении по М1, а также доступного выбора из нескольких вариантов. Доступные варианты хода чужих телепортов тоже подсвечиваются.](assets/screenshots/features/current-move.gif)
 - [Отображение чужих договоров в live режиме (можно отключить в настройках) и список всех договоров в течение игры.](assets/screenshots/features/trade-history.jpg)
 - [Отображение выпавшего варианта при попадании на поле "Шанс".](assets/screenshots/features/chance-card.gif)
 - [Меню действий с игроком всегда отображается в виде иконок слева от таблички игрока (больше не нужно кликать на нее, чтобы отобразить меню).](assets/screenshots/features/player-menu.png)
 - [Ваш цвет всегда будет красным вне зависимости от позиции, а для игр 2 на 2 цвет вашего союзника - зеленым (можно отключить в настройках игры).](assets/screenshots/features/colors.png)
 - [Отображение рейтинга, предыдущих банов MFP, пола, статуса дружбы для каждого игрока.](assets/screenshots/features/player-info.png)
 - [Отображение статуса кредита: когда будет доступен, через сколько раундов нужно вернуть.](assets/screenshots/features/credit.png)
 - [Отображение общей ценности игрока.](assets/screenshots/features/player-worth.png)
 - [Отображение стоимости полей, которые можно заложить.](assets/screenshots/features/share-worth.png)
 - [Отображение свободных активов команды (деньги обоих игроков и поля, которые можно передать) в режиме 2 на 2.](assets/screenshots/features/team-worth.png)
 - [Отображение общей статистки игры (тип игры, количество зрителей, текущий раунд, время игры, текущий модификатор прохода круга, а также следующий модификатор и оставшееся до его применения время) в дополнительном блоке справа (можно выключить в настройках).](assets/screenshots/features/common-stats.jpg)
 - [Отображение количества пройденных кругов и прибыли в детальной статистике для каждого игрока.](assets/screenshots/features/detailed-stats.png)
 - Убраны бесполезные приписки буквы "k" возле цен (не везде).
 - [Убраны бесполезные подсказки.](assets/screenshots/features/no-tips.png)
 - [Содержимое окна договора скомпоновано в два столбца, а само окно договора уменьшено таким образом, чтобы при открытом договоре можно было общаться в чате (видно поле ввода и несколько строк чата). Также добавлена возможность уравнять договор путем добавления недостающей суммы или установить двойную цену в любую сторону.](assets/screenshots/features/trade.jpg)
 - [Кнопки действий с полями (постройка/продажа филиала, заклад, выкуп) постройки филиала продублирована рядом с каждым полем. Также есть специальные кнопки: перезаклад (для всех режимов) и быстрая постройка (доступна только на втором раунде режима "Расклад").](assets/screenshots/features/field-buttons.jpg)
 - [Добавлены кнопки действий с несколькими полями и сумма выручки/затрат: заложить, выкупить, перезаложить.](assets/screenshots/features/multi-field-actions.jpg)
 - [Любое свободное поле можно отметить как "выключенное" (отмечается серым цветом). Выключенные поля это такие поля, которые вы не хотите покупать. При попадании на такое поле оно будет автоматически выставляться на аукцион, аналогично, при предложении покупки такого поля на аукционе будет отклоняться автоматически](assets/screenshots/features/disabled-fields.png)
 - Отображение эффектов ["Пропуск хода"](assets/screenshots/features/skip-move.jpg) и ["Ход назад"](assets/screenshots/features/reverse-move.jpg) на фишке игрока.

### Улучшения других страниц
 - Теперь практически все пространство страницы используется. Содержимое всех страниц растянуто по ширине.
 - Верхнее меню скомпоновано и перенесено влево, а также зафиксировано при прокрутке страницы.
 - Отображение в меню текущего количества зарегистрированных предметов на маркете. Количество обновляется раз в минуту.
 - Поиск игр: страница адаптируется при большом разрешении экрана (1600 пикселей по ширине и выше).
 - [Поиск игр: возможность скрывать редко используемые блоки.](assets/screenshots/features/foldable-blocks.gif)
 - [Поиск игр: возможность заносить игроков в черный список, чтобы их сообщения не показывались в основном чате.](assets/screenshots/features/chat-ignore.gif)
 - Поиск игр: поддержка обновления списка друзей (раз в 10 секунд).
 - [Поиск игр: возможность фильтровать список отображаемых игр. Выберите только те режимы игры, которые вам интересны.](assets/screenshots/features/games-filter-and-the-only-motivation-to-implement-it.gif)
 - [Поиск игр: если вы присоединились к игре, то в комнате ожидания для каждого игрока отображается дополнительная информация. Вы можете увидеть рейтинг, предыдущие баны MFP, пол, статус дружбы с другими игроками. Также доступна статистика: общее количество игр, побед, процент побед.](assets/screenshots/features/new-game.png)
 - Создание новой игры: сохранение выбранных настроек при создании игровой комнаты.
 - [Инвентарь, предложения обмена: для каждого предмета отображается его стоимость на маркете (минимальная цена). Ценник подсвечивается зеленым, если среди предметов данного типа выставлен ваш лот.](assets/screenshots/features/inventory.png)
 - Профиль: скриншоты располагаются в виде таблицы (если хватает ширины), расширено количество предметов отображаемых в профиле.
 - [Маркет: предметы скомпонованы для отображения в виде таблицы.](assets/screenshots/features/market.png)

## Сборка

[README-dev](README-dev.md)

## Благодарности
Большое спасибо всем кто помогал в тестировании и давал обратную связь.
Отдельная благодарность [@JokerMrPro](https://github.com/JokerMrPro) за помощь с картинками.
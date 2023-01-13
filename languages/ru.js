const language = {
    loadevent: "Событие загруженного игрока",
    loadcmd: "Загруженная команда",
    ready: " успешно подключен.",
    loadlash: "Успешно перезагружены команды приложения [/]",
    error1: "Токен бота, который вы ввели в свой проект, неверен или ИНТЕНСИВНОСТЬ вашего бота отключена!",
    error2: "Пожалуйста, установите токен бота в файле token.js или в файле .env в вашем проекте!",
    loadclientevent: "Загружено событие клиента",
    embed1: "Вы должны иметь роль <@&{djRole}>(DJ), установленную на этом сервере, чтобы использовать эту команду. Пользователи без этой роли не могут использовать {cmdMAP}",
    message1: "Вы не подключены к аудиоканалу. ❌",
    сообщение2: "Вы не находитесь на том же аудиоканале, что и я. ❌",
    сообщение3: "Отсутствует разрешение",
    msg4: "Что-то пошло не так",
    msg5: "В данный момент музыка не воспроизводится. ❌",
    msg6: "Сохранить музыку",
    msg7: "Запишите имя плейлиста.",
    msg8: "Эта песня транслируется в прямом эфире, нет данных о продолжительности для отображения. 🎧",
    msg9: "**✅ Успешно:** Данные о времени обновлены.",
    msg10: "У вас еще нет плейлиста с таким названием. ❌",
    msg11: "Эта музыка уже есть в этом плейлисте. ❌",
    msg12: "Добавлена в ваш музыкальный плейлист.",
   error3: "Ошибка при перезагрузке приложения [/] команды: ",
   error4: "WARN: Похоже, что вы не написали url mongodb? Если вы не введете правильный mongodb url в файле config.js, вы не сможете использовать бота.",
   msg13: `🎵 Сейчас играет: **{track?.title}** -> Канал: **{queue?.connection.channel.name}** 🎧`,
   msg14: "Очередь пуста. Вы можете включить еще немного музыки, пока... ✅",
   msg15: "Я отключился, потому что на моем канале никого не осталось. ❌",
   msg16: "У меня проблемы с подключением к голосовому каналу. ❌ Как будто кто-то отключил меня? Мне очень грустно. 😔",
   msg17: "Нет предыдущего трека! ❌",
   msg18: "Сейчас воспроизводится **{queue.previousTracks[1].title}**. ✅",
   msg19: "Статистика бота",
   msg20: "Обновление",
   msg21: "**Ваше время истекло!**",
   msg22: "**✅ Data Updated.**",
   msg23: "Очередь пуста. ❌",
   msg24: "Очередь только что была очищена. 🗑️",
   msg26: "Если вы не укажете роль DJ, вы не сможете использовать эту команду!",
   msg25: "Роль DJ успешно установлена на <@&{role}>.",
   msg27: "Роль DJ успешно удалена.",
   msg28: "Роль DJ еще не установлена.",
   msg29: `Пожалуйста, введите правильное имя фильтра. ❌\n{filters}`,
   msg30: `Я не смог найти фильтр с таким названием. ❌\n{filters}`,
   msg31: `Применен: **{filter}**, Статус фильтра: **{status}**\n **Помните, если музыка   длинная, время применения фильтра может быть больше соответственно.**`,
   msg32: "Пришло время слушать музыку на вашем сервере Discord с абсолютно **бесплатным** и интуитивным интерфейсом! Музыкальный бот, поддерживающий воспроизведение музыки на многих платформах (YT, YT Music, Apple Music, Spotify, VK Music и многие другие), который придаст вашему серверу особое настроение.",
   msg33: "Команды бота",
   msg34: "У вас уже есть активная команда. ❌",
   msg35: "Очередь",
   msg36: "Сейчас играет музыка",
   msg37: "Замкнутый цикл",
   msg38: "Цикл системы",
   msg39: `> **Как насчет того, чтобы сделать выбор?**
   > **Queue:** Зацикливает очередь.
   > **Now Playing Music:** Зацикливает текущую песню.
   > **Close Loop:** Закрывает цикл.`,
   msg40: "Режим зацикливания очереди",
   msg41: "Что-то пошло не так. ❌",
   msg42: "Сейчас воспроизводится музыкальный режим Loop Mode",
   msg43: "Режим петли уже неактивен. ❌",
   msg44: "Режим петли **закрыт** 🔁",
   msg45: "Время вышло",
   msg46: "Конец системного цикла",
   msg47: "Сохранить плейлист",
   msg48: "Музыка поставлена на паузу! ✅",
   msg49: `Пинг сообщений`,
msg50: `Задержка сообщения`,
msg51: `Задержка API`,
   msg52: "Не существует списка воспроизведения  ❌",
   msg53: `У вас нет разрешения на воспроизведение этого плейлиста. ❌`,
   msg54: `У вас еще нет музыки с таким названием. ❌`,
   msg55: `Я не могу присоединиться к вашему голосовому каналу. ❌`,
   msg56: `Загрузка плейлиста... ✅`,
msg57: `<@{interaction.member.id}>, Добавлены **{music_filter.length}** треков в очередь. ✅`,
   msg58: `Не существует плейлиста с таким именем. ❌`,
   msg59: `Напишите название трека, который вы хотите найти. ❌`,
   msg60: `Не найдено результатов! ❌`,
   msg61: "Загрузка музыки... 🎧",
   msg62: "Именованный список добавлен в список воспроизведения. ✅",
   msg63: `Очередь пуста. ❌`,
   msg64: "Серверный список музыки",
   msg65: "Сейчас играет",
msg66: " Запрошено",
   msg67: " Страница",
   msg68: `Командный процессор был отменен. ✅`,
msg69: `Список музыки сервера - время истекло!`,
   msg70: `Ваше время на использование этой команды истекло, вы можете набрать \`/queue\`, чтобы использовать команду снова.`,
   msg71: `Что-то пошло не так. ❌ Как будто вы не останавливали музыку раньше.`,
   msg72: "Трек возобновлен! ✅",
   msg73: `Пожалуйста, введите правильное название песни. ❌`,
   msg74: `Не найдено результатов поиска! ❌`,
   msg75: `Искали музыку`,
   msg76: "Выберите песню от **1** до **{maxTracks.length}** ⬇️",
   msg77: `Поиск музыки отменен. ✅`,
   msg78: `Загрузка... 🎧`,
   msg79: "`добавлено в очередь`. ✅",
   msg80: `Время поиска песни истекло ❌`,
   msg81: `Отмена`,
   msg82: `Введенный вами номер превышает количество песен в очереди. ❌`,
   msg83: "Пропущена песня ✅",
   msg84: `Эта песня транслируется в прямом эфире, нет данных о продолжительности для отображения. 🎧`,
   msg85: `Музыка остановлена. Увидимся в следующий раз! ✅`,
   msg86: `Обновление`,
   msg87: `Текущий том: **{queue.volume}** 🔊\n**Чтобы изменить громкость, с \`1\` по \`{maxVol}\` введите число между.**`,
   msg88: `Громкость, которую вы хотите изменить, уже является текущей громкостью ❌`,
   msg89: `**Введите число от \`1\` до \`{maxVol}\` для изменения громкости .** ❌`,
   msg90: "Volume changed:",
   msg91: `Напишите имя списка воспроизведения, который вы хотите создать. ❌`,
   msg92: `Плейлист с таким именем уже существует. ❌`, 
   msg93: `Вы не можете иметь более 30 плейлистов. ❌`,
   msg94: "Создание плейлиста... 🎧",
   msg95: "Плейлист создан! 🎧",
   msg96: `У вас еще нет плейлиста с таким названием. ❌`,
   msg97: "Удаление плейлиста... 🎧",
   msg98: "Плейлист удален! 🎧",
   msg99: `Напишите название трека, который вы хотите найти. ❌`,
   msg100: `Напишите название списка воспроизведения, в который вы хотите добавить музыку. ❌`,
   msg101: `В списке воспроизведения не может быть больше {max_music} музыкальных композиций. ❌`,
   msg102: "Загрузка музыки... 🎧",
   msg103: "Все музыкальные композиции добавлены в ваш плейлист! 🎧",
   msg104: `Эта музыка уже есть в этом плейлисте. ❌`,
   msg105: "добавлено в плейлист! 🎧",
   msg106: `Напишите имя плейлиста, из которого вы хотите удалить музыку. ❌`,
   msg107: `У вас еще нет музыки с таким именем. ❌`,
   msg108: "Удаление музыки... 🎧",
   msg109: "Музыка удалена! 🎧",
   msg110: "Напишите название плейлиста, который вы хотите найти. ❌",
   msg111: "У вас нет музыки в этом плейлисте. ❌",
   msg112: "Лучшие публичные плейлисты",
   msg113: `Ваше время использования этой команды истекло, вы можете набрать \`/playlist top\`, чтобы использовать команду снова.`,
   msg114: `Не существует публичного списка воспроизведения. ❌`,
   msg115: "Ваши плейлисты",
   msg116: `Музыка`,
   msg117: `У вас нет ни одного плейлиста. ❌`,
   msg118: "Ваше время на использование этой команды истекло, вы можете набрать \`/playlist list {name}\`, чтобы использовать команду снова.",
   msg119: "Используйте команду **/play playlist <list-name>** для прослушивания этих плейлистов.\nType **/playlist list <list-name>** для просмотра музыки в виде списка.",
   msg120: "Пожалуйста, укажите текстовый канал.",
   msg121: "<#{channel}> добавлен в список каналов использования команды, теперь команда bot может быть использована только на каналах в списке.",
   msg122: "Нет уже зарегистрированных данных.",
   msg123: "<#{channel}> удален из списка каналов использования команд.",
   msg124: "Этот канал уже есть в списке каналов использования команд.",
   msg125: "Этот канал не является текстовым.",
   msg126: "❌ Вот список каналов, которыми можно командовать на этом сервере: {channel_filter}",
   msg127: "Команда не определена.",
   error7: "Пожалуйста, попробуйте повторить эту команду позже. О возможной ошибке сообщено разработчикам бота.",
   msg128: "Вы заставили меня замолчать, пока играла музыка. Поэтому я остановил музыку. Если вы отмените отключение звука, я продолжу 😔",
   msg129: "Играет",
   msg130: "Пожалуйста, напишите правильный номер.",
   msg131: "чтобы использовать команды из списка, вам нужно проголосовать за бота.",
   msg132: "Музыка уже поставлена на паузу.",
   msg133: "Я перепутал порядок в списке воспроизведения.",
   msg134: "Неправильное использование. Пример: `5:50` | `1:12:43`",
   msg135: "Время воспроизведения было установлено в {queue.formattedCurrentTime} успешно",
   msg136: "Автоигра теперь включена. С этого момента я собираюсь включить случайную музыку.",
   msg137: "Автоигра теперь выключена.",
   }
   module.exports = language;
   
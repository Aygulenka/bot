// const TelegramApi = require('node-telegram-bot-api');

// const token = '6807152229:AAHiuMLO5al7EUUw1s59AP6BCoPDtQrfdAE';

// const bot = new TelegramApi(token, {polling:true})

// const options = {
//     reply_markup: JSON.stringify({
//         inline_keyboard: [
//             [{text: 'Пришли мне что-нибудь преободряющее', callback_data: 'encouraging'}],
//             [{text: 'Мне очень грустно. Я хочу поговорить', callback_data: 'talk'}],
//             [{text: 'Я просто хочу выговориться', callback_data: 'confide'}],
//         ]
//     })
// };


// const start = ()=>{
//     bot.setMyCommands([
//         {command: '/start', description:'Начальное приветствие'},
//         {command: '/info', description:'Инофрмация'},
//         {command: '/go', description:'Инофрмация'},
//     ])
//     bot.on('message', async msg=>{
//         const text = msg.text;
//         const chatId = msg.chat.id
//         if(text === '/start'){
//           await  bot.sendSticker(chatId, "https://tlgrm.ru/_/stickers/348/e30/348e3088-126b-4939-b317-e9036499c515/2.webp")
//          return   bot.sendMessage(chatId, `Привет, дорогая ${msg.from.first_name}.`)
//         }
//         if(text === '/info'){
//             return   bot.sendMessage(chatId, `Ты можешь рассчитывать на поддержку в этом чате`)
//         }
//         if(text === '/go'){
//             return   bot.sendMessage(chatId, "Ты можешь рассчитывать на поддержку в этом чате", options)
//           }
//         //   return bot.sendMessage(chatId, `я не понимаю этой команды`)
//     })

//     // bot.on('callback_query', msg=>{
//     //     const data = msg.data;
//     //     const chatId = msg.message.chat.id;
//     //     console.log(msg)
//     //     const messageDateTimestamp = msg.message.date;
//     //     const messageDate = new Date(messageDateTimestamp * 1000);
        
//     //     const dayOfMonth = messageDate.getDate();
//     //     const month = messageDate.getMonth() + 1; // добавляем 1, чтобы получить реальный номер месяца
        
//     //     console.log('Число:', dayOfMonth);
//     //     console.log('Месяц:', month);
//     // })
//     bot.on('callback_query', async msg => {
//         const data = msg.data;
//         const chatId = msg.message.chat.id;
    
//         switch (data) {
//             case 'encouraging':
//                 // Логика для преободряющего сообщения
//                 // Используйте дату для определения, какое сообщение отправить
//                 await bot.sendMessage(chatId, 'Преободряющее сообщение');
//                 break;
    
//             case 'talk':
//                 // Логика для случая, когда пользователь хочет поговорить
//                 const talkOptions = {
//                     reply_markup: JSON.stringify({
//                         inline_keyboard: [
//                             [{text: 'С живым', callback_data: 'live'}, {text: 'С тобой', callback_data: 'with_you'}]
//                         ]
//                     })
//                 };
//                 await bot.sendMessage(chatId, 'Что случилось? Ты хочешь с кем-нибудь живым поговорить или со мной?', talkOptions);
//                 break;
    
//             case 'live':
//                 // Логика для случая, когда пользователь выбирает "С живым"
//                 await bot.sendMessage(chatId, 'Милка на телеграм @aygulenka94');
//                 break;
    
//             case 'with_you':
//                 // Логика для случая, когда пользователь выбирает "С тобой"
//                 await bot.sendMessage(chatId, 'Я готов тебя слушать');
//                 break;
    
//             case 'confide':
//                 // Логика для случая, когда пользователь хочет выговориться
//                 await bot.sendMessage(chatId, 'Говори, все останется между нами');
//                 break;
    
//             default:
//                 break;
//         }
//     });

// }
// start()
const TelegramApi = require('node-telegram-bot-api');

const token = '6807152229:AAHiuMLO5al7EUUw1s59AP6BCoPDtQrfdAE';

const bot = new TelegramApi(token, {polling:true})

const options = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Пришли мне что-нибудь преободряющее', callback_data: 'encouraging'}],
            [{text: 'Мне очень грустно. Я хочу поговорить', callback_data: 'talk'}],
            [{text: 'Я просто хочу выговориться', callback_data: 'confide'}],
        ]
    })
};
const supportMessages = [
    "Сейчас тяжело, но я верю, что нас ждет светлое будущее. Ты пройдешь через это. Поверь мне.",
    "Ты можешь не верить в себя, но знай и помни, что я верю в тебя. Я всегда верил и буду верить.",
    "Не беспокойся, я не могу остановить бурю, но я всегда буду держать твой зонт.",
    "Ты всегда был бойцом, я знаю, что ты это переживешь. Не теряй силы и надежды.",
    "Поверь, что ты сможешь, и ты на полпути.",
    "Ты прекрасно справляешься.",
    "Впереди тебя ждет еще столько всего интересного. Ты пройдешь через это.",
    "С мыслями о мире и мужестве для тебя и твоей семьи.",
    "Пообещай мне, что всегда будешь помнить: ты смелее, сильнее и умнее, чем думаешь.",
    "Ты можешь кричать, можешь плакать, но только не сдавайся. Будь добрее к себе. Ты делаешь все, что в твоих силах!",
    "Я знаю, что тебе сейчас очень тяжело, но не забывай о времени для себя. Твоя жизнь очень важна.",
    "Сегодня подумай обо всем, что у тебя есть, а не о том, чего у тебя нет.",
    "Ты можешь продолжать долгое время после того, как думаешь, что больше не можешь.",
    "Что бы ты ни делал, и что бы ни выбрал, я всегда буду гордиться тобой. Не принижай себя.",
    "Знаешь, где я беру силу? От тебя. Твоя сила воли вдохновляет меня быть лучше.",
    "Ты смелый и сильный. Ты важен для нас. Никто этого не оспорит.",
    "Не падай духом, друг. Вселенная дает нам проблемы, потому что знает, что ты достаточно силен, чтобы с ними справиться и преодолеть любые трудности.",
    "Если ты упадешь, я подниму тебя. Если я не смогу тебя поднять, то просто лягу и отдохну вместе с тобой. Вместе мы снова вернемся в норму.",
    "Это то, через что ты сейчас проходишь, а не то, кто ты есть.",
    "Я понял, что я - счастливый человек. В моей жизни есть самые прекрасные люди, включая тебя.",
    "Твои ошибки и неудачи тебя не определяют. Поверь, что ты сможешь, и в конце концов, у тебя все получится. Я буду рядом, чтобы поддержать тебя.",
    "Что бы ты ни делал, помни, что ты не одинок. Что бы ни случилось, я всегда тебя поддержу.",
    "Помни, что ты важен для меня и достоин всего самого хорошего в этом мире.",
    "Отдыхай, если нужно, никуда не торопись. Ты не всегда можешь все делать так, как ожидают от тебя другие.",
    "Я не буду просить тебя действовать немедленно, если тебе этого не хочется. Я буду рядом с тобой и подожду, пока ты не почувствуешь, что готов.",
    "Ты знаешь, что обладаешь волшебной силой? Когда ты рядом, происходят хорошие вещи.",
    "Запомни: у тебя все в порядке, и ты прекрасен, даже в те дни, когда ты чувствуешь себя разбитым и опустошенным.",
    "Ты автор своей истории, и ты решаешь свою судьбу. Что бы ни случилось, я верю, что у тебя есть силы, чтобы пережить это.",
    "Ты знаешь насколько ты ценный человек? Ты - настоящий подарок для меня и для людей вокруг тебя.",
    "Отпусти то, что тебя ранит. Не держись за то, что тянет тебя вниз. У тебя есть я, твои друзья и семья. Держись за нас.",
    "Лучшее еще впереди, поэтому выпрямись и перестань плакать. Все, что сейчас ни происходит - это не конец.",
    "Я всегда знал, что ты способен на все, что угодно, ведь ты умный и сильный. Не унывай, дружище! Теперь нас ничто не остановит.",
    "Это нормально, что тебе грустно сегодня и, возможно, даже завтра. Но всегда помни о том, что ты чемпион. Ты - удивительный человек. Не забывай об этом.",
    "Словами не описать, как я горжусь тобой. Я так счатлив, когда кто-то хвалит тебя.",
    "Хорошее приходит к тем, кто ждет. Это просто глава в твоей жизни, а не целая история. Потерпи немного - я буду с тобой несмотря ни на что.",
    "Дай мне знать, когда тебе плохо. Мы вместе выберемся из этого.",
    "Друг, на свете так много прекрасных причин, чтобы бороться за жизнь и за счастье. Не сдавайся. Давай сражаться вместе.",
    "У нас у всех бывают плохие дни, и нам приходится иметь дело со своими внутренними демонами. Когда тебе кажется, что ты ничего не можешь сделать, знай, что ты всегда можешь рассчитывать на мою поддержку.",
    "Не теряй веру. Иногда бывает очень сложно  продолжать, но мы должны не опускать голову.",
    "Не думай, что жить не для чего. Твои друзья, твоя семья и ты - одно только твое существование - все это стоит того, чтобы жить.",
    "Тяжелые времена настигают всех нас, но мы выживаем, становясь сильными. Я не волнуюсь за тебя - ты сильный и удивительный человек.",
    "Воспринимай это, как еще один урок, который нужно усвоить.  Жизнь бывает трудна, но ты сильнее. Не позволяй ей себя победить.",
    "Мы уже давно знакомы, и я знаю, что никто тебя не остановит. Не отступай. Я всегда тебя поддержу.",
    "Не сомневайся в себе. Ты упорно работал и многое заслужил.",
    "Ничто и никогда не отнимет у нас воспоминания. Пусть наши воспоминания приносят нам утешение и напоминают о более счастливых временах.",
    "Отправляю тебе положительные флюиды и счастливые мысли.",
    "Я знаю, что сейчас все сложно, но я также знаю, что у тебя есть все необходимое, чтобы пройти через это. Отправляю тебе хорошие мысли, я верю в тебя и ни на минуту не сомневаюсь, что ты со всем справишься.",
    "Ты в моих мыслях, особенно сегодня.",
    "Друзья нужны для самых счастливых и грустных моментов. Я надеюсь, что ты знаешь, что сейчас я твой друг, как впрочем и всегда.",
    "Мне так жаль, что тебе приходится сейчас через это проходить, но и это пройдет.",
    "Если тебе захочется поговорить, или просто поплакать, ты знаешь где меня найти.",
    "Я надеюсь, что сегодня твой день будет лучше.",
    "Следующая глава твоей жизни будет просто удивительной.",
    "Я верю в тебя, и в единорогов, но в основном в тебя.",
    "То, что вы сейчас переживаете, очень тяжело, но я болею за вас каждую минуту каждого дня.",
    "Просто хочу отправить тебе короткое сообщение, чтобы ты знал, что ты в моих мыслях и в моих молитвах.",
    "Нужна большая смелость, что пройти этот путь и остаться на нем. Я так рад за тебя.",
    "Помни, что ты не одинок, когда проходишь через трудные времена. Нас отделяет телефоный звонок.",
    "Я восхищаюсь твоей силой.",
    "Будь к себе добрее и позволь другим быть добрее к тебе.",
    'Тебя полностью и безоговорочно любят.',        
    "Ты делаешь именно то, что и должен делать. Держись.",
    " Ты такой сильный и терпеливый. Продолжай верить. Скоро все начнет налаживаться."

];
const messagesSentPerDay = {};
const start = () => {
    bot.setMyCommands([
        {command: '/start', description:'Начальное приветствие'},
        {command: '/info', description:'Инофрмация'},
        {command: '/go', description:'Инофрмация'},
    ]);

    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;

        if (text === '/start') {
            await bot.sendSticker(chatId, "https://tlgrm.ru/_/stickers/348/e30/348e3088-126b-4939-b317-e9036499c515/2.webp");
            return bot.sendMessage(chatId, `Привет, дорогая ${msg.from.first_name}.`);
        }

        if (text === '/info') {
            return bot.sendMessage(chatId, `Ты можешь рассчитывать на поддержку в этом чате`);
        }

        if (text === '/go') {
            return bot.sendMessage(chatId, "Ты можешь рассчитывать на поддержку в этом чате", options);
        }
    });

    bot.on('callback_query', async msg => {
        const data = msg.data;
        const chatId = msg.message.chat.id;

        switch (data) {
            case 'encouraging':
                // Логика для преободряющего сообщения
                // Используйте дату для определения, какое сообщение отправить
                const currentDate = new Date();
                const currentDay = currentDate.toISOString().split('T')[0]; // Получаем текущую дату

                if (!messagesSentPerDay[currentDay]) {
                    messagesSentPerDay[currentDay] = 0;
                }

                if (messagesSentPerDay[currentDay] < 2) {
                    const encouragingMessage = supportMessages[messagesSentPerDay[currentDay]];
                    await bot.sendMessage(chatId, encouragingMessage);
                    messagesSentPerDay[currentDay]++;
                } else {
                    await bot.sendMessage(chatId, 'Перечитывание даже 100 сообщений преободряющих не изменит положения. Попробуй поговорить со мной. Я хороший слушатель.');
                }

                break;

            case 'talk':
                // Логика для случая, когда пользователь хочет поговорить
                const talkOptions = {
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                            [{text: 'С живым', callback_data: 'live'}, {text: 'С тобой', callback_data: 'with_you'}]
                        ]
                    })
                };
                await bot.sendMessage(chatId, 'Что случилось? Ты хочешь с кем-нибудь живым поговорить или со мной?', talkOptions);
                break;

            case 'live':
                // Логика для случая, когда пользователь выбирает "С живым"
                await bot.sendMessage(chatId, 'Милка на телеграм @aygulenka94');
                break;

            case 'with_you':
                // Логика для случая, когда пользователь выбирает "С тобой"
                await bot.sendMessage(chatId, 'Я готов тебя слушать. Я хороший слушатель, но к сожалению, я не смогу ответить на твое сообщение.');
                break;

            case 'confide':
                // Логика для случая, когда пользователь хочет выговориться
                await bot.sendMessage(chatId, 'Говори, все останется между нами');
                break;

            default:
                break;
        }
    });
}

start();

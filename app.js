const { Telegraf } = require('telegraf');
const bot = new Telegraf('6285467889:AAGx0lJLuuyUd88677zwEC_-0LyUy5aww70');


 
bot.command('start', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'Hello there! Welcome to my new telegram bot. Type "animals" if you want pictures of Animals or type "phone" if you want to Share your phone number', {
    
    })
})



bot.hears('animals', ctx => {
    console.log(ctx.from)
    let animalMessage = `great, here are pictures of animals you would love`;
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, animalMessage, {
        reply_markup: {
            inline_keyboard: [
                [{
                        text: "dog",
                        callback_data: 'dog'
                    },
                    {
                        text: "cat",
                        callback_data: 'cat'
                    }
                ],

            ]
        }
    })
})



bot.action('dog', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "labrador.jpg"
    })

})



bot.action('cat', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "catt.jpg"
    })

})



 bot.hears('phone', (ctx, next) => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'Can we get access to your phone number?', requestPhoneKeyboard);

})




const requestPhoneKeyboard = {
    "reply_markup": {
        "one_time_keyboard": true,
        "keyboard": [
            [{
                text: "My phone number",
                request_contact: true,
                one_time_keyboard: true
            }],
            ["Cancel"]
        ]
    }
};


bot.launch();
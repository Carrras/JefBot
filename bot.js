require('dotenv').config()

const Discord = require('discord.js')
const client =  new Discord.Client()
const BOT_PREFIX = '!'
const SPURS_COMAND = 'jefbale'
const JEFTE_COMMAND = 'jefte'


client.on('ready', () => {
    console.log('Jefbale is ready to chapar o feliano')
})
client.on('message', msg =>{
    if (msg.content === `${BOT_PREFIX}${SPURS_COMAND}`){
        msg.reply('COME ON SPURS')
    }

    if (msg.content === `${BOT_PREFIX}${JEFTE_COMMAND}`){
        message.channel.send('', {
            files: [
                "https://i.ibb.co/Sv25NWq/unknown.png"
            ]})
    }

})
client.login(process.env.BOT_TOKEN)

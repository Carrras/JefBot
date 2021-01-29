require('dotenv').config()

const Discord = require('discord.js')
const client =  new Discord.Client()
const BOT_PREFIX = '!'
const SPURS_COMAND = 'jefbale'

client.on('ready', () => {
    console.log('Jefbale is ready to chapar o feliano')
})
client.on('message', msg =>{
    if (msg.content === `${BOT_PREFIX}${SPURS_COMAND}`){
        msg.reply('COME ON SPURS')
    }
})
client.login(process.env.BOT_TOKEN)

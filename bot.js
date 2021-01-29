require('dotenv').config()

const Discord = require('discord.js')
const client =  new Discord.Client()
const BOT_PREFIX = '!'
const SPURS_COMAND = 'jefbale'
const JEFTE_COMMAND = 'jefte'
const BORIS_COMMAND = 'boris'


client.on('ready', () => {
    console.log('Jefbale is ready to chapar o feliano')
})
client.on('message', msg =>{
    if (msg.content === `${BOT_PREFIX}${SPURS_COMAND}`){
        msg.reply('COME ON SPURS')
    }

    if (msg.content === `${BOT_PREFIX}${JEFTE_COMMAND}`){
        msg.channel.send('', {
            files: [
                "https://i.ibb.co/31Yrpt6/jefinhu.jpg"
            ]})
    }

    if (msg.content === `${BOT_PREFIX}${BORIS_COMMAND}`){
        msg.channel.send('', {
            files: [
                "https://i.ibb.co/JC2Vfsf/20258457-822484741250169-7880233283161049047-n.png"
            ]})
    }

})
client.login(process.env.BOT_TOKEN)

const { Client, Intents } = require('discord.js')
const config = require('./config.json')
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
})

client.on('messageCreate', async (message) => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return

    if (message.content.startsWith(`${config.prefix}ping`)) {
        message.channel.send('pong!')
    } else

    if (message.content.startsWith(`${config.prefix}kalten`)) {
        message.channel.send('Qu\'il est moche')
    }
})

client.login(config.token)

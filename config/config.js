const { Client, Intents } = require('discord.js')
const { token } = require('./token.json')
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
})

client.on('messageCreate', async (message) => {
    if (message.content.trim().toLowerCase() === '!ping') {
        await message.channel.send('Pong !')
    }
})

client.login(token)

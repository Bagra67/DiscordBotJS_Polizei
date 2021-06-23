const { Client } = require('discord.js');
module.exports = {
    ping: (client,message) => {
        message.reply("pong!")
    },
    pong: (client,message) => {
        message.reply("You're juste a dumb!")
    },

    not_allowed:(client,message) => {
        message.reply("You're not allowed to use this command")
    }
}
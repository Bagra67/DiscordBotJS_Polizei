const { Client } = require('discord.js');
const api = require('../api')

async function addReaction(client , message, args){
    const emoji_answerme = message.guild.emojis.cache.get('784834794462248980');
    const user = api.getUserFromMention(client ,args[0])
    if(user == null)
        return;

    if(message.author.id === user.id){
        message.react(emoji_answerme)
            .then((reponse) => console.log(reponse))
            .catch((err) => console.log(err))

    }
}
module.exports = {
    answerme: (client,message, args) => {
        
        if(args[1] === 'true'){

            client.on('message', addReaction(client, message, args).then(console.log("dzd")).catch(console.log("err")));
        }else if(args[1] === 'false'){
            client.removeListener('message',addReaction(client, message, args))}
        
    },
    
}
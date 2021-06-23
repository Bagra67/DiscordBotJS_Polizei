const { Client } = require('discord.js');
const api = require('../api')
var answerme_list_user_activate = []
module.exports = {
    answerme: (client,message, args) => {
        const user = api.getUserFromMention(client,args[0])

        if(answerme_list_user_activate.find(item => item.id = user.id) != undefined){
            answerme_list_user_activate.map((item, i) =>{
                answerme_list_user_activate[i].allow = item.id === user.id ? args[1] === 'true' : item.allow
            })
        }else{
            answerme_list_user_activate.push({
                id:user.id,
                allow: args[1] === 'true'
            })
        }
       
            client.on('message',(message) => {
                console.log(answerme_list_user_activate)
                const emoji_answerme = message.guild.emojis.cache.get('784834794462248980');
                
                if(answerme_list_user_activate.find(item => item.id === user.id) != undefined){
                    const answerme_item = answerme_list_user_activate.find(item => item.id === message.author.id)
                    if(answerme_item.allow){
                        message.react(emoji_answerme)
                        .then((response) => console.log("Emoji added"))
                        .catch((err) => console.log("Error on answerme reaction"))
                    }
                    
                }

            })
            
    },
    
}
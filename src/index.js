require("dotenv").config();
const utils_command = require("./command/utils")
const sanction_command = require("./command/sanction")
const user_controller = require('./controllers/user');
const guild_controller = require('./controllers/guild');


const { Client, WebhookClient } = require('discord.js');

const client = new Client({
  partials: ['MESSAGE', 'REACTION']
});

const webhookClient = new WebhookClient(
  process.env.WEBHOOK_ID,
  process.env.WEBHOOK_TOKEN,
);

const PREFIX = "$";

client.on('ready', () => {
  console.log(`${client.user.tag} has logged in.`);
});

client.on('message', async (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith(PREFIX)) {
    const [CMD_NAME, ...args] = message.content
      .trim()
      .substring(PREFIX.length)
      .split(/\s+/);
    
    /*USER COMMAND*/
    if (CMD_NAME === 'ping') {
      utils_command.ping(client,message)
    } else if (CMD_NAME === 'pong') {
      utils_command.pong(client,message)
    } 
    
    if(!message.member.roles.cache.has(process.env.IS_MODERATEUR)){
      utils_command.not_allowed(client,message)
      return
    }else{
      /*MODERATOR COMMAND*/
      if(CMD_NAME === 'answerme'){
        if(args.length != 2){
          console.log("wrong usage")
          return
        }
        sanction_command.answerme(client,message,args)
      }
    }

    
  }
});


client.login(process.env.BOT_TOKEN);
client.on("ready", () => {
  client.user.setActivity(`I will kill you`);

  const list_guild = client.guilds.cache;
  list_guild.forEach((value, key) => {
    
    if(value.available){
      var test = false;
      list_member = value.members.cache.filter(member => !member.user.bot).forEach(
        (member) => {
          var member_test = null
          if(!test){
            member_test = member
            test = !test;
          }
          if(member_test != null){
            var guild = guild_controller.get_by_id(member_test.guild.id)
            .then((response) => {
              guild = response
              if(guild === null){
                guild_controller.create(member_test.guild)
              }
              user_controller.create(member, guild)
            })
            .catch((err) => console.log("error"))
           
          }

        }
      )
      
      

      

    }

  })
});
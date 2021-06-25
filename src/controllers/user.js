const db = require('../models');
const guild_controller = require('./guild')
const {Op} = require("sequelize");
module.exports = {

	get_all: (client) => {
		return db.User.findAll({
			order: ['user_tag']
		})
			.then(users => console.log("users found"))
			.catch((err) => console.log(err));
	},


	get_by_id: (client, user_id, guild_id) => {
		return db.User.findOne({ 
            where: {
                user_id: user_id,
                guild_id: guild_id
            }
            })
			.then(user => console.log("user" + user_id + "/" + guild_id + ' found'))
			.catch((err) => console.log(err));
	},


	create: (member, guild_db) => {
        const user = db.User.create({ 
            user_id: member.user.id,
            user_tag: member.user.tag
        })
        .then((response) =>{
            response.addGuild(guild_db);
            return response;
        })
	    .catch((err) => console.log("ERROR SUR CREATE USER:\n" + err));

        
		return user
	}


};

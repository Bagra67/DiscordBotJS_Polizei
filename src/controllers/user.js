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


	create: (member) => {
        const user = db.User.create({ 
            user_id: member.user.id,
            user_tag: member.user.tag
        })
        .then(console.log(member.user.tag + ' added on database'))
	    .catch((err) => console.log(err));

        const guild = guild_controller.get_by_id(member.guild.id)
        await user.addGuild(guild, { through: { selfGranted: false } });

		return user
	}


};

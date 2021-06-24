const db = require('../models');
const {Op} = require("sequelize");
module.exports = {

	get_all: () => {
		return db.Guild.findAll({
			order: ['guild_name']
		})
			.then(users => console.log("guilds found"))
			.catch((err) => console.log(err));
	},


	get_by_id: (guild_id) => {
		return db.Guild.findOne({ 
            where: {
                guild_id: guild_id
            }
            })
			.then(user => console.log("user" + guild_id + 'found'))
			.catch((err) => console.log(err));
	},


	create: (guild) => {
        
		return db.Guild.create({ 
            guild_id: guild.id,
            guild_name: guild.name
        })
        .then(console.log(guil.name + ' added on database'))
	    .catch((err) => console.log(err));
	}


};

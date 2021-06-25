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
		return db.Guild.findByPk(guild_id)
			.then((guild) => {return guild})
			.catch((err) => console.log(err));
	},


	create: (guild) => {
        
		return db.Guild.create({ 
            guild_id: guild.id,
            guild_name: guild.name
        })
        .then(console.log(guild.name + ' added on database'))
	    .catch((err) => console.log(err));
	}


};

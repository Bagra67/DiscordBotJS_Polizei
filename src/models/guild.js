const { Sequelize, DataTypes } = require('sequelize');

module.exports = sequelize => {

	class Guild extends Sequelize.Model {
		static associate(db) {
			Guild.belongsToMany(db.User, { through: db.Guild_Users });
		};
	}

	Guild.init({
		guild_id: DataTypes.INTEGER,
        guild_name: DataTypes.STRING
	}, {
		sequelize,
		modelName: 'Guild'
	});

	return Guild;
};
